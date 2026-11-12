
# IA

Copilot es una IA? NO

Qué es Copilot? Es una palabra que agrupa MUCHAS HERRAMIENTAS/SERVICIOS que tienen que ver con IA en Microsoft. La familia de MS Copilot incluye herramientas/servicios como GitHub Copilot, Copilot Chat, y otras integraciones de IA en productos de Microsoft.

Realmente que es la IA?
Programa que despues de entrarse realiza una tarea simulando razonamientos humanos.
A día de hoy ese término lo aplicamos casí en exclusiva a MODELOS GENERATIVOS, que son modelos entrenados para generar contenido nuevo a partir de datos de entrenamiento.

Los más famosos/usados son los LLM (Large Language Models), que son modelos de lenguaje de gran tamaño entrenados con enormes cantidades de texto para generar respuestas TEXTUALES coherentes y contextualmente relevantes.

Yo les paso un TEXTO y ellos devuelven otro TEXTO.

Pero hay muchos:
- Modelos de generación de video:
  - Modelos de texto a video
  - Modelos de imagen a video
- Modelos de generación de imagen:
  - Modelos de texto a imagen
  - Modelos de imagen a imagen
- Modelos de generación de audio:
  - Modelos de texto a audio
  - Modelos de imagen a audio
- Modelos que generan texto desde audios            (transcribir)
- Modelos que generan texto desde una imagen/video  (describir)

Dentro de los LLMs (modelos de texto) algunos famosos:
- OpenAI                GPT
- Anthropic             Claude, Fable, Mythos
- Google                Gemini
- X                     Grok
- Meta (Facebook)       LLaMA

Dentro de cada familia hay: Modelos más o menos grandes y que van evolucionando en distintas versiones a lo largo del tiempo.

    CLAUDE:
        pequeños: Haiku     4.5 4.6 5.0
        medianos: Sonnet    4.5 4.6 5.0
        grandes:  Opus      4.5 4.6 5.0

    Fable 5.2 (recién salido) Ahora mismo es el modelo más potente que existe en el mundo según los test.

    Ha superado al anteriormente más listo: Google Gemini 4. Que salió hace 2 semanas... Ese es el tiempo que le ha durado a Google ser el número 1.

    Este superó GPT 6.1 Astra (que le duró un mes el reino.)

---

Nosotros hablamos/escribimos directamente con estos modelos?
NO. Lo hacemos a través de herramienats...normalmente de tipo chat.. aunque no solo.

Ejemplos:
- GitHub Copilot (integrado en editores de código)
- Copilot Chat (integrado en productos de Microsoft)
- Openclaw
- Otras aplicaciones que usan LLMs para generar contenido a partir de texto, imagen, audio, etc.

Estas herramientas han evolucionado para facilitar la interacción con los modelos de IA. Antiguamente la respuesta que el modelo ofrecia a una pregunta mía, estas herramientas me la devolvían directamente.

Pero esto cambió hace tiempo ya (más de un año).

Hoy en día estamos en lo que llamamos la ERA AGENTICA!

# Agente de IA


    NOSOTROS                        AGENTE DE IA / ENTORNO DE EJECUCION

                                    chat            modelo          otros programas
    ---------------------------     ------------------------------------------------
    mensaje/pregunta/tarea     ---> github copilot + claude opus + terminal donde escribir comandos
                                                                 + navegador de internet        |
                                                                 + intérprete de python         |  MCP
                                                                 + otras herramientas externas  |
    Y el modo de funcionamiento cambia.
    - Yo mando mensaje/tarea al agente de IA
    - La herramienta de chat toma el mensaje y lo manda al modelo
    - El modelo genera una respuesta, que puede contener:
      - texto
      - programas / comandos que quieran ejecutar
    - En caso que se manden progrmas por parte del modelo, el chat los ejecuta en el entorno correspondiente 
      y devuelve el resultado al modelo.
    - El modelo decide con ese resultado que hacer después, generando una nueva respuesta, que de nuevo puede contener texto o programas a ejecutar. Y ASI EN BUCLE
    - Cuando el modelo considera que ha completado la tarea, genera una respuesta final 
    - Que la herramienta de chat nos enseña.

