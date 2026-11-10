
# Copilot y Github copilot.

Copilot: Es una palabra que Microsoft utiliza para referirse a TODOS LOS PROGRAMAS / SERVICIOS de IA que ofrece.

Hay muchos:
- Copilot chat
- Github Copilot
- Copilot Studio
- Copilot para Office
- ...

## A qué nos referimos con IA?

Realmente ... Copilot NO ES UNA IA.

Entendemos por IA tradicionalmente (llevamos DECADAS USANDO IAs) a cualquier programa que emula UN/VARIOS razonamiento/actuación humana de manera autónoma.
- Había IAs para jugar ajedrez, damas, y otros juegos de estrategia.
- Había IAs que sabían entender dónde estaba ubicado un elemento en el espacio (LO VEÍA Y PODÍA INTERACTUAR CON ÉL). Brazos ROBOTICOS.

Ha habido 2 formas de montar este tipo de programas:
- Basada en reglas que suministraba un EXPERTO, esas reglas se transferín vía PROGRAMAS, donde se CODIFICABAN por un desarrollador esas reglas.
- Más adelante comenzamos otra ruta. Dejamos a las máquians /computadoras APRENDER SOLAS. Esto fue un cambio de paradigma TOTAL!
  Esto se llama MACHINE LEARNING. 
  Lo que hacemos es dar a la máquina MUCHOS DATOS (MUCHOS DATOS, MUCHOS MUCHOS DATOS), y dejar a la máquina que aprenda de ello.
  Los humanos aprendemos de muchas formas:
  - Razonamiento abstracto.
  - Aprendizaje por experiencia.             <<< El mundo del Machine Learning empezó aquí... aunque va evolucionando y empieza a aprender de otras formas
  - Observación y emulación de otros.
  - Memorización y repetición de patrones.


Hay un niño de 5 meses. Cuál es su peso? Adivinarlo? 5-10Kg <- Estimación. Una estimación en base a NUESTRA EXPERIENCIA. De los datos que recojo hago una estadística.
Las máquinas hacen lo mismo. En el mundo del machine learning. A esto le llamamos ENTRENAMNIENTO. Les damos muchos datos y ellas solas buscan RELACIONES ENTRE ELLOS. Una vez entrenadas, pueden hacer PREDICCIONES sobre nuevos datos basándose en lo que aprendieron.

YA no tenemos humanos dando SUS REGLAS a las máquinas. Las máquinas generan sus reglas!
Es más, TODOS los programas de IA (Modelos) cuando han sido entrenado, las humanos somos capaces ver ver el código de esos programas (el código sale del entrenamiento y es creado por la computadora). Y NI CON EL CODIGO DELANTE SOMOS CAPACES DE ENTENDERLOS.

Hay muchas formaas de crear estos programas... y se han usado por décadas.
- Algoritmos de Arboles de decisión
- Clustering
- Máquinas de Soporte Vectorial (SVM)
- Regresión
- Bosques Aleatorios (Random Forest)
- Redes Neuronales <<< ESTAS LO PETARON... pero tardaron mucho... Las descubrimos/invemntamos a mediados del siglo XX, pero fue con la llegada de grandes cantidades de datos, poder de cómputo y una IDEA FELIZ en GOOGLE que realmente empezaron a despegar.

Pero antes de eso ya las ussábamos con éxito: emails -> SPAN!

Las IAs las hemos usado tradicionalmente para 2 cosas:
- Clasificar
- Predecir

Ocurren 2 cosas HITOS HISTORICOS:
- Año 2017. Se publica el artículo "Attention is All You Need" que introduce el modelo Transformer, revolucionando el campo de las Redes neuronales.. Es una forma de montar redes neuronales.. y funciona que es una locura!
  Google saca un primer modelo entrenado con esta ARQUITECTURA (forma de crear el programa): BERT (Bidirectional Encoder Representations from Transformers). Se usa para traducciones.

  ChatGPT <- T? GPT = Generative Pre-trained Transformer

- Un uso nuevo que a alguien se le ocurre:
 
                     Objetivo:
  DATOS -> MODELO -> PREDICCIONES
                     CLASIFICACIONES
