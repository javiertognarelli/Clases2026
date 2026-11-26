import { CASOS } from "./datos.js";

const MINUTOS = 30;
const CORREO_DOCENTE = "javier.tognarelli@uv.cl";
const CLAVE_ALMACEN = "recuperativo-seq-v1";

const inicial = () => ({ nombre: "", casoId: null, t0: null, t1: null, resp: [] });
let estado = cargar();
let tic = null;

function cargar() {
  try { return { ...inicial(), ...JSON.parse(localStorage.getItem(CLAVE_ALMACEN)) }; } catch { return inicial(); }
}
function guardar() { try { localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(estado)); } catch { /* sin almacenamiento */ } }

const $ = (s) => document.querySelector(s);
const app = $("#app");
const caso = () => CASOS.find((c) => c.id === estado.casoId);
const letra = (i) => "abcd"[i];
const escapar = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const marcado = (t) => escapar(t).replace(/\*(.+?)\*/g, "<em>$1</em>");
const plano = (t) => String(t).replace(/\*/g, "");

function avisar(t) {
  $("#aviso").textContent = t;
  clearTimeout(avisar.t);
  avisar.t = setTimeout(() => { $("#aviso").textContent = ""; }, 3500);
}

function barra(texto, accion) {
  const nav = $("#navegacion");
  nav.hidden = !texto;
  const b = $("#btn-principal");
  b.textContent = texto || "";
  b.onclick = accion || null;
}

const restanteMs = () => estado.t0 + MINUTOS * 60000 - Date.now();

function dibujar() {
  clearInterval(tic);
  $("#reloj").hidden = true;
  if (!estado.t0 || !caso()) return pantallaInicio();
  if (estado.t1 || restanteMs() <= 0) {
    if (!estado.t1) { estado.t1 = estado.t0 + MINUTOS * 60000; guardar(); }
    return pantallaFinal();
  }
  return pantallaEvaluacion();
}

// ------------------------------------------------------------ inicio
function pantallaInicio() {
  app.innerHTML = `
    <h1>¿Dónde está el error?</h1>
    <div class="recuadro imprevisto">
      <p><strong>Tiene ${MINUTOS} minutos y una sola oportunidad.</strong> El tiempo empieza a correr al tocar «Comenzar» y no se detiene aunque cierre la página. Cuando se acabe, se envía lo que haya respondido.</p>
      <p>Verá un diseño experimental ya hecho, de 8 pasos. Algunos pasos tienen errores. En cada paso, decida si está correcto o elija la corrección adecuada. Responda rápido: no hay tiempo para investigar cada paso.</p>
    </div>
    <form id="form-inicio" novalidate>
      <div class="campo">
        <label for="nombre">Su nombre y apellido</label>
        <input type="text" id="nombre" autocomplete="name" enterkeyhint="done" required value="${escapar(estado.nombre)}">
      </div>
      <fieldset id="grupo-caso">
        <legend>Caso asignado por el docente</legend>
        <p class="error" id="error-caso" hidden>Elija su caso.</p>
        ${CASOS.map((c) => `
          <label class="opcion"><input type="radio" name="caso" value="${c.id}" ${estado.casoId === c.id ? "checked" : ""}>
          <span><span class="letra">Caso ${c.id}</span><br>${marcado(c.titulo)}</span></label>`).join("")}
      </fieldset>
    </form>`;
  barra("Comenzar (inicia el tiempo)", () => {
    const nombre = $("#nombre").value.trim();
    const elegido = app.querySelector('input[name="caso"]:checked');
    if (!nombre) { $("#nombre").setAttribute("aria-invalid", "true"); $("#nombre").focus(); avisar("Escriba su nombre."); return; }
    if (!elegido) { $("#error-caso").hidden = false; avisar("Elija su caso."); return; }
    if (!confirm(`Al comenzar parten los ${MINUTOS} minutos. ¿Listo?`)) return;
    Object.assign(estado, { nombre, casoId: elegido.value, t0: Date.now(), t1: null, resp: [] });
    guardar();
    dibujar();
    window.scrollTo({ top: 0 });
  });
}

// ------------------------------------------------------------ evaluación
function pintarReloj() {
  const ms = Math.max(0, restanteMs());
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const r = $("#reloj");
  r.hidden = false;
  r.textContent = `Tiempo restante: ${m}:${String(s).padStart(2, "0")}`;
  r.classList.toggle("poco", ms < 5 * 60000);
  if (ms <= 0) terminar(true);
}