En este modelo, hay un cambio ENORME de planteamiento.
No es que la herramienta (agente/IA) me consteste... es que HACE COSAS por mí.
COSAS que pueden tener impacto en el mundo real.

Esto es peligroso. No ya porque vaya a aniquilar la humanidad.
- Sino porque me puede borrar el disco duro de la computadora.. y dejarme sin archivos.
- O borrarme todos mis emails
- O mandar un email comprometido con información sensible a alguien sin que yo lo autorice.
...

Cuando trabajamos de esta forma (con agentes) hay que tener mucho cuidado!

Lo más importante establecer muchos límites a la acción del agente de IA:
- Limitando FISICAMENTE el entorno de trabajo disponible
- Dando reglas MUY CLARAS de cosas que puede hacer y de cosas QUE NO DEBE HACER BAJO NINGUN CONCEPTO!

Pero... cómo damos tanta regla? En un prompt no escribimos tanto? CONTEXTO

# Qué es el contexto?

El contexto es el TEXTO que recibe el modelo de IA cada vez que el chat le manda algo (un mensaje mio o la salida de una herramienta).
Las IAs (los modelos, especialmente los LLM) lo que reciben es un TEXTO y producen otro TEXTO.
El texto que receiben es el CONTEXTO.
El prompt que yo escribo no es directamente lo que recibe la IA.
El prompt pasa a formar parte del contexto!

El chat, al generar el CONTEXTO incluye al final de todo ese contexto el PROMPT que yo he pasado.
PEro el prompt suelerepresnetar menos de un 1%..incluso de un 0.1% del contexto total.

El otro día mandé un mensaje de 7 palabras... y en contexto había 21k palabras.

7/21000 ≈ 0.033%


    YO(Humano) --> prompt --> CHAT --> CONTEXTO                 --> MODELO
                                        (incluye el prompt )

Lo que pasa es que el contexto incluye muchas más cosas, además del prompt:
- Prompts anteriores + respuestas anteriores del modelo (HISTORIAL DE LA CONVERSACION)
- Instrucciones / límites que ponemos al agente (aque se crean mediante archivos de texto)
- Información del entorno y de las herramienats que el modelo tiene disponibles
- Información de servidores MCP disponibles.
- Información acerca de mi, mis preferencias.
- ...

Yo puedo influir en parte de esos datos.. NO EN TODO.
No es algo que yo controle directamente. Aunque si puedo INFLUIR en parte. Principalmente en:
- Instrucciones / límites que pongo al agente
- Información acerca de mi, mis preferencias
- Información de servidores MCP disponibles

Lo que pasa es que HAY QUE TENER MUCHO CUIDADO CON EL CONTEXTO ya que:
Cada modelo es capaz de manejar un determinado tamaño de contexto.
Hay modelos que pueden recibir 1M de tokens de contexto.
        Un token, en palabras es más o menos una palabra.
        Pero una imagen de 4Mbs ocupa muchos más tokens que una palabra. Lo que se mandan en este caso no son palabras, sino bytes.
Otros modelos solo les puedo pasar 200k tokens de contexto.

Ese contexto se va llenando. La herramienta de chat lo que suele hacer es ir ANEXANDO cada nuevo mensaje y cada nueva respuesta , cada salida de un programa que se ejecute al CONTEXTO ANTERIOR, para dar lugar al CONTEXTO SIGUIENTE.
Pero llega un momento que se llena... no lo lleno yo normalmente.. no escribo tanto.
Lo llena:
- Las respuestas del modelo (que esos si enrollan mucho)
- Las respuestas/salidas de los programas que la IA ejecuta.

Qué pasa cuando se llena.. Hay que RESUMIRLO (compactación del contexto) para que el modelo pueda seguir recibiendo nuevo contexto sin perder información importante.
Hay chats que te permite forzadamente hacer una compactación.. otro no... la hacen ellos. Normalmente no queremos que se haga en manual...
El problema es que se resume.. y al resumir se PIERDE información.
- Se pierde mucho del historial de la conversación.
- De lo que yo he dicho
- De lo que ella ha dicho
- Y entonces el agente ya no va a hacer lo mismo o al menos no de la misma manera.
- Y ESTO ES UN PROBLEMA 