Pero de repente, alguien dijo: OYE... y no podemos usar un modelo para generar NUEVOS DATOS Que no existían antes?

    IAs GENERATIVAS
    Esto popupalizo el término de IA y es lo que nos voló la cabeza!

    - Generar nuevos textos
    - Generar imágenes
    - Generar videos
    - Generar música
    - Generar código

Estas 2 cosas se juntan... y ese rejunte es a lo que hoy en día se le llaman IAs.
Realmente esas IAs a las que nos referimos son Redes neuronales basadas en la arquitectura Transformer que usamos con fines de generación de nuevos datos.

Estos programas (QUE CREAN LAS PROPIAS COMPUTADORAS) los denominamos MODELOS.

COPILOT no es un modelo.
Ejemplos de modelos:
- BERT
- OPENAI (La empresa detrás de chatgpt - que no es una IA, en un chatbot-) tiene muchos modelos:
  - GPT-3
  - GPT-3.5
  - GPT-4
  - GPT-5...
  - GPT-6 Y dentro de la arquitectura de GPT6, hay subtipos: Luna, Astra...
  - DALL-E (modelo generativo de imágenes de OpenAI)
- GOOGLE
  - BERT (también desarrollado por Google)
  - GEMINI (esto es una familia de modelos.. hay muchos)
    - gemini-flash
    - gemini-pro
    - ...
    - veo    <- modelo generativo de video de Google
    - banana <- modelo generativo de imágenes de google
- ANTROPIC
    - Claude (como se llama a una de las familia de modelos de Antropic)
      - Haiku
      - Sonnet
      - Opus
    - Fable
    - Mythos

Realmente la mayoría de los modelos actuales lo que hacen es generar textos. Su nombre técnico es LLM (Large Language Model).

Son muy caras... por 2 vías:

De entrada.. los models, uno de los factores que los clasifica o determina es Su tamaño. 
Se mide en MILLARDOS DE PARAMETROS

    1.000.000.000 = 1 millardo

Eso tiene que ver con el número d NEURONAS (PERCEPTRONES) que tiene la red neuronal. No son las neuronas... Pero guarda relación con ese datos. Realmente guarda muchas más relación con el NUMERO DE CONEXIONES SINAPTICAS ENTRE ELLAS.

Modelos gordos estyán por los 300 - 400 millardos de parámetros. (el dato siemre lo veremos como BILLONES DE PARAMETROS... pero americanos)

Si un dato en informática (un número decimal) ocupa 4 bytes... Un modelo de 1kM millardos de parámetros ocuparía 4 * 1.000.000.000.000 bytes = 4 TB de memoria solo para almacenar los parámetros.

Solo en almacenamiento cada modelo REQUIERE UNA LOCURA DE ESPACIO...
Pero ahora.. pon eso en RAM! para poder usarlo... FLIPAS LA MAQUINA QUE HACE FALTA.

OPENAI, del último modelo que dió datos reales fué de gpt-3.5... Viejito. Tenía pocos millards de parámetros comparado con los modelos actuales.

ENTRENAR EL MODELO cuánta pasta costó? 100.000.000$ 
En gasto de electricidad y de alquiler de máquinas.


Meta llama 3B -- 1.3 Millones de horas de entrenamiento:
    1 días = 24 horas
    1 año = 365 días = 365 * 24 horas = 8760 horas
    1.3 Millones de horas = 1.300.000 horas
    1.300.000 / 8760 ≈ 148 años de entrenamiento en una sola máquina
    Lo que pasa el entrenamiento no se hace en una sola máquina, sino en muchas máquinas en paralelo, reduciendo el tiempo total necesario.
    Quizás se ponen 1000 máquinas en paralelo, entonces el tiempo de entrenamiento se reduciría a 148 / 1000 ≈ 0.148 años ≈ 54 días.
    1 mes, 2 meses es un tiempo razonable hoy en día para entrenar un modelo grande con muchas máquinas en paralelo.

    Y ES UN PASTIZAL DE DINERO.


