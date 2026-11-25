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
  "Pureza A260/230 (sales, polisacáridos, ácidos húmicos del suelo)",
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
  "id": "1",
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
   "Una secuencia de ~650 pb del gen COI por filete, comparada con referencias identificadas",
   "Una banda en gel por filete, que ya indica la especie"
  ],
  "imprevisto": "g7XNEOpS1kHe2j/tTC/tvMIuNwbUrhYMPpMg2SkXO1xCxyMg4IdcdfLGJE1ZyqDPz1O+cLlHz7UfRKk9NBizjzE6LSPYo45CEDgSV8KZgQjBTuAjqzX5XpN4j4w0jaykMB/LB13uVV4HO1UgX6/ur05KVY4wSHfjz4HZOE5479cbpkPtHqGwBm/3UPdgiGkDwmSR/dRqmF2NdTx0mDFGn3LkF6W6L8srDziWix/2W6a53IzspFsM52m8+/yrfOrETfu0iOKL3cEVBiUWr0uuZTjDQOdNvOx/2JDXEAqg+2wBnf3CgoDBJkFr+8VjxWZ5KtTCOxQc7laG4eK4DSxMPNOKCfAn4rrItrSntuNDs1BJbqTR6nnZT1dmQXX5TNRnkOO67IXdHBfZQUO3cXpfpWXg/U127ekRIGtr/F3PPi6pJsac43bm4IS/GJSnHECr5tbl/4Ov1LkXnUdhGzROaxOXQzHo6F9WONA9RrNQV8S58pXvjfvivWUj6qhl1T7xJrcUVHa9CLuZsznTYR9JvlO9TUXl7eWajqYMJKXbqHmL5iWIlOCbUxWIApNrQg5AOfE9sNYjOLadUg0XXQkChdheUzNkvWd0skyj2RB9rwjBPk7Hkw=="
 },
 {
  "id": "2",
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
   "¿Por qué algunas lagartijas son negras?",
   "¿Cuál es el genoma completo de *Liolaemus*?",
   "¿Los individuos melánicos portan la mutación de MC1R con más frecuencia que los individuos claros?"
  ],
  "p2": [
   "Punta de la cola de ~10 individuos melánicos y ~10 claros de la misma población, en etanol 96 %",
   "Punta de la cola de 10 individuos melánicos solamente",
   "Un individuo melánico sacrificado, para tener más tejido"
  ],
  "p8": [
   "El genoma completo de cada lagartija",
   "La cantidad de ARN de MC1R en la piel",
   "El genotipo de cada individuo en la posición de interés, comparado entre melánicos y claros"
  ],
  "imprevisto": "uUoavfh2++ZrdusJkCMLDI8ZD8UBal1gIdO/mxJdjlaunzRJErJiGTs8xodKwz0KPoyh2RKszJPYCr1kLutjZxAlwgfVXN+4Wu0YsG6EJV8ticBy4H4SFV09NHEQGhAb3ovRcYB/T8kWtrn5KI7M9+kXHDdiUFxCSyeZVVqCzEnr3EjWmMQUOANvNTU+sYwPBnnR3bEhSilehqEw0G1Tmq9S0AjMENk9suGOYGfSE0ltTACP5Sn5Dzg6j/SJIvumrXqihm8nNXKZ9/GUyZKluSS2K0GqbJskaRHvYaZpFLYy48IzA6xQhVl/XQliktHeYSm+YKrGenpafwuQRDsXPbbOEPzEDbaHftnxcRntYVvIlhIr1C1v5vdsj39OLiy5awKXsVJqTJaGCBEW4bTTQJWaklk/44Z9H49XPdfymKG6+Sh18VGqBHTUL0N1sbf3fyHUvIrL5HTlVdesLUhZBmEs5yq3UfhYJquGeQDQp7D4YdSk5RHpFBL05AefejhIqX03OsikBe0DAWYZOr1hk80SuqumFoPyrTnPhJkVCZxcXS2xzfhP3IgiSf7MJ7p9PWPTVK1eooh8mFxU1DVHoVJU8aAyUrh+t7fSjsLixs2NpdXKhFoRld6IfbQSaUZdVHuXEQ=="
 },
 {
  "id": "3",
  "titulo": "Bajo el bosque y bajo el pino",
  "tipo": "Escenario hipotético con fines didácticos.",
  "contexto": [
   "En la Región del Biobío, un bosque nativo colinda con una plantación de pino (*Pinus radiata*). Un grupo de ecología sospecha que el reemplazo del bosque cambia la **comunidad de bacterias del suelo**.",
   "Usted debe diseñar un estudio para comparar las comunidades bacterianas del suelo de ambos ambientes."
  ],
  "info": [
   "La mayoría de las bacterias del suelo no se puede cultivar en el laboratorio.",
   "El gen ribosomal 16S está presente en todas las bacterias y tiene regiones variables que permiten distinguir grupos.",
   "El suelo contiene ácidos húmicos (materia orgánica en descomposición, que le da el color oscuro), que se extraen junto con el ADN e inhiben la PCR.",
   "Se puede acceder a ambos sitios durante una misma semana."
  ],
  "ejemplo": false,
  "p1": [
   "¿Cuál es la bacteria más importante del suelo?",
   "¿La composición de bacterias del suelo difiere entre el bosque nativo y la plantación de pino?",
   "¿Cuántas bacterias hay en el suelo?"
  ],
  "p2": [
   "Una muestra grande de cada ambiente, mezclada",
   "Suelo de 5 puntos independientes por ambiente, a la misma profundidad y en la misma semana, con cadena de frío",
   "Colonias cultivadas en placa desde cada suelo"
  ],
  "p8": [
   "El genoma completo de cada bacteria del suelo",
   "Miles de lecturas de 16S por muestra, para describir y comparar las comunidades",
   "Una secuencia Sanger de 16S por ambiente"
  ],
  "imprevisto": "Yv3gyOwFIAlGE3lmNSz/S2UcpDuDKjnFlOTnRqXSwfty63siM6Ze7j5zCENARNiunRo7Hly0QPUdCD+XgKKSTrmNcanjT86FUYf7AZg7Q234EjH7Ygx/xN9b6Gkjo+lqcW2mwP53NNDud4ldpAruJm5Lc4XWO2kECuXrs/da6Bp6sXj5a0ogxM/6U49EVIpzCix2j1+HzdpBXWCLZFLN9DxObFpcbxeuljzDqCBmYl+WZzc0+gP/133DvhK7wPF2JxQ41Xg6FqHJUbWi1+k8daeHfIMfhfSWJpmZMwe9vRokKciS3AMw/JjZmfAuk1xXFCxRsbuntzVCZANA4HJ9+6dGmpm3hciwEr+JsrWNUN0/ER6N9XkqIVomVRQlxPQMrCsbgyt44kA1G5Eh1VVXv4AbiQh1O5oke7n2fMhFiapbAbdJV4VvA1MLOY+uidQeqCxqO+XOvGPJwbyqzkvyu5N6cBTPSrjnFTY6y9lgF0j76E+ThhNI6fdKK8scqKCZblkU3ndjM/58GbLDjWmFdB3ZtpQ71H/92bQqAxpJv18KaNGdaStzRWCljM7jfd/kKUArVuovdPlOspS2mdU5XyMyu8moSdDQHlqblOXBT7CAPuBtMbkF"
 },
 {
  "id": "4",
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
   "¿Las tres cepas son el mismo clon o son cepas distintas?",
   "¿Las cepas son *S. aureus*?",
   "¿Qué antibiótico conviene usar?"
  ],
  "p2": [
   "Las tres cepas en cultivo puro, cada una a partir de una colonia aislada",
   "Una mezcla de las tres cepas en un solo tubo",
   "Hisopados de las manos del personal de la unidad"
  ],
  "p8": [
   "El genoma de cada cepa y el número de diferencias (SNP) entre ellas",
   "La lista de bacterias presentes en la unidad",
   "La secuencia del gen 16S de cada cepa"
  ],
  "imprevisto": "7+YhBliSdjrxkrySqls0odHAsHDk8BA5QGanTU/nYDfYgxk2a6fNqWb7K4e5Ml5pFrfMGBch/W4Ndmc90Rg00mHkvQPAbf8/p/l5Bwgsb/+l9G6Nw1Ms+fnnFbb59+cZjxPuenzDHb+ded5qGHVUfEsHDDTvfa5Ttn3rxBXKFo4Vkl+N2ysWBqVu8ZUeLuFhzAp2/Ize0Y8+rtCPIrqqPwANkT1UNzfTNes0joS5w88nVx+MgLIMaOkKFg95Hqp94GZaNSQxhY9W+4OwMNzNqrpv3qq3sKxSB8ktId6QnlRNW1EuKzVSikzYmw+DS7taf9Va1Wi+gEZCEfk1SbyRA8hsu51na6b94yPmdKWSRl0eWWeBrz1CjsoilV2WjN+3MlQ5+4KujEy+7Fei9ch0tavMfgeY1jAwrQ3X1amtLVmIcOsGFZaSiUmMwE3unZlmeprRXk5kkmZlptyk39Ws7NxTezKaZZjcXgg6kLI5L/QedA=="
 },
 {
  "id": "5",
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
   "¿El quillay tolera la sequía?",
   "¿Cuál es el genoma del quillay?",
   "¿Qué genes cambian su expresión en hojas de quillay bajo sequía, respecto de plantas regadas?"
  ],
  "p2": [
   "Hojas de plantas en sequía muestreadas en la tarde y de plantas regadas en la mañana",
   "Hojas de 5 plantas regadas y 5 en sequía, muestreadas a la misma hora y congeladas de inmediato",
   "Hojas de 1 planta regada y 1 planta en sequía"
  ],
  "p8": [
   "El genoma ensamblado del quillay",
   "Millones de lecturas por muestra, para comparar la expresión de miles de genes entre condiciones",
   "La secuencia de un gen candidato por planta"
  ],
  "imprevisto": "6rcaePA1u1Mr8Eyp61bd0aYHla+342pEclKOPGDbBtjx0mzcw9raJ3xNW9bx1S2j9pUfci2MuaklhOEUOcBB/qDqVIRdZalTv2CPDzStOZb7XthR5yDQ8r4UiMOzQP24NlFjGjqKfl3kqbIFWLbP1vV9aANqOd+/Q+J4jiVQaCcCuyFEolE0TMs9FjA4gsjCl+5l4k1r7CYFlhu1kPZkdqupjArbbABh/rWHbClKjLTKAGYDEIYoBl8QvyDfT8ERnNXPCu36yVO5+0NLYdwLOvmms0Yp7TCsAU1JSyf7ve2J1+UTQh770g4/0NIs/iTazPsteQWTNF1xJ6xoULhDvupIlaYxB0/vMPdWOPHu3Ut/VA1cIYTMNuQTU3uJbgqSaHErm3olUGwrTC0vVTtKbBWT8vAdPMzTqgdje0IVEt588vhetoAy7137+wzvMmoayduyI8Y+EsoTwvTyXg2LvDMsZU9OVmI5ksbAvrIjJnGSNYUzoYhDrxJEpIMIjnfJ6hAoqAS6nFjdGksohjKGj8UKxcR2y6x2iYeQ8ycZOcF17TZ+9HECssJEwrWIyLEBmyiqyIsdVTmCZolkt3LsYsZNSsxVhpwJ9NG6MavsocyCsEQ/etEPwgIKM/uPbe0TVu+twdWa311an1O97TIKzVnQaggslUP0oFK/zNLdzaECSykWqG4A3ey9vfXkEoUFTWyl4OHk3MaoLXXN321j"
 },
 {
  "id": "6",
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
   "Tejido de 20 individuos mezclado en un tubo",
   "Tejido fresco de un individuo, bajo protocolo veterinario y de bioética, procesado de inmediato"
  ],
  "p8": [
   "Una secuencia del gen COI",
   "Lecturas largas que, tras el ensamblaje, entregan un genoma de referencia",
   "Millones de lecturas de 150 pb, suficientes para un ensamblaje completo"
  ],
  "imprevisto": "Xdzoj7rPgnY4rcRXzwpC3Br3w1vM8phe+OeLZVZ+g8AEOxgioi7ldyG754Pkv4bTv3PRxOMlsTKND4PyhTqwVGkaX4gAUf8tQHwwNvkQbHH4CQ7Stwxh+C76V62H19zD2qU88lA9nGDFaRKfR951HqbbDYusKzxdCCoEeNHE+TjAwcaFabUg67TYNSoM0XPr72m3XYwq/dYV0NO19wrjDJCI42kFBii+7p8vK6dUp/cAlD4Tvf5/tY4zTRCyc7aN0Mzp/107E98MubireDckv5WEe1rkUOAj7RTPabhtnuRhESnHCtX+DufN7z4ZVimprjbrWrOyy71F1ECbJZUvTws+6TJQvjKmiUpXJNcTVgN2Tvi2+pDL6H/q0MXgQ1DnYzY1c4qKON2ZDkBwUrlNIw6jjitga+YPaWBchON9ZCRcqs0O5KPfBzJ8ql8ybOOjKvBMBKb/GyTMNFryFqOcnnlUt+IRE+V+pJidaE6+OrGWbiVDh+oDsK2DVIKPb/T4QB7aFny2by/07YmnDoVg26dmPxQQ3qVVK8pNUSVCkQ=="
 }
];
