import { CASOS, VERIFICACION } from "./datos.js";

// ------------------------------------------------------------ opciones genéricas
const CONSERVACION = [
  "Congelación rápida (nitrógeno líquido o hielo seco) y −80 °C",
  "Congelado a −20 °C",
  "Etanol 96 %",
  "Estabilizante de ARN (RNAlater)",
  "Refrigerado (4 °C) por pocas horas y luego congelado",
  "Temperatura ambiente",
];
const ACIDOS = ["ADN", "ARN (que luego se convierte a ADNc)", "ADN de alto peso molecular (fragmentos muy largos)", "ADN y ARN"];
const RAZONES_ACIDO = [
  "La pregunta es sobre lo que TIENE el organismo en su genoma",
  "La pregunta es sobre lo que se está EXPRESANDO",
  "El organismo es un virus de ARN",
  "Necesito fragmentos muy largos para usar lecturas largas",
];
const CALIDAD = [
  "Cantidad (ng/µL)",
  "Pureza A260/280 (proteínas, fenol)",
  "Pureza A260/230 (sales, húmicos, polisacáridos)",
  "Integridad del ADN en gel",
  "Integridad del ARN (RIN)",
  "Tamaño de los fragmentos de ADN",
  "Una sola banda de PCR del tamaño esperado",
];
const ESTRATEGIAS = [
  "Un gen por PCR",
  "Amplicón masivo (metabarcoding)",
  "Genoma completo (WGS)",
  "Metagenómica shotgun",
  "RNA-seq",
];
const RAZONES_ESTRATEGIA = [
  "Basta una región conocida del genoma",
  "La muestra es una mezcla de muchos organismos",
  "Necesito comparar genomas completos con alta resolución",
  "Necesito ensamblar un genoma nuevo",
  "Necesito medir la expresión de muchos genes",
  "Son muchas muestras: uso códigos de barra",
];
const PLATAFORMAS = [
  "Sanger",
  "Lecturas cortas (Illumina, MGI o AVITI)",
  "Ion Torrent",
  "Lecturas largas exactas (PacBio HiFi)",
  "Lecturas largas portátiles (Oxford Nanopore)",
  "Combinación de lecturas cortas y largas",
];
const RAZONES_PLATAFORMA = [
  "Es un fragmento corto en pocas muestras",
  "Necesito miles o millones de lecturas",
  "Necesito un error muy bajo para detectar diferencias de una base",
  "Necesito resolver regiones repetidas o ensamblar un genoma",
  "Necesito portabilidad o un resultado rápido en terreno",
  "La muestra es una mezcla de secuencias distintas",
];
const CONTROLES = [
  "Negativo de extracción (blanco)",
  "Negativo de PCR (sin templado)",
  "Control positivo",
  "Blanco de campo",
  "Comunidad simulada (mock)",
  "Grupo control experimental",
  "Réplicas biológicas",
  "Muestra de referencia de identidad conocida",
];
const LIMITACIONES = [
  "Solo estudio un fragmento, no el genoma completo",
  "Depende de que existan secuencias de referencia",
  "Una asociación no demuestra causalidad",
  "Solo da proporciones relativas, no cantidades absolutas",
  "Identifica en general solo hasta género",
  "Es un solo tejido y un solo momento",
  "El ensamblaje puede quedar incompleto por regiones repetidas",
  "Necesito además datos no genéticos (por ejemplo, epidemiológicos)",
];

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
let grabacion = null; // { blob, url, tipo }

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
      <span><span class="letra">${c.ejemplo ? "Ejemplo" : "Caso " + c.id}</span> · ${escapar(c.nivel)}<br>${marcado(c.titulo)}</span>
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

// ------------------------------------------------------------ resumen y envío
function textoRespuesta(q, c, valor) {
  const ops = q.opciones(c);
  if (valor === undefined || (Array.isArray(valor) && !valor.length)) return "(sin respuesta)";
  const idx = Array.isArray(valor) ? valor : [valor];
  return idx.map((i) => (q.sinLetra ? "" : `${letra(i)}) `) + sinMarcado(ops[i])).join("; ");
}