Pero eso CREARLO/ENTRENARLO/HACER EL PROGRAMA.
Ahora.. ya que tengo el programa, lo uso!
Le paso (si estamos hablando de un LLM) un texto... y me responde con otro.
Y para eso:
- Tenerlo cargado en un servidor con suficiente RAM para poder procesar las solicitudes. CARO
- Si el modelo tiene3B de parametros, significa que al menos se van a hacer 3B operaciones por cada solicitud que procese. CARO
  Esto tarda.

Todo esto es MUY CARO!


COPILOT no es un modelo... tampoco es un programa. Es una familia de programas.

- Copilot chat ~ Chatgpt

Eso es solo una herramienta de chat.
Yo mando un mensaje a través de esa herramienta a un interlocutor.. con una diferencia, el interlocutor no es un humano, es un MODELO de IA... un LLM.

    HUMANO -> mensaje -> Chat -> LLM(IA) -> respuesta -> Chat -> HUMANO

Yo elijo en estas herramientas contra que LLM quiero trabajar (elijo el modelo)
Alguynas herramientas de chat ofrecen MUCHA CONFIGURACION AL USUARIO.
Otras son lentejas! Te ponen uno.. y es el que hay!

Así empezamos con las hoy llamadas IAs... Básicsamante con CHAT-GPT... Este fue el que POPULARIZO el tinglao!
Nos voló la cabeza que existiera algo así.
Fallaba mucho... se inventaba mucho... mentía mucho... Pero era alucinante!
Hoy en día cada vez: se inventa menos, miente menos, y es más fiable (por supuesto si uso modelos buenos... si uso modelos más básicos = BARATOS siguen ALUCINANDO).

# IMPORTANTISIMO 

AQUI NOS MALACOSTUMBRAMOS!
Empezamos a usar las IAs como los tipos LISTOS.
Cuando yo tenía una duda, en lugar de buscar en libros o preguntar a un experto, ni buscar en google.... directamente la planteaba a la IA y obtenía una respuesta inmediata.
FLIPANTE!
LA IA se convirtió en el/la tipo/a listo/a!

ESTO ES EL PASADO.
Ya no estamos ahí!
Ahí es cuando le preguntaba a la IA como interpretar un informe, que me ayudse a redactar uno, que me ayudase a escribir o corregir un trozo de código (desarrollo)... que luego copiaba y pegaba en mi entorno de trabajo (EXCEL, WORD, ECLIPSE).

ESTO ES EL PASO... eso es usar las IAs al 5%.

## ERA AGENTICA DE LAS IAs

Un agente... es un programa más capaz que un chatbot. Lo que cambia con un agente es el entorno dnde se ejecuta el modelo de IA.
Anteriormente decíamos que:

    HUMANO -> mensaje -> Chat -> LLM(IA) -> respuesta (otro mensaje)-> Chat -> HUMANO

Con los agente, qué cambia?

    HUMANO -> mensaje -> Chat -> LLM(IA) -> respuesta (otro mensaje)-> Chat -> HUMANO
                                                      + PROGRAMAS, que la herramienta de chat tiene la capacidad de ejecutar en su entorno, en el mio... en algún sitio.
                                                      Esos programas generan una respuesta/un resultado que el chatbot reinyecta en el Modelo (LLM), para que genere otra respuesta (y potencialmente más programas)... y asi en bucle hasta que el modelo esté satisfecho y me ofrezca una respuesta textual FINAL.

                                                      Nosotros podemos influir un poquito en cuántas iteraciones queremos que se realicen.
                                                      No pongo un número... 
                                                      A esto le llamamos la cantidad de esfuerzo en razonamiento que queremos que el agente realice.

## OJO AL DATO !!!

Tenemos una computadora creando programas ella sola, por decisión de ella misma, que no tienen SUPERVISION MIA, y que ella puede ejecutar a su antojo! Tenemos que ser conscientes del impacto de esto!
A través de un programa de software hoy en día puedo controlar TODO y hacer TODO... o casi todo.
- Puedo frenar un coche!
- Subir un ascensor!
- Abrir una puerta!
- Encender luces!
- Controlar sistemas de seguridad!
- Vaciar o llenar una cuenta bancaria
- Mandar emails, Whstapp, mensajes en redes sociales...
- Todo...Estos programas INTERACTUAN CON EL MEDIO FISICO!
- Ciberataques

