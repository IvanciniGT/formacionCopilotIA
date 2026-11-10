# Desarrollo con Copilot e IA generativa

Aquí va a estar todo lo que hagamos en clase: las notas de cada día, los
*prompts* que usemos y el código que vayamos generando. Lo iré subiendo según
avancemos, así que **actualízalo al empezar cada sesión**.

---

## Cuándo

20 horas, en aula virtual, de **15:30 a 19:30**:

| Sesión | Día |
|---|---|
| 1 | martes 10 de noviembre |
| 2 | jueves 12 de noviembre |
| 3 | martes 17 de noviembre |
| 4 | miércoles 18 de noviembre |
| 5 | jueves 19 de noviembre |

---

## De qué va el curso

"Copilot" son en realidad tres productos distintos de Microsoft, y el curso los
recorre los tres. Lo primero será dejar claro cuál es cuál:

| Producto | Para qué sirve |
|---|---|
| **GitHub Copilot** | Asistente de programación dentro del editor (VS Code, JetBrains) |
| **Microsoft Copilot** | Asistente en Windows, Edge, Word, Excel, PowerPoint, Outlook y Teams |
| **Copilot Studio** | Plataforma para construir tus propios agentes conversacionales |

Los bloques, en el orden en que los veremos:

1. **Introducción a Copilot y a la IA generativa.** Qué es, cómo funciona
   (modelos, arquitectura, privacidad) y para qué se usa.
2. **GitHub Copilot para desarrollo.** Configuración en el IDE; *prompts* para
   generar funciones, documentar, refactorizar, escribir tests y detectar bugs;
   Copilot Chat; cómo revisar y mantener el código generado.
3. **GitHub Copilot avanzado.** Proyectos completos, infraestructura como código
   (Terraform, Bicep, Docker), APIs y microservicios, CI/CD con GitHub Actions,
   y *pair programming* con IA.
4. **Microsoft Copilot en la productividad.** Edge y Windows; Word, Excel,
   PowerPoint y Outlook; Teams.
5. **Copilot Studio.** Agentes personalizados, integración con Power Automate,
   conectores (Excel, SharePoint, Dynamics, APIs propias), acciones generativas
   y publicación.
6. **Copilot y automatización.** Copilot como motor de lógica en flujos de
   trabajo, y arquitecturas híbridas con Lovable, n8n y Zapier.
7. **Seguridad, fiabilidad y buenas prácticas.** Privacidad y control de datos,
   alucinaciones, validación de lo generado y *prompts* robustos.

Un hilo que atraviesa todo el curso: **lo que genera la IA hay que revisarlo**.
Escribe con mucha seguridad incluso cuando se equivoca, y aprender a detectarlo
es tan importante como aprender a pedirle cosas.

---

## Qué necesitas

1. **Una cuenta de GitHub** con acceso a **GitHub Copilot**.
2. **VS Code** con las extensiones *GitHub Copilot* y *GitHub Copilot Chat*
   (o un IDE de JetBrains con su plugin, si es el que usas).
3. **Git**, para descargarte este repositorio.
4. Para los bloques de Microsoft Copilot y Copilot Studio, una cuenta de
   **Microsoft 365** con acceso a Copilot y a Copilot Studio.

Para comprobar que GitHub Copilot funciona: abre cualquier fichero de código en
VS Code, escribe un comentario como `// función que suma dos números` y pulsa
Enter. Si aparece una sugerencia en gris, está listo.

---

## Cómo descargarte el material

La primera vez:

```bash
git clone https://github.com/IvanciniGT/formacionCopilotIA.git
cd formacionCopilotIA
```

Cada día, antes de empezar:

```bash
git pull
```

Si has hecho cambios en tus copias de los ficheros y `git pull` se queja,
lo más sencillo es trabajar en una carpeta tuya fuera del repositorio y usar
este solo para consultar.

---

## Qué hay en cada carpeta

```
notas/      las notas de cada día de clase (dia1.md, dia2.md, ...)
```

Según avancemos irán apareciendo carpetas con los proyectos de ejemplo.
