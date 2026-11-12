#!/usr/bin/env node
/**
 * md2pdf.js — Convierte un documento Markdown en un PDF con formato "guapo".
 *
 * Características:
 *  - Tema por defecto AZUL en los encabezados (configurable).
 *  - Renderiza diagramas Mermaid de verdad (tarta, ER, secuencia, flow, etc.).
 *  - Tablas estilizadas, bloques de código con tema oscuro, emojis a color, portada con degradado.
 *  - Sin dependencias de npm: descarga y cachea `marked` y `mermaid` la primera vez.
 *  - Detecta Chrome / Chromium / Edge automáticamente (o usa la variable CHROME_PATH).
 *
 * Uso:
 *   node md2pdf.js <entrada.md> [salida.pdf] [opciones]
 *
 * Opciones:
 *   --theme <blue|purple|green|slate>   Paleta de color (por defecto: blue)
 *   --title "<texto>"                   Título de la portada (por defecto: nombre del fichero)
 *   --subtitle "<texto>"                Subtítulo de la portada
 *   --no-cover                          No genera la portada
 *
 * Ejemplos:
 *   node md2pdf.js notas/plantilla.md
 *   node md2pdf.js notas/plantilla.md notas/plantilla.pdf --theme blue --title "Mi guía"
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');
const { spawnSync } = require('child_process');

// ---------------------------------------------------------------------------
// Paletas de color. La primera clave es el tema por defecto.
// ---------------------------------------------------------------------------
const THEMES = {
  blue: {
    primary: '#1d4ed8', primary2: '#2563eb', accent: '#0891b2',
    ink: '#13203b', muted: '#50607a', soft: '#eef4ff', border: '#d6e2f7',
    inlineCode: '#1d4ed8', coverGrad: 'linear-gradient(135deg,#1e3a8a 0%,#2563eb 55%,#38bdf8 100%)',
    coverShadow: 'rgba(37,99,235,.28)', strong: '#122a66', mermaidShadow: 'rgba(37,99,235,.12)',
  },
  purple: {
    primary: '#6d28d9', primary2: '#b5179e', accent: '#0077b6',
    ink: '#1f2430', muted: '#5b6472', soft: '#f4f1fb', border: '#e5e0f0',
    inlineCode: '#b5179e', coverGrad: 'linear-gradient(135deg,#6d28d9 0%,#b5179e 55%,#f72585 100%)',
    coverShadow: 'rgba(109,40,217,.25)', strong: '#3b185f', mermaidShadow: 'rgba(109,40,217,.10)',
  },
  green: {
    primary: '#047857', primary2: '#059669', accent: '#0d9488',
    ink: '#14281f', muted: '#4b6153', soft: '#eafaf3', border: '#cdeadd',
    inlineCode: '#047857', coverGrad: 'linear-gradient(135deg,#065f46 0%,#059669 55%,#34d399 100%)',
    coverShadow: 'rgba(5,150,105,.25)', strong: '#064e3b', mermaidShadow: 'rgba(5,150,105,.10)',
  },
  slate: {
    primary: '#334155', primary2: '#475569', accent: '#0ea5e9',
    ink: '#1e293b', muted: '#64748b', soft: '#f1f5f9', border: '#dbe3ec',
    inlineCode: '#0ea5e9', coverGrad: 'linear-gradient(135deg,#1e293b 0%,#475569 55%,#64748b 100%)',
    coverShadow: 'rgba(51,65,85,.25)', strong: '#1e293b', mermaidShadow: 'rgba(51,65,85,.10)',
  },
};

// ---------------------------------------------------------------------------
// Argumentos.
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const positional = [];
  const opts = { theme: 'blue', cover: true, title: null, subtitle: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--theme') opts.theme = (argv[++i] || 'blue').toLowerCase();
    else if (a === '--title') opts.title = argv[++i];
    else if (a === '--subtitle') opts.subtitle = argv[++i];
    else if (a === '--no-cover') opts.cover = false;
    else if (a === '-h' || a === '--help') opts.help = true;
    else positional.push(a);
  }
  opts.input = positional[0];
  opts.output = positional[1];
  return opts;
}

function usage() {
  console.log('Uso: node md2pdf.js <entrada.md> [salida.pdf] [--theme blue|purple|green|slate] [--title "..."] [--subtitle "..."] [--no-cover]');
}

// ---------------------------------------------------------------------------
// Descarga + caché de librerías (marked / mermaid).
// ---------------------------------------------------------------------------
const VENDOR_DIR = path.join(__dirname, '.vendor');
const LIBS = {
  'marked.min.js': 'https://cdn.jsdelivr.net/npm/marked@12/marked.min.js',
  'mermaid.min.js': 'https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.min.js',
};

function download(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error('Demasiadas redirecciones: ' + url));
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        const next = new URL(res.headers.location, url).toString();
        return resolve(download(next, dest, redirects + 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error('HTTP ' + res.statusCode + ' al descargar ' + url));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function ensureLibs() {
  if (!fs.existsSync(VENDOR_DIR)) fs.mkdirSync(VENDOR_DIR, { recursive: true });
  for (const [name, url] of Object.entries(LIBS)) {
    const dest = path.join(VENDOR_DIR, name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) continue;
    process.stderr.write('· Descargando ' + name + ' ...\n');
    await download(url, dest);
  }
}

// ---------------------------------------------------------------------------
// Detección de Chrome / Chromium.
// ---------------------------------------------------------------------------
function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/microsoft-edge',
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return null;
}

// ---------------------------------------------------------------------------
// Utilidades.
// ---------------------------------------------------------------------------
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function humanizeFilename(file) {
  const base = path.basename(file).replace(/\.[^.]+$/, '');
  return base.charAt(0).toUpperCase() + base.slice(1).replace(/[-_]+/g, ' ');
}

// ---------------------------------------------------------------------------
// CSS (plantilla con variables inyectadas desde el tema).
// ---------------------------------------------------------------------------
function buildCss(t) {
  return `
:root{
  --primary:${t.primary}; --primary2:${t.primary2}; --accent:${t.accent};
  --ink:${t.ink}; --muted:${t.muted}; --soft:${t.soft}; --border:${t.border};
  --inline:${t.inlineCode}; --strong:${t.strong};
}
*{box-sizing:border-box;}
@page{ size:A4; margin:18mm 16mm 20mm 16mm; }
html,body{margin:0;padding:0;}
body{
  font-family:-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji",sans-serif;
  color:var(--ink); font-size:11.5pt; line-height:1.6;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.cover{
  background:${t.coverGrad}; color:#fff; border-radius:18px; padding:42px 40px;
  margin-bottom:34px; box-shadow:0 12px 30px ${t.coverShadow}; position:relative; overflow:hidden;
}
.cover::after{ content:""; position:absolute; right:-60px; top:-60px; width:220px; height:220px;
  border-radius:50%; background:rgba(255,255,255,.12); }
.cover .kicker{ text-transform:uppercase; letter-spacing:3px; font-size:10pt; opacity:.85; margin:0 0 8px; font-weight:600; }
.cover h1{ margin:0; font-size:30pt; font-weight:800; line-height:1.1; border:none; padding:0; color:#fff; }
.cover .subtitle{ margin:12px 0 0; font-size:12pt; opacity:.95; max-width:80%; }
.cover .meta{ margin-top:18px; font-size:9.5pt; opacity:.8; }
h1{ font-size:20pt; font-weight:800; color:var(--primary); margin:30px 0 12px; padding-bottom:8px; border-bottom:3px solid var(--primary); }
h2{ font-size:15.5pt; font-weight:700; color:var(--primary2); margin:26px 0 10px; padding-left:12px; border-left:5px solid var(--primary2); }
h3{ font-size:13pt; font-weight:700; color:var(--accent); margin:20px 0 8px; }
h4,h5,h6{ font-weight:700; color:var(--muted); margin:16px 0 6px; }
p{margin:9px 0;}
a{ color:var(--accent); text-decoration:none; border-bottom:1px solid rgba(8,145,178,.35); }
strong{color:var(--strong);}
hr{ border:none; border-top:2px dashed var(--border); margin:28px 0; }
ul,ol{ margin:8px 0 8px 4px; padding-left:22px; }
li{margin:4px 0;}
li::marker{color:var(--primary2);}
input[type=checkbox]{ accent-color:var(--primary); transform:scale(1.15); margin-right:4px; }
code{ font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace; font-size:9.8pt;
  background:var(--soft); color:var(--inline); padding:1.5px 6px; border-radius:6px; border:1px solid var(--border); }
pre.code-block{ background:#1e1e2e; border-radius:12px; margin:14px 0; padding:0; overflow:hidden;
  box-shadow:0 6px 16px rgba(0,0,0,.18); }
pre.code-block .code-lang{ background:#2d2d44; color:#c7d2fe; font-size:8.5pt; font-weight:700; text-transform:uppercase;
  letter-spacing:1px; padding:6px 14px; border-bottom:1px solid #3b3b58; }
pre.code-block code{ display:block; background:none; border:none; color:#e5e7eb; padding:14px 16px; font-size:9.6pt; line-height:1.5; white-space:pre; }
table{ border-collapse:collapse; width:100%; margin:16px 0; font-size:10.3pt; box-shadow:0 4px 14px rgba(0,0,0,.08);
  border-radius:10px; overflow:hidden; }
thead th{ background:linear-gradient(135deg,var(--primary),var(--primary2)); color:#fff; font-weight:700; text-align:left; padding:10px 12px; }
tbody td{ padding:9px 12px; border-bottom:1px solid var(--border); }
tbody tr:nth-child(odd){ background:var(--soft); }
tbody tr:nth-child(even){ background:#fff; }
tbody tr:last-child td{ border-bottom:none; }
blockquote{ margin:14px 0; padding:10px 18px; background:var(--soft); border-left:5px solid var(--accent); border-radius:0 10px 10px 0; color:var(--muted); }
blockquote p{margin:4px 0;}
img{ max-width:100%; border-radius:10px; box-shadow:0 4px 14px rgba(0,0,0,.12); margin:8px 0; }
pre.mermaid{ background:#fcfdff; border:1px solid var(--border); border-radius:14px; padding:18px; margin:18px 0;
  text-align:center; box-shadow:0 6px 18px ${t.mermaidShadow}; break-inside:avoid; page-break-inside:avoid; }
pre.mermaid svg{ max-width:100%; height:auto; }
h1,h2,h3,table,pre{ break-inside:avoid; page-break-inside:avoid; }
`;
}

// ---------------------------------------------------------------------------
// Programa principal.
// ---------------------------------------------------------------------------
async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || !opts.input) { usage(); process.exit(opts.input ? 0 : 1); }

  const inputPath = path.resolve(opts.input);
  if (!fs.existsSync(inputPath)) { console.error('No existe el fichero: ' + inputPath); process.exit(1); }

  const theme = THEMES[opts.theme] || THEMES.blue;
  if (!THEMES[opts.theme]) console.error('Tema desconocido "' + opts.theme + '"; usando "blue".');

  const outputPath = path.resolve(opts.output || inputPath.replace(/\.[^.]+$/, '') + '.pdf');

  await ensureLibs();

  const chrome = findChrome();
  if (!chrome) {
    console.error('No se encontró Chrome/Chromium. Instálalo o define CHROME_PATH.');
    process.exit(1);
  }

  const { marked } = require(path.join(VENDOR_DIR, 'marked.min.js'));
  const md = fs.readFileSync(inputPath, 'utf8');

  const renderer = {
    code(token) {
      const text = typeof token === 'string' ? token : token.text;
      const lang = typeof token === 'string' ? arguments[1] : token.lang;
      if ((lang || '').trim().toLowerCase() === 'mermaid') {
        return `<pre class="mermaid">${escapeHtml(text)}</pre>`;
      }
      const cls = lang ? ` class="language-${lang}"` : '';
      return `<pre class="code-block"><div class="code-lang">${lang || 'code'}</div><code${cls}>${escapeHtml(text)}</code></pre>`;
    },
  };
  marked.use({ renderer, gfm: true, breaks: false });

  const body = marked.parse(md);
  const title = opts.title || humanizeFilename(inputPath);

  const cover = opts.cover ? `
<div class="cover">
  <p class="kicker">Documento</p>
  <h1>${escapeHtml(title)}</h1>
  ${opts.subtitle ? `<p class="subtitle">${escapeHtml(opts.subtitle)}</p>` : ''}
  <p class="meta">Generado automáticamente desde <code style="background:rgba(255,255,255,.18);color:#fff;border:none;">${escapeHtml(path.basename(inputPath))}</code></p>
</div>` : '';

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>${escapeHtml(title)}</title>
<script src="./.vendor/mermaid.min.js"></script>
<style>${buildCss(theme)}</style>
</head>
<body>
${cover}
${body}
<script>
  (function(){
    var m = window.mermaid || (globalThis && globalThis.mermaid);
    if(!m){ document.body.setAttribute('data-mermaid-done','error-no-lib'); return; }
    m.initialize({ startOnLoad:false, securityLevel:'loose', theme:'default', fontFamily:'-apple-system,Segoe UI,Roboto,sans-serif' });
    m.run({ querySelector:'pre.mermaid' })
      .then(function(){ document.body.setAttribute('data-mermaid-done','ok'); })
      .catch(function(e){ document.body.setAttribute('data-mermaid-done','error'); console.error(e); });
  })();
</script>
</body>
</html>`;

  const htmlPath = path.join(__dirname, '.md2pdf.tmp.html');
  fs.writeFileSync(htmlPath, html, 'utf8');

  const args = [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw', '--virtual-time-budget=25000',
    '--print-to-pdf=' + outputPath, 'file://' + htmlPath,
  ];
  const res = spawnSync(chrome, args, { stdio: ['ignore', 'ignore', 'pipe'] });
  try { fs.unlinkSync(htmlPath); } catch (_) {}

  if (res.status !== 0 && !fs.existsSync(outputPath)) {
    console.error('Chrome falló al generar el PDF.');
    if (res.stderr) console.error(res.stderr.toString());
    process.exit(1);
  }

  const kb = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log('✅ PDF generado: ' + outputPath + ' (' + kb + ' KB, tema "' + opts.theme + '")');
}

main().catch((err) => { console.error(err); process.exit(1); });
