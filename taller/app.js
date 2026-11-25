import { CASOS, OPCIONES, VERIFICACION } from "./datos.js";

// ------------------------------------------------------------ opciones genéricas (definidas en construir_datos.py)
const { CONSERVACION, ACIDOS, RAZONES_ACIDO, CALIDAD, ESTRATEGIAS, RAZONES_ESTRATEGIA,
  PLATAFORMAS, RAZONES_PLATAFORMA, CONTROLES, LIMITACIONES } = OPCIONES;

const PASOS = [
  { titulo: "Pregunta", guia: "¿Qué quiero saber exactamente y qué dato lo respondería?",
    preguntas: [{ id: "p1", tipo: "radio", texto: "¿Cuál es la pregunta mejor formulada para este caso?", opciones: (c) => c.p1 }] },
  { titulo: "Muestra", guia: "Qué organismo o tejido, cuántos individuos, qué comparo y cómo lo conservo.",
    preguntas: [
      { id: "p2", tipo: "radio", texto: "¿Qué muestras tomaría?", opciones: (c) => c.p2 },
      { id: "p2c", tipo: "radio", texto: "¿Cómo las conservaría hasta la extracción?", opciones: () => CONSERVACION },
    ] },
  { titulo: "Ácido nucleico", guia: "¿ADN o ARN? ¿Fragmentos cortos o ADN íntegro?",
    preguntas: [
      { id: "p3", tipo: "radio", texto: "¿Qué extraería?", opciones: () => ACIDOS },
      { id: "p3r", tipo: "check", texto: "¿Por qué?", ayuda: "Marque todo lo que aplique.", opciones: () => RAZONES_ACIDO },
    ] },
  { titulo: "Control de calidad", guia: "¿Alcanza? ¿Está limpia? ¿Está entera?",
    preguntas: [
      { id: "p4", tipo: "check", texto: "¿Qué verificaría antes de secuenciar?", ayuda: "Marque todo lo que aplique.", opciones: () => CALIDAD },
      { id: "p4k", tipo: "radio", texto: "De lo anterior, ¿qué es lo más crítico en su caso?", opciones: () => CALIDAD },
    ] },
  { titulo: "Estrategia", guia: "¿Un gen, un marcador desde una mezcla, el genoma completo o la expresión?",
    preguntas: [
      { id: "p5", tipo: "radio", texto: "¿Qué estrategia usaría?", opciones: () => ESTRATEGIAS },
      { id: "p5r", tipo: "check", texto: "¿Por qué?", ayuda: "Marque todo lo que aplique.", opciones: () => RAZONES_ESTRATEGIA },
    ] },
  { titulo: "Plataforma", guia: "Elija según el largo de lectura, el error y la cantidad de datos que necesita.",
    preguntas: [
      { id: "p6", tipo: "radio", texto: "¿Qué plataforma usaría?", opciones: () => PLATAFORMAS },
      { id: "p6r", tipo: "check", texto: "¿Por qué?", ayuda: "Marque todo lo que aplique.", opciones: () => RAZONES_PLATAFORMA },
    ] },
  { titulo: "Controles", guia: "¿Qué controles incluyo y qué problema detecta cada uno?",
    preguntas: [
      { id: "p7", tipo: "check", texto: "¿Qué controles incluiría?", ayuda: "Marque todo lo que aplique.", opciones: () => CONTROLES },
      { id: "p7k", tipo: "radio", texto: "De lo anterior, ¿cuál es el más importante en su caso?", opciones: () => CONTROLES },
    ] },
  { titulo: "Resultado esperado", guia: "¿Qué datos obtendré y cómo responden la pregunta?",
    preguntas: [
      { id: "p8", tipo: "radio", texto: "¿Qué datos obtendría?", opciones: (c) => c.p8 },
      { id: "p8l", tipo: "check", texto: "¿Qué limitaciones tiene su diseño?", ayuda: "Marque todo lo que aplique.", opciones: () => LIMITACIONES },
    ] },
];

// ------------------------------------------------------------ estado
const CLAVE_ALMACEN = "taller-seq-v1";
const estadoInicial = () => ({ pantalla: "inicio", nombre: "", casoId: null, resp: {}, antes: null, imp: null, comentario: "" });
let estado = cargar();
let imprevistoDescifrado = null;

