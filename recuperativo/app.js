import { CASOS } from "./datos.js";
import { URL_SERVIDOR } from "./config.js";

// El registro (inicio, término y respuestas) vive en una planilla de Google (ver google/Codigo.gs).
// «?servidor=…» solo se usa para pruebas locales.
const SERVIDOR = new URLSearchParams(location.search).get("servidor") || URL_SERVIDOR;
const CLAVE_ALMACEN = "recuperativo-seq-v2";

let sesion = cargar();          // { codigo }
let srv = null;                 // última respuesta del servidor
let desfase = 0;                // hora del servidor − hora local
let resp = [];
let tic = null;
let temporizadorGuardado = null;

function cargar() { try { return JSON.parse(localStorage.getItem(CLAVE_ALMACEN)) || {}; } catch { return {}; } }
function guardarLocal() { try { localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(sesion)); } catch { /* sin almacenamiento */ } }

const $ = (s) => document.querySelector(s);
const app = $("#app");
const letra = (i) => "abcd"[i];
const escapar = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const marcado = (t) => escapar(t).replace(/\*(.+?)\*/g, "<em>$1</em>");
const caso = () => CASOS.find((c) => c.id === srv?.caso);
const ahora = () => Date.now() + desfase;
const finMs = () => srv.inicio + srv.minutos * 60000;

const MENSAJES = {
  codigo_invalido: "El código no existe. Revíselo (sin espacios) o consulte al docente.",
  sin_asignar: "Su código aún no tiene un caso asignado. Avise al docente.",
  cerrado: "Su evaluación ya está cerrada.",
  red: "No hay conexión con el servidor. Revise internet e intente de nuevo.",
};

function avisar(t, fijo = false) {
  $("#aviso").textContent = t;
  clearTimeout(avisar.t);
  if (!fijo) avisar.t = setTimeout(() => { $("#aviso").textContent = ""; }, 4000);
}
function barra(texto, accion) {
  $("#navegacion").hidden = !texto;
  $("#btn-principal").textContent = texto || "";
  $("#btn-principal").onclick = accion || null;
}

async function llamar(accion, extra = {}) {
  const p = new URLSearchParams({ accion, codigo: sesion.codigo, ...extra });
  let r;
  try {
    const res = await fetch(`${SERVIDOR}?${p}`, { method: "GET", cache: "no-store" });
    r = await res.json();
  } catch {
    return { ok: false, error: "red" };
  }
  if (r.ahora) desfase = r.ahora - Date.now();
  if (r.nombre) srv = r;
  return r;
}

const textoResp = () => resp.map((v) => (v === null || v === undefined ? "-" : v)).join(",");

// ------------------------------------------------------------ pantallas
function pantallaCodigo(mensaje = "") {
  clearInterval(tic);
  $("#reloj").hidden = true;
  if (!SERVIDOR) {
    app.innerHTML = `<h1>¿Dónde está el error?</h1><p class="recuadro imprevisto">La evaluación aún no está habilitada. Vuelva a intentarlo cuando el docente lo indique.</p>`;
    barra(null);
    return;
  }
  app.innerHTML = `
    <h1>¿Dónde está el error?</h1>
    <p>Ingrese el código personal que le envió el docente.</p>
    <form id="form-codigo" novalidate>
      <div class="campo">
        <label for="codigo">Código personal</label>
        <input type="text" id="codigo" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false"
               enterkeyhint="go" aria-describedby="error-codigo" value="${escapar(sesion.codigo || "")}" required>
        <p class="error" id="error-codigo" ${mensaje ? "" : "hidden"}>${escapar(mensaje)}</p>
      </div>
    </form>`;
  const enviar = async () => {
    const codigo = $("#codigo").value.trim().toUpperCase();
    if (!codigo) { $("#codigo").focus(); return; }
    sesion = { codigo };
    barra("Buscando…", null);
    const r = await llamar("consultar");
    if (!r.ok) { sesion = {}; guardarLocal(); return pantallaCodigo(MENSAJES[r.error] || "No se pudo continuar."); }
    guardarLocal();
    decidir();
  };
  $("#form-codigo").addEventListener("submit", (e) => { e.preventDefault(); enviar(); });
  $("#codigo").addEventListener("input", () => { $("#error-codigo").hidden = true; });
  barra("Continuar", enviar);
}

function decidir() {
  if (srv.termino) return pantallaCerrada();
  if (srv.inicio) { resp = srv.respuestas || []; return pantallaEvaluacion(); }
  return pantallaBienvenida();
}

function pantallaBienvenida() {
  const c = caso();
  app.innerHTML = `
    <h1>Hola, ${escapar(srv.nombre)}</h1>
    <p>Su caso es el <strong>${c.id}: ${marcado(c.titulo)}</strong>.</p>
    <div class="recuadro imprevisto">
      <p><strong>Tiene ${srv.minutos} minutos y una sola oportunidad.</strong> El tiempo empieza al tocar «Comenzar» y no se detiene aunque cierre la página o cambie de dispositivo. Al volver a entrar con su código, continuará donde iba.</p>
      <p>Verá un diseño experimental de 8 pasos. Algunos pasos tienen errores. En cada paso, decida si está correcto o elija la corrección adecuada. Responda rápido: no hay tiempo para investigar cada paso.</p>
      <p>Sus respuestas se guardan solas; no necesita enviar correo.</p>
    </div>
    <p><button type="button" class="secundario" id="btn-otro">No soy yo / cambiar código</button></p>`;
  $("#btn-otro").onclick = () => { sesion = {}; guardarLocal(); pantallaCodigo(); };
  barra("Comenzar (inicia el tiempo)", async () => {
    if (!confirm(`Al comenzar parten los ${srv.minutos} minutos. ¿Listo?`)) return;
    barra("Iniciando…", null);
    const r = await llamar("iniciar");
    if (!r.ok) { avisar(MENSAJES[r.error] || "No se pudo iniciar."); return pantallaBienvenida(); }
    decidir();
    window.scrollTo({ top: 0 });
  });
}