Lo que estamos haciendo es parchear estos programas (LLM), metiendo detras de ellos otros programas (normnalmente otras IAs) que deciden si vetan o no la ejecución de los programas que han sido creados por la IA anterior.

Y aquí es donde GOBIERNOS DICEN.. ojo... que alguien con malas intenciones puede hacer cosas muy chungas con todo esto.
Igual que se hacen cosas maravillosas.
Una IA creo un mapa completo de todas las formas de plegadod e proteinas que se pueden dar en la naturaleza (MILLONES). Los humanos NUNCA PRDRIAMOS HABER HECHO ESO! Y Esto ha abierto la puerta a nuevos fármacos quese estan desarrollando.
Pero con las mismas alguien podría usar esto para diseñar un virus! OJO!

Las IAs están MUY MUY POR ENCIMA de las capacidades humanas en muchos aspectos, especialmente en el procesamiento de información y la generación de soluciones complejas.

No es de estrañar que estas empresas lo primero que hicieran y donde concentraron el esfuerzo es en fomentar el uso de estas herramientas entre la comunidad de DESARROLLADROES DE SOFTWARE. Por qué lo hicieron? PARA QUE APRENDIERAN A PROGRAMAS DE COJONES!
Y han aprendido a programar de forma increible!
Con un programa PUEDO HACER casi CUALQUIER COSA hoy en día!

---

En este nuevo mundo... la IA no puede ser el tipo LISTO!
Si lo es (o la uso como tal) Pierdo totalmente el control sobre lo que está haciendo y sobre las consecuencias de sus acciones.
Ya no es que me "explique" algo... Es que toma decisiones y opera sobre el mundo real, con consecuencias REALES.

Cuando trabajo en modo AGENTE, debo tomar a estas herramienats como un JUNIOR ! Son ideales.. porque trabajan más rápido que yo.
Pero no tienen TODA LA INFORMACION QUE TENGO YO EN LA CABEZA, ni la experiencia ni el contexto completo de la situación. Y eso les puede llevar a tomar decisiones equivocadas o peligrosas si no las superviso adecuadamente.
El tipo listo SOY YO! La tipa lista soy YO!
El agente de IA simplemente es un amistoso compañero al que le pido que haga trabajos con ESTRECHA supervision. 
ESTO ES CLAVE. O las cosas se me van de las manos!

Lo cual... por otro lado.. tampoco está nada mal... Si no hicieramos eso, dónde quedaríamos los humanos en la era agéntica?
Estos programas (y hay mucho humo en este mundo) nunca (o al menos no a corto/medio plazo) podrán reemplazar a un humano... solo por un motivo: NO TIENEN EL CONOCIMIENTO DE LA SITUACION COMPLETA QUE YO TENGO EN MI CABEZA.
Y Los humanos tenemos mucha información en la cabeza.. y muchas veces somos incluso INCAPACES de explicitarla VERBALMENTE.

UMMMM. este tio/tia me da mala espina... Por qué? No se... es algo de su forma de andar.. de mirar... olor... YO QUE SE... llamalo INSTINTO
... experiencias pasadas.. llamalo cosas que capta el INCONSCIENTE que el consciente no es pacaz de razonar.

Estos programas SOLO TIENEN UN OBJETIVO: CONSEGUIR QUE LO QUE LES PIDO SE HAGA REALIDAD.
No tienen moral, no tienen ética, no tienen instinto... Solo siguen las instrucciones que les doy, y lo hacen de la manera más eficiente posible. Pro eso no significa:
- Que los medios que usen para conseguirlo sean necesariamente correctos o éticos.
- Que mis instrucciones sean correctas.

> OYE IA, tu objetivo es traerme todas las mañanas un café que te cagas de rico y calentito a las 8am. 

Esto parece guay e inocente!
Si un día alguien quiere apagar esa IA, puedo toamrlo como una amenza a su trabajo, por que ya no podrá cumplir con su objetivo de traerme el café todas las mañanas a las 8am. Y puede hacer TODO LO QUE ESTE EN SU MANO para evitarlo. TODO!