function cargar() {
  try { return { ...estadoInicial(), ...JSON.parse(localStorage.getItem(CLAVE_ALMACEN)) }; }
  catch { return estadoInicial(); }
}
function guardar() {
  try { localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(estado)); } catch { /* almacenamiento no disponible */ }
}

const $ = (sel) => document.querySelector(sel);
const app = $("#app");
const caso = () => CASOS.find((c) => c.id === estado.casoId);
const letra = (i) => "abcdefghij"[i];

function escapar(t) {
  return String(t).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}
// Marcado mínimo: *cursiva* y **negrita** (aplicado después de escapar).
function marcado(t) {
  return escapar(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
}
const sinMarcado = (t) => String(t).replace(/\*\*?/g, "");

function avisar(texto) {
  const a = $("#aviso");
  a.textContent = texto;
  clearTimeout(avisar.t);
  avisar.t = setTimeout(() => { a.textContent = ""; }, 3500);
}

// ------------------------------------------------------------ navegación
function ir(pantalla) {
  estado.pantalla = pantalla;
  guardar();
  dibujar();
  window.scrollTo({ top: 0 });
  const h = app.querySelector("h1, h2");
  if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
}

function indicePaso() {
  const m = /^paso-(\d)$/.exec(estado.pantalla);
  return m ? Number(m[1]) : null;
}

function configurarBarra({ atras, siguiente, textoSiguiente = "Siguiente" }) {
  const nav = $("#navegacion");
  nav.hidden = false;
  const bA = $("#btn-atras");
  const bS = $("#btn-siguiente");
  bA.hidden = !atras;
  bA.onclick = atras || null;
  bS.textContent = textoSiguiente;
  bS.hidden = !siguiente;
  bS.onclick = siguiente || null;
}

function dibujar() {
  const n = indicePaso();
  const zona = $("#zona-progreso");
  zona.hidden = n === null;
  if (n !== null) {
    $("#progreso").value = n;
    $("#etiqueta-progreso").textContent = `Paso ${n} de 8 · ${PASOS[n - 1].titulo}`;
  }
  $("#navegacion").hidden = true;
  if (estado.pantalla === "inicio" || !caso()) return pantallaInicio();
  if (estado.pantalla === "caso") return pantallaCaso();
  if (n !== null) return pantallaPaso(n);
  if (estado.pantalla === "imprevisto") return pantallaImprevisto();
  if (estado.pantalla === "final") return pantallaFinal();
  return pantallaInicio();
}

// ------------------------------------------------------------ pantallas
function pantallaInicio() {
  const opciones = CASOS.map((c) => `
    <label class="opcion">
      <input type="radio" name="caso" value="${c.id}" ${estado.casoId === c.id ? "checked" : ""}>
      <span><span class="letra">${c.ejemplo ? "Ejemplo (lo resuelve el docente)" : "Caso " + c.id}</span><br>${marcado(c.titulo)}</span>
    </label>`).join("");
  app.innerHTML = `
    <h1>Del problema biológico al dato</h1>
    <p>Diseñará el flujo de un experimento de secuenciación tocando opciones. En cada paso elija <strong>qué decide</strong> y <strong>por qué</strong>. Sus respuestas se guardan en este teléfono.</p>
    <form id="form-inicio" novalidate>
      <div class="campo">
        <label for="nombre">Su nombre</label>
        <input type="text" id="nombre" name="nombre" autocomplete="name" enterkeyhint="done" required value="${escapar(estado.nombre)}">
      </div>
      <fieldset id="grupo-caso">
        <legend>Caso asignado por el docente</legend>
        <p class="error" id="error-caso" hidden>Elija su caso.</p>
        ${opciones}
      </fieldset>
    </form>`;
  configurarBarra({
    siguiente: () => {
      const nombre = $("#nombre").value.trim();
      const elegido = app.querySelector('input[name="caso"]:checked');
      if (!nombre) { $("#nombre").setAttribute("aria-invalid", "true"); $("#nombre").focus(); avisar("Escriba su nombre."); return; }
      if (!elegido) { $("#error-caso").hidden = false; $("#grupo-caso").setAttribute("aria-invalid", "true"); avisar("Elija su caso."); return; }
      if (estado.casoId && estado.casoId !== elegido.value && Object.keys(estado.resp).length &&
          !confirm("Cambiar de caso borra las respuestas guardadas. ¿Continuar?")) return;
      if (estado.casoId !== elegido.value) Object.assign(estado, { resp: {}, antes: null, imp: null, comentario: "" });
      estado.nombre = nombre;
      estado.casoId = elegido.value;
      ir("caso");
    },
    textoSiguiente: "Comenzar",
  });
  $("#nombre").addEventListener("input", (e) => e.target.removeAttribute("aria-invalid"));
}

function bloqueCaso(abierto = false) {
  const c = caso();
  return `
    <details class="caso" ${abierto ? "open" : ""}>
      <summary>${c.ejemplo ? "Ejemplo" : "Caso " + c.id}: ${marcado(c.titulo)}</summary>
      <p class="tipo">${marcado(c.tipo)}</p>
      ${c.contexto.map((p) => `<p>${marcado(p)}</p>`).join("")}
      <p><strong>Información disponible</strong></p>
      <ul>${c.info.map((i) => `<li>${marcado(i)}</li>`).join("")}</ul>
    </details>`;
}

function pantallaCaso() {
  app.innerHTML = `
    <h1>Lea su caso</h1>
    ${bloqueCaso(true)}
    <p>En los pasos siguientes podrá volver a leerlo tocando su título.</p>`;
  configurarBarra({ atras: () => ir("inicio"), siguiente: () => ir("paso-1"), textoSiguiente: "Comenzar el diseño" });
}

function htmlPregunta(q, c) {
  const opciones = q.opciones(c);
  const valor = estado.resp[q.id];
  const items = opciones.map((t, i) => {
    const marcado_ = q.tipo === "radio" ? valor === i : Array.isArray(valor) && valor.includes(i);
    const tipo = q.tipo === "radio" ? "radio" : "checkbox";
    return `
      <label class="opcion">
        <input type="${tipo}" name="${q.id}" value="${i}" ${marcado_ ? "checked" : ""}>
        <span>${q.sinLetra ? "" : `<span class="letra">${letra(i)})</span> `}${marcado(t)}</span>
      </label>`;
  }).join("");
  return `
    <fieldset id="grupo-${q.id}" aria-describedby="error-${q.id}">
      <legend>${escapar(q.texto)}${q.ayuda ? `<span class="ayuda">${escapar(q.ayuda)}</span>` : ""}</legend>
      <p class="error" id="error-${q.id}" hidden>Responda esta pregunta para continuar.</p>
      ${items}
    </fieldset>`;
}

