
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

En este nuevo mundo... la IA no puede serel tipo LISTO!
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


