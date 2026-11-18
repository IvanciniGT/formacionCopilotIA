Empezamos a trabajar la semana pasada con GITHUB COPILOT.
Integrado dentro de VSCODE.

Y aquí, dentro de vscode hemos descubierto en profundidad el concepto de AGENTE!

LA ERA AGENTICA!

Un agente es un IA a la que le damos la posibilidad de crear/ejecutar sus propios programas/comandos, además de forma iterativa hasta que considera que ha alcanzado el objetivo o resultado esperado.
ESTO CAMBIA TODO.

Pero no solo eso... De hecho hemos creado nuestro pequeño BATALLON DE AGENTES.
Cada uno con su propia área de responsabilidad y capacidad de tomar decisiones dentro de su ámbito.
Y lo mejor, que los puedo poner a comunicarse entre si.

Ayer comenzamos a crear nuestra propia empresa de creación de webs. Sin humanos. Bueno yo.
Y montamos muchos agentes... MONTONON.. Paco, Menchu, Federico, Felipe.

Por qué?

Para que cada uno sea más específico en aquello en lo que se le entrena....

---
Los agentes se entrenan? Aprenden? NINGUNA!

Los modelos de IA se entrenan, para que APRENDAN.
Y ESO es lo que hacen OPENAI, Anthropic, Cohere y demás compañías que entrenan modelos de IA.
Y Cuesta un pastizal €€€€€€€€€ Y Mucho más!

Entonces?
Recordad!

El agente es:
- Modelo de IA (LLM=Large Language Model, que por dentro es una RED NEURONAL)
+ Una herramienta normalmente de tipo chat que me permite hablar con el modelo y que le permite al modelo ejecutar sus programas.
+ Un Contexto
  + Ese contexto tiene una parte FIJA
  + Ese contexto tiene una parte VARIABLE, que se va actualizando a medida que el agente interactúa conmigo y ejecuta sus programas.

Nosotros, creamos agentes para que así cada vez que juntemos el paquete: Herramienta + Modelo, comience con un CONTEXTO DIFERENTE (diferente entre los distintos agentes), por que cada agente EMPEZARÁ CON UN CONTEXTO FIJO.
Ese contexto será la suma de:
- AGENTS.md
- su-propio.agent.md
- información (resumida) de las herramientas y skills que el agente puede utilizar.

Recordad que CADA INTERACCION que tenemos nosotros con el agente REGENERA EL CONTEXTO y lo manda al LLM (que es un programa que está corriendo en los servidores en la nube de alguna empresa!)

                                    CHAT                                            LLM

                            --------------------------------AGENTE-------------------------------------------- CHAT + LLM + Contexto
    Mi Menchu                \
    Mi Federico (el de Iván)  -----> GITHUB COPILOT + VSCODE (yo el mio)   \
    Mi Reme                  /                                              \ 
                                                                             -- Contexto       ---> Claude Opus (servidor de Microsoft)
    Tu Federico              -----> GITHUB COPILOT + VSCODE (tu el tuyo)    /   es particular       TIENE GRAVES PROBLEMAS MULTIPLE
                                                                                de cada agente      DE PERSONALIDAD 



----

Nosotros pagamos por las llamadas que hacemos al LLM.
Le mandamos muchos datos            <-- CONTEXTO 
Y nos contesta con bastantes datos  --> RESPUESTA Que una vez emitida pasa a formar parte del contexto.

Depende de si el contexto es más grande o más chico me cobran más o menos. TOKENS = unidades de medida de la cantidad de datos que se envían y reciben del LLM.

Tener un contexto más grande implica que voy a pagar más? NO SIEMPRE... apriori parecería que si.
PERO ENTRA OTRO CONCEPTO: CACHE DE TOKENS / CONTEXTO
El modelo (LLM) debe analizar lo que le mandamos.
Ahora.. si le mando 10 veces seguidas lo mismo.. ostias.. que no lo analice completo las 10 veces!
Y de hecho no lo hacen. 
El contexto va creciendo... pero la primera parte no cambia.
----