Cuando tenemos un contexto muy grande también es problemático:
- En general los modelos recuerdan menos / le dan menos importancia a lo que hay por el medio del contexto.. y le dan más importancia a lo primero y lo último.
  Si lo pensaís es un poco lo que nos pasa a los humanos. Recordamos mejor el principio y el final de una historia, pero los detalles intermedios se nos escapan con facilidad.
- El otro problema es el COSTE de la petición. Los modelos cobran por petición.. y por tokens. Cuanto más envíe, más me cobran.

Hay que sopesar mucho, si me interesa compactar una conversación o no.
Teniendo en cuenta eso.. y teniendo en cuenta que SE PIERDE MUCHA INFORMACIÓN.

Por eso, nos interesa mucho usar archivos que inyecten al contexto cosas que SIEMPRE QUIERO QUE ESTEN AHI.

En la compactación lo que se resume es el historial de la conversación, incluyendo tanto lo que yo he dicho como lo que el agente ha respondido, para reducir el tamaño del contexto y permitir que el modelo siga recibiendo nueva información sin perder lo esencial.

Pero vuelve a entrar desde el principio:
- Instrucciones / límites que ponemos al agente (aque se crean mediante archivos de texto)
- Información del entorno y de las herramienats que el modelo tiene disponibles
- Información de servidores MCP disponibles.
- Información acerca de mi, mis preferencias.
- ...

Lo que ponga en esa parte del contexto (muchas veces se inyecta desde ficheros de texto) siempre está. NUNCA SE PIERDE... por eso es tan importante.

---

Cuando uso una de estas herramienats, la herramienta va aprendiendo de cómo yo quiero que se hagan las cosas... esa información está en el historial de la conversación, y si se compacta, puede perderse.

Por eso el COMO quiero que se hagan las cosas suelo ponerlo en ficheros que se inyecten SIEMPRE al contexto.

PROBLEMA... Que yo no soy una máquina. Yo soy humano.. Y muchas veces ni yo sé lo que quiero y menos cómo lo quiero. Y lo voy descubriendo en paralelo mientras hablo con la IA.

Por suerte le puedo decir al agente de vez en cuando... Oye, todo lo que has aprendido llevalo a un fichero XXXXX.md para así que quede registrado y no se pierda cuando se compacte el historial.

Esto es a nivel de chat. Por eso es muy importante abrir muchos chats.Si pongo todo lo que se me ocurre en un único chat... genero un contexto muy heterogéneo y difícil de manejar, y además corro el riesgo de perder información importante cuando se compacte el historial.

Lo que me interesa es que el contexto tenga información de un tipo de tarea/proyecto/tema.

Los AGENTES van generando una MEMORIA para perder lo menos posible cuando se haga compactación.
Los datos relevantes de cosas que han ocurrido son guardadas en ficheros de texto o en BBDD por las IAs.. y pueden consultarlas más adelante si lo necesitan.

---

ARCHIVOS IMPORTANTES con los que influir a nuestros agentes de IA que vamos a tener en un proyecto.

No todas las herramientas me permiten configurar esto. Y algunas me permiten hacerlo a traés de la propia herramienta, pero no mediante los archivos directamente.
Lo ideal es usar una herramienta que permita configurar y mantener archivos de contexto de manera directa, asegurando que la información relevante siempre esté disponible para los agentes de IA sin depender únicamente del historial de la conversación.

Una herramienta como VSCODE ES IDEAL para este propósito, ya que permite gestionar archivos de contexto de manera directa y mantener la información relevante siempre disponible para los agentes de IA.

---

En VSCode abriremos una carpeta.. para un proyecto en el que quiera trabajar:
- Desarrollo de software
- Proyecto de gestión de lo que sea
- Puede ser un análisis financiero que quiero hacer sobre unas cuentas...

En esa carpeta crearé un directorio llamado .github
Dentro de esa carpeta podré poner archivos y más carpetas.. que se usarán para fijar/influir en el contexto de los agentes de IA que trabajen en ese proyecto.

Todos los archivos que YO voy a editar en esa carpeta A PRIORI van a ser archivos con extensión .md

Pero esa extensión no es algo propio de las IAs. Es un formato llamado MARKDOWN que sirve para escribir documentación.

