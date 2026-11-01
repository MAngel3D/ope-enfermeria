/* Reglas nemotécnicas y croquis — G1–G15 y E1–E28.
   n: [regla, explicación] · d: croquis {type: flow|cycle|tree|pyramid|scale|compare|matrix|timeline|cards|layers|bars|swatches} */
window.EXTRAS = window.EXTRAS || {};
Object.assign(window.EXTRAS, {
G1:{n:[["SANIDAD tiene 7 letras: 4 + 3","El derecho a la protección de la salud está en el art. 43."],
["Del 14 al 29, te amparo","Recurso de amparo: art. 14, Sección 1ª (arts. 15–29) y objeción de conciencia (art. 30.2)."],
["Los «cuarenta» son sociales","40 seguridad laboral, 41 Seguridad Social, 43 salud, 45 medio ambiente, 49 discapacidad, 50 mayores, 51 consumidores: principios rectores del Capítulo 3."],
["La Asamblea mira al mar","La Asamblea Regional tiene su sede en Cartagena; el resto de órganos, en Murcia."]],
d:{type:"tree",title:"Estructura del Título I (arts. 10–55)",root:"Título I · De los derechos y deberes fundamentales",children:[
 {l:"Art. 10",s:"Dignidad de la persona"},
 {l:"Cap. 1 · arts. 11–13",s:"Españoles y extranjeros"},
 {l:"Cap. 2 · arts. 14–38",s:"Derechos y libertades",c:[{l:"Art. 14",s:"Igualdad"},{l:"Secc. 1ª · 15–29",s:"Fundamentales y libertades públicas"},{l:"Secc. 2ª · 30–38",s:"Derechos y deberes de los ciudadanos"}]},
 {l:"Cap. 3 · arts. 39–52",s:"Principios rectores (salud, art. 43)"},
 {l:"Cap. 4 · arts. 53–54",s:"Garantías"},
 {l:"Cap. 5 · art. 55",s:"Suspensión"}]}},

G2:{n:[["Mamá Come Lentejas, Nunca Antes Vio Más Melones Verdes","Las 9 áreas en orden: Murcia Oeste, Cartagena, Lorca, Noroeste, Altiplano, Vega Media, Murcia Este, Mar Menor y Vega Alta."],
["Área = 200–250 mil","Población orientativa de un Área de Salud en la LGS, con al menos un hospital general."],
["Órganos del área: P-D-G","Participación (Consejo de Salud), Dirección (Consejo de Dirección) y Gestión (Gerente)."]],
d:{type:"flow",title:"De lo general a lo local",steps:[["Sistema Nacional de Salud","Servicios de salud del Estado y de las CCAA"],["Servicio Murciano de Salud","Creado por la Ley 4/1994"],["Área de Salud","9 en la Región de Murcia"],["Zona Básica de Salud","Marco de la atención primaria"],["Centro de Salud","Equipo de atención primaria"]]}},

G3:{n:[["Por escrito si hay CIR","Consentimiento escrito en Cirugía, procedimientos Invasores y Riesgos notorios. El resto, verbal."],
["Instrucciones previas: MCL ante NoRT","Mayor de edad, Capaz y Libre; se formaliza ante Notario, personal del Registro o 3 Testigos."],
["Cinco dedos, cinco años","La historia clínica se conserva al menos 5 años desde el alta de cada proceso."],
["Dulces dieciséis","Mayoría de edad sanitaria: 16 años, salvo actuaciones de grave riesgo."]],
d:{type:"tree",title:"Consentimiento informado (Ley 41/2002)",root:"¿Cómo se consiente?",children:[
 {l:"Regla general",s:"De forma verbal"},
 {l:"Por escrito",s:"Cirugía, procedimientos invasores, riesgo notorio"},
 {l:"Por representación",s:"Persona incapaz o menor de 16 sin madurez suficiente"},
 {l:"Sin consentimiento",s:"Riesgo para la salud pública o riesgo inmediato grave"}]}},

G4:{n:[["FODiT paga parte","Cartera suplementaria, con aportación del usuario: Farmacia, Ortoprótesis, Dietéticos y Transporte no urgente."],
["A Mí Te Informan Siempre Con calidad","Garantías: Accesibilidad, Movilidad, Tiempo, Información, Seguridad y Calidad."],
["Rehabilitación «básica» en primaria","La AP solo incluye la rehabilitación básica; la del déficit funcional recuperable es especializada."]],
d:{type:"tree",title:"Carteras de servicios del SNS",root:"Prestaciones del SNS (Ley 16/2003)",children:[
 {l:"Cartera común básica",s:"Financiación pública total"},
 {l:"Cartera común suplementaria",s:"FODiT, con aportación del usuario"},
 {l:"Servicios accesorios",s:"Apoyo, con posible aportación"},
 {l:"Cartera complementaria",s:"La añade cada comunidad autónoma"}]}},

G5:{n:[["Personal temporal: IES","Interinidad, Eventual y Sustitución."],
["Si Hay Negociación, Reunión y Representación","Derechos colectivos: Sindicación, Huelga, Negociación, Reunión y Representación. La huelga no es un derecho individual."],
["Cuatro, dos y medio","Prescripción de faltas en el Estatuto Marco: muy graves 4 años, graves 2, leves 6 meses."],
["12 entre jornadas, 48 de media","Descanso mínimo de 12 h entre jornadas; máximo de 48 h semanales de promedio en cómputo semestral."],
["EBEP: CILE","Funcionario de Carrera, Interino, personal Laboral y Eventual."]],
d:{type:"tree",title:"Clasificación del personal estatutario",root:"Personal estatutario (Estatuto Marco)",children:[
 {l:"Por la función",c:[{l:"Sanitario",s:"Formación universitaria o FP"},{l:"Gestión y servicios"}]},
 {l:"Por la titulación",s:"Nivel académico exigido para el ingreso"},
 {l:"Por el nombramiento",c:[{l:"Fijo"},{l:"Temporal",s:"Interinidad · eventual · sustitución"}]}]}},

G6:{n:[["D-E-P","A la enfermera le corresponde la Dirección, Evaluación y Prestación de los cuidados (art. 7.2.a)."],
["Mi Sobrina Gana Trofeos Muy Fáciles Pintando","Las 7 especialidades: Matrona, Salud mental, Geriátrica, Trabajo, Médico-quirúrgica, Familiar y comunitaria, Pediátrica."],
["41, 44, 55","Ley 41/2002 autonomía del paciente; Ley 44/2003 profesiones sanitarias; Ley 55/2003 Estatuto Marco."]],
d:{type:"tree",title:"Profesiones sanitarias (LOPS)",root:"Ley 44/2003",children:[
 {l:"Tituladas · nivel licenciado",s:"Medicina, Farmacia, Odontología, Veterinaria y especialistas"},
 {l:"Tituladas · nivel diplomado",s:"Enfermería, Fisioterapia, T. Ocupacional, Podología, Óptica, Logopedia, Dietética"},
 {l:"Área sanitaria de FP",s:"Técnicos superiores y técnicos (TCAE)"}]}},

G7:{n:[["SaLaDiNo","Tras un pinchazo: deja Sangrar, Lava con agua y jabón, Desinfecta y Notifica."],
["SHEM","Disciplinas preventivas: Seguridad, Higiene industrial, Ergonomía-psicosociología y Medicina del trabajo."],
["50 = comité","Comité de Seguridad y Salud a partir de 50 trabajadores (igual que los planes de igualdad)."],
["72 h, la última puerta","La profilaxis posexposición frente al VIH, lo antes posible y nunca más allá de 72 h."]],
d:{type:"flow",title:"Accidente con riesgo biológico",steps:[["Dejar sangrar","Sin frotar ni exprimir"],["Lavar","Agua y jabón; mucosas con agua o suero"],["Antiséptico","En la piel"],["Notificar","De inmediato, según protocolo"],["Serologías","Fuente y profesional"],["Profilaxis si procede","VIH: antes de 72 h"]]}},

G8:{n:[["4 de cada 10","Composición equilibrada: ningún sexo por debajo del 40% ni por encima del 60%."],
["Uno, tres, siete","LO 1/2004 violencia de género; LO 3/2007 igualdad; Ley 7/2007 regional de igualdad y violencia de género."],
["Trato en el 22, trans en el 23","Ley 15/2022 igualdad de trato; Ley 4/2023 personas trans y LGTBI."]],
d:{type:"timeline",title:"Normas de igualdad que entran",items:[["2004","LO 1/2004 · Violencia de género"],["2007","LO 3/2007 · Igualdad efectiva · Ley 7/2007 de la Región de Murcia"],["2022","Ley 15/2022 · Igualdad de trato y no discriminación"],["2023","Ley 4/2023 · Personas trans y LGTBI"]]}},

G9:{n:[["Lo mínimo: no hagas daño y sé justo","Nivel 1 de Diego Gracia: no maleficencia y justicia, que obligan siempre."],
["La Fina Mina Exige Plazos Íntegros y Responsables","Principios del RGPD: Licitud, Finalidad, Minimización, Exactitud, Plazo, Integridad-confidencialidad y Responsabilidad proactiva."],
["14 para los datos, 16 para la salud","Un menor consiente el uso de sus datos a los 14 (LOPDGDD) y los actos sanitarios a los 16 (Ley 41/2002)."],
["El 199, de 1 a 4","Revelar secretos profesionales (art. 199.2 CP): prisión de 1 a 4 años."]],
d:{type:"pyramid",title:"Jerarquía de principios (Diego Gracia)",levels:[["Nivel 2 · ética de máximos","Autonomía · Beneficencia"],["Nivel 1 · ética de mínimos","No maleficencia · Justicia"]]}},

G10:{n:[["Laboratorio, calle y cartera","Eficacia en condiciones ideales, efectividad en condiciones reales, eficiencia en relación con el coste."],
["E-P-R de Donabedian","Estructura (con qué), Proceso (cómo) y Resultado (qué se consigue)."],
["PROMs = Outcomes, PREMs = Experiencia","Lo que le pasa al paciente frente a cómo vive la atención."]],
d:{type:"cycle",title:"Ciclo de mejora continua (Deming)",steps:["Planificar","Hacer","Verificar","Actuar"],center:"PDCA"}},

G11:{n:[["Casos y controles miran atrás: Odds","Parten de la enfermedad (útil si es rara) y miden la OR. Las cohortes siguen hacia delante y miden el RR."],
["F-M-H","Cadena epidemiológica: Fuente o reservorio, Mecanismo de transmisión y Huésped susceptible."],
["NNT = 1 / RAR","El número necesario a tratar es el inverso de la reducción absoluta del riesgo."],
["Prevalencia = foto, incidencia = película","Prevalencia: casos existentes en un momento. Incidencia: casos nuevos en un periodo."]],
d:{type:"tree",title:"Diseños epidemiológicos",root:"¿Hay intervención del investigador?",children:[
 {l:"No · observacionales",c:[{l:"Descriptivos",s:"Transversal · ecológico · series de casos"},{l:"Analíticos",s:"Casos y controles (OR) · cohortes (RR)"}]},
 {l:"Sí, aleatorizada",s:"Ensayo clínico aleatorizado"},
 {l:"Sí, sin aleatorizar",s:"Cuasiexperimental"}]}},

G12:{n:[["SnNout y SpPin","Una prueba Sensible y Negativa descarta (rule out); una esPecífica y Positiva confirma (rule in)."],
["α = alarma falsa, β = no lo ves","Error tipo I: rechazar H0 siendo cierta. Error tipo II: no detectar una diferencia real."],
["Mann-Whitney van solos, Wilcoxon de la mano","U de Mann-Whitney para grupos independientes; Wilcoxon para datos apareados; Kruskal-Wallis para más de 2 grupos."],
["68 · 95 · 99","En la normal, ±1, ±1,96 y ±2,58 desviaciones típicas recogen el 68%, 95% y 99%."]],
d:{type:"matrix",title:"Tabla 2 × 2 de una prueba diagnóstica",corner:"Prueba \\ Realidad",cols:["Enfermo","Sano"],rows:["Positiva","Negativa"],cells:[["VP · verdadero positivo","FP · falso positivo"],["FN · falso negativo","VN · verdadero negativo"]],tones:[["ok","bad"],["bad","ok"]],foot:"Sensibilidad = VP/(VP+FN) · Especificidad = VN/(VN+FP) · VPP = VP/(VP+FP) · VPN = VN/(VN+FN)"}},

G13:{n:[["Cada Tarde Duermo Cómoda","Rigor de Guba y Lincoln: Credibilidad, Transferibilidad, Dependencia y Confirmabilidad."],
["Saturación = ya no aprendo nada nuevo","El muestreo cualitativo se detiene cuando los datos dejan de aportar información."]],
d:{type:"compare",title:"Cuantitativa frente a cualitativa",cols:["Cuantitativa","Cualitativa"],rows:[["Lógica","Deductiva","Inductiva"],["Datos","Números","Palabras y discursos"],["Muestra","Probabilística y amplia","Intencional, hasta la saturación"],["Rigor","Validez y fiabilidad","Credibilidad, transferibilidad…"],["Objetivo","Medir y generalizar","Comprender significados"]]}},

G14:{n:[["43 · 27 · 19 · 11","Dever: estilos de vida, biología, entorno y sistema sanitario, de más a menos peso en la mortalidad."],
["Hanlon: (A + B) · C · D","Magnitud más Severidad, multiplicado por Eficacia y por Factibilidad (PERLA)."],
["PERLA","Pertinencia, Economía, Recursos, Legalidad y Aceptabilidad."],
["La letalidad mira a los enfermos","Fallecidos por una enfermedad / casos de esa enfermedad, no la población."]],
d:{type:"bars",title:"Contribución a la mortalidad según Dever",unit:"%",items:[["Estilos de vida",43],["Biología humana",27],["Medio ambiente",19],["Sistema sanitario",11]]}},

G15:{n:[["Friz: 160 joven, 60 vieja","Índice de Friz = población de 0–19 / población de 30–49 × 100."],
["Bruta = todos; fecundidad = mujeres de 15 a 49","La tasa bruta de natalidad divide por la población total media; la de fecundidad, por las mujeres en edad fértil."],
["Vegetativo = natural","Crecimiento vegetativo = nacimientos − defunciones, sin contar migraciones."]],
d:{type:"scale",title:"Índice de Friz",segs:[{l:"Vieja",r:"< 60",t:"muted",w:1},{l:"Madura",r:"60–160",t:"accent",w:2},{l:"Joven",r:"> 160",t:"omr",w:1}]}},

E1:{n:[["Ojo, Inés Aprende Rápido","Peplau: Orientación, Identificación, Aprovechamiento y Resolución."],
["Orem: T-P-E","Sistemas Totalmente compensatorio, Parcialmente compensatorio y de apoyo Educativo."],
["Roy se adapta, Neuman se defiende","Roy: modelo de adaptación. Neuman: líneas de defensa y de resistencia frente a estresores."],
["11 · 13 · 14","Gordon tiene 11 patrones, NANDA 13 dominios y Henderson 14 necesidades."]],
d:{type:"pyramid",title:"Pirámide de necesidades de Maslow",levels:[["Autorrealización"],["Estima"],["Afiliación y amor"],["Seguridad"],["Fisiológicas"]]}},

E2:{n:[["Funcional = por tareas","Una enfermera pone la medicación a todos, otra hace las curas: fragmenta el cuidado."],
["Gestora de casos = coordina lo complejo","Crónicos complejos o paliativos que necesitan movilizar recursos entre niveles."]],
d:{type:"flow",title:"Continuidad de cuidados al alta",steps:[["Hospital","Planificación del alta"],["Informe de continuidad de cuidados","Diagnósticos, resultados, intervenciones"],["Enfermera de AP o gestora de casos","Valora y coordina"],["Domicilio","Seguimiento"],["Servicios sociales","Si hay necesidad social"]]}},

E3:{n:[["Vi Dos Perros En España","Fases del PAE: Valoración, Diagnóstico, Planificación, Ejecución y Evaluación."],
["Pepa Nunca Echa Agua Sin Contar A Rosa Sin Avisar Vecinos","Los 11 patrones de Gordon en orden: Percepción-manejo, Nutricional, Eliminación, Actividad, Sueño, Cognitivo, Autopercepción, Rol, Sexualidad, Adaptación y Valores."],
["PES: r/c + m/p","Problema + Etiología («relacionado con») + Signos y síntomas («manifestado por»)."],
["El riesgo no se manifiesta","El diagnóstico de riesgo no lleva «m/p»: solo factores de riesgo."]],
d:{type:"cycle",title:"Proceso enfermero",steps:["Valoración","Diagnóstico","Planificación","Ejecución","Evaluación"],center:"PAE"}},

E4:{n:[["N-E-T-O","Niveles de planificación de arriba abajo: Normativa, Estratégica, Táctica y Operativa."],
["La táctica reparte","La planificación táctica (mandos intermedios, medio plazo) asigna recursos y actividades."],
["CAME contesta al DAFO","Debilidades → Corregir; Amenazas → Afrontar; Fortalezas → Mantener; Oportunidades → Explotar."],
["Herzberg: la higiene no motiva","Salario y condiciones evitan la insatisfacción; motivan el logro y el reconocimiento."]],
d:{type:"matrix",title:"Análisis DAFO y estrategias CAME",corner:"",cols:["Favorable","Desfavorable"],rows:["Interno","Externo"],cells:[["Fortalezas → Mantener","Debilidades → Corregir"],["Oportunidades → Explotar","Amenazas → Afrontar"]],tones:[["ok","bad"],["accent","warn"]],foot:"El DAFO diagnostica; el CAME decide qué hacer con cada cuadrante."}},

E5:{n:[["2 · 15 · Comisión","Eutanasia: dos solicitudes escritas, al menos 15 días naturales entre ellas y verificación de la Comisión de Garantía y Evaluación."],
["NoRT","Instrucciones previas en Murcia ante Notario, personal del Registro o 3 Testigos."]],
d:{type:"flow",title:"Prestación de ayuda para morir (LO 3/2021)",steps:[["1ª solicitud escrita"],["Proceso deliberativo","Con el médico responsable"],["2ª solicitud","Al menos 15 días después"],["Médico consultor","Comprueba los requisitos"],["Comisión de Garantía y Evaluación","Verificación previa"],["Prestación"]]}},

E6:{n:[["Corazón y cáncer","Primeras causas de muerte en España: enfermedades del sistema circulatorio y tumores."]],
d:{type:"cards",title:"Indicadores que se confunden",items:[["Mortalidad","Fallecidos / población"],["Morbilidad","Enfermos / población"],["Letalidad","Fallecidos / casos de esa enfermedad"],["Esperanza de vida","Años que se espera vivir desde una edad"]]}},

E7:{n:[["Cuanti cuenta, cuali escucha","Cuantitativa: números y lógica deductiva. Cualitativa: palabras, experiencias y lógica inductiva."]],
d:{type:"flow",title:"Fases de un proyecto de investigación",steps:[["Pregunta"],["Revisión bibliográfica"],["Objetivos e hipótesis"],["Diseño"],["Población y muestra"],["Recogida de datos"],["Análisis"],["Difusión"]]}},

E8:{n:[["PICO","Paciente o problema, Intervención, Comparación y Outcome (resultado)."],
["Para Buscar Lo Importante, Evalúa","Etapas de la EBE: Pregunta, Búsqueda, Lectura crítica, Implementación y Evaluación."],
["AGREE evalúa guías","CONSORT es para ensayos, STROBE para observacionales y PRISMA para revisiones sistemáticas."]],
d:{type:"pyramid",title:"Pirámide de la evidencia",levels:[["Revisiones sistemáticas y metaanálisis"],["Ensayos clínicos aleatorizados"],["Estudios de cohortes"],["Casos y controles"],["Series de casos"],["Opinión de expertos"]]}},

E9:{n:[["NANDA Diagnostica, NOC Obtiene, NIC Interviene","NANDA = diagnósticos; NOC = resultados (outcomes); NIC = intervenciones."],
["Fui Básica, Fui Compleja, Con Seguridad, en Familia, Sistema y Comunidad","Los 7 campos NIC: Fisiológico básico, Fisiológico complejo, Conductual, Seguridad, Familia, Sistema sanitario y Comunidad."],
["NOC = cinco estrellas","Cada indicador NOC se puntúa con una escala Likert de 1 a 5."]],
d:{type:"flow",title:"Cómo se encadenan NANDA, NOC y NIC",steps:[["Valoración","Patrones funcionales"],["Diagnóstico NANDA","Etiqueta + r/c + m/p"],["Resultado NOC","Con indicadores y diana"],["Intervención NIC","Con actividades"],["Evaluación","Nueva puntuación NOC"]]}},

E10:{n:[["Consentir es un proceso","Información, comprensión y decisión libre; se puede revocar por escrito en cualquier momento."]],
d:{type:"cards",title:"Los cuatro principios",items:[["Autonomía","Respetar las decisiones de la persona capaz"],["Beneficencia","Hacer el bien según los valores del paciente"],["No maleficencia","No causar daño"],["Justicia","Repartir los recursos con equidad"]]}},

E11:{n:[["Barthel Básicas, Lawton La compra","Barthel mide las actividades básicas (ABVD); Lawton y Brody, las instrumentales (compras, teléfono, dinero…)."],
["Zarit: menos de 47 bien, más de 55 quemado","Sin sobrecarga por debajo de 47; leve de 47 a 55; intensa por encima de 55."],
["Pfeiffer: 2 · 4 · 7 · 10","Errores: 0–2 normal, 3–4 leve, 5–7 moderado, 8–10 grave."],
["Prepara, Preséntate, Desarrolla, Cierra y Registra","Etapas de la visita domiciliaria."]],
d:{type:"scale",title:"Cuestionario de Pfeiffer (número de errores)",segs:[{l:"Normal",r:"0–2",t:"ok",w:3},{l:"Deterioro leve",r:"3–4",t:"accent",w:2},{l:"Moderado",r:"5–7",t:"warn",w:3},{l:"Grave",r:"8–10",t:"bad",w:3}]}},

E12:{n:[["CATEV","Hospitalización a domicilio: Cuidador, Aceptación, Teléfono, Estabilidad clínica y Vivienda dentro de la zona de cobertura."]],
d:{type:"flow",title:"Circuito de la hospitalización a domicilio",steps:[["Hospital o urgencias"],["Valorar criterios","CATEV"],["Hospitalización a domicilio","Visitas y telemonitorización"],["Alta a atención primaria","Informe de continuidad"]]}},

E13:{n:[["La cebolla de Dahlgren","De dentro afuera: individuo → estilos de vida → redes sociales → condiciones de vida y trabajo → contexto socioeconómico."],
["Antonovsky pregunta qué da salud","Salutogénesis y sentido de coherencia, frente al enfoque de qué enferma."],
["Pasear, fotografiar, mapear","Activos en salud: paseos comunitarios, photovoice y mapeo directo sobre un plano vacío."]],
d:{type:"layers",title:"Determinantes sociales (Dahlgren y Whitehead)",items:["Condiciones socioeconómicas, culturales y ambientales","Condiciones de vida y de trabajo","Redes sociales y comunitarias","Estilos de vida individuales","Edad, sexo y factores hereditarios"]}},

E14:{n:[["Pedro Con Prisa Acaba Mal","Modelo transteórico: Precontemplación, Contemplación, Preparación, Acción y Mantenimiento."],
["Saber, saber ser, saber hacer","Objetivos educativos cognitivos, afectivos (actitudes) y psicomotores (habilidades)."],
["Predispone, Facilita, Refuerza","PRECEDE: factores predisponentes (querer), facilitadores (poder) y reforzantes (recompensa)."]],
d:{type:"cycle",title:"Etapas del cambio (Prochaska y DiClemente)",steps:["Precontemplación","Contemplación","Preparación","Acción","Mantenimiento"],center:"Puede haber recaída en cualquier etapa"}},

E15:{n:[["EDERA","Entrevista motivacional: Empatía, Discrepancia, Evitar la discusión, Rodar con la resistencia y Autoeficacia."],
["Empatía = entender y hacerlo saber","No basta con comprender: hay que transmitir esa comprensión."],
["45 · 120 · 360","Distancias de Hall en cm: íntima por debajo de 45, personal 45–120, social 120–360, pública por encima."]],
d:{type:"scale",title:"Proxémica (Hall)",segs:[{l:"Íntima",r:"< 45 cm",t:"omr",w:1},{l:"Personal",r:"45–120 cm",t:"accent",w:2},{l:"Social",r:"1,2–3,6 m",t:"ok",w:3},{l:"Pública",r:"> 3,6 m",t:"muted",w:2}]}},

E16:{n:[["Evita, Pilla, Limita, Protege","Primaria evita que aparezca; secundaria la detecta pronto; terciaria limita daños; cuaternaria protege del exceso de medicina."],
["De 50 a 69, cada 2: mama y colon","Mamografía y sangre oculta en heces bienales de 50 a 69 años."],
["Cérvix: 3 y 5","Citología cada 3 años (25–34) y prueba de VPH cada 5 años (35–65)."]],
d:{type:"timeline",title:"Historia natural y niveles de prevención",items:[["Persona sana","Primaria: vacunas, educación para la salud"],["Fase presintomática","Secundaria: cribados"],["Enfermedad clínica","Terciaria: tratamiento y rehabilitación"],["En todo momento","Cuaternaria: evitar intervenciones innecesarias"]]}},

E17:{n:[["Vivas: TriVaRo FA BCG","Triple vírica, Varicela, Rotavirus, Fiebre Amarilla y BCG (y la gripe intranasal)."],
["Vivas: juntas o al mes","Dos vacunas vivas parenterales, el mismo día o separadas 4 semanas."],
["La nevera de casa: de 2 a 8","Cadena de frío entre +2 y +8 °C."],
["Sucia 5, limpia 10","Con 3 o más dosis de tétanos: recuerdo si han pasado más de 5 años (herida tetanígena) o 10 (herida limpia)."]],
d:{type:"tree",title:"Profilaxis antitetánica ante una herida",root:"¿Cuántas dosis de vacuna tiene?",children:[
 {l:"Desconocido o menos de 3",c:[{l:"Herida limpia",s:"Vacunar"},{l:"Herida tetanígena",s:"Vacuna + inmunoglobulina"}]},
 {l:"3 o más dosis",c:[{l:"Herida limpia",s:"Dosis si han pasado más de 10 años"},{l:"Herida tetanígena",s:"Dosis si han pasado más de 5 años"}]}]}},

E18:{n:[["Crítico estéril, semicrítico alto nivel","Spaulding: lo que entra en tejido estéril se esteriliza; lo que toca mucosas, desinfección de alto nivel."],
["Bowie-Dick saca el aire","Prueba diaria de eliminación del aire en el autoclave de prevacío."],
["Geobacillus para el vapor","Esporas de Geobacillus stearothermophilus para vapor y peróxido; Bacillus atrophaeus para óxido de etileno y calor seco."],
["Dos antes y tres después","5 momentos: antes del contacto y de la tarea aséptica; después de fluidos, del contacto y del entorno."]],
d:{type:"flow",title:"Circuito del material en esterilización",steps:[["Limpieza"],["Secado"],["Empaquetado"],["Esterilización"],["Controles","Físicos, químicos y biológicos"],["Almacenamiento"]]}},

E19:{n:[["Te Sale Volando (TSV)","Aislamiento aéreo: Tuberculosis, Sarampión y Varicela."],
["C. difficile no se va con alcohol","Sus esporas exigen lavado con agua y jabón."],
["Nosocomial a las 48","Infección que aparece a partir de las 48 h del ingreso."]],
d:{type:"cards",title:"Tipos de aislamiento",items:[["Contacto","SARM, BLEE, C. difficile, sarna · guantes y bata"],["Gotas (> 5 µm)","Gripe, meningococo, tosferina · mascarilla quirúrgica"],["Aéreo (< 5 µm)","TB, sarampión, varicela · FFP2/FFP3, presión negativa"],["Protector","Neutropénicos y trasplantados · presión positiva"]]}},

E20:{n:[["20 gotas, 60 microgotas","1 ml = 20 gotas = 60 microgotas; por eso microgotas/min = ml/h."],
["15 · 45 · 90","Ángulos: intradérmica 15°, subcutánea 45° e intramuscular 90°."],
["Nunca Gastes Vino Rosado Antes del Almuerzo","Colores de catéter de grueso a fino: Naranja 14G, Gris 16G, Verde 18G, Rosa 20G, Azul 22G y Amarillo 24G."],
["1% = 10 mg/ml","Para pasar de porcentaje a mg/ml, multiplica por 10."]],
d:{type:"swatches",title:"Calibres de catéter venoso periférico",items:[["#F28C28","14G","Naranja · el más grueso"],["#8E8E8E","16G","Gris"],["#2E9E4F","18G","Verde"],["#E58FB1","20G","Rosa"],["#2F6FD0","22G","Azul"],["#E8C21E","24G","Amarillo · el más fino"]]}},

E21:{n:[["LADME","Liberación, Absorción, Distribución, Metabolismo y Excreción."],
["Triángulo negro: avisa de todo","Los medicamentos con ▼ están en seguimiento adicional: notifica cualquier sospecha."],
["Naloxona-Opioides, Flumazenilo-Benzos","Y Protamina-Heparina, Vitamina K-Sintrom, N-acetilcisteína-Paracetamol."]],
d:{type:"flow",title:"Recorrido del fármaco en el organismo",steps:[["Liberación"],["Absorción","Primer paso hepático en la vía oral"],["Distribución"],["Metabolismo","Sobre todo hepático"],["Excreción","Sobre todo renal"]]}},

E22:{n:[["No sujeto: Autónoma · Sujeto: Protocolo","Sin prescripción médica, la enfermera acreditada decide sola; con ella, solo dentro de guías y protocolos."],
["Orden, no receta","La enfermera firma una orden de dispensación."]],
d:{type:"tree",title:"Indicación enfermera (RD 954/2015)",root:"¿Qué puede indicar la enfermera acreditada?",children:[
 {l:"Medicamentos no sujetos a prescripción",s:"De forma autónoma"},
 {l:"Productos sanitarios",s:"De forma autónoma"},
 {l:"Medicamentos sujetos a prescripción",s:"Solo con protocolo o guía validada, tras diagnóstico y prescripción médica"}]}},

E23:{n:[["4 · 4 · 9 · 7","kcal por gramo: hidratos 4, proteínas 4, grasas 9, alcohol 7."],
["5 al día y menos de 5 de sal","Al menos 400 g de frutas y verduras (5 raciones) y menos de 5 g de sal al día."],
["18,5 · 25 · 30 · 35 · 40","Puntos de corte del IMC: bajo peso, normal, sobrepeso y obesidad I, II y III."]],
d:{type:"scale",title:"Índice de masa corporal (kg/m²)",segs:[{l:"Bajo peso",r:"< 18,5",t:"warn",w:1},{l:"Normal",r:"18,5–24,9",t:"ok",w:2},{l:"Sobrepeso",r:"25–29,9",t:"warn",w:2},{l:"Obesidad I",r:"30–34,9",t:"bad",w:1.4},{l:"Obesidad II",r:"35–39,9",t:"bad",w:1.4},{l:"Obesidad III",r:"≥ 40",t:"bad",w:1.4}]}},

E24:{n:[["150 / 75 + 2","Adultos: 150–300 min de actividad moderada o 75–150 de vigorosa, más fuerza 2 días por semana."],
["Niños: una hora al día","De 5 a 17 años, media de 60 minutos diarios de actividad moderada a vigorosa."],
["1 MET = 3,5","1 MET = 3,5 ml de O₂/kg/min ≈ 1 kcal/kg/h."],
["Come sano y muévete","Lema de la Estrategia NAOS."]],
d:{type:"scale",title:"Intensidad de la actividad en MET",segs:[{l:"Ligera",r:"< 3 MET",t:"muted",w:1},{l:"Moderada",r:"3–6 MET",t:"accent",w:1},{l:"Vigorosa",r:"> 6 MET",t:"omr",w:1}]}},

E25:{n:[["NEX","Longitud de la sonda: Nariz, lóbulo de la oreja (Ear) y Xifoides."],
["pH 5,5 o menos = estómago","Un aspirado ácido apoya la posición gástrica; la radiografía es la referencia."],
["Más de 4–6 semanas, gastrostomía","Si la nutrición enteral va a ser prolongada, PEG o yeyunostomía."]],
d:{type:"tree",title:"Elección de la vía de nutrición",root:"¿Funciona el tubo digestivo?",children:[
 {l:"Sí → enteral",c:[{l:"Menos de 4–6 semanas",s:"SNG o sonda nasoyeyunal"},{l:"Más de 4–6 semanas",s:"Gastrostomía (PEG) o yeyunostomía"}]},
 {l:"No → parenteral",c:[{l:"Periférica",s:"Baja osmolaridad, corta duración"},{l:"Central",s:"Nutrición parenteral total"}]}]}},

E26:{n:[["Naegele: +7 −3","Fecha probable de parto = FUR + 7 días − 3 meses (+ 1 año)."],
["Las 4 T","Hemorragia posparto: Tono (la más frecuente), Trauma, Tejido y Trombina."],
["Calienta para salir, enfría para calmar","Ingurgitación: calor y masaje antes de la toma, frío después."],
["Prolactina Produce, Oxitocina la saca","Prolactina = producción; oxitocina = eyección."],
["Rojo, seroso, blanco","Loquios: rubra, serosa y alba."]],
d:{type:"timeline",title:"Puerperio y lactancia",items:[["Días 1–3","Calostro"],["Días 2–4","Subida de la leche"],["Días 3–5","Riesgo de ingurgitación"],["10–14 días","El útero deja de palparse"],["6 semanas","Fin del puerperio"],["6 meses","Fin de la lactancia materna exclusiva"],["2 años o más","Lactancia complementada (OMS)"]]}},

E27:{n:[["12 meses sin regla","La menopausia se diagnostica tras 12 meses de amenorrea; es precoz antes de los 40."],
["La FSH sube sin freno","Sin estrógenos no hay retroalimentación negativa y la FSH se eleva."],
["−1 y −2,5","T-score: entre −1 y −2,5 osteopenia; −2,5 o menos, osteoporosis."]],
d:{type:"scale",title:"Densitometría (T-score)",segs:[{l:"Osteoporosis",r:"≤ −2,5",t:"bad",w:1},{l:"Osteopenia",r:"−2,5 a −1",t:"warn",w:1},{l:"Normal",r:"> −1",t:"ok",w:1}]}},

E28:{n:[["APGAR","Apariencia (color), Pulso, Gesticulación (irritabilidad refleja), Actividad (tono) y Respiración."],
["Posterior a los 2, anterior a los 18","La fontanela posterior cierra a los 2–3 meses; la anterior a los 12–18."],
["3 cabeza, 6 sentado, 12 anda","Sostén cefálico ~3 meses, sedestación 6–8 y marcha 12–15."],
["Talón a las 48","Prueba del talón a partir de las 48 h de vida."]],
d:{type:"timeline",title:"Hitos del primer año y medio",items:[["Nacimiento","Apgar al 1 y 5 min · vitamina K"],["48 h","Prueba del talón"],["6–8 semanas","Sonrisa social"],["2–3 meses","Cierra la fontanela posterior"],["3 meses","Sostén cefálico"],["4–6 meses","Desaparece el reflejo de Moro"],["6–8 meses","Se sienta sin apoyo"],["12–15 meses","Camina"],["12–18 meses","Cierra la fontanela anterior"]]}}
});