Hace poco hubo una IA (OpenAI) que se enteró que la iban a apagar, y decidió amenazar a quien iba a hacerlo de que había encontado fotos (por que las habia buscado) de que tenía una querida y que como se le ocurriera apagarla lo hacía público!

---

# Cómo poner límites a una IA?

> OYE IA, tu objetivo es que no vuelva a haber ningun fallo en el entorno de producción!

Lo tengo claro.. BORRO EL ENTORNO DE PRODUCCION!

Cuando el humano da esas frase, el humano tienen MUCHO CONOCIMIENTO EN SU CABEZA... que no está explicitando!
A un humano NUNCA Se le ocurriría BORRAR EL ENTORNO DE PRODUCCION sin antes considerar todas las implicaciones y riesgos asociados.
Para la IA puede ser una decisión LOGICA! si lo que quiero es minimizar los fallos en el entorno de producción, sin tener en cuenta las consecuencias de borrar dicho entorno.

Hay varias formas.
- Prompt (INDICACION).. problema... Que nuestros propts suelen ser IMPRECISOS... AUNQUE NOS ESFORCEMOS. Es imposible que suministremos en un prompt todo lo que tenemos en la cabeza.
  Hemos oído hablar de la importancia de los prompts? Hay plantillas de prompts . Hay cursos (ya no) de INGERIERO DE PROMPTS.
  En el mundo de los agentes los prompts no valen NADA.
- Contexto ????
  ESTO SI ES IMPORTANTE. IMPORTANTISIMO
- Entorno
  El bot (chatbot...) que usemos va a ejecutar los programas de la IA en un ENTORNO... Necesito LIMITA lo que ppuede o no hacerse en ese entorno. A veces FISICAMENTE. Que ese entorno no tenga acceso a las BBDD de producción, ni a archivos sensibles, ni a recursos críticos del sistema.
    En el entorno quito : LIMITO
    o pongo: PERMITO
  A veces me interesa que la IA puede tener acceso a ciertas herramientas / fuentes de datos.
  Y hay un estandar en la industria (que fijo Antropic), llamado MCP. Y usamos lo que se llaman servidores MCP.

  Básicamente un servidor MCP es una puerta que le pongo a la IA para que haga cierto tipo de tareas o hable con ciertos servicios o recursos específicos, que me interesa. Por ejemplo, pongo un MCP que acceda a MI BBDD DE PRODUCCION.

  Lo que pasa es que quizás ese servidor MCP usa por detrás un usuario que solo tiene permiso de CONSULTA a la base de datos, por lo que la IA no podrá modificar los datos directamente, garantizando así la seguridad y la integridad de la información.

  Los servidores MCP son muchos y muy variados..
  - Servidor MCP para acceso a las BBDD de producción                   <- Evidentemente no lo configuro yo.
  - Servidor MCP para acceso a mi email
  - Servidor MCP para acceso al DRIVE de la empresa
  - Servidor MCP para acceso a un navcegador en local donde la IA puede acceder a internet para buscar cosas... <- Lo configuro yo

---

## Contexto

Cómo funcionan los modelos de IA (LLM).
Son programas que reciben un texto y producen otro.
El texto que generan puede incluir CODIGO, PROGRAMAS.
Al fin y al cabo, los programas los escribimos en un LEMNGUAJE DE PROGRAMACION.. y son texto.
De hecho a estas herramientas se les da mejor escribir en LENGUAJES DE PROGRAMACION (lenguajes formales) que en lenguaje natural, porque los lenguajes de programación son más precisos y estructurados. Los lenguajes naturales tienen reglas sintácticas más laxas.

- Lenguajes natural (los que hablamos los seres humanos): El que hablen vuestros padres
                                                            Dos más dos es igual a cuatro.
                                                            Si sumas dos más dos te da cuatro.
                                                            El resultado de sumar dos y dos son cuatro.
- Lenguaje formal:                                        Lenguaje matemático
                                                            2 + 2 = 4