function construirResumen() {
  const c = caso();
  const lineas = [
    "TALLER · DEL PROBLEMA BIOLÓGICO AL DATO",
    `Nombre: ${estado.nombre}`,
    `Caso: ${c.ejemplo ? "Ejemplo" : c.id} · ${sinMarcado(c.titulo)}`,
    `Fecha: ${new Date().toLocaleString("es-CL")}`,
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
  if (!c.ejemplo) {
    lineas.push("IMPREVISTO");
    if (imprevistoDescifrado) {
      const pasosOpc = PASOS.map((p, i) => `${i + 1}. ${p.titulo}`);
      lineas.push(`- Pasos afectados: ${textoRespuesta({ sinLetra: true, opciones: () => pasosOpc }, c, estado.resp.impPasos)}`);
      lineas.push(`- Acción: ${textoRespuesta({ opciones: () => imprevistoDescifrado.acciones }, c, estado.resp.impAccion)}`);
    } else {
      lineas.push("- (no abierto)");
    }
    lineas.push("");
  }
  if (estado.comentario.trim()) lineas.push(`COMENTARIO: ${estado.comentario.trim()}`, "");
  lineas.push(grabacion ? "Nota de voz: adjunta por separado." : "Nota de voz: no grabada.");
  return lineas.join("\n");
}

const nombreArchivo = (ext) => `taller_${estado.casoId}_${estado.nombre.normalize("NFD").replace(/[^\w]+/g, "_")}.${ext}`;

async function compartirTexto() {
  const texto = construirResumen();
  if (navigator.share) {
    try { await navigator.share({ title: "Taller de secuenciación", text: texto }); return; }
    catch (e) { if (e.name === "AbortError") return; }
  }
  await copiarTexto();
}
async function copiarTexto() {
  try { await navigator.clipboard.writeText(construirResumen()); avisar("Resumen copiado. Péguelo en el mensaje al docente."); }
  catch { avisar("No se pudo copiar; use «Descargar»."); }
}
function descargar(blob, nombre) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = nombre;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

// ------------------------------------------------------------ nota de voz
const MAX_SEGUNDOS = 120;
function tipoAudio() {
  const candidatos = ["audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"];
  return window.MediaRecorder ? candidatos.find((t) => MediaRecorder.isTypeSupported?.(t)) || "" : null;
}

function montarGrabadora() {
  const zona = $("#grabadora");
  const tipo = tipoAudio();
  if (tipo === null || !navigator.mediaDevices?.getUserMedia) {
    zona.innerHTML = `<p>Este navegador no permite grabar desde la página. Grabe la nota de voz con la aplicación de mensajería y envíela junto con el resumen.</p>`;
    return;
  }
  let grabador = null; let flujo = null; let partes = []; let reloj = null; let segundos = 0;
  const pintar = () => {
    zona.innerHTML = `
      <div class="botones">
        <button type="button" id="btn-grabar" class="primario">${grabador ? "Detener" : grabacion ? "Grabar de nuevo" : "Grabar nota de voz"}</button>
        ${grabacion && !grabador ? `<button type="button" id="btn-audio" class="secundario">Enviar nota de voz</button>` : ""}
      </div>
      <p class="contador" role="timer" aria-live="off">${grabador ? `Grabando… ${segundos} s de ${MAX_SEGUNDOS}` : ""}</p>
      ${grabacion && !grabador ? `<audio controls src="${grabacion.url}"></audio>` : ""}`;
    $("#btn-grabar").onclick = alternar;
    $("#btn-audio")?.addEventListener("click", compartirAudio);
  };
  const detener = () => { grabador?.state === "recording" && grabador.stop(); };
  async function alternar() {
    if (grabador) return detener();
    try { flujo = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch { avisar("No se pudo usar el micrófono. Revise los permisos del navegador."); return; }
    partes = []; segundos = 0;
    grabador = new MediaRecorder(flujo, tipo ? { mimeType: tipo } : undefined);
    grabador.ondataavailable = (e) => e.data.size && partes.push(e.data);
    grabador.onstop = () => {
      clearInterval(reloj);
      flujo.getTracks().forEach((t) => t.stop());
      const mime = grabador.mimeType || tipo || "audio/webm";
      if (grabacion) URL.revokeObjectURL(grabacion.url);
      const blob = new Blob(partes, { type: mime });
      grabacion = { blob, url: URL.createObjectURL(blob), ext: mime.includes("mp4") ? "m4a" : mime.includes("ogg") ? "ogg" : "webm" };
      grabador = null;
      pintar();
      $("#vista-resumen").textContent = construirResumen();
    };
    grabador.start();
    reloj = setInterval(() => {
      segundos++;
      const c = zona.querySelector(".contador");
      if (c) c.textContent = `Grabando… ${segundos} s de ${MAX_SEGUNDOS}`;
      if (segundos >= MAX_SEGUNDOS) detener();
    }, 1000);
    pintar();
  }
  async function compartirAudio() {
    const archivo = new File([grabacion.blob], nombreArchivo(grabacion.ext), { type: grabacion.blob.type });
    if (navigator.canShare?.({ files: [archivo] })) {
      try { await navigator.share({ files: [archivo], title: "Nota de voz · taller" }); return; }
      catch (e) { if (e.name === "AbortError") return; }
    }
    descargar(archivo, archivo.name);
    avisar("Nota de voz descargada. Adjúntela en el mensaje al docente.");
  }
  pintar();
}

function pantallaFinal() {
  app.innerHTML = `
    <h2>Enviar al docente</h2>
    <p>Revise su resumen y envíelo por el medio que indique el docente (correo, WhatsApp o Aula Virtual).</p>
    <div class="campo">
      <label for="comentario">Comentario breve (opcional)</label>
      <textarea id="comentario" name="comentario" rows="3" maxlength="400">${escapar(estado.comentario)}</textarea>
    </div>
    <h3>Nota de voz (hasta 2 minutos)</h3>
    <p>Recorra su flujo en voz alta: qué decidió en cada paso, por qué, y cómo resolvió el imprevisto.</p>
    <div class="grabadora" id="grabadora"></div>
    <h3>Resumen</h3>
    <div class="botones">
      <button type="button" id="btn-compartir" class="primario">Enviar resumen</button>
      <button type="button" id="btn-copiar" class="secundario">Copiar</button>
      <button type="button" id="btn-descargar" class="secundario">Descargar</button>
    </div>
    <pre class="resumen" id="vista-resumen" tabindex="0" aria-label="Resumen de sus respuestas"></pre>
    <div class="botones">
      <button type="button" id="btn-reiniciar" class="secundario">Empezar de nuevo</button>
    </div>`;
  const vista = $("#vista-resumen");
  vista.textContent = construirResumen();
  $("#comentario").addEventListener("input", (e) => { estado.comentario = e.target.value; guardar(); vista.textContent = construirResumen(); });
  $("#btn-compartir").onclick = compartirTexto;
  $("#btn-copiar").onclick = copiarTexto;
  $("#btn-descargar").onclick = () => descargar(new Blob([construirResumen()], { type: "text/plain;charset=utf-8" }), nombreArchivo("txt"));
  $("#btn-reiniciar").onclick = () => {
    if (!confirm("Se borrarán sus respuestas de este teléfono. ¿Continuar?")) return;
    estado = estadoInicial(); imprevistoDescifrado = null; grabacion = null; guardar(); ir("inicio");
  };
  montarGrabadora();
  configurarBarra({ atras: () => ir("paso-8") });
}

dibujar();