ES UN FORMATO ESTANDAR PARA DOCUMENTACIÓN, Y LAS IAs PUEDEN LEERLO Y ENTENDERLO SIN PROBLEMAS.

---

- Markdown: formato de documentación que humanos y las IAs pueden leer, escribir y entender fácilmente.
  Se basa en reglas que imponemos con caracteres especiales para dar formato al texto, como `#` para encabezados, `*` para listas y énfasis, y `` ` `` para bloques de código.

- Contexto: Todo lo que recibe la IA ademas de nuestro prompt... Nuestro prompt realmente es parte de ese contexto.
  Podemos influir en el contexto.

- Agent: Un agente de IA es:
   - Modelo de IA que procesa información y toma decisiones basadas en el contexto y las instrucciones recibidas.
   - Instrucciones que van fijas en contexto
   - Herramienta (Chat) que ejecuta tareas solicitadas por el modelo.
   - Funciona de forma ITERATIVA, con cadenas de razonamiento Las propias respuestas del modelo pueden ser entradas para que el propio modelo siga haciendo cosas.

---

En nuestro caso vamos a usar GITHUB COPILOT.
Es solo una herramienta más de las muchas que hay.
CODEX es otra herramienta de OpenAI (va incluida en chatgpt)
Claude Code es otra herramienta de IA que se centra en la comprensión y generación de código.

Cada herrameinta tiene sus convenciones. Sus formas de daar instrucciones y de interactuar con el contexto pueden variar, por lo que es importante familiarizarse con cada herramienta específica para aprovecharla al máximo.

Ahora bien.. hay algunas cosas en común entre todas estas herramientas.

---

En nuestro caso tenemos github copilot. Y lo que crearemos es una carpeta .github en la raíz de nuestra carpeta de proyecto.

"."? Cuando un archivo o carpeta comienza por ".", que significa? ES OCULTO
Muchos sistemas operativos por defecto no muestran los archivos que comienzan por un .

Eso de alguna forma nos da a enteneder que esa carpeta .github está destinada a contener configuraciones y archivos que no forman parte del contenido principal del proyecto, sino que influyen en cómo se gestiona y se interactúa con el proyecto, especialmente en el contexto de herramientas como GitHub Copilot.

Copilot usa un archivo llamado `copilot-instructions.md` dentro de la carpeta `.github` para almacenar información específicas del proyecto en el que estamos. Este le edito yo... manualmente o con ayuda de la IA.
Ese archivo es PROPIO DE GITHUB COPILOT.. otras herramientas , como claude code no lo leen. No lo usan en contexto.

NO SOLEMOS USARLO.
En su lugar hay una alternativa: AGENTS.md
Ese archivo es leído tanto por GitHub Copilot como por otras herramientas de IA que soportan el formato de agentes, permitiendo que estas herramientas comprendan y utilicen la información del proyecto de manera consistente.

Ese archivo VA FUERA DE LA CARPETA `.github`, en la raíz del proyecto, para que pueda ser accesible y utilizado por todas las herramientas de IA que soporten el formato de agentes.

Otra cosa importante es tener un archivo README.md en la raíz del proyecto.


| ARCHIVO                         | DESCRIPCIÓN                                                                                                |
|---------------------------------|------------------------------------------------------------------------------------------------------------|
| .github/copilot-instructions.md | Archivo específico de GitHub Copilot para dar instrucciones del proyecto.                                  |
| AGENTS.md | Archivo utilizado por múltiples herramientas de IA que soportan el formato de agentes para dar instrucciones aceca del proyecto. |
| README.md | Archivo de documentación principal del proyecto, generalmente contiene información general sobre el proyecto, describiendo el proyecto, objetivo y cómo usarlo. |  

README: Describir el proyecto, su objetivo, qué hace y cómo usarlo.
AGENTS ( o copilot-instructions): Dar instrucciones específicas del proyecto a las herramientas de IA que soportan el formato de agentes o a GitHub Copilot. <--- Comienzo a fijar límites y lo que espero de la IA en el contexto de este proyecto.
  Este archivo AGENTS.md se inyecta en el contexto de cualquier chat de cualquier AGENTE que trabaje en el proyecto.

---

Una cosa es mi proyecto (Descrito según el README.md)
Otra cosa son chats de IA que yo abra para trabajar cobre mi proyecto.
Pero esos chats actuarán en nombre de un AGENTE.
Puedo incluso tener 5 chats con el mismo AGENTE y 3 chats con otro AGENTE diferente, todos trabajando sobre el mismo proyecto pero con instrucciones específicas según el AGENTE que representan.

AGENTE! Pensad en la palabra.
Imaginad que me pongo en contacto con el centro de asistencia al usuario de mi banco.
A través de un chat. Y cuando conecto qué me decían hace 5 años? Espere que le pasamos con un AGENTE!
Es el mismo concepto.. Alguien al otro lado que me va a ayudar con mis problemas o con mis dudas...
Lo que pasa es que antes esos AGENTES eran humanos. Ahora esos AGENTES pueden ser herramientas de IA.

Una cosa es el chat que tengo abierto, y otra el AGENTE con el que interactúo a través de ese chat.

Imaginad que estoy reclamando 2 facturas a mi compañía de teléfono.
- Lo hago vía chat.
- Me atiende Menchu para ayudarme con ello.
- Me interesa abrir un chat o 2 en paralelo, uno con cada factura?
  Hay ventajas e inconvenientes en ambas: 
  - 1 chat:
    - Ventaja: Toda la información está en un solo chat, más fácil de seguir.
    - Inconveniente: Puede ser más difícil separar las conversaciones sobre cada factura.
        > Oye, que si que estaba mal la factura.. que te mandamos otra
        > EIN? CUAL? QUÉ FACTURA? 
  - 2 chats:
    - Ventaja: Cada factura tiene su propio chat, más fácil de organizar y seguir cada caso por separado.
        > Oye, que si que estaba mal la factura.. que te mandamos otra
        > OK.. éen que chat estoy y qué estoy tratando en ese momento?
    - Inconveniente: La información está dividida en varios chats, puede ser más difícil tener una visión global.

Me interesa con el tiempo tener más de un AGENTE dentro de cada proyecto.
Los agentes los voy ESPECIALIZANDO según las tareas o áreas de conocimiento que necesite cubrir dentro del proyecto.

Pensad que al agente le llega un CONTEXTO.
Si en ese contexto mzclo cosas de muchos temas distintos, el agente se liará con más facilidad y será menos eficiente en cada tarea específica.
Eso quiero evitarlo.
Montaré agentes especializados para cada área o tarea dentro del proyecto, evitando mezclar contextos y asegurando que cada agente sea eficiente en su función específica.

Lo que cambia entre distintos agentes es el CONTEXTO INICIAL... lo que se pone fijo al principio del contexto.
Luego cada agente en cada conversación (ya hemos dicho que puedo tener 5 chats con 1 agente abiertos) tendrá su propio contexto.. 


AGENTE: REVISOR
   Chat1: Revisar un documento A
    Contexto: INFORMACION ESPECIFICA DE MI PROYECTO + INFORMACION ESPECIFICA DEL AGENTE REVISOR + historial del chat1
   Chat2: Revisar un documento B
    Contexto: INFORMACION ESPECIFICA DE MI PROYECTO + INFORMACION ESPECIFICA DEL AGENTE REVISOR + historial del chat2 

AGENTE: TRADUCTOR
   Chat3: Traducir un documento C
    Contexto: INFORMACION ESPECIFICA DE MI PROYECTO + INFORMACION ESPECIFICA DEL AGENTE TRADUCTOR + historial del chat3

AGENTS.md = INFORMACION ESPECIFICA DE MI PROYECTO

Todos los agentes comparten ese fichero en el contexto inicial.

Podemos crear agentes especializados usando más archivos markdown. 

AGENTS.md                       INFORMACION ESPECIFICA DE MI PROYECTO
.github/
  agents/
    revisor.agent.md            INFORMACION ESPECIFICA DEL AGENTE REVISOR
    traductor.agent.md          INFORMACION ESPECIFICA DEL AGENTE TRADUCTOR
  skills/
    skill1/
      SKILL.md 
      Aquí podemos tener otros archivos:
        Programa.js
        Logo.png
    skill2/
      SKILL.md 
---

# Skills: HABILIDADES

Cada skill representa una capacidad específica/ habilidad que un agente PUEDE tener.
Podemos definir skills en archivos markdown dentro de la carpeta `skills/`.

Por ejemplo:

  skills/
    skill1/
      SKILL.md 
    skill2/
      SKILL.md 

Una habilidad es un PROCEDIMIENTO donde se explica la forma de hacer un tipo de tarea concreta! MUY CONCRETA:
Ej: Cómo generar un pdf desde un archivo markdown.
  AQUI ESTAN MIS DECISIONES acerca de cómo realizar esta tarea concreta.
  Las decisiones son mias! El agente pone las manos! Yo pongo el cerebro! Puedo pedirle a la IA que me cuente como lo haría ella... Y si me parece bien,uso ese procedimiento para la skill correspondiente. PERO DECIDO YO!

Las skills PUEDEN ser compartidas entre distintos agentes, de manera que varios agentes puedan utilizar la misma habilidad definida en un archivo markdown dentro de la carpeta `skills/`. O no!

---

Tanto los archivos de agente como los arhichos de skills van escritos en markdown.
MAS O MENOS!
Digo más o menos por que no son puro markdown.
Tienen 2 partes:
- Cabecera    YAML. Y Aquí ponemos algunos metadatos que necesita el chat, el agente o la skill para funcionar adecuadamente.
- Cuerpo      Markdown

En los archivos esas 2 partes se separaran por ---

Las 2 partes las edito yo.
La cabecera (en YAML) tiene un formato MUY RIGIDO. No puedo inventar.
El cuerpo (en Markdown) es más flexible y puedo escribir lo que me de la gana!

# Cabecera de un agente:

```yaml
# Nombre del agente... lo que saldrá en los desplegables, para elegir el agente adecuado.
name:           Felipe
description:    Para mi humano, entender lo que hace este agente y cuándo usarlo.
                Pero a su ves, otro agente podría mirar esta información para ver si le interesa delegar una tarea a este agente.