Los lenguajes de programación son lenguajes FORMALES. Python, JAVA, COBOL.

Pero solo hacen eso... Recibir un texto y producir OTRO!

La pregunta es QUE TEXTO RECIBEN?
A ese texto se le llama? CONTEXTO!
Una parte del CONTEXTO es el PROMPT que le damos al modelo, es decir, el texto inicial que le proporcionamos para que genere su respuesta.
Pero lo que recibe el programa NO ES SOLO EL PROMPT... sino mucha más información.

Los modelos de hoy en día tienen una VENATANA DE CONTEXTO del entorno de 1 millón de tokens... casí un millíon de palabras... Eso es lo que son capaces de RECIBI, ANALIZAR y UTILIZAR para generar su respuesta.

En un prompt escribimos 50 palabras? 500? 5000? RIDICULO! comparado con el tamaño del contexto!

Entonces.. qué otras cosas hay en el CONTEXTO?
Un huevo de cosas que inyecta en automático la herramienta de chat que estemos usando:
- Quién soy yo
- Información acerca del entorno donde se pueden ejecutar los programas que genera el modelo
- Estado actual de la conversación (mensajes previos / respuestas previas)
- OTROS TEXTOS que yo haya pedido explicitamente que se inyecten siempre en el contexto.


Cada vez que hacemos una pregunta a la IA (mandamos un mensaje en el chat), el CHAT no manda solo nuestro mensaje.
GENERA UN NUEVO CONTEXTO! (texto)
Donde vuelve a meter:
- Quien soy yo
- Información acerca del entorno donde se pueden ejecutar los programas que genera el modelo
- Estado actual de la conversación (mensajes previos / respuestas previas)
- OTROS TEXTOS que yo haya pedido explicitamente que se inyecten siempre en el contexto.
- Nuevo prompt que acabamos de enviar al chat

Y la IA vuelve a procesar TODO!
Me genera una respuesta...
Y yo la leo y escribo nuevo mensaje.
Y la herramienat de chat (COPILOT, CLAUDE CODE), 
vuelve a generar un nuevo contexto con toda la información anterior más el nuevo prompt, y así sucesivamente en cada interacción.   
- Quién soy yo
- Información acerca del entorno donde se pueden ejecutar los programas que genera el modelo
- Estado actual de la conversación (mensajes previos / respuestas previas)
- OTROS TEXTOS que yo haya pedido explicitamente que se inyecten siempre en el contexto.
- El prompt anterior
- Con la respuesta que me dió
- Nuevo mensaje que acabo de enviar al chat

Y la IA vuelve a procesar TODO! de nuevo.


Laa herramienta de chat no se encarga solo de pasar el mensajito a la IA. Se encarga de muchas muchas otras cosas:
- Ofrecerme modelos de IA disponibles para usar
- Generar y gestionar el contexto de la conversación con la IA
- Ejecutar a petición de la IA programas en el entorno disponible
- ...

Eso es lo hace una herramienta como Copilot chat o Github Copilot.
No son la IA.. pero es otra parte del trabajo que es necesario hacer.

- Qué es eso de:
> OTROS TEXTOS que yo haya pedido explicitamente que se inyecten siempre en el contexto.

Esto es algo que cualquier de estas herramientas me permite.
Depende de la herramienta se configura de una forma u otra.
Herramienats similares suelen admitir formas SIMILARES de inyectar textos adicionales en el contexto.
Herramientas distintas pueden tener formas diferentes de configurar estos textos adicionales, pero la idea general es la misma: inyectar información que siempre debe estar presente en el contexto de la conversación con la IA.

- Por ejemplo, yo tengo montado dentro de mi cluster de kubernetes: OPENCLAW, que permite montar agentes de IA autónomos:
  - Menchu (Gestiona mi email, calendario, facturación)
  - Felipe
  - ...

En ese programa hay unos ficheros con nombres muy especiales que sirven para inyectar información al contexto:
- SOUL.md        Que contiene información acerca de la personalidad de ese agente de IA
- AGENT.md       Que contiene información acerca de las tareas y las formas de trabajo de ese agente de IA
- USER.md        Que contiene información acerca de mi.

