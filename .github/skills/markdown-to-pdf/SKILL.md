---
name: markdown-to-pdf
description: >-
  Convierte un documento Markdown en un PDF con formato cuidado (portada con
  degradado, tablas estilizadas, bloques de código con tema oscuro, emojis y
  diagramas Mermaid renderizados). Úsalo cuando el usuario pida generar,
  exportar o "montar" un PDF bonito/guapo a partir de un fichero .md. El tema
  por defecto es AZUL.
---

# Markdown → PDF (con estilo)

Genera un PDF con formato atractivo a partir de un fichero Markdown. Renderiza
de verdad los diagramas **Mermaid** (tarta, entidad-relación, secuencia, flow,
etc.), aplica un tema de color a los encabezados y produce una portada con
degradado.

## Cuándo usar este skill

- El usuario pide "generar / exportar / montar un PDF" de un `.md`.
- Quiere un documento "bonito", "guapo", presentable, para imprimir o compartir.
- Necesita que los diagramas Mermaid aparezcan dibujados (no como texto).

## Flujo de trabajo (IMPORTANTE)

Antes de generar el PDF, **pregunta SIEMPRE al usuario en el chat qué color/tema
de encabezados quiere**, ofreciéndole las paletas disponibles:

- `blue` (azul — opción por defecto y recomendada)
- `purple` (morado)
- `green` (verde)
- `slate` (gris pizarra)

Espera su respuesta y usa ese valor en la opción `--theme`. Si el usuario no
elige o responde "el que quieras / por defecto", usa `blue`. Solo omite la
pregunta si el usuario ya indicó el color explícitamente en su petición.

## Requisitos

- **Node.js** (sin dependencias de npm: el script descarga y cachea `marked` y
  `mermaid` en `.vendor/` la primera vez; requiere internet solo en esa primera
  ejecución).
- **Google Chrome / Chromium / Edge / Brave** instalado (se detecta
  automáticamente). Se puede forzar la ruta con la variable `CHROME_PATH`.

## Uso

Desde la raíz del repositorio:

```bash
node .github/skills/markdown-to-pdf/md2pdf.js <entrada.md> [salida.pdf] [opciones]
```

Si no se indica `salida.pdf`, se genera junto al Markdown con el mismo nombre.

### Opciones

| Opción          | Descripción                                            | Por defecto            |
|-----------------|--------------------------------------------------------|------------------------|
| `--theme`       | Paleta: `blue`, `purple`, `green`, `slate`             | `blue`                 |
| `--title`       | Título de la portada                                   | Nombre del fichero     |
| `--subtitle`    | Subtítulo de la portada                                | (ninguno)              |
| `--no-cover`    | No genera la portada                                   | (portada activada)     |

### Ejemplos

```bash
# PDF con tema azul (por defecto), junto al .md
node .github/skills/markdown-to-pdf/md2pdf.js notas/plantilla.md

# Ruta de salida y título personalizados
node .github/skills/markdown-to-pdf/md2pdf.js notas/plantilla.md notas/plantilla.pdf \
  --title "Guía de Markdown & Mermaid" --subtitle "Plantilla de referencia"

# Otro tema de color
node .github/skills/markdown-to-pdf/md2pdf.js notas/dia1.md --theme purple
```

## Cómo funciona

1. Convierte el Markdown a HTML con `marked`, transformando los bloques
   ` ```mermaid ` en `<pre class="mermaid">`.
2. Inyecta una hoja de estilos con el tema elegido (variables de color).
3. Abre el HTML en Chrome en modo *headless*, que ejecuta Mermaid para dibujar
   los diagramas, y luego imprime a PDF (`--print-to-pdf`).
4. El HTML temporal se borra automáticamente al terminar.

## Notas

- La carpeta `.vendor/` y los temporales están ignorados por git (ver
  `.gitignore` de esta carpeta); no se commitean.
- Para añadir un tema nuevo, edita el objeto `THEMES` en `md2pdf.js`.