function pantallaEvaluacion() {
  const c = caso();
  app.innerHTML = `
    <h1>Caso ${c.id} · ${marcado(c.titulo)}</h1>
    <p class="tipo">${marcado(c.tipo)}</p>
    <p>${marcado(c.contexto)}</p>
    <form id="form-eval" novalidate>
      ${c.pasos.map((p, n) => `
        <h2 class="paso-titulo">Paso ${n + 1} · ${escapar(p.paso)}</h2>
        <p class="propuesta"><strong>Diseño propuesto:</strong> ${marcado(p.texto)}</p>
        <fieldset id="grupo-${n}">
          <legend>¿Qué hace con este paso?</legend>
          ${p.opciones.map((o, i) => `
            <label class="opcion"><input type="radio" name="p${n}" value="${i}" ${estado.resp[n] === i ? "checked" : ""}>
            <span><span class="letra">${letra(i)})</span> ${marcado(o)}</span></label>`).join("")}
        </fieldset>`).join("")}
    </form>`;
  $("#form-eval").addEventListener("change", (e) => {
    const n = Number(e.target.name.slice(1));
    estado.resp[n] = Number(e.target.value);
    guardar();
  });
  barra("Terminar y enviar", () => terminar(false));
  pintarReloj();
  tic = setInterval(pintarReloj, 1000);
}

function terminar(porTiempo) {
  if (estado.t1) return;
  if (!porTiempo) {
    const faltan = caso().pasos.length - estado.resp.filter((v) => v !== undefined && v !== null).length;
    if (!confirm(faltan ? `Le faltan ${faltan} paso(s) por responder. ¿Terminar de todas formas?` : "¿Terminar y enviar? Ya no podrá cambiar sus respuestas.")) return;
  }
  clearInterval(tic);
  estado.t1 = Date.now();
  guardar();
  dibujar();
  window.scrollTo({ top: 0 });
  if (porTiempo) avisar("Se acabó el tiempo. Envíe sus respuestas.");
}

// ------------------------------------------------------------ envío
function codigo() {
  const datos = { v: 1, n: estado.nombre, c: estado.casoId, r: estado.resp, t0: estado.t0, t1: estado.t1 };
  const bytes = new TextEncoder().encode(JSON.stringify(datos));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
const minutosUsados = () => Math.round((estado.t1 - estado.t0) / 6000) / 10;

function cuerpoCorreo() {
  const c = caso();
  const lineas = c.pasos.map((p, n) => `P${n + 1} ${p.paso}: ${estado.resp[n] === undefined || estado.resp[n] === null ? "-" : letra(estado.resp[n])}`);
  return [
    "Estimado profesor:", "",
    `Envío mi evaluación recuperativa (caso ${c.id}: ${plano(c.titulo)}).`, "",
    ...lineas, "",
    `Tiempo usado: ${String(minutosUsados()).replace(".", ",")} min`, "",
    `CODIGO-RECUP: ${codigo()} FIN`, "",
    "Saludos,", estado.nombre,
  ].join("\n");
}
const asunto = () => `Recuperativo taller secuenciación · Caso ${estado.casoId} · ${estado.nombre}`;
const enlaceCorreo = () => `mailto:${CORREO_DOCENTE}?subject=${encodeURIComponent(asunto())}&body=${encodeURIComponent(cuerpoCorreo())}`;
function enlaceOutlookWeb() {
  const p = new URLSearchParams({ to: CORREO_DOCENTE, subject: asunto(), body: cuerpoCorreo() });
  return `https://outlook.office.com/mail/deeplink/compose?${p.toString().replace(/\+/g, "%20")}`;
}

function pantallaFinal() {
  barra(null);
  app.innerHTML = `
    <h2>Enviar al docente</h2>
    <p>Sus respuestas quedaron cerradas (tiempo usado: ${String(minutosUsados()).replace(".", ",")} min). Elija una opción: se abrirá un correo ya redactado para <strong>${CORREO_DOCENTE}</strong>. Solo debe presionar «Enviar».</p>
    <div class="botones">
      <a class="boton primario" id="btn-outlook" href="${escapar(enlaceOutlookWeb())}" target="_blank" rel="noopener">Enviar con Outlook web (cuenta UV)</a>
      <a class="boton secundario" id="btn-correo" href="${escapar(enlaceCorreo())}">Enviar con la app de correo</a>
    </div>
    <p class="ayuda">Si usa un computador, prefiera Outlook web.</p>
    <details class="caso">
      <summary>¿No se abrió el correo?</summary>
      <p>Copie el texto y péguelo en un correo nuevo a ${CORREO_DOCENTE}.</p>
      <div class="botones"><button type="button" id="btn-copiar" class="secundario">Copiar texto</button></div>
    </details>
    <pre class="resumen" tabindex="0" aria-label="Texto del correo">${escapar(cuerpoCorreo())}</pre>`;
  $("#btn-copiar").onclick = async () => {
    try { await navigator.clipboard.writeText(cuerpoCorreo()); avisar("Texto copiado."); } catch { avisar("No se pudo copiar."); }
  };
}

dibujar();
