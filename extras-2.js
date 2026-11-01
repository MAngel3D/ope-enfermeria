/* Reglas nemotécnicas y croquis — E29–E56 */
window.EXTRAS = window.EXTRAS || {};
Object.assign(window.EXTRAS, {
E29:{n:[["Arroz antes de los 3, guisante de 3 a 6","Cantidad de pasta fluorada según la edad."],
["20 de leche, 32 definitivos","Dentición temporal de 20 piezas; permanente de 32."],
["La negligencia: la más callada y la más frecuente","Es el tipo de maltrato infantil más habitual."]],
d:{type:"flow",title:"Actuación ante sospecha de maltrato infantil",steps:[["Sospecha","Lesiones, conducta, relato"],["Valorar indicadores","Explicaciones incoherentes, retrasos"],["Proteger al menor","Si hay riesgo inmediato"],["Notificar","Hoja de notificación"],["Derivar y coordinar","Pediatría, trabajo social, protección"]]}},

E30:{n:[["37 · 32 · 28","Prematuro antes de las 37 semanas; muy prematuro antes de las 32; extremo antes de las 28."],
["2.500 · 1.500 · 1.000","Bajo peso, muy bajo peso y extremadamente bajo peso (gramos)."],
["Abstinencia: todo «hiper» y diarrea","Hiperreflexia, hipertonía, irritabilidad, temblor y diarrea. Escala de Finnegan."]],
d:{type:"scale",title:"Edad gestacional al nacer",segs:[{l:"Prematuro extremo",r:"< 28 sem",t:"bad",w:1},{l:"Muy prematuro",r:"28–31+6",t:"warn",w:1},{l:"Moderado o tardío",r:"32–36+6",t:"accent",w:1.2},{l:"A término",r:"37–41+6",t:"ok",w:1.2}]}},

E31:{n:[["FLACC, caras, números","Dolor: FLACC si no habla, caras de Wong-Baker desde ~3 años y escala numérica o EVA en mayores."],
["Protesta, Desesperación, Desapego","Reacción del niño a la separación de sus padres según Bowlby."]],
d:{type:"scale",title:"Escala de dolor según la edad",segs:[{l:"FLACC",r:"Lactantes y no verbales",t:"omr",w:1},{l:"Caras de Wong-Baker",r:"Desde ~3 años",t:"accent",w:1},{l:"EVA o numérica",r:"Desde ~7 años",t:"ok",w:1}]}},

E32:{n:[["Fagerström Física, Richmond Ready","Fagerström mide la dependencia física; Richmond, la motivación (estar «ready»)."],
["Paquetes-año = cigarrillos × años / 20","20 cigarrillos al día durante 10 años = 10 paquetes-año."],
["AUDIT para el alcohol","Cribado del consumo de riesgo de alcohol."]],
d:{type:"cards",title:"Test de consumo que caen",items:[["Fagerström","Dependencia física a la nicotina"],["Richmond","Motivación para dejar de fumar"],["Glover-Nilsson","Dependencia psicológica y conductual"],["AUDIT","Consumo de riesgo de alcohol"],["CAGE","Cribado breve de alcoholismo"]]}},

E33:{n:[["Pearl bajo, método bueno","Embarazos por 100 mujeres-año: cuanto menor, más eficaz."],
["Urgencia: 3 días levonorgestrel, 5 días ulipristal o DIU","Levonorgestrel hasta 72 h; ulipristal y DIU de cobre hasta 5 días."],
["Lactancia: sin estrógenos","Solo gestágeno, DIU, barrera o MELA."],
["Solo el preservativo protege de ITS","Ningún otro método evita las infecciones de transmisión sexual."]],
d:{type:"tree",title:"Métodos anticonceptivos",root:"Anticoncepción",children:[
 {l:"Hormonales combinados",s:"Píldora · parche · anillo"},
 {l:"Solo gestágeno",s:"Píldora · implante · inyectable · DIU-LNG"},
 {l:"DIU de cobre",s:"También anticoncepción de urgencia"},
 {l:"Barrera",s:"Preservativo: único que protege de ITS"},
 {l:"Definitivos",s:"Ligadura o salpinguectomía · vasectomía"}]}},

E34:{n:[["T-E-L","Ciclo de Walker: Tensión, Explosión y Luna de miel."],
["016, sin rastro","El teléfono de atención no aparece en la factura."],
["Vicaria: a través de los hijos","Violencia que daña a la mujer atacando a sus hijas, hijos u otras personas queridas."]],
d:{type:"cycle",title:"Ciclo de la violencia (Walker)",steps:["Acumulación de tensión","Explosión o agresión","Luna de miel"],center:"Se repite y se acorta"}},

E35:{n:[["Regla del 3: 30 · 3 · 0,3","Riesgo tras pinchazo con fuente positiva: VHB 30% (no vacunado), VHC 3% y VIH 0,3%."],
["2HRZE / 4HR","Tuberculosis: 2 meses con 4 fármacos y 4 meses con isoniazida y rifampicina."],
["Rifampicina = rojo","Tiñe de naranja-rojizo la orina y las lágrimas."],
["HBsAg: sí la tiene; anti-HBs: salvado","HBsAg indica infección; anti-HBs indica inmunidad."]],
d:{type:"timeline",title:"Tratamiento estándar de la tuberculosis",items:[["Mes 0","Isoniazida + rifampicina + pirazinamida + etambutol"],["Semanas 2–3","Suele terminar el aislamiento si hay buena respuesta"],["Mes 2","Continuación con isoniazida + rifampicina"],["Mes 6","Fin del tratamiento"]]}},

E36:{n:[["NINDA","Kübler-Ross: Negación, Ira, Negociación, Depresión y Aceptación."],
["Opioide = laxante","El estreñimiento no genera tolerancia: siempre laxante pautado."],
["Débiles: codeína y tramadol","Segundo escalón de la OMS; el tercero son los potentes (morfina, fentanilo, oxicodona)."],
["Paliativo = subcutánea","Vía de elección cuando no se puede usar la oral."]],
d:{type:"pyramid",title:"Escalera analgésica de la OMS (± coadyuvantes en cada escalón)",levels:[["4º · Técnicas invasivas"],["3º · Opioides potentes","Morfina, fentanilo, oxicodona"],["2º · Opioides débiles","Codeína, tramadol"],["1º · No opioides","Paracetamol, AINE, metamizol"]]}},

E37:{n:[["Sentir, Pensar, Concretar, Formalizar","Piaget: Sensoriomotor (0–2), Preoperacional (2–7), operaciones Concretas (7–11) y Formales (desde 11–12)."],
["Oral, Anal, Fálica, Latencia, Genital","Etapas psicosexuales de Freud."]],
d:{type:"timeline",title:"Etapas de Piaget",items:[["0–2 años","Sensoriomotor"],["2–7 años","Preoperacional"],["7–11 años","Operaciones concretas"],["Desde 11–12 años","Operaciones formales"]]}},

E38:{n:[["Litio: L de límite estrecho","Rango aproximado de 0,6 a 1,2 mEq/l; vigila temblor grueso, vómitos y diarrea."],
["Halo → Bi","Distonía aguda por haloperidol → biperideno."],
["T antes que G","En el alcohólico, tiamina antes que glucosa (Wernicke)."],
["Clozapina cuenta glóbulos","Riesgo de agranulocitosis: hemogramas periódicos."]],
d:{type:"cards",title:"Psicofármacos: lo que hay que vigilar",items:[["Litio","Temblor grueso, vómitos, diarrea, ataxia"],["Haloperidol","Extrapiramidales; distonía → biperideno"],["Clozapina","Agranulocitosis → hemogramas"],["ISRS","Efecto a las 2–4 semanas"],["Benzodiacepinas","Antídoto: flumazenilo"]]}},

E39:{n:[["Ojos 4, Voz 5, Motor 6","Puntuaciones máximas de Glasgow (total 15, mínimo 3)."],
["Con 8, intubo","Glasgow de 8 o menos = traumatismo grave: proteger la vía aérea."],
["Las 4 A","Alzheimer: Amnesia, Afasia, Apraxia y Agnosia."],
["Cushing: sube la tensión, baja el pulso","HTA con presión diferencial amplia, bradicardia y respiración irregular."]],
d:{type:"scale",title:"Escala de Glasgow",segs:[{l:"Grave",r:"3–8",t:"bad",w:6},{l:"Moderado",r:"9–12",t:"warn",w:4},{l:"Leve",r:"13–15",t:"ok",w:3}]}},

E40:{n:[["ROME","Respiratorio Opuesto (pH y CO₂ van en sentidos contrarios); Metabólico Equal (pH y HCO₃⁻ van en el mismo sentido)."],
["Kussmaul = Ketoacidosis","Respiración profunda y rápida de la acidosis metabólica."],
["EPOC: 88–92","Saturación objetivo en el EPOC que retiene CO₂, mejor con mascarilla Venturi."],
["Oscila bien, burbujea fuga","En el sello de agua: oscilación = drenaje permeable; burbujeo continuo = fuga aérea."]],
d:{type:"matrix",title:"Trastornos ácido-base",corner:"",cols:["Acidosis (pH < 7,35)","Alcalosis (pH > 7,45)"],rows:["Respiratoria","Metabólica"],cells:[["PaCO₂ ↑ (> 45)","PaCO₂ ↓ (< 35)"],["HCO₃⁻ ↓ (< 22)","HCO₃⁻ ↑ (> 26)"]],tones:[["bad","accent"],["bad","accent"]],foot:"La compensación mueve la otra variable en el mismo sentido que el trastorno primario."}},

E41:{n:[["Inferior: II, III, aVF (F de foot)","La cara inferior se ve en las derivaciones que «miran desde los pies»."],
["Izquierda → pulmón; derecha → piernas","IC izquierda: congestión pulmonar. IC derecha: edemas e ingurgitación yugular."],
["Digoxina: por debajo de 60, no","Comprueba la frecuencia cardiaca antes de darla."],
["ITB: 0,9 y 1,3","Por debajo de 0,9 enfermedad arterial; por encima de 1,3 arterias calcificadas."]],
d:{type:"scale",title:"Índice tobillo-brazo",segs:[{l:"Enfermedad arterial",r:"< 0,9",t:"bad",w:1},{l:"Normal",r:"0,9–1,3",t:"ok",w:1},{l:"No compresible",r:"> 1,3",t:"warn",w:1}]}},

E42:{n:[["Antes, dentro, después","IRA prerrenal (riego), renal (riñón) y posrenal (obstrucción)."],
["400 y 100","Oliguria por debajo de 400 ml/24 h; anuria por debajo de 100 ml/24 h."],
["Brazo de la fístula: ni tensión ni pinchazos","Y comprobar thrill y soplo cada turno."]],
d:{type:"flow",title:"Tipos de insuficiencia renal aguda",steps:[["Prerrenal","Falta de riego (la más frecuente)"],["Renal","Daño del propio riñón (NTA)"],["Posrenal","Obstrucción de la vía urinaria"]]}},

E43:{n:[["Las 5 P","Síndrome compartimental: Pain (dolor desproporcionado), Palidez, Parestesias, Pulso ausente (tardío) y Parálisis."],
["Venda de lejos a cerca","Siempre de distal a proximal."],
["8 para la clavícula","Vendaje en 8 en la fractura de clavícula."]],
d:{type:"cards",title:"Vendajes",items:[["Circular","Fija el inicio y el final"],["Espiral","Zonas cilíndricas (brazo, pierna)"],["En 8","Articulaciones y fractura de clavícula"],["Recurrente","Muñones y cabeza"],["Velpeau","Inmoviliza hombro y brazo"]]}},

E44:{n:[["Murphy vesícula, McBurney apéndice","Y Cullen o Grey-Turner en la pancreatitis grave."],
["Crohn, de la boca al ano","Transmural, a saltos y con fístulas; la colitis ulcerosa es recto-colon y continua."],
["Íleon = líquido","La ileostomía da heces líquidas e irritantes."]],
d:{type:"compare",title:"Enfermedad inflamatoria intestinal",cols:["Enfermedad de Crohn","Colitis ulcerosa"],rows:[["Localización","Cualquier tramo, de la boca al ano","Recto y colon"],["Extensión","Discontinua (a saltos)","Continua desde el recto"],["Profundidad","Transmural","Mucosa"],["Complicaciones","Fístulas, abscesos, estenosis","Rectorragia, megacolon tóxico"]]}},

E45:{n:[["Adulto arriba, niño abajo","Gotas óticas: pabellón hacia arriba y atrás en adultos; hacia abajo y atrás en niños pequeños."],
["Epistaxis: mira al suelo","Cabeza hacia delante y compresión 10 minutos."],
["Colirio antes que pomada","Y 5 minutos entre colirios."]],
d:{type:"compare",title:"Glaucoma agudo frente a crónico",cols:["Agudo (ángulo cerrado)","Crónico (ángulo abierto)"],rows:[["Inicio","Brusco: urgencia","Lento y silencioso"],["Síntomas","Dolor intenso, ojo rojo, visión borrosa, náuseas","Asintomático; pierde campo periférico"],["Pupila","Midriasis media arreactiva","Normal"],["Cuidado con","Midriáticos (contraindicados)","Revisar la presión intraocular"]]}},

E46:{n:[["PARA y eleva","Extravasación: Para la infusión, Aspira por la cánula, Retírala, Antídoto si existe y eleva el miembro. Nunca presionar."],
["AVM, los vesicantes","Antraciclinas, alcaloides de la Vinca y Mitomicina."],
["Mesna cuida la vejiga","Protege de la cistitis hemorrágica por ciclofosfamida e ifosfamida."],
["Huber no corta","Aguja de punta no cortante para puncionar reservorios."]],
d:{type:"flow",title:"Extravasación de citostáticos",steps:[["Detener la infusión"],["Dejar la cánula y aspirar"],["Retirar la cánula"],["Antídoto si existe"],["Frío o calor según el fármaco"],["Elevar y vigilar","Sin presionar ni vendar"]]}},

E47:{n:[["126 · 6,5 · 200","Diagnóstico de diabetes: glucemia basal ≥ 126, HbA1c ≥ 6,5% o 200 mg/dl (SOG o al azar con síntomas)."],
["Alfa Alza, Beta Baja","Células alfa → glucagón (sube la glucosa); beta → insulina (la baja)."],
["15 / 15","Hipoglucemia: 15 g de hidratos rápidos y nueva glucemia a los 15 minutos."],
["Clara antes que turbia","Al mezclar, primero la insulina rápida y después la NPH."]],
d:{type:"bars",title:"Duración aproximada de las insulinas",unit:"h",items:[["Ultrarrápida",4],["Rápida (regular)",7],["Intermedia (NPH)",15],["Basal (glargina, detemir)",24]]}},

E48:{n:[["0 · 10 · 60 · 120 · 240","Tiempos máximos de Manchester: rojo, naranja, amarillo, verde y azul."],
["Si camina, verde","En el triaje START, quien camina es leve."],
["Emergencia = riesgo vital ya","La urgencia admite un tiempo razonable; la emergencia, no."]],
d:{type:"swatches",title:"Sistema de triaje Manchester",items:[["#D64541","Rojo · inmediato","0 min"],["#F28C28","Naranja · muy urgente","10 min"],["#E8C21E","Amarillo · urgente","60 min"],["#2E9E4F","Verde · normal","120 min"],["#2F6FD0","Azul · no urgente","240 min"]]}},

E49:{n:[["4 H y 4 T","Hipoxia, Hipovolemia, Hipo/hiperpotasemia, Hipotermia; Trombosis, Taponamiento, Tóxicos y neumoTórax a tensión."],
["30:2, a 100–120, hundiendo 5–6","Compresiones torácicas en el adulto."],
["En la 3ª descarga, adrenalina y amiodarona","Ritmo desfibrilable: 1 mg de adrenalina y 300 mg de amiodarona tras la tercera descarga."],
["Parkland: 4 × kg × % · mitad en 8","Ringer lactato en 24 h; la mitad en las primeras 8 horas."],
["Regla de los 9","Cabeza 9, cada brazo 9, tronco delante 18, detrás 18, cada pierna 18, genitales 1."]],
d:{type:"flow",title:"Ritmo desfibrilable (FV / TV sin pulso)",steps:[["Descarga 1"],["RCP 2 min"],["Descarga 2"],["RCP 2 min"],["Descarga 3"],["Adrenalina 1 mg + amiodarona 300 mg"],["Sigue: adrenalina cada 3–5 min","Amiodarona 150 mg tras la 5ª"]]}},

E50:{n:[["2 · 4 · 6 · 8","Ayuno: líquidos claros 2 h, leche materna 4 h, comida ligera o fórmula 6 h, comida copiosa 8 h."],
["Entrar, Pausar, Salir","Listado de la OMS: antes de la inducción, antes de la incisión y antes de salir del quirófano."],
["Hipertermia maligna → dantroleno","Desencadenada por anestésicos halogenados o succinilcolina."]],
d:{type:"timeline",title:"Ayuno preoperatorio (horas antes)",items:[["2 h","Líquidos claros"],["4 h","Leche materna"],["6 h","Comida ligera o leche de fórmula"],["8 h","Comida copiosa o grasa"]]}},

E51:{n:[["Hematíes en menos de 4 h","Y solo con suero fisiológico."],
["O− da, AB+ recibe","Hematíes: O negativo es donante universal y AB positivo receptor universal. Plasma: AB es donante universal."],
["Reacción: para, vía con suero, avisa","Ante cualquier sospecha de reacción transfusional."]],
d:{type:"cards",title:"Hemoderivados",items:[["Concentrado de hematíes","2–6 °C · pasar en menos de 4 h"],["Plaquetas","20–24 °C en agitación"],["Plasma fresco","Congelado; descongelar a 37 °C"],["Donante universal","Hematíes O− · plasma AB"]]}},

E52:{n:[["Las 5 W de la fiebre","Wind (atelectasia), Water (orina), Wound (herida), Walking (trombosis) y Wonder drugs (fármacos)."],
["Aldrete 9 de 10","Puntuación orientativa para el alta de la unidad de recuperación."],
["Evisceración: cubre húmedo y avisa","Compresas estériles con suero y semi-Fowler con rodillas flexionadas."]],
d:{type:"timeline",title:"Fiebre postoperatoria (5 W)",items:[["Días 1–2","Wind: atelectasia"],["Días 3–5","Water: infección urinaria"],["Días 5–7","Wound: infección de la herida"],["Desde el día 5","Walking: trombosis venosa"],["En cualquier momento","Wonder drugs: fármacos"]]}},

E53:{n:[["TIME","Tejido no viable, Infección, humedad (Moisture) y bordes (Edges)."],
["Braden bajo, riesgo alto","En Braden y Norton, menos puntos = más riesgo; en EMINA, al revés."],
["La venosa se alivia arriba, la arterial abajo","El dolor venoso mejora al elevar la pierna; el arterial empeora."],
["Ni masajes ni flotadores","No masajear prominencias óseas ni usar flotadores o rodetes."]],
d:{type:"flow",title:"Categorías de las úlceras por presión",steps:[["Categoría I","Eritema no blanqueable"],["Categoría II","Pérdida parcial, flictena"],["Categoría III","Pérdida total, grasa visible"],["Categoría IV","Hueso, tendón o músculo"]]}},

E54:{n:[["Queso suizo","Reason: el error atraviesa los agujeros alineados de varias barreras."],
["Dos datos, nunca la cama","Identificación con nombre y apellidos más fecha de nacimiento o número de historia."],
["ISBAR","Identificación, Situación, Background (antecedentes), Assessment (evaluación) y Recomendación."]],
d:{type:"pyramid",title:"Por cada evento adverso hay muchos incidentes sin daño",levels:[["Evento adverso","Incidente con daño"],["Incidente sin daño","Llega al paciente sin dañarle"],["Casi error","No llega al paciente"]]}},

E55:{n:[["1, 2–3, varias","Ayuda para las ABVD: grado I al menos 1 vez al día; II, 2–3 veces; III, varias veces y apoyo continuo."],
["BVD: 25 · 50 · 75","Puntos del baremo para los grados I, II y III."],
["IMAS","Gestiona la dependencia en la Región de Murcia."]],
d:{type:"scale",title:"Baremo de Valoración de la Dependencia (BVD)",segs:[{l:"Sin grado",r:"< 25",t:"muted",w:25},{l:"Grado I",r:"25–49",t:"accent",w:25},{l:"Grado II",r:"50–74",t:"warn",w:25},{l:"Grado III",r:"75–100",t:"bad",w:26}]}},

E56:{n:[["240 = 4 × 60","El Grado son 240 ECTS: 4 cursos de 60."],
["EIR = 2 años","Las especialidades de Enfermería duran 2 años de residencia."]],
d:{type:"flow",title:"Itinerario formativo",steps:[["Grado","240 ECTS"],["Especialidad EIR","2 años de residencia"],["Formación continuada","Créditos acreditados"],["Carrera profesional","Grados de desarrollo"]]}}
});