argument-hint:  The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# Ejemplos típicos de prompts que este agente podría recibir
#              - "Revisa este documento y dame feedback."
#              - "Corrige los errores en este texto."
# También se usa para autodescubrimiento de agentes.
# Si a un agente le pido "Revisa este documento y dame feedback.", quizás si encuentra a un agente experto en esto, le delega la tarea.
# Esos prompts no tienen que ser literales.
# Si usase luego algo como. "Echa un ojo a este archivo y me cuentas..." tambiénlo identificaría como un prompt relevante para este agente.
# tools:        ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
skills:         ['markdown-to-pdf'] # specify the skills this agent can use.
```

# Cabeceras de un skill:

```yaml
---
name: markdown-to-pdf
description: >-
  Convierte un documento Markdown en un PDF con formato cuidado (portada con
  degradado, tablas estilizadas, bloques de código con tema oscuro, emojis y
  diagramas Mermaid renderizados). Úsalo cuando el usuario pida generar,
  exportar o "montar" un PDF bonito/guapo a partir de un fichero .md. El tema
  por defecto es AZUL.
---
```
# 
La descripción se usa por el agente, para determinar cuándo debe aplicar un skill.

SKILL = PROCEDIMIENTO / FORMA CONCRETA DE HACER UNA COSA


---

En general LA FORMA ESTANDAR DE TRABAJAR NO ES :
Dia 1: Ponerme a escribir estos ficheros COJONUDAMENTE. NO CABO! Es imposible
Dia 100: Cuando acabo de crear esos ficheros.. Ya acabó el proyecto.

LO NORMAL: Hacer una definición mínima de los ficheros y luego ir iterando sobre ellos conforme avanza el proyecto. Y esa iteración se la dejamos a la propia IA.. aunque yo la iré revisando a veces.
Le diré a la IA cosas como:
- Este nuevo que te he contado es una reponsabildiad tuya. Anotalo en tu fichero de agente.
Este proceso que hemos seguido para hacer esto esta guay. Generate un skill con ello.
- Oye esto que acabamos de mofificar sobre el procedimiento de trabajo, actualiza el skill correspondiente.

Coy haciendo el desarrollo/mantenimiento de estos archivos a medida que voy trabajando.
ESTO ES LO NORMAL. Y LO MAS PRACTIVO y lo que mejor resultado da.

---

Adás de estos archivos hay otros interesantes que podemos configurar:

AGENTS.md                       INFORMACION ESPECIFICA DE MI PROYECTO
.github/
  agents/
    revisor.agent.md            INFORMACION ESPECIFICA DEL AGENTE REVISOR
    traductor.agent.md          INFORMACION ESPECIFICA DEL AGENTE TRADUCTOR
  skills/
    skill1/
      SKILL.md 
      Aquí podemos tener otros archivos:
        Programa.js
        Logo.png
    skill2/
      SKILL.md 


  prompts/
    prompt1.prompt.md
    prompt2.prompt.md

    Tareas que hago con frecuencia y quiero dejarlas muy claras

# Ejemplo de archivo prompt:

```yaml
---
description: define un nuevo requisito de mi aplicación
agent: nombre_del_agente
---
# Cuerpo
Lo primero será generar el nuevo requisito en el sistema.
Irá en un archivo markdown dentro de la carpeta correspondiente a los requisitos de la aplicación.