Los modelos guardan una caché con lo que ya han procesado previamente.
Cuando llega un mensaje nuevo.. Quizás mandamos 560k tokens.. pero solo hay 1.2k tokens nuevos que realmente necesitan ser procesados por el modelo, el resto ya está en caché.

La realidad es que por tener tokens en cache también me cobran. Pero mucho menos

El cache lo guarda el LLM en el servidor de Internet.
La caché expira. En Claude dura 1h

----


    Imagen de 10px x 10px en B/N

      0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 1 1 0 0 
      0 0 0 0 0 0 1 1 0 0 
      0 0 0 0 0 1 1 1 0 0 
      0 0 0 0 0 0 1 1 0 0 
      0 0 0 0 0 0 1 1 0 0 
      0 0 0 0 0 0 1 1 0 0 
      0 0 0 0 0 0 1 1 0 0 
      0 0 0 0 0 1 1 1 1 0 
      0 0 0 0 0 0 0 0 0 0 

        Voy a tener en esa imagen NUMEROS 1, 2, 3, 0

    Quiero un programa que viendo la foto, me diga que número hay.
    Que sepa IDENTIFICAR NUMEROS en la imagen.

    Podemos plantear una red neuronal para resolverlo

            CAPA DE NEURONAS                                                        CAPA DE NEURONAS

            NEURONA 1 Si es simetrico horizontalmente           \
                                                                                 Programa que mira si puede ser un 0
            NEURONA 2 Si es simetrico verticalmente             /
                                                                                 Programa que mira si puede ser un 1       
            NEURONA 3 Si hay más en el centro o en los bordes
                                                                                 Programa que mira si puede ser un 9
            NEURONA 4 Si hay más masa en la diagonal que sube hacia la derecha /

            NEURONA 5 Si hay más masa en la diagonal que sube hacia la izquierda \

            NEURONA 100k

                ^^^^^^

                APRENDIZAJE DE UNA RED NEURONAL                                     Si la imagen es simétrica o no
                    La imagen queda caracterizada por 10 datos:
                    N1: Simetría horizontal 1
                    N2: Simetría vertical 1                                         Si es par o impar
                    N3: Centro vs bordes 0
                    N4: Diagonal derecha 1
                    N5: Diagonal izquierda 0
                    N10: Otro criterio 1
                            INFORMACION LATENTE


            N7: 0.76*P1 + 0.65P2 -0.123*P3 ...+0.987*100


Neurona 1: Programa que dice si hay más pixeles marcados a la izquierda que a la derecha de la imagen. (más o menos)
Neurona 2: Programa que dice si hay más pixeles marcados arriba que abajo (más o menos)

En un 1, que hay más arriba o abajo? Más o menos igual
En un 1, que hay más a la izquierda o derecha? Más o menos igual

Y en un 0? Arriba o abajo? Más o menos igual
Y en un 0? A la izquierda o derecha? Más a la izquierda

Y en un 8? Arriba o abajo? Más o menos igual
Y en un 8? A la izquierda o derecha? Más o menos igual

Todos esos dígitos son más o menos SIMETRICOS

Y un 3? Arriba o abajo? Más o menos igual
Y un 3? A la izquierda o derecha? Más a la derecha


    DATO vs INFORMACION

            Los datos transportan información

            Que Felipe pese 150kgs qué es ? DATO

            Qué información transporta ese dato:
                - Me habla de la masa (de su peso) de felipe? SI.. muy concretamente : 150Kgs
                - Me habla de la talla de ropa de Felipe?     SI. Tiene una S? M? L ? 2XL-4XL No me da exacta ila infromación.. pero si un valor con cierta incertumbre
              
                - Si te digo que Felipe mide 150 TAPON


    100k  -> 50k -> 20k

---