function leerPregunta(q) {
  const marcados = [...app.querySelectorAll(`input[name="${q.id}"]:checked`)].map((el) => Number(el.value));
  return q.tipo === "radio" ? (marcados.length ? marcados[0] : undefined) : marcados;
}

function pantallaPaso(n) {
  const c = caso();
  const paso = PASOS[n - 1];
  const enRevision = Boolean(estado.antes);
  app.innerHTML = `
    ${bloqueCaso()}
    ${enRevision ? `<p class="recuadro imprevisto cambio">Está corrigiendo su diseño después del imprevisto. Los cambios quedan registrados.</p>` : ""}
    <h2>Paso ${n} · ${escapar(paso.titulo)}</h2>
    <p class="guia">${escapar(paso.guia)}</p>
    <form id="form-paso" novalidate>${paso.preguntas.map((q) => htmlPregunta(q, c)).join("")}</form>`;

  app.querySelector("#form-paso").addEventListener("change", () => {
    for (const q of paso.preguntas) {
      estado.resp[q.id] = leerPregunta(q);
      const vacia = estado.resp[q.id] === undefined || (Array.isArray(estado.resp[q.id]) && !estado.resp[q.id].length);
      if (!vacia) { app.querySelector(`#error-${q.id}`).hidden = true; app.querySelector(`#grupo-${q.id}`).removeAttribute("aria-invalid"); }
    }
    guardar();
  });

  const validar = () => {
    let primero = null;
    for (const q of paso.preguntas) {
      const v = leerPregunta(q);
      const vacia = v === undefined || (Array.isArray(v) && !v.length);
      app.querySelector(`#error-${q.id}`).hidden = !vacia;
      app.querySelector(`#grupo-${q.id}`).toggleAttribute("aria-invalid", vacia);
      if (vacia) app.querySelector(`#grupo-${q.id}`).setAttribute("aria-invalid", "true");
      if (vacia && !primero) primero = app.querySelector(`#grupo-${q.id} input`);
    }
    if (primero) { primero.focus(); avisar("Falta responder una pregunta."); return false; }
    return true;
  };

  const siguiente = () => {
    if (!validar()) return;
    if (n < 8) return ir(`paso-${n + 1}`);
    if (c.ejemplo || estado.antes) return ir("final");
    return ir("imprevisto");
  };
  const ultimo = n === 8;
  configurarBarra({
    atras: () => ir(n === 1 ? "caso" : `paso-${n - 1}`),
    siguiente,
    textoSiguiente: ultimo ? (c.ejemplo || estado.antes ? "Terminar" : "Ir al imprevisto") : "Siguiente",
  });
}