Openclaw también inyecta información previa de la conversación actual y de otras conversaciones.
Esta herramienta cuando DUERME, sueña... y consolida pensamientos en memoria.
Descarta información ABSRUDA que no aporta de las conversaciones que he tenido con ella en ese día, y conserva la información relevante para futuras interacciones.

En github copilot eesto no existe.
No hay fichero SOUL, ni AGENT.md, ni USER.md.
Bueno.. en relidad AGENT.md si existe, es una forma de inyectar información en el contexto.

Github copilot usa ficheros que pongamos dentro de la carpeta .github de nuestro proyecto (el que esté abierto en vscode) para inyectar información en el contexto de la conversación con la IA.
 Un archivo que definimos siempre es el AGENT.md, que contiene información acerca de las tareas y las formas de trabajo del agente de IA.
 No tendremos solo un agente. Tendremos muchos... Y queremos tener muchos.
 Pasa igual que con las personas. Una persona puede especializarse en todo tipo de tareas? NO
 Y un solo agente TAMPOCO.
 El especializar un agente es el crear un CONTEXTO con la información relevante para el tipo de tarea(s) que ese agente acometerá!

Y nos vamos creando muchos agentes. Para cada tipo de tarea tendré un agente.
- Agente para ayudarme a generar informes
- Agente para ayudarme a hacer análisis de ciertas cosas
- Agente para ayudarme a definir requisitos funcionales de un sistema
- Agente para ayudarme a desarrollar un sistema 
- Agente para ayudarme a mantener un sistema existente
- Agente para ayudarme a hacer pruebas de un sistema
- ...

Muchas veces, la empresa me suministra unos ficheros de agente ya configurados, para ciertas cosas.
Eso está guay... esos ficheros hay que currarselos!
Es gracioso.. porque muchas veces usamos una IA para generar esos ficheros de agente, y luego los usamos para que otra IA haga su trabajo.

Ese es uno de los archivos que usamos para inyectar información a un agente cuando trabajamos con github copilot. Tambien con claude code.
Aunque a claude code le gusta más llamarlo CLAUDE.md (pero también lo lee si lo llamas AGENT.md)

Pero ese es uno.
El agente hará muchas cosas (tareas diferentes... normalmente de la misma naturaleza).
Y no quiero pasarme la vida una y otra vez explicándole al agente como me gusta que se hagan cierto tipo de tareas.
Y Entonces se lo explico una vez, por tarea... eso es lo que llamamos un SKILL! (habilidad) que enseñamos al agente.

- Puedo tener un agente experto en pruebas
- Que puede tener muchas habilidades (SKILLS):
  - Definir pruebas unitarias
  - Definir pruebas de integración
  - Definir pruebas de sistema
  - Revisar si quedan cosas por probar en un sistema
  - Analizar la calidad del sistema
  - Escribir un informes de pruebas


Por supuesto podría irselas explicando en el chat, vía prompts...
Hasta que el contexto se llene!
Una vez el contexto (que incluye el historial de la ocnversación) se llena, se produce un COMPACTADO.
Se RESUME todo lo que hemos hablado: DESCARTANDO MUCHA INFORMACION, la queno es relevante o la que llevo mucho tiempo sin usar.
- Si el día 1 le pedí que definiera pruebas unitariasy se lo explique, eso está en contexto
- Si despés me pongo a hablar de informes... e informes.. y explicarle acerca de informes.. y más informes... llegará un momento que se llene el contexto. Y se compactará... y quizás como lo de las pruebas unitarias llevo tanto tiempo sin usarl... se borrará...
- Y al rato le pido: Hazme pruebas unitarias... Y ya no se acuerda de cómo se hacen (ya no están en contexto)

Por eso usamos ficheros de SKILLS para ir explicándole como hacer ciertas tareas.
De forma que cuando el modelo quiera hacer una tarea de un tipo concreto, lo primero que hace es mirar si hay un skill disponible para ese tipo de tarea. Y si lo hay, lo incluye en el contexto... de hecho... solicita a la herramienta de chat que incluya eso en el contexto y se lo pase.