# PROYECTO PARA EL AGENTE : CARPETA EN EL HDD
    c:\Usuarios\YO\Agentes\ElDeRequisitos
                                         \AGENTS.md
    ^^ En ese proyecto puedo abrir el chat... Y le digo al agente: Echa un ojo a todos los documentos que tengo en la carpeta:
    DATO -> c:\Usuarios\YO\MisDocumentosDeRequisistos (ESTO IRÁ A CONTEXTO)
        Y que pasa mañana? Que se pierde...
        Ye le preguntarás al agente por tus documentos... y lo mismo se acuerda que lo mismo no.
        Como lo evito?
            - AGENTS.md     <<< Cualquier agente (incluso el por defecto) tendrá en cuenta la información de esa carpeta.
            - Crear un agente especializado:
                 .github/agents/mi-agente-espepcializado.agent.md <-- Y ahí se lo enchufo
                  ^^^
                  Si hago esto, solo CUANDO INVOQUE a ese agente especializado se tendrá en cuenta la información de esa carpeta.


Datos que maneja el AGENTE (los puede tener en esa carpeta o en otra)
Lo importante es que el agente sepa donde están los datos.
c:\Usuarios\YO\MisDocumentosDeRequisistos

---

Tiene documentos WORD donde vienen información funcional de múltiples aplicaciones:
- Nóminas
- Horarios

Consultar cosas ... como por ejemplo:
- Cuando me piden una nueva petición, dónde añadirla? que la meta!


- 1 agente por app. IIII ??? No viene al caso todavía.

- Nos interesa más saber LOS TIPOS DE TRABAJOS QUE NECESITAMOS HACER:
   - Convertir archivos WORD a Markdown. Por qué? Ventajas:                         --> SKILLs
     - Más faciles de leer para mi y para el modelo Y OCUPARAN MUCHO MENOS.
     - Yo quiero esos documentos en WORD PARA ALGO?  MD -> WORD
       - SI
     - Y en PDF?                                     MD -> PDF
       - SI YO QUE SE
       Word ya me capa a un formato. Desde MarkDown puedo convertir a lo que sea.   --> SKILLs
    - Catalogar la petición... a que area/aplicacion/documento pertenece.           --> SKILLs
       ^^^ Catálogo / Índice
    - Generar un índice/catálogo de los documentos y su contenido.                  --> SKILLs
    - Leer un documento y entenderlo                                                --> SKILLs  
    - Modificar esos documentos? Añadiendo funcionales? SI                          --> SKILLs
        Podemos hacer cosas chulas:
        Podemos generar en Markdown: 
            Diagramas de casos de uso
            Diagramas de requisitos
            Diagramas de flujo
            Diagramas de entidad-relación
            Diagramas de secuencia
            Diagramas de estado
    - Skill que lea el código y lo entienda... que sepa donde buscarlo.             --> SKILLs

Nos interesa que eso lo haga un agente o muchos agentes?
- 1 agente
- Muchos agentes

De qué depende?
- Me pueden interesar muchos agentes.
      - Para qué? Qué beneficio tengo? 
          Que los pongo a trabajar entre si en paralelo
          NECESITO ESTO EN ESTE CASO?
            - Puedo pedirle a un agente cambios en la app de nóminas
              Y a otro agente cambios en otra app
              Tienen que hablar entre ellos? NO
            - TENGO una empresa que monta web... Me piden una web: Presupuesto, diseño previo, estudio de mercado...
              Quiero a esos agentes hablando entre si?

El problema es que para rellenar el documento o los cambios en el documento funcional necesito tener en mi cabeza el qué?
    Que hace ahora mismo el sistema                                 -> Lo leo del funcional
    Cómo lo hace                                                    -> Lo leo del código
    El cambio que me piden                                          -> Los datos que me mandan.. más ideas mias.
    Qué implicaria /impacto el cambio que me pide en el sistema     -> Lo deduzco del funcional y del código

    Si cada una de esas cosas me las hace un agente... quién tiene a priori cada pieza de información? Cada agente en SU CONTEXTO
    El que junte (Pasos 3 y 4)lo necesita todo: Le tengo que pasar todo de un agente a otro...TRIPLICO CONTEXTO

    EN UNA EMPRESA, este trabajo sería REALMENTE REALIZADO POR UNA PERSONA! con muchas habilidades!

---