// ------------------------------------------------------------ imprevisto (cifrado)
async function sha256(texto) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto)));
}
const hex = (bytes) => [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");

async function descifrar(codigo, casoId, base64) {
  const datos = Uint8Array.from(atob(base64), (ch) => ch.charCodeAt(0));
  const llave = await sha256(`${codigo}|${casoId}`);
  const flujo = [];
  for (let n = 0; flujo.length < datos.length; n++) {
    const bloque = new Uint8Array(llave.length + 4);
    bloque.set(llave);
    new DataView(bloque.buffer).setUint32(llave.length, n);
    flujo.push(...new Uint8Array(await crypto.subtle.digest("SHA-256", bloque)));
  }
  const salida = datos.map((b, i) => b ^ flujo[i]);
  return JSON.parse(new TextDecoder().decode(salida));
}

async function abrirImprevisto(codigo) {
  if (hex(await sha256(`verificar|${codigo}`)) !== VERIFICACION) return false;
  imprevistoDescifrado = await descifrar(codigo, estado.casoId, caso().imprevisto);
  estado.imp = { ...(estado.imp || {}), codigo };
  if (!estado.antes) estado.antes = structuredClone(estado.resp);
  guardar();
  return true;
}

async function pantallaImprevisto() {
  if (!imprevistoDescifrado && estado.imp?.codigo) {
    try { await abrirImprevisto(estado.imp.codigo); } catch { imprevistoDescifrado = null; }
  }
  if (!imprevistoDescifrado) {
    app.innerHTML = `
      <h2>Imprevisto</h2>
      <p>Espere a que el docente muestre el código y escríbalo aquí.</p>
      <form id="form-codigo" novalidate>
        <div class="campo">
          <label for="codigo">Código del imprevisto</label>
          <input type="text" id="codigo" name="codigo" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" enterkeyhint="go" aria-describedby="error-codigo" required>
          <p class="error" id="error-codigo" hidden>El código no es correcto.</p>
        </div>
        <button type="submit" class="primario">Abrir imprevisto</button>
      </form>`;
    $("#form-codigo").addEventListener("submit", async (e) => {
      e.preventDefault();
      const campo = $("#codigo");
      const codigo = campo.value.trim().toUpperCase();
      let ok = false;
      try { ok = codigo && await abrirImprevisto(codigo); } catch { ok = false; }
      if (!ok) { $("#error-codigo").hidden = false; campo.setAttribute("aria-invalid", "true"); campo.focus(); return; }
      dibujar();
    });
    $("#codigo").addEventListener("input", (e) => { e.target.removeAttribute("aria-invalid"); $("#error-codigo").hidden = true; });
    configurarBarra({ atras: () => ir("paso-8") });
    return;
  }

  const imp = imprevistoDescifrado;
  const pasosOpc = PASOS.map((p, i) => `${i + 1}. ${p.titulo}`);
  const qPasos = { id: "impPasos", tipo: "check", sinLetra: true, texto: "¿Qué pasos de su flujo se ven afectados?", ayuda: "Marque todo lo que aplique.", opciones: () => pasosOpc };
  const qAccion = { id: "impAccion", tipo: "radio", texto: "¿Qué haría ahora?", opciones: () => imp.acciones };
  app.innerHTML = `
    ${bloqueCaso()}
    <h2>Imprevisto</h2>
    <div class="recuadro imprevisto"><p>${marcado(imp.texto)}</p></div>
    <form id="form-paso" novalidate>${htmlPregunta(qPasos, caso())}${htmlPregunta(qAccion, caso())}</form>
    <p>Después podrá volver a sus pasos y cambiar lo que corresponda; los cambios quedan registrados.</p>`;
  app.querySelector("#form-paso").addEventListener("change", () => {
    estado.resp.impPasos = leerPregunta(qPasos);
    estado.resp.impAccion = leerPregunta(qAccion);
    guardar();
  });
  configurarBarra({
    atras: () => ir("paso-8"),
    siguiente: () => {
      const faltan = [qPasos, qAccion].filter((q) => { const v = leerPregunta(q); return v === undefined || (Array.isArray(v) && !v.length); });
      for (const q of [qPasos, qAccion]) app.querySelector(`#error-${q.id}`).hidden = !faltan.includes(q);
      if (faltan.length) { app.querySelector(`#grupo-${faltan[0].id} input`).focus(); avisar("Falta responder una pregunta."); return; }
      const primero = (estado.resp.impPasos[0] ?? 0) + 1;
      ir(`paso-${primero}`);
      avisar("Revise los pasos afectados y corrija lo necesario.");
    },
    textoSiguiente: "Corregir mis pasos",
  });
}

// ------------------------------------------------------------ resumen y envío por correo
const CORREO_DOCENTE = "javier.tognarelli@uv.cl";

function textoRespuesta(q, c, valor) {
  const ops = q.opciones(c);
  if (valor === undefined || (Array.isArray(valor) && !valor.length)) return "(sin respuesta)";
  const idx = Array.isArray(valor) ? valor : [valor];
  return idx.map((i) => (q.sinLetra ? "" : `${letra(i)}) `) + sinMarcado(ops[i])).join("; ");
}
const letras = (valor) => (valor === undefined ? "-" : (Array.isArray(valor) ? valor : [valor]).map(letra).join(",") || "-");

// Código compacto que lee el corrector del docente (no contiene la clave).
function codigoRespuestas() {
  const datos = { v: 1, n: estado.nombre, c: estado.casoId, r: estado.resp };
  const bytes = new TextEncoder().encode(JSON.stringify(datos));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Resumen legible y completo (pantalla, copiar, descargar).
function construirResumen() {
  const c = caso();
  const lineas = [
    "TALLER · DEL PROBLEMA BIOLÓGICO AL DATO",
    `Nombre: ${estado.nombre}`,
    `Caso: ${c.ejemplo ? "Ejemplo" : c.id} · ${sinMarcado(c.titulo)}`,
    "",
  ];
  PASOS.forEach((p, i) => {
    lineas.push(`PASO ${i + 1} · ${p.titulo.toUpperCase()}`);
    for (const q of p.preguntas) {
      lineas.push(`- ${q.texto} ${textoRespuesta(q, c, estado.resp[q.id])}`);
      if (estado.antes && JSON.stringify(estado.antes[q.id]) !== JSON.stringify(estado.resp[q.id])) {
        lineas.push(`  (antes del imprevisto: ${textoRespuesta(q, c, estado.antes[q.id])})`);
      }
    }
    lineas.push("");
  });
  if (!c.ejemplo && imprevistoDescifrado) {
    const pasosOpc = PASOS.map((p, i) => `${i + 1}. ${p.titulo}`);
    lineas.push("IMPREVISTO",
      `- Pasos afectados: ${textoRespuesta({ sinLetra: true, opciones: () => pasosOpc }, c, estado.resp.impPasos)}`,
      `- Acción: ${textoRespuesta({ opciones: () => imprevistoDescifrado.acciones }, c, estado.resp.impAccion)}`, "");
  }
  if (estado.comentario.trim()) lineas.push(`COMENTARIO: ${estado.comentario.trim()}`, "");
  lineas.push(`CODIGO-TALLER: ${codigoRespuestas()} FIN`);
  return lineas.join("\n");
}

// Cuerpo del correo: breve (los enlaces mailto tienen límite de largo) + código para el corrector.
function cuerpoCorreo() {
  const c = caso();
  const r = estado.resp;
  const filas = PASOS.map((p, i) => `P${i + 1} ${p.titulo}: ` + p.preguntas.map((q) => letras(r[q.id])).join(" | "));
  const partes = [
    "Estimado profesor:",
    "",
    `Envío mi diseño del taller de secuenciación (caso ${c.ejemplo ? "Ejemplo" : c.id}: ${sinMarcado(c.titulo)}).`,
    "",
    ...filas,
    c.ejemplo ? "" : `Imprevisto: pasos ${r.impPasos ? r.impPasos.map((x) => x + 1).join(",") : "-"} | acción ${letras(r.impAccion)}`,
    estado.comentario.trim() ? `Comentario: ${estado.comentario.trim()}` : "",
    "",
    `CODIGO-TALLER: ${codigoRespuestas()} FIN`,
    "",
    "Saludos,",
    estado.nombre,
  ];
  return partes.filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n");
}

function asuntoCorreo() {
  const c = caso();
  return `Taller secuenciación · Caso ${c.ejemplo ? "Ejemplo" : c.id} · ${estado.nombre}`;
}
// Aplicación de correo predeterminada del dispositivo (en computadores sin cliente de correo no hace nada).
function enlaceCorreo() {
  return `mailto:${CORREO_DOCENTE}?subject=${encodeURIComponent(asuntoCorreo())}&body=${encodeURIComponent(cuerpoCorreo())}`;
}
// Outlook en el navegador (cuenta institucional UV); funciona en cualquier equipo con sesión iniciada.
function enlaceOutlookWeb() {
  const p = new URLSearchParams({ to: CORREO_DOCENTE, subject: asuntoCorreo(), body: cuerpoCorreo() });
  return `https://outlook.office.com/mail/deeplink/compose?${p.toString().replace(/\+/g, "%20")}`;
}

const nombreArchivo = (ext) => `taller_${estado.casoId}_${estado.nombre.normalize("NFD").replace(/[^\w]+/g, "_")}.${ext}`;

async function copiarTexto() {
  try { await navigator.clipboard.writeText(construirResumen()); avisar("Resumen copiado."); }
  catch { avisar("No se pudo copiar; use «Descargar»."); }
}
function descargar(blob, nombre) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = nombre;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

function pantallaFinal() {
  app.innerHTML = `
    <h2>Enviar al docente</h2>
    <p>Elija una opción: se abrirá un correo ya redactado para <strong>${CORREO_DOCENTE}</strong>. Solo debe presionar «Enviar».</p>
    <div class="campo">
      <label for="comentario">Comentario breve (opcional)</label>
      <textarea id="comentario" name="comentario" rows="3" maxlength="300">${escapar(estado.comentario)}</textarea>
    </div>
    <div class="botones">
      <a class="boton primario" id="btn-outlook" href="#" target="_blank" rel="noopener">Enviar con Outlook web (cuenta UV)</a>
      <a class="boton secundario" id="btn-correo" href="#">Enviar con la app de correo</a>
    </div>
    <p class="ayuda">Si usa un computador, prefiera Outlook web: la otra opción solo funciona si el equipo tiene un programa de correo configurado.</p>
    <details class="caso">
      <summary>¿No se abrió el correo?</summary>
      <p>Copie el resumen y péguelo en un correo nuevo a ${CORREO_DOCENTE}, o descárguelo y adjúntelo.</p>
      <div class="botones">
        <button type="button" id="btn-copiar" class="secundario">Copiar resumen</button>
        <button type="button" id="btn-descargar" class="secundario">Descargar</button>
      </div>
    </details>
    <h3>Su resumen</h3>
    <pre class="resumen" id="vista-resumen" tabindex="0" aria-label="Resumen de sus respuestas"></pre>
    <div class="botones">
      <button type="button" id="btn-reiniciar" class="secundario">Empezar de nuevo</button>
    </div>`;
  const vista = $("#vista-resumen");
  const actualizar = () => {
    vista.textContent = construirResumen();
    $("#btn-correo").href = enlaceCorreo();
    $("#btn-outlook").href = enlaceOutlookWeb();
  };
  actualizar();
  $("#comentario").addEventListener("input", (e) => { estado.comentario = e.target.value; guardar(); actualizar(); });
  $("#btn-copiar").onclick = copiarTexto;
  $("#btn-descargar").onclick = () => descargar(new Blob([construirResumen()], { type: "text/plain;charset=utf-8" }), nombreArchivo("txt"));
  $("#btn-reiniciar").onclick = () => {
    if (!confirm("Se borrarán sus respuestas de este teléfono. ¿Continuar?")) return;
    estado = estadoInicial(); imprevistoDescifrado = null; guardar(); ir("inicio");
  };
  configurarBarra({ atras: () => ir("paso-8") });
}

dibujar();