Después generas un gáfico mermaid con la información del nuevo requisito. ---> SKILL

Me montas un pdf con toda esta información. --> SKILL

```
Esto son procesos de más alto nivel, que podrían ivolucrar varias skills.


Los skills los podemos ver como TAREAS
Los PROMPTS los vemos como PROCESOS que coordinan varias TAREAS (algunas pueden tener skills asociada y otras no)

NOTA: OJO; Eso no implica que a su vez un SKILL pueda tener subtareas.

Son distintos niveles de agrupamiento.

> Ejemplo:

Me llega en PDF todos los meses, un informe... que incluye tablas de datos, gráficas... que debo analizar y emitir un informe

Quiero un prompt (PROCESO DE ALTO NIVEL) que diga: 
 Nombre/Descripción: Analizar nuevo informe mensual ...
 Tareas:
  - Vete a mi carpeta X y mira el ultimo informe que haya llegado y partimos de ese
    Vete a mi correo y busca por remitente: reportes@miempresa.com -> MCP
    Descarga el último informe recibido, revcisando que no haya sido procesado previamente.. o mira incluso si hay varios sin procesar.
  - Extraer información del pdf -> SKILL
  - Analizar los datos -> SKILL
  - Generar nuevo informe de resulados -> SKILL
  - Lleva un registro en el archivo INFORMES_PROCESADOS los informes que has procesado


SKILL: Extraer información del pdf
Tarea 0: Crear una nueva carpeta 
Tarea 1: Guardar el PDF original en la carpeta correspondientepara este informe.
Tarea 2: Extraer tablas de datos del PDF en EXCEL en tal carpeta
Tarea 3: Extraer gráficas del PDF y guardarlas en tal carpeta como archivos png

SKILL: Analizar los datos
Tarea 0: Cargar los datos extraídos del PDF
Tarea 1: Realizar análisis estadístico de los datos de las tablas
Tarea 2: Generar gráficas a partir de los datos
Tarea 3: Contrastes esos datos con los del informe anterior

SKILL: Generar nuevo informe de resulados
Tarea 0: Crear un nuevo archivo para el informe
Tarea 1: Incluir los resultados del análisis de datos
Tarea 2: Incluir las gráficas generadas
Tarea 3: Guardar el informe en la carpeta correspondiente en PDF -> SKILL 


---

Podríamos poner TRIGGERS que disparen estas acciones... 
Para eso hablamos de otro concepto. Un robot podría estar atento a ciertos eventos y disparar los procesos correspondientes automáticamente.

En el mundo microsoft, la forma guay de hacer eso es mediante otra herramienta llamada: COPILOT STUDIO (antiguamente conocida como Power Agents).

---

Openclaw.
Mi herramienta cada hora (CRON) entra a mi correo y mira todos los emails recibidos, detecta cuales son importantes, cuales no
Y los importantes decide:
- Eso lo hace mi agente Menchu.
- Si el correo pide un temario, se lo encarga a Felipe.
- Si piden un hueco en calendario, lo hace ella... está entre sus responsabilidades.