Paco escribe el código de la WEB... se lo tiene que pasar a alguien? NO Le dira a federico (CEO) ACABADO!
    Mantiene el código en la cabeza
Menchu que es la que habla con cliente , genera email... Se lo tiene que pasar a algún agente?  NO Le dirá a feredico OK!
    Mantiene el contexto del email en la cabeza
Si federico después le pide a paco que haga un cambio en la web:
    Paco ya tiene el contexto del código en la cabeza, puede hacer el cambio directamente.

    Si aquí optase por tener 1 agente:
        Primero escribe el código: LLENA EL CONTEXTO
        Luego genera el email: YA TIENE EL CONTEXTO COMPLETO (BORRA EL CODIGO) para hacer hueco y centrarse en la tarea del email
        Luego genera guia de estilos: YA TIENE EL CONTEXTO COMPLETO (BORRA EL EMAIL) para centrarse en la tarea de la guía de estilos
        ME piden un cambio en la web: YA TIENE EL CONTEXTO COMPLETO (BORRA LA GUIA DE ESTILOS) cargo otra vez lo de la web (el código) que lo tendré que leer y entender de nuevo desde los ficheros de código.

    EN UNA EMPRESA, este trabajo sería REALMENTE REALIZADO POR VARIAS PERSONAS!

---

Tu agente no quieres que tenga en contexto nI TODOS LOS DOCUMENTOS
Ni siquiera el CATALOGO completo.

El catalogo será un documento MD
Y el agente lanzará una consulta sobre ese documento:

| Documento       | Titulo                          | Aplicación |         Descripción                      |
|-----------------|---------------------------------|------------|------------------------------------------|
| 11029387.md     | Funcional de la app de Nóminas  | Nóminas    | Documento que describe el funcionamiento de la app de Nóminas,con los pagos que se hacen. generar la nómina en pdf y descargarla... |
| 11029387.md: Funcional de la app de Subcontratas  | Subcontratas    | Documento que describe el funcionamiento de la app de Subcontratas,con los pagos que se hacen, nóminas de sus empleados. generar la nómina en pdf y descargarla...|

Él verá que palabras identifican a la petición que estas haciendo y mirará en el catálogo.

En tu petición hablan de:

MAIL: OYE, que estos pringaos ahora quieren descargase las nominas en PDF.
    La IA mira ese email.
    Y dice... pringaos... eso es muy coloquial y no describe una app
    descargarse... eso es muy genérico.. de muchas apps se puede uno descargar archivos
    nominas ... esto es interesante.. Seguro que hay algun documento de alguna app que gestione las nóminas.
    PERO EL TIO ESTE NO SABE ESCRIBIR... se escribe con tílde.
     Voy a buscarlo en el catálogo:
    cat catalogo.md | grep -i nóminas
        > 11029387.md: Funcional de la app de Nóminas  | Nóminas    | Documento que describe el funcionamiento de la app de Nóminas,con los pagos que se hacen. generar la nómina en pdf y descargarla...|
        > 11029387.md: Funcional de la app de Subcontratas  | Subcontratas    | Documento que describe el funcionamiento de la app de Subcontratas,con los pagos que se hacen, nóminas de sus empleados. generar la nómina en pdf y descargarla...|

     El archivo no va a contexto. A contexto va la salida de ese comando   
     Ah.. pues hay 2 documentos relacionados con nóminas. Cuál será ésta.. umm. yo creo que la nuestra .. porque no parece que tenga mucho sentido que los empreados de una subcontrata quieran descargarse las nóminas en PDF desde nuestra app.. ESTOS RAZONAMIENTOS SON LOS QUE LA IA!

     Una vez identificado el documento.. Habrá que leerlo... Y necesitará meterlo en contexto.
     Si está en word.. le costará mucho.. tanto que decidirá convertirlo a Markdown... se lo haya pedido yo antes o no!
        $ pandoc 11029387.docx -o 11029387.md
     A contexto : Para leerlo usar la herramienta "LEER DOCUMENTO"
- Pasar los archivos a MarkDown: I


