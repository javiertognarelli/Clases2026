// Archivo generado por construir_datos.py. No editar a mano.
export const VERIFICACION = "1283e7c8ad6f4f578529500a32169243e279abdfbaf68fee2286d09965e4d97b";
export const OPCIONES = {
 "CONSERVACION": [
  "Congelación rápida (nitrógeno líquido o hielo seco) y −80 °C",
  "Congelado a −20 °C",
  "Etanol 96 %",
  "Estabilizante de ARN (RNAlater)",
  "Refrigerado (4 °C) por pocas horas y luego congelado",
  "Temperatura ambiente"
 ],
 "ACIDOS": [
  "ADN",
  "ARN (que luego se convierte a ADNc)",
  "ADN de alto peso molecular (fragmentos muy largos)",
  "ADN y ARN"
 ],
 "RAZONES_ACIDO": [
  "La pregunta es sobre lo que TIENE el organismo en su genoma",
  "La pregunta es sobre lo que se está EXPRESANDO",
  "El organismo es un virus de ARN",
  "Necesito fragmentos muy largos para usar lecturas largas"
 ],
 "CALIDAD": [
  "Cantidad (ng/µL)",
  "Pureza A260/280 (proteínas, fenol)",
  "Pureza A260/230 (sales, húmicos, polisacáridos)",
  "Integridad del ADN en gel",
  "Integridad del ARN (RIN)",
  "Tamaño de los fragmentos de ADN",
  "Una sola banda de PCR del tamaño esperado"
 ],
 "ESTRATEGIAS": [
  "Un gen por PCR",
  "Amplicón masivo (metabarcoding)",
  "Genoma completo (WGS)",
  "Metagenómica shotgun",
  "RNA-seq"
 ],
 "RAZONES_ESTRATEGIA": [
  "Basta una región conocida del genoma",
  "La muestra es una mezcla de muchos organismos",
  "Necesito comparar genomas completos con alta resolución",
  "Necesito ensamblar un genoma nuevo",
  "Necesito medir la expresión de muchos genes",
  "Son muchas muestras: uso códigos de barra"
 ],
 "PLATAFORMAS": [
  "Sanger",
  "Lecturas cortas (Illumina, MGI o AVITI)",
  "Ion Torrent",
  "Lecturas largas exactas (PacBio HiFi)",
  "Lecturas largas portátiles (Oxford Nanopore)",
  "Combinación de lecturas cortas y largas"
 ],
 "RAZONES_PLATAFORMA": [
  "Es un fragmento corto en pocas muestras",
  "Necesito miles o millones de lecturas",
  "Necesito un error muy bajo para detectar diferencias de una base",
  "Necesito resolver regiones repetidas o ensamblar un genoma",
  "Necesito portabilidad o un resultado rápido en terreno",
  "La muestra es una mezcla de secuencias distintas"
 ],
 "CONTROLES": [
  "Negativo de extracción (blanco)",
  "Negativo de PCR (sin templado)",
  "Control positivo",
  "Blanco de campo",
  "Comunidad simulada (mock)",
  "Grupo control experimental",
  "Réplicas biológicas",
  "Muestra de referencia de identidad conocida"
 ],
 "LIMITACIONES": [
  "Solo estudio un fragmento, no el genoma completo",
  "Depende de que existan secuencias de referencia",
  "Una asociación no demuestra causalidad",
  "Solo da proporciones relativas, no cantidades absolutas",
  "Identifica en general solo hasta género",
  "Es un solo tejido y un solo momento",
  "El ensamblaje puede quedar incompleto por regiones repetidas",
  "Necesito además datos no genéticos (por ejemplo, epidemiológicos)"
 ]
};
export const CASOS = [
 {
  "id": "0",
  "nivel": "Ejemplo guiado (lo resuelve el docente)",
  "titulo": "Un virus nuevo llega a Rapa Nui",
  "tipo": "Caso real: Tognarelli J, et al. A report on the outbreak of Zika virus on Easter Island, South Pacific, 2014. Arch Virol. 2016;161:665-668.",
  "contexto": [
   "En 2014, tras un gran brote de virus Zika en la Polinesia Francesa, comienzan a aparecer en Rapa Nui pacientes con fiebre, exantema y conjuntivitis. No existe en Chile un kit diagnóstico validado ni un control positivo para Zika, y el laboratorio de referencia está en el continente, a unos 3.700 km.",
   "El Ministerio de Salud necesita confirmar si el agente causal es efectivamente el virus Zika."
  ],
  "info": [
   "Zika es un flavivirus con genoma de ARN de cadena simple.",
   "Existen secuencias de referencia del virus Zika en bases de datos públicas, incluidas las del brote de la Polinesia Francesa.",
   "Se pueden obtener muestras de suero de pacientes en fase aguda (primeros días de síntomas)."
  ],
  "ejemplo": true,
  "p1": [
   "¿Cuál es el genoma completo de todos los virus presentes en la isla?",
   "¿Qué enfermedad tienen los pacientes?",
   "¿El agente que causa los casos es el virus Zika? ¿Se relaciona con el virus del brote de la Polinesia Francesa?"
  ],
  "p2": [
   "Mosquitos capturados en distintos puntos de la isla",
   "Suero de pacientes recuperados, tomado meses después",
   "Suero de varios pacientes en fase aguda, refrigerado y enviado con cadena de frío"
  ],
  "p8": [
   "Un genoma humano ensamblado de cada paciente",
   "Secuencias de un fragmento del gen NS5 por paciente, comparadas con secuencias de referencia",
   "Millones de lecturas de expresión de genes del paciente"
  ]
 },
 {
  "id": "B1",
  "nivel": "Básico",
  "titulo": "¿Es realmente congrio colorado?",
  "tipo": "Escenario ficticio con fines didácticos: las especies de congrio son reales, pero la denuncia y los filetes son inventados.",
  "contexto": [
   "Una investigación periodística denuncia que, en algunas pescaderías, el «congrio colorado» (*Genypterus chilensis*), de alto precio, se reemplaza por especies más baratas. Usted recibe **cinco filetes** comprados en cinco puestos distintos de un mercado, todos rotulados como congrio colorado.",
   "Debe determinar a qué especie pertenece cada filete."
  ],
  "info": [
   "Los filetes son frescos (no cocidos ni ahumados).",
   "Existen bases de datos públicas con secuencias de referencia de peces chilenos para genes marcadores, como el gen mitocondrial COI (citocromo c oxidasa I), usado como «código de barras» de especies animales.",
   "El laboratorio cuenta con un ejemplar de congrio colorado identificado por un taxónomo."
  ],
  "ejemplo": false,
  "p1": [
   "¿Los filetes están frescos?",
   "¿Cuál es el genoma completo del congrio colorado?",
   "¿A qué especie pertenece cada uno de los cinco filetes?"
  ],
  "p2": [
   "Un trozo de músculo de cada filete, más el ejemplar identificado como referencia",
   "Agua del mostrador de cada puesto",
   "Un solo filete, porque todos están rotulados igual"
  ],
  "p8": [
   "El genoma completo de cada filete",
   "Una banda en gel por filete, que ya indica la especie",
   "Una secuencia de ~650 pb del gen COI por filete, comparada con referencias identificadas"
  ],
  "imprevisto": "1Ru2+9Ya1Yg6yzje0KM8LOQWhxvLU+hTr1fTowYRYDy618Mpe8r7d4esLdQco94DPO3dbi9/ta9RGbPwAuoRZFoIHdhrJff/1pcMyaqQ1rXodYCXENzqwLwjiAjxGEV9Q/EzA4tdT9vNQx/EBM1wT34K3v+y74NtxNyVurJVDla71WzSdDOMzeKIr8FCBmJ2M4bx/0aO0eMFTf4kb18AJk95AOeSkjvcDQ4ntdC38W1GH4h4tycfHv8NcSBcLg2ylEI+uKxXteXUBk5omwzNcaZmqtRaYoY8rTdnO23e5EmoUmnCtuSb2jwjCjfB2S3mraNml64QNEkZABr8bDjGp+qUI/+bqjUVhgrlpGTkFjDVj6dUxoGzrPNjv4U4cPyW6N50Gu9uD17/Huze0VDsGvAnSL8DxZkUkiCGpsD6WDK6vDGJTYEz4UMwzSlR8MCNAPYnK4kKW7HNKiiLVWuyJQacHC3ZJJVcLbhXQ/dlGZrULFmKgpv4OdhuRic+WHVkx1xOvATl40vOE05/IkiV7VE9aiBZV4jcxtw5Rv8xcHkX84L6lsehJiiWFPc2FRkid6FmS3o8BxkbZk1JZIAQ4AbiZ666Xxr59jFpilooqtljrd5J6g=="
 },
 {
  "id": "B2",
  "nivel": "Básico",
  "titulo": "Lagartijas oscuras",
  "tipo": "Caso hipotético: la asociación entre MC1R y coloración se describió en lagartijas de Norteamérica; aplicarla a esta población de *Liolaemus* es un supuesto didáctico, no un resultado publicado.",
  "contexto": [
   "En una población de lagartijas del género *Liolaemus* que habita sobre rocas volcánicas oscuras aparecen individuos **melánicos** (casi negros), mientras que en la misma especie predominan los de coloración clara. En otra especie de lagartija se describió una mutación puntual en el gen **MC1R** (receptor de melanocortina 1), asociada a cambios de coloración.",
   "Usted quiere saber si los individuos melánicos de esta población portan esa misma mutación."
  ],
  "info": [
   "La posición de la mutación en el gen MC1R es conocida y se encuentra en un fragmento de unos 800 pb.",
   "Se pueden capturar individuos y liberarlos después; la especie no está amenazada, pero se exige minimizar el daño.",
   "Las lagartijas son diploides: cada individuo tiene dos copias del gen."
  ],
  "ejemplo": false,
  "p1": [
   "¿Los individuos melánicos portan la mutación de MC1R con más frecuencia que los individuos claros?",
   "¿Cuál es el genoma completo de *Liolaemus*?",
   "¿Por qué algunas lagartijas son negras?"
  ],
  "p2": [
   "Punta de la cola de 10 individuos melánicos solamente",
   "Un individuo melánico sacrificado, para tener más tejido",
   "Punta de la cola de ~10 individuos melánicos y ~10 claros de la misma población, en etanol 96 %"
  ],
  "p8": [
   "La cantidad de ARN de MC1R en la piel",
   "El genoma completo de cada lagartija",
   "El genotipo de cada individuo en la posición de interés, comparado entre melánicos y claros"
  ],
  "imprevisto": "BecNw0i4aM+CPF3AUfR6rpBySoW1X7iN+S/XTP9p/6304YVPL5PJ9FpbG+P8ZzL6L3xWhCI5CwkFCxfun10gdmoRPrBgThaVxIsI/NVc1asw9+tab0RTXbTSiLTDo9YGF4FwiZD9sGbdPNHxgTqY2GZPWZjtz0fVM5axuv11SmlIP/ukE31qFkYhEUcgcjiZou9t6ZZSCaNRGuvXP4p9tVS0+O5GBQQRu2L+F4hFUp5QIXF1gQnPeuoRXeFCDmjKK3gC4osxRJVqlQJQ+3BHsL4YHP/rqwKXg7Elp3+yq69UQvwpKrrbqRhs62oni5AUIfqOdkBWvXZiTcjhTD/9f7k3aeyzwkqbOgSSweMbVtWHqXe5sLEnyxjWZZd1YDr0KZSmMStcGrQGsYHKq1U+7yEt9CVUxLtEdpqku4yIvetIjF3MHBG/aJ3SeO3mDtu+PuteSrkmWfATXNVeD+6gJ92Up/zUlQS7gBlosBFqyhCmYPN47oXZZa2gpDt7ymAtGxjNzuJ7EjXRdQeZe98ycAsm/6a4GmsNLaONnfATKyhcdxR8YrVmM3YR8/ew33NEV27j8dPWJTPz/BDc3Pfa8APvlp68JfOIIHKqEyaVaJWN0yXa609xfXSxBETj8M2w0uqsiw=="
 },
 {
  "id": "I1",
  "nivel": "Intermedio",
  "titulo": "Bajo el bosque y bajo el pino",
  "tipo": "Escenario hipotético con fines didácticos.",
  "contexto": [
   "En la Región del Biobío, un bosque nativo colinda con una plantación de pino (*Pinus radiata*). Un grupo de ecología sospecha que el reemplazo del bosque cambia la **comunidad de bacterias del suelo**.",
   "Usted debe diseñar un estudio para comparar las comunidades bacterianas del suelo de ambos ambientes."
  ],
  "info": [
   "La mayoría de las bacterias del suelo no se puede cultivar en el laboratorio.",
   "El gen ribosomal 16S está presente en todas las bacterias y tiene regiones variables que permiten distinguir grupos.",
   "El suelo contiene compuestos húmicos que inhiben la PCR.",
   "Se puede acceder a ambos sitios durante una misma semana."
  ],
  "ejemplo": false,
  "p1": [
   "¿Cuál es la bacteria más importante del suelo?",
   "¿La composición de bacterias del suelo difiere entre el bosque nativo y la plantación de pino?",
   "¿Cuántas bacterias hay en el suelo?"
  ],
  "p2": [
   "Colonias cultivadas en placa desde cada suelo",
   "Una muestra grande de cada ambiente, mezclada",
   "Suelo de 5 puntos independientes por ambiente, a la misma profundidad y en la misma semana, con cadena de frío"
  ],
  "p8": [
   "El genoma completo de cada bacteria del suelo",
   "Miles de lecturas de 16S por muestra, para describir y comparar las comunidades",
   "Una secuencia Sanger de 16S por ambiente"
  ],
  "imprevisto": "IvGpSrTu85Wmss7lSVo4NUy5ElDCpcCDLKNYWeyN4S0R1P4aux0ZmN9F/9M04qv7WA9F4a282avj+IjSoh+SldPftZ8oKzM5GQF0fdYe7i9HOdnhK+dvZ6DJIk/+9N6kzsqex6ZxONjkrASUWu4XVnd5SOrDEktIJqZGU3Oyx6/+F2BAu76eHlbdxUVYOx1zRvuanXa2vmkZ1XqcN94Xfo/ZjsaW0bGZEtRxhHbPDmNuxeslpmPyR9CEaCd0pikaOMMgk7xEbknREcLzFztAObjy2CDWRiJ1SnbaHC1vlHAZiklfIqWAsrJ2MqtUqMT7uOsMNKUG/Z+TijJAax84pT20rWY6Uq1VHicXfFjs2QyC0tcBFaZfcobbMR5Deco37Lpj9pUOFv5Vk790jNRLkQl23fuuNnk1cqk3LNztjTkSrpuZRw4vQhgjez5W/Nz1bPnHrRkhj0hZvXHRqnWo532il1mGYW6Td7U6iUOaQlqjvCuj8bqrRDpJ7WQQ+8vFYsFh6MV1Tk30E/unBjVwkTHhOX+z44URd5Xil72B68P1sVAg/nB+RRD5w8yuZWSMucy3PoUrM0vM/fXJT7Fuf5Li481b6JMaxb1h8u0SmbuWJe3dIxKq"
 },
 {
  "id": "I2",
  "nivel": "Intermedio",
  "titulo": "¿Un mismo clon en el hospital?",
  "tipo": "Escenario ficticio con fines didácticos, inspirado en el uso real de la genómica para estudiar brotes hospitalarios.",
  "contexto": [
   "En un hospital se aislaron, durante dos semanas, **tres cepas de *Staphylococcus aureus* resistente a meticilina** (SARM) desde pacientes de la misma unidad.",
   "El comité de infecciones necesita saber si se trata de **un mismo clon** que se está transmitiendo dentro del hospital o de tres infecciones independientes."
  ],
  "info": [
   "Las tres cepas están aisladas en cultivo puro y crecen fácilmente.",
   "Las tres ya fueron identificadas como *S. aureus* por pruebas bioquímicas.",
   "Existen genomas de referencia de *S. aureus* y cepas de colección conocidas."
  ],
  "ejemplo": false,
  "p1": [
   "¿Las cepas son *S. aureus*?",
   "¿Qué antibiótico conviene usar?",
   "¿Las tres cepas son el mismo clon o son cepas distintas?"
  ],
  "p2": [
   "Hisopados de las manos del personal de la unidad",
   "Una mezcla de las tres cepas en un solo tubo",
   "Las tres cepas en cultivo puro, cada una a partir de una colonia aislada"
  ],
  "p8": [
   "La lista de bacterias presentes en la unidad",
   "El genoma de cada cepa y el número de diferencias (SNP) entre ellas",
   "La secuencia del gen 16S de cada cepa"
  ],
  "imprevisto": "ayvEv6uEeKy7IDlNYKEfrQNxOM5RyC0+BRSsKgBrNUB7tU//YvrQe5JwAuLXYx5zqAlbMzHh5btYy27B9utuSpy0HZV51KpyHEaXvTJKIgC5O5uHyU4V5fQnhZb5fz9Fleq4YrS6Bmqc8v1djpU33g7dYt+BeC43ukMf2zn+rvxds8loRCUUqmtYY9+C03HfhWBrUnV7iSDzz/WAzpF1S3vda3Wc8DayHx6tRGn9JI2O/b0FHTa+x7HE6ewZc2FPeGDWyGYT6E6pxU2GI6KHNeG0V0Wz5xkypiO6Vo+h6BkvXzRA8T3GejYsbEwcNYjN12PWYAxA6sdM1ZPT76VMjaOqSGFinKTdgkGN0s3J1ursJY+CqfVpA+y+Sj7tIgwFskVL3TE0RZCabruofHVUBVvp9iOCdWruSlgjAD5hn5U+CWVQpi5XusI1+y2NMrYIwuKqgkNE6KiqTE5reKfKtr5gipmANQ8mdhGjFNaXFWXuwA=="
 },
 {
  "id": "A1",
  "nivel": "Avanzado",
  "titulo": "El quillay frente a la megasequía",
  "tipo": "Escenario hipotético con fines didácticos; no corresponde a un estudio publicado.",
  "contexto": [
   "Chile central lleva más de una década de megasequía. El quillay (*Quillaja saponaria*), árbol endémico, parece tolerar bien la falta de agua.",
   "Usted quiere identificar **qué genes cambian su expresión en las hojas** de quillay cuando se someten a sequía, en comparación con plantas bien regadas."
  ],
  "info": [
   "Se dispone de un vivero con plantas de quillay de edad similar, provenientes de semillas de una misma zona.",
   "Se pueden mantener plantas regadas y plantas sin riego durante varias semanas en condiciones controladas.",
   "Las hojas de quillay son ricas en saponinas, polisacáridos y polifenoles, que dificultan la extracción de ácidos nucleicos."
  ],
  "ejemplo": false,
  "p1": [
   "¿Qué genes cambian su expresión en hojas de quillay bajo sequía, respecto de plantas regadas?",
   "¿Cuál es el genoma del quillay?",
   "¿El quillay tolera la sequía?"
  ],
  "p2": [
   "Hojas de plantas en sequía muestreadas en la tarde y de plantas regadas en la mañana",
   "Hojas de 5 plantas regadas y 5 en sequía, muestreadas a la misma hora y congeladas de inmediato",
   "Hojas de 1 planta regada y 1 planta en sequía"
  ],
  "p8": [
   "El genoma ensamblado del quillay",
   "La secuencia de un gen candidato por planta",
   "Millones de lecturas por muestra, para comparar la expresión de miles de genes entre condiciones"
  ],
  "imprevisto": "X/l/HjwfkSV0I/3E6gRcSsaB2G0b79dO+ID+DpM3Fc6hiPBQYas+BmKH5pDI7gM3mVFOA2PkktPa/ZmURXesIoyVJosFd6Lho2qvktgLe7NUb5xskabNb6a01GUtkKha0YmAnFE4k3dW6/E+fH2A5uKKZMxzn8vtBgcUJiEt3VMGCCeRNeahOWJgIPQwZXxs4MJNnAInSa5sDmmEBS1qDFQdXHPWAKuxLDaAF7SlV3W6Du2HAsD4MC1pyIr1ezbgNYmPaUdqsDsNXLtK1OEItOZPG3HpojFhmrM/B5ekAoWgtePV3M9rCVElg7PgSi5EXh1jKDql9WYArzY2pNz1+MuMLO4ku0eZDG6qTNpAwRwdcywH0M9IMeELueFGflSCNrIGGxEMrVGVtgojDGNCQDBz+oMzk61ycAL4LGM+4CcbLvtPoFupGBP4MYfKh5+kiBn/Yni4kDhwry9abbEu0mE8IupqZJIqAvQ/fWuvIXb8BMiAUxQJN3lUeBD9rUynIDwpzOkkhWjKTQ2Ruho9h6V9mHTAWVmxeFm/SdM+9EZHpUlNhD7lC4LGpomPKGw8Y708iF+oeKGi1beiMg5QOfivxydF//jy7GCMOtw+34wwbxfG1w5f/auAJAJLnsbInrel59VwC0oWo/B+wiM9phsmb1ezsO6jczDCmNrpPsP0zU2F11bIC/Vcy6F9wZeilVKvEMU1v9Q96BmKlF5O"
 },
 {
  "id": "A2",
  "nivel": "Avanzado",
  "titulo": "El primer genoma de una rana chilena",
  "tipo": "Escenario hipotético con fines didácticos (verificar antes de la clase si ya existe un genoma publicado de la especie).",
  "contexto": [
   "La rana grande chilena (*Calyptocephalella gayi*) es una especie endémica y amenazada, considerada un «fósil viviente». Para apoyar su conservación, un consorcio quiere obtener su **primer genoma de referencia**.",
   "Usted debe diseñar el proceso, desde la muestra hasta los datos."
  ],
  "info": [
   "No existe un genoma de referencia de esta especie ni de especies cercanas.",
   "Los genomas de anfibios suelen ser muy grandes (varios miles de millones de pares de bases) y con muchas secuencias repetidas.",
   "Un centro de reproducción en cautiverio puede facilitar muestras de un individuo bajo protocolo veterinario y de bioética."
  ],
  "ejemplo": false,
  "p1": [
   "¿Qué genes se expresan en la piel de la rana?",
   "¿Cuántas ranas quedan en Chile?",
   "¿Cuál es la secuencia del genoma de *C. gayi*, ensamblada en fragmentos lo más largos posible?"
  ],
  "p2": [
   "Un ejemplar de museo conservado en formalina",
   "Tejido fresco de un individuo, bajo protocolo veterinario y de bioética, procesado de inmediato",
   "Tejido de 20 individuos mezclado en un tubo"
  ],
  "p8": [
   "Lecturas largas que, tras el ensamblaje, entregan un genoma de referencia",
   "Una secuencia del gen COI",
   "Millones de lecturas de 150 pb, suficientes para un ensamblaje completo"
  ],
  "imprevisto": "Yz2nHiX8CswFGOY4cDqxzCWMnMEqQc9xMPEGQlVfFfwN0dsIo2OKToJsOOydlVzOdblwj3r4wzr6iGSWGFVltRBDufN0sNK/gZF8jpqemaZeuyQn0PaRTfgljlktwPrqqp7YybgR++pCi8o9jcJnU8hzfrnK9sL4OrR9eauY5bmswTpZ8hBmVj/5i8H/XfYfTbrdL2WScJlcKgTDyM7ICESgiPg9Zp/BNwiS5U+LL348HngjzYu9gA3teOtRTOIqx9qX1QFZ9+NSsgelH83Huh0hpwK+I2KbBHMFwwwKMGjcjlWon+7eEz37MlXO3jqNTiIx0VCcIiMP6Y7cbJSdKVE+PVEsxAuJqxLZHU66ylhCF9rRLbshuqLA3gZHGJPVVle7MhYBjHV/3MCFuRA4YbqN3x2vhGo9WaqWT5WtW5t7r9eCznWyRY2yG3u8984/SUg+yvbwPHm5WYUkrt4yDK3JU0nauZyt6XOmZdM9JsVnAQVa6gVBYKBHKEYQ9i8yQ6+3KqxM+p8tDrPfui7VFjr1DVzkOYPh3DIz/YbBtQ=="
 }
];
