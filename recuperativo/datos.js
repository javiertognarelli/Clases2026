// Generado por construir_recuperativo.py. No editar a mano.
export const CASOS = [
 {
  "id": "R1",
  "titulo": "El quillay frente a la megasequía",
  "tipo": "Escenario hipotético con fines didácticos; no corresponde a un estudio publicado.",
  "contexto": "Un equipo quiere saber qué genes cambian su expresión en las hojas del quillay (*Quillaja saponaria*), árbol endémico de Chile central, cuando se somete a sequía. Cuenta con un vivero con plantas de edad similar.",
  "pasos": [
   {
    "paso": "Pregunta",
    "texto": "¿Qué genes cambian su expresión en hojas de quillay bajo sequía, respecto de plantas regadas?",
    "opciones": [
     "Es correcto como está",
     "Cambiarla por: ¿El quillay tolera la sequía?",
     "Cambiarla por: ¿Qué bacterias viven en las hojas del quillay?",
     "Cambiarla por: ¿Cuál es el genoma completo del quillay?"
    ]
   },
   {
    "paso": "Muestra",
    "texto": "Hojas de 1 planta regada y 1 planta en sequía. Las regadas se muestrean en la mañana y las de sequía en la tarde.",
    "opciones": [
     "Es correcto como está",
     "Usar 1 planta por grupo, pero tomar más hojas de cada una",
     "Muestrear solo plantas en sequía, que son las de interés",
     "Usar al menos 3 a 5 plantas por grupo y muestrear todas a la misma hora"
    ]
   },
   {
    "paso": "Ácido nucleico",
    "texto": "Extraer ADN, porque los genes están en el genoma.",
    "opciones": [
     "Es correcto como está",
     "Extraer ARN, porque la expresión se mide en los transcritos (ARNm)",
     "Extraer ADN y secuenciar solo los genes conocidos de sequía",
     "Extraer ADN de alto peso molecular"
    ]
   },
   {
    "paso": "Control de calidad",
    "texto": "Medir cantidad, pureza (A260/280 y A260/230) e integridad antes de preparar las bibliotecas.",
    "opciones": [
     "Es correcto como está",
     "Omitir el control de calidad: la secuenciación detecta los problemas",
     "Basta con medir la cantidad",
     "Medir solo el tamaño de los fragmentos"
    ]
   },
   {
    "paso": "Estrategia",
    "texto": "RNA-seq, con un código de barra distinto para cada muestra.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a amplicón del gen 16S",
     "Cambiar a genoma completo (WGS)",
     "Cambiar a PCR de un solo gen y Sanger"
    ]
   },
   {
    "paso": "Plataforma",
    "texto": "Lecturas cortas (Illumina, MGI o AVITI), porque se necesitan millones de lecturas por muestra para contar transcritos.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a Sanger, que tiene menos error",
     "Cambiar a lecturas largas, porque el genoma es grande",
     "Cambiar a Nanopore, porque es portátil"
    ]
   },
   {
    "paso": "Controles",
    "texto": "No se necesita grupo control: los resultados se comparan con lo publicado para otras plantas.",
    "opciones": [
     "Es correcto como está",
     "Incluir una muestra de otra especie de árbol como control",
     "Incluir plantas regadas como grupo control, con réplicas biológicas",
     "Incluir solo un control negativo de PCR"
    ]
   },
   {
    "paso": "Resultado esperado",
    "texto": "Millones de lecturas por muestra; con ellas se demostrará qué proteínas produce el quillay bajo sequía.",
    "opciones": [
     "Es correcto como está",
     "Las lecturas estiman la expresión (ARNm) de miles de genes; más ARNm no siempre significa más proteína",
     "Las lecturas muestran qué mutaciones causó la sequía",
     "Las lecturas entregan el genoma ensamblado del quillay"
    ]
   }
  ]
 },
 {
  "id": "R2",
  "titulo": "¿Qué come el zorro chilla?",
  "tipo": "Escenario hipotético con fines didácticos.",
  "contexto": "Un grupo de ecología quiere conocer la dieta del zorro chilla (*Lycalopex griseus*) en un parque nacional sin capturar ni molestar a los animales, a partir de fecas recolectadas en senderos.",
  "pasos": [
   {
    "paso": "Pregunta",
    "texto": "¿Qué presas (roedores, aves, insectos y plantas) componen la dieta del zorro chilla en el parque?",
    "opciones": [
     "Es correcto como está",
     "Cambiarla por: ¿Cuál es el genoma del zorro chilla?",
     "Cambiarla por: ¿Qué genes expresa el zorro al digerir?",
     "Cambiarla por: ¿Cuántos zorros hay en el parque?"
    ]
   },
   {
    "paso": "Muestra",
    "texto": "Fecas frescas de 30 puntos del parque, cada una en un tubo con etanol o congelada, cambiando de guantes entre muestras.",
    "opciones": [
     "Es correcto como está",
     "Juntar todas las fecas en una sola bolsa",
     "Tomar solo una feca, porque todas tendrán lo mismo",
     "Guardar las fecas a temperatura ambiente hasta el final de la campaña"
    ]
   },
   {
    "paso": "Ácido nucleico",
    "texto": "Extraer ARN, porque interesa lo que está activo en el intestino.",
    "opciones": [
     "Es correcto como está",
     "Extraer ADN, porque se quiere identificar qué organismos fueron consumidos",
     "Extraer ADN de alto peso molecular del zorro",
     "Extraer ARN y convertirlo a ADNc"
    ]
   },
   {
    "paso": "Control de calidad",
    "texto": "Medir solo la cantidad: en fecas la pureza no es importante.",
    "opciones": [
     "Es correcto como está",
     "Medir solo el tamaño de los fragmentos",
     "Medir solo el RIN",
     "Medir también la pureza (A260/230) y verificar que la PCR funcione, porque las fecas traen inhibidores"
    ]
   },
   {
    "paso": "Estrategia",
    "texto": "Amplicón masivo de marcadores (por ejemplo, 12S para vertebrados y un marcador de plantas), con códigos de barra por feca.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a RNA-seq de las fecas",
     "Cambiar a PCR de un gen y Sanger por feca",
     "Cambiar a genoma completo de cada presa"
    ]
   },
   {
    "paso": "Plataforma",
    "texto": "Sanger de cada feca.",
    "opciones": [
     "Es correcto como está",
     "Sanger, pero leyendo en ambos sentidos",
     "PacBio HiFi, porque tiene el menor error",
     "Lecturas cortas (Illumina, MGI o AVITI), porque cada feca es una mezcla de especies"
    ]
   },
   {
    "paso": "Controles",
    "texto": "Negativos de extracción y de PCR, y una mezcla conocida de ADN de presas (comunidad simulada).",
    "opciones": [
     "Es correcto como está",
     "Basta con un control positivo",
     "No se necesitan controles en un estudio de dieta",
     "Solo réplicas técnicas de la misma feca"
    ]
   },
   {
    "paso": "Resultado esperado",
    "texto": "Lista de especies detectadas en cada feca y su frecuencia de aparición; no indica cuánta biomasa se comió de cada una.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a: el genoma ensamblado de cada presa",
     "Cambiar a: qué presas prefiere el zorro, sin margen de duda",
     "Cambiar a: la cantidad exacta en gramos de cada presa"
    ]
   }
  ]
 },
 {
  "id": "R3",
  "titulo": "Mosquitos resistentes en el norte",
  "tipo": "Escenario hipotético con fines didácticos. Las mutaciones kdr del gen del canal de sodio son un mecanismo conocido de resistencia a piretroides en *Aedes aegypti*.",
  "contexto": "En el norte de Chile se detectó el mosquito *Aedes aegypti*. La autoridad sanitaria quiere saber si las poblaciones locales portan mutaciones kdr, ubicadas en fragmentos cortos y conocidos del gen del canal de sodio, que se asocian a resistencia a insecticidas piretroides.",
  "pasos": [
   {
    "paso": "Pregunta",
    "texto": "¿Qué mosquitos hay en la ciudad?",
    "opciones": [
     "Es correcto como está",
     "Cambiarla por: ¿Con qué frecuencia portan mutaciones kdr los mosquitos de cada sector de la ciudad?",
     "Cambiarla por: ¿Qué genes expresan los mosquitos al picar?",
     "Cambiarla por: ¿Cuál es el genoma completo de *Aedes aegypti*?"
    ]
   },
   {
    "paso": "Muestra",
    "texto": "Unos 30 mosquitos adultos de distintos sectores de la ciudad, cada uno en un tubo con etanol 96 %.",
    "opciones": [
     "Es correcto como está",
     "Guardar los mosquitos en agua",
     "Un solo mosquito, porque todos son iguales",
     "Mezclar los 30 mosquitos en un tubo"
    ]
   },
   {
    "paso": "Ácido nucleico",
    "texto": "Extraer ADN, porque se buscan mutaciones en el genoma.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a ARN",
     "Cambiar a ADN de alto peso molecular",
     "Cambiar a ADN y ARN"
    ]
   },
   {
    "paso": "Control de calidad",
    "texto": "Medir la cantidad y verificar en gel una sola banda de PCR del tamaño esperado.",
    "opciones": [
     "Es correcto como está",
     "Omitir el control de calidad",
     "Medir el RIN",
     "Medir solo el tamaño de los fragmentos"
    ]
   },
   {
    "paso": "Estrategia",
    "texto": "Genoma completo de cada mosquito.",
    "opciones": [
     "Es correcto como está",
     "PCR de los fragmentos que contienen las mutaciones kdr en cada mosquito",
     "Amplicón masivo del gen 16S",
     "RNA-seq de cada mosquito"
    ]
   },
   {
    "paso": "Plataforma",
    "texto": "Sanger, porque son fragmentos cortos y conocidos en unas decenas de individuos.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a PacBio HiFi",
     "Cambiar a Nanopore",
     "Cambiar a metagenómica shotgun"
    ]
   },
   {
    "paso": "Controles",
    "texto": "Solo un control positivo; los negativos no son necesarios porque la PCR es específica.",
    "opciones": [
     "Es correcto como está",
     "No incluir controles",
     "Incluir negativos de extracción y de PCR, además del positivo (un mosquito de genotipo conocido)",
     "Incluir solo el negativo de extracción"
    ]
   },
   {
    "paso": "Resultado esperado",
    "texto": "El genotipo de cada mosquito en las posiciones kdr y la frecuencia por sector; la resistencia real se confirmaría con bioensayos.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a: la lista de virus que transmite cada mosquito",
     "Cambiar a: el genoma ensamblado del mosquito",
     "Cambiar a: la prueba definitiva de que los insecticidas no sirven"
    ]
   }
  ]
 },
 {
  "id": "R4",
  "titulo": "Colmenas que se mueren",
  "tipo": "Escenario hipotético con fines didácticos.",
  "contexto": "Varios apicultores reportan alta mortalidad en sus colmenas. Se sospecha de virus, la mayoría de los cuales tienen genoma de ARN. Se quiere saber qué virus están presentes en colmenas enfermas y sanas.",
  "pasos": [
   {
    "paso": "Pregunta",
    "texto": "¿Qué virus están presentes en abejas de colmenas con alta mortalidad, comparadas con colmenas sanas?",
    "opciones": [
     "Es correcto como está",
     "Cambiarla por: ¿Cuál es el genoma de la abeja?",
     "Cambiarla por: ¿Por qué se mueren las abejas?",
     "Cambiarla por: ¿Cuántas abejas hay por colmena?"
    ]
   },
   {
    "paso": "Muestra",
    "texto": "Abejas solo de colmenas enfermas, transportadas a temperatura ambiente durante dos días.",
    "opciones": [
     "Es correcto como está",
     "Abejas de colmenas enfermas, pero en etanol 96 %",
     "Una sola abeja de cada colmena enferma",
     "Abejas de colmenas enfermas y sanas, congeladas de inmediato o en estabilizante de ARN"
    ]
   },
   {
    "paso": "Ácido nucleico",
    "texto": "Extraer ARN, porque la mayoría de los virus de abejas tienen genoma de ARN.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a ADN",
     "Cambiar a solo ADN de la abeja",
     "Cambiar a ADN de alto peso molecular"
    ]
   },
   {
    "paso": "Control de calidad",
    "texto": "Medir cantidad, pureza e integridad del ARN (RIN).",
    "opciones": [
     "Es correcto como está",
     "Medir solo el tamaño de los fragmentos de ADN",
     "Medir solo una banda de PCR",
     "Omitir el control de calidad"
    ]
   },
   {
    "paso": "Estrategia",
    "texto": "Metagenómica de ARN: secuenciar todo el ARN, convertido a ADNc, para detectar virus conocidos y desconocidos.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a PCR de un solo virus conocido",
     "Cambiar a amplicón del gen 16S",
     "Cambiar a genoma completo de la abeja"
    ]
   },
   {
    "paso": "Plataforma",
    "texto": "Sanger de cada muestra.",
    "opciones": [
     "Es correcto como está",
     "Sanger de un gen de la abeja",
     "Lecturas cortas (o Nanopore), porque cada muestra es una mezcla de secuencias de la abeja y de varios virus",
     "Sanger, pero leyendo en ambos sentidos"
    ]
   },
   {
    "paso": "Controles",
    "texto": "Negativo de extracción y abejas de colmenas sanas para comparar.",
    "opciones": [
     "Es correcto como está",
     "No se necesitan controles",
     "Basta con un control positivo",
     "Solo réplicas técnicas"
    ]
   },
   {
    "paso": "Resultado esperado",
    "texto": "Si se detecta un virus en las colmenas enfermas, queda demostrado que ese virus causa la mortalidad.",
    "opciones": [
     "Es correcto como está",
     "Si no se detecta ningún virus, las abejas están sanas",
     "Detectar un virus muestra una asociación, no la causa; hay que compararlo con las colmenas sanas y con otros factores",
     "Si se detecta un virus, hay que destruir todas las colmenas"
    ]
   }
  ]
 },
 {
  "id": "R5",
  "titulo": "Una bacteria fijadora de nitrógeno",
  "tipo": "Escenario hipotético con fines didácticos.",
  "contexto": "Se aisló una cepa de *Rhizobium* desde nódulos de una leguminosa nativa. En estas bacterias, muchos genes de simbiosis están en plasmidios grandes. Se quiere obtener su genoma completo, incluidos los plasmidios.",
  "pasos": [
   {
    "paso": "Pregunta",
    "texto": "¿Cuál es el genoma completo, incluidos sus plasmidios, de la cepa aislada?",
    "opciones": [
     "Es correcto como está",
     "Cambiarla por: ¿Qué genes expresa la planta?",
     "Cambiarla por: ¿Qué bacterias hay en el suelo?",
     "Cambiarla por: ¿La bacteria es *Rhizobium*?"
    ]
   },
   {
    "paso": "Muestra",
    "texto": "Cultivo puro a partir de una colonia aislada, cosechado en fase de crecimiento.",
    "opciones": [
     "Es correcto como está",
     "Mezclar varias colonias distintas",
     "Usar suelo de la raíz",
     "Usar el nódulo completo, con tejido de la planta"
    ]
   },
   {
    "paso": "Ácido nucleico",
    "texto": "Extraer ADN de alto peso molecular, con un método suave.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a ADN y ARN",
     "Cambiar a ADN fragmentado por sonicación",
     "Cambiar a ARN"
    ]
   },
   {
    "paso": "Control de calidad",
    "texto": "Medir solo la cantidad en el espectrofotómetro.",
    "opciones": [
     "Es correcto como está",
     "Medir solo el RIN",
     "Verificar una sola banda de PCR",
     "Medir cantidad (idealmente por fluorometría), pureza y tamaño de los fragmentos"
    ]
   },
   {
    "paso": "Estrategia",
    "texto": "Amplicón del gen 16S.",
    "opciones": [
     "Es correcto como está",
     "Metagenómica shotgun del suelo",
     "Genoma completo (WGS) de la cepa",
     "RNA-seq de la cepa"
    ]
   },
   {
    "paso": "Plataforma",
    "texto": "Solo lecturas cortas de 150 pb, suficientes para cerrar el cromosoma y los plasmidios.",
    "opciones": [
     "Es correcto como está",
     "Lecturas cortas, pero de 100 pb",
     "Lecturas largas (PacBio o Nanopore), solas o combinadas con cortas, para resolver repeticiones y plasmidios",
     "Sanger de todo el genoma"
    ]
   },
   {
    "paso": "Controles",
    "texto": "Negativo de extracción y verificación de que el cultivo es puro.",
    "opciones": [
     "Es correcto como está",
     "Usar una mezcla de cepas como control",
     "Basta con un control positivo",
     "No se necesitan controles"
    ]
   },
   {
    "paso": "Resultado esperado",
    "texto": "Genoma ensamblado en pocos fragmentos (cromosoma y plasmidios) para buscar los genes de simbiosis.",
    "opciones": [
     "Es correcto como está",
     "Cambiar a: la composición de bacterias del suelo",
     "Cambiar a: la lista de genes que la bacteria expresa en el nódulo",
     "Cambiar a: la secuencia del gen 16S"
    ]
   }
  ]
 }
];