Si tengo un mcp

# En el mundo de los modelos y agentes de IA

MCP: (MODEL CONTEXT PROTOCOL)

Es un protocolo que los modelos de IA utilizan PARA comunicarse con programas externos.

    AGENTE

     + MODELO IA
     + Chat (entorno)
       + MCP Programa     

Mi IA sabrá hablar con ese programa por que ese programa habla ese protocolo.
No hay nada que explicar. Esto es lo mejor.

Si lo hay guay... no siempre lo habrá. Usaré otro programa que NO HABLE ESE PROTOCOLO pero con el que la IA sepa comunicarse o DESCUBRA como comunicarse.

Me quiero comunicar con GMAIL: `gog` el cliente de google workspaces...
Pues la IA llama a este comando...desde una terminal de comandos

----

Muchas herramientas nos permiten ejecutar en local o ejecutar en un entorno remoto,
Que ofrezca Github (MS) u otros. Claude también permite ejecutar en entornos remotos.
Qué me interesa... Hay que valorar:

- Si los documentos los tengo en local, necesito ejecutar los comandos en local.
- Ejecutar en remotos tiene gracia: Puedo encargar un trabajo.. que lo mismo son horas! y cerrar mi equipo, irme de cañas.. y aquello sigue!

- Si tengo datos sensibles.
   Aquí estoy jodido . Los datos si hay que procesarlos los procesará el MODELO.
   Y el modelo corre en un servidor remoto. PARA ALLA IRAN LOS DATOS!
   A no ser que use un modelo LOCAL!
    Que esto tambien se puede.

Muchas empresas publican sus modelos en internet para que los descargue cualquiera y pueda ejecutarlos localmente. 

- Hugging Face es una plataforma donde muchas empresas y desarrolladores publican sus modelos de IA para que cualquiera pueda descargarlos y ejecutarlos localmente.
El modelo lo tengo que correr en una GPU (Tarjeta gráfica).

CPU vs GPU?

Una CPU es capaz de hacer operaciones con mucha PRECISION, pero despacito.
Una GPU es capaz de hacer operaciones con poca PRECISION, pero muy rápido... y además muchas a la vez! en paralelo.

Seno(x)
x^7

Solo saben sumar, multiplicar y hacer operaciones básicas. 

GPU y CPU tienen transistores dentro, que son los que echan las cuentas básicas.
LA CPU los dedica 100 transistores a hacer cálculos de muchos los términos del desarrollo en serie de taylor de una función.
LA GPU decida 10 transistores a hacer cálculos de 3 términos del desarrollo en serie de taylor de una función, pero puede hacer eso 10 veces en paralelo.-. también en total 100 transistores, pero de manera paralela.

LAS GPUS son capaces de hacer muchas más operaciones a la vez, pero con menos PRECISION que las CPU.

CPU tiene 8, 12, 18 cores (nucleos de calculo independientes)
GPU tiene miles o decenas de miles de cores (nucleos de calculo independientes)

Ahora... además de eso... necesitamos memoria.
LA RAM es la memoria de la CPU.
La GPU tiene su propia memoria, llamada VRAM (Video RAM).
Los modelos tienen millardos de parámetros... esos numeritos que nos salien en las neruonas.
Un modelo ocupa al descargarlo (o en RAM/VRAM)  4, 10, 200 GB

Un modelo NORMALITO.. muy normalito lo puedo ejecutar en una GPU con 24/32 GB de VRAM.

Es imposible comprar tarjetas grandes hoy en día!
Hay modelos especiales que se cargan en RAM A trozos... es razonablemente nuevo... con tarjetas mas sencillas podemos cargarlos.
Otra cosa que se hace mucho es que los fabricantes de computadoras: APPLE
junta en el mismo PROCESADOR: GPU + CPU y comparten memoria RAM... y abaratan mucho los costes 


Luego hay otra limitación. Los modelos BUENOS BUENOS BUENOS:
Claude, OpenAI, Google no los descargamos.... no están disponibles.
- QWEN
- Deepseek
- LLaMA