function pintarReloj() {
  const ms = Math.max(0, finMs() - ahora());
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  $("#reloj").hidden = false;
  $("#reloj").textContent = `Tiempo restante: ${m}:${String(s).padStart(2, "0")}`;
  $("#reloj").classList.toggle("poco", ms < 5 * 60000);
  if (ms <= 0) terminar(true);
}

function pantallaEvaluacion() {
  const c = caso();
  app.innerHTML = `
    <h1>Caso ${c.id} · ${marcado(c.titulo)}</h1>
    <p class="tipo">${marcado(c.tipo)}</p>
    <p>${marcado(c.contexto)}</p>
    <p class="ayuda" id="estado-guardado" role="status" aria-live="polite">Respuestas guardadas.</p>
    <form id="form-eval" novalidate>
      ${c.pasos.map((p, n) => `
        <h2 class="paso-titulo">Paso ${n + 1} · ${escapar(p.paso)}</h2>
        <p class="propuesta"><strong>Diseño propuesto:</strong> ${marcado(p.texto)}</p>
        <fieldset id="grupo-${n}">
          <legend>¿Qué hace con este paso?</legend>
          ${p.opciones.map((o, i) => `
            <label class="opcion"><input type="radio" name="p${n}" value="${i}" ${resp[n] === i ? "checked" : ""}>
            <span><span class="letra">${letra(i)})</span> ${marcado(o)}</span></label>`).join("")}
        </fieldset>`).join("")}
    </form>`;
  $("#form-eval").addEventListener("change", (e) => {
    resp[Number(e.target.name.slice(1))] = Number(e.target.value);
    for (let i = 0; i < 8; i++) if (resp[i] === undefined) resp[i] = null;
    programarGuardado();
  });
  barra("Terminar y enviar", () => terminar(false));
  clearInterval(tic);
  pintarReloj();
  tic = setInterval(pintarReloj, 1000);
}

function programarGuardado() {
  $("#estado-guardado").textContent = "Guardando…";
  clearTimeout(temporizadorGuardado);
  temporizadorGuardado = setTimeout(guardarRemoto, 800);
}
async function guardarRemoto() {
  const r = await llamar("guardar", { r: textoResp() });
  const est = $("#estado-guardado");
  if (r.ok) { if (est) est.textContent = "Respuestas guardadas."; return; }
  if (r.error === "cerrado") { srv.termino = srv.termino || Date.now(); return pantallaCerrada(); }
  if (est) est.textContent = "Sin conexión: se reintentará al marcar otra respuesta o al terminar.";
}

let terminando = false;
async function terminar(porTiempo) {
  if (terminando) return;
  if (!porTiempo) {
    const faltan = resp.filter((v) => v !== null && v !== undefined).length;
    const n = caso().pasos.length - faltan;
    if (!confirm(n ? `Le faltan ${n} paso(s). ¿Terminar de todas formas?` : "¿Terminar? Ya no podrá cambiar sus respuestas.")) return;
  }
  terminando = true;
  clearInterval(tic);
  clearTimeout(temporizadorGuardado);
  barra("Enviando…", null);
  for (let intento = 0; intento < 5; intento++) {
    const r = await llamar("terminar", { r: textoResp() });
    if (r.ok || r.error === "cerrado") { terminando = false; return pantallaCerrada(porTiempo); }
    await new Promise((ok) => setTimeout(ok, 2000));
  }
  terminando = false;
  avisar("No se pudo enviar. Revise su conexión.", true);
  barra("Reintentar envío", () => terminar(true));
}

function pantallaCerrada(porTiempo = false) {
  clearInterval(tic);
  $("#reloj").hidden = true;
  barra(null);
  const c = caso();
  const r = srv.respuestas || resp;
  app.innerHTML = `
    <h2>Evaluación cerrada</h2>
    <p>${porTiempo ? "Se acabó el tiempo. " : ""}Sus respuestas quedaron registradas, ${escapar(srv.nombre)}. No necesita enviar nada más.</p>
    <p class="recuadro">Caso ${c.id}: ${marcado(c.titulo)}<br>
      ${c.pasos.map((p, n) => `P${n + 1} ${escapar(p.paso)}: ${r[n] === null || r[n] === undefined ? "-" : letra(r[n])}`).join("<br>")}</p>`;
}

// ------------------------------------------------------------ arranque
(async () => {
  if (!sesion.codigo || !SERVIDOR) return pantallaCodigo();
  app.innerHTML = "<p>Cargando…</p>";
  const r = await llamar("consultar");
  if (!r.ok) return pantallaCodigo(MENSAJES[r.error] || "");
  decidir();
})();
