# Plan de mejoras — Wonderland Events

Sitio Astro 6 + Tailwind v4. Documento auto-contenido para que otra IA (Codex / Claude) lo ejecute de arriba a abajo. Cada tarea es independiente salvo que indique dependencia.

Convenciones:
- `[BLOQUEA]` = no se puede publicar el sitio hasta resolver
- `[DATOS]` = requiere que el dueño provea info (no inventar)
- `[INDEPENDIENTE]` = se puede hacer sin input externo
- Rutas relativas al root del proyecto

Estado actual relevante:
- 4 páginas en `src/pages/`: `index.astro`, `catalogo.astro`, `flores.astro`, `nosotros.astro`
- No hay layout compartido — cada página repite `<head>`, nav y footer
- `global.css` define tokens vía `@theme` de Tailwind v4

---

## 🔴 BLOQUEADORES

### 1. Foto incorrecta en portfolio "Arcos & Estructuras" `[BLOQUEA] [DATOS opcional]`

**Archivo:** `src/pages/index.astro` línea **392**

**Problema:** El card "Arcos & Estructuras" usa `https://images.unsplash.com/photo-1627556704302-624286467c65` — un retrato de un hombre. No tiene nada que ver con arcos florales.

**Cambio:**
- Si el dueño proveyó foto propia → reemplazar `src` por la ruta a `/public/...`
- Si no → cambiar a una foto temática de arco floral. Opción Unsplash: `https://images.unsplash.com/photo-1525772764200-be829a350797?w=700&q=70&fit=crop`

**Aceptación:** El card muestra un arco floral, no una persona.

---

### 2. Datos de contacto son placeholders `[BLOQUEA] [DATOS]`

**Archivo:** `src/pages/index.astro`

**Líneas y placeholders actuales:**
- L702: `+1 (000) 000-0000` (teléfono footer)
- L709: `@wonderlandevents` (Instagram, no es link)
- L716: `hola@wonderlandevents.com` (email footer)
- L769: `mailto:josea1701m@gmail.com` (botón "Enviar carta" del formulario — Gmail PERSONAL)

**Datos requeridos del dueño:**
- Teléfono real con código de país (ej. `+52 55 1234 5678`)
- Handle Instagram + URL completa (ej. `@wonderland_events_mx` → `https://instagram.com/wonderland_events_mx`)
- Email del negocio (ej. `hola@wonderlandevents.mx`)

**Cambios:**
1. Reemplazar los 3 textos del footer con los datos reales
2. Convertir el `<span>` de Instagram en `<a href="https://instagram.com/HANDLE" target="_blank" rel="noopener">`
3. Convertir el `<span>` del teléfono en `<a href="tel:+...">`
4. Convertir el `<span>` del email en `<a href="mailto:...">`
5. Cambiar `mailto:josea1701m@gmail.com` por el email del negocio
6. Aplicar los mismos datos en footer de `catalogo.astro`, `flores.astro`, `nosotros.astro` si están allí

**Aceptación:** Búsqueda global `grep -r "000) 000\|josea1701m\|wonderlandevents.com"` no devuelve resultados.

---

### 3. Formulario depende de Netlify `[BLOQUEA] [DATOS]`

**Archivo:** `src/pages/index.astro` línea **615**

**Problema:** `<form name="cotizacion" data-netlify="true" method="POST">`. Si el sitio NO se hospeda en Netlify, este formulario no envía nada.

**Datos requeridos del dueño:**
- ¿Dónde se va a hospedar? (Netlify / Vercel / Cloudflare Pages / VPS)
- Si NO es Netlify, ¿qué servicio de form? (Formspree / Resend / Web3Forms / endpoint propio)

**Cambios según respuesta:**
- **Netlify:** dejar como está, pero verificar que el deploy detecta el form (agregar input hidden `<input type="hidden" name="form-name" value="cotizacion">`)
- **Formspree:** cambiar a `<form action="https://formspree.io/f/XXXXX" method="POST">` y quitar `data-netlify`
- **Vercel + Resend / API propia:** cambiar a `method="POST" action="/api/contact"` y crear `src/pages/api/contact.ts` con la lógica de envío

**Aceptación:** Llenar el form en local + producción y recibir el correo/notificación.

---

### 4. Catálogo `[RESUELTO ✅]`

Ya fue migrado al nuevo diseño con 10 productos mock. Pendiente: cuando la API esté lista, reemplazar `MOCK_ITEMS` por `fetch(API_URL)`. La constante `API_URL` ya está en `src/pages/catalogo.astro`.

---

### 5. Sección "Nosotros" sin foto `[DATOS opcional]`

**Archivo:** `src/pages/index.astro` (sección `#about`, aprox L540-585) y `src/pages/nosotros.astro`

**Problema:** Hay un box con un icono pequeño y texto placeholder "Foto del equipo / mantaje de eventos". No hay imagen real.

**Opciones:**
- **A (mejor):** Pedir foto real del equipo o de un montaje hecho por el negocio. Subirla a `public/team.jpg` y reemplazar el box con `<img>`.
- **B (mientras tanto):** Reemplazar el box con un mood-board (3-4 fotos de eventos propios) o con una foto representativa de Unsplash temática.

**Aceptación:** No queda ningún box decorativo vacío en la sección Nosotros.

---

## 🟡 IMPORTANTES

### 6. Refactor a Layout component `[INDEPENDIENTE]`

**Problema:** `index.astro` (59KB), `catalogo.astro`, `flores.astro`, `nosotros.astro` repiten:
- Todo el `<head>` (preconnect fonts, viewport, charset, fonts link)
- Componente Nav (logo + 5 links + Cotizar/hamburger)
- Footer
- Algunos estilos globales

**Cambios:**

1. Crear `src/layouts/Base.astro`:
   ```astro
   ---
   import "../styles/global.css";
   interface Props { title: string; description: string; ogImage?: string; }
   const { title, description, ogImage = "/og-default.jpg" } = Astro.props;
   const canonical = new URL(Astro.url.pathname, Astro.site ?? Astro.url).href;
   ---
   <!DOCTYPE html>
   <html lang="es">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>{title}</title>
       <meta name="description" content={description}>
       <link rel="canonical" href={canonical}>
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Cormorant+SC:wght@300;400;500&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">
       <!-- OG -->
       <meta property="og:type" content="website">
       <meta property="og:title" content={title}>
       <meta property="og:description" content={description}>
       <meta property="og:image" content={new URL(ogImage, Astro.url).href}>
       <meta property="og:url" content={canonical}>
       <meta property="og:locale" content="es_ES">
       <meta name="twitter:card" content="summary_large_image">
       <meta name="twitter:title" content={title}>
       <meta name="twitter:description" content={description}>
       <meta name="twitter:image" content={new URL(ogImage, Astro.url).href}>
     </head>
     <body>
       <slot name="nav" />
       <slot />
       <slot name="footer" />
     </body>
   </html>
   ```

2. Crear `src/components/Nav.astro` y `src/components/Footer.astro` con el markup actual (parametrizar `currentPage` para marcar el link activo).

3. Definir `site` en `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://wonderlandevents.mx',  // ← dueño define la URL final
     vite: { plugins: [tailwindcss()] },
   });
   ```

4. Migrar las 4 páginas a usar `<BaseLayout title="..." description="...">`. Mover los `<style is:global>` específicos de cada página al `<style>` scoped del componente principal, o dejarlos inline en la página.

**Aceptación:**
- `grep -c "preconnect" src/pages/*.astro` devuelve 0 (todo está en el layout)
- Las 4 páginas siguen renderizando idéntico (verificar visualmente)
- Cambiar el nav en `Nav.astro` se refleja en las 4 páginas

---

### 7. SEO + Open Graph metadata `[INDEPENDIENTE]` (depende de #6)

Implementado dentro del `Base.astro` de la tarea #6. Adicionalmente:

**Crear OG image por defecto:**
- `public/og-default.jpg` — 1200×630, con el logo + tagline ("Transformamos espacios en momentos inolvidables")
- Si el dueño no tiene una, generar con Canva o usar una foto del portfolio con overlay del logo

**Crear `public/robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://wonderlandevents.mx/sitemap-index.xml
```

**Sitemap:**
```bash
npx astro add sitemap
```
Esto agrega `@astrojs/sitemap` que genera el sitemap automáticamente desde `site` config.

**Aceptación:**
- Cada página tiene `<meta property="og:*">` y `<meta name="twitter:*">` distintos
- Pegar la URL en https://www.opengraph.xyz/ devuelve un preview con título, descripción e imagen
- `/sitemap-index.xml` existe en build (`npm run build && ls dist/`)

---

### 8. Botón flotante WhatsApp `[DATOS]`

**Problema:** Para un negocio de eventos en LATAM/US Hispano, WhatsApp es el canal #1 de cotización. Hoy no hay link visible.

**Datos requeridos:** Número de WhatsApp con código país sin `+` ni espacios (ej. `5215512345678`).

**Cambios:**

1. Crear `src/components/WhatsAppFAB.astro`:
   ```astro
   ---
   const { phone, message = "Hola! Me interesa cotizar un evento." } = Astro.props;
   const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
   ---
   <a
     href={href}
     target="_blank"
     rel="noopener"
     aria-label="Contactar por WhatsApp"
     class="fixed bottom-6 right-6 z-[150] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
   >
     <svg viewBox="0 0 24 24" class="w-7 h-7 fill-white"><!-- icono whatsapp --></svg>
   </a>
   ```
   (usar el mismo SVG que ya está en `catalogo.astro` línea 600 aprox)

2. Incluir el componente en `Base.astro` (después del `<slot />`)

3. Actualizar `WHATSAPP_NUMBER` placeholder en `catalogo.astro` (L904) y `flores.astro` (L333) — ambos tienen `'10000000000'`

**Aceptación:** El botón aparece en todas las páginas, abre WhatsApp Web/app al click con mensaje pre-cargado.

---

### 9. Fotos del portfolio son stock Unsplash `[DATOS]`

**Archivo:** `src/pages/index.astro` líneas **352-392** — 6 imágenes externas de Unsplash.

**Problema:** Son fotos genéricas, no del trabajo real. Cualquier cliente que reconozca una pierde confianza.

**Cambios:**

1. Pedir al dueño 6 fotos reales de eventos hechos (boda / mesa floral / baby shower / photobooth / graduación / arco floral)
2. Optimizar a WebP, ~1200px de ancho, < 200KB cada una
3. Guardar en `public/portfolio/` (ej. `boda-1.webp`, `mesa-floral.webp`, etc.)
4. Reemplazar los 6 `src="https://images.unsplash.com/..."` por `src="/portfolio/boda-1.webp"` etc.
5. Mantener `width`, `height`, `loading="lazy"`, `decoding="async"`

**Aceptación:** `grep "unsplash.com" src/pages/index.astro` → 0 resultados.

---

### 10. Optimizar `letter-vintage.jpg` `[INDEPENDIENTE]`

**Archivo:** `public/letter-vintage.jpg` — 752 KB

**Problema:** Imagen de fondo del formulario pesa demasiado.

**Cambios:**
```bash
# Si tienes cwebp / ImageMagick:
cwebp -q 75 public/letter-vintage.jpg -o public/letter-vintage.webp
# Validar tamaño esperado < 120KB
```

Luego en `src/pages/index.astro` cambiar la referencia a `letter-vintage.jpg` por `letter-vintage.webp` (buscar dentro del archivo).

**Aceptación:** `ls -lh public/letter-vintage.*` muestra archivo < 120KB. El formulario se ve idéntico.

---

### 11. Métricas inventadas en sección Nosotros `[DATOS]`

**Archivo:** `src/pages/index.astro` líneas **575-583**

**Actual:**
- `3+ Tipos de Evento`
- `8 Categorías de Rental`
- `∞ Posibilidades`

**Problema:** Sospechosas de placeholder, no persuaden.

**Datos requeridos del dueño:** Métricas reales (años en el negocio, eventos hechos, ciudades atendidas, % de novias satisfechas, etc.).

**Cambio:** Reemplazar las 3 con números reales. Ejemplos típicos:
- `5+ años` / `Creando experiencias`
- `200+ eventos` / `Realizados con éxito`
- `100% personalizado` / `Cada celebración es única`

Si el dueño NO tiene métricas reales todavía, mejor **eliminar** la sección de stats que mantener números inventados.

**Aceptación:** Cada número tiene respaldo en la realidad.

---

## 🟢 RECOMENDACIONES

### 12. Sticky bar de servicios clickeable `[INDEPENDIENTE]`

**Archivo:** `src/pages/index.astro` — barra oscura con "BODAS · BABY SHOWERS · GRADUACIONES · RENTALS · EVENTOS TEMÁTICOS"

**Problema:** Son solo pills decorativos, no llevan a ningún lado.

**Cambio:** Convertir cada pill en `<a href="#portfolio-bodas">`, `<a href="#portfolio-baby">`, etc., y agregar `id="portfolio-XXX"` a los cards correspondientes del portfolio. Scroll suave ya está activo (CSS `scroll-behavior: smooth`).

**Aceptación:** Click en "Baby Showers" del sticky bar hace scroll al card de Baby Shower.

---

### 13. Accesibilidad — contraste de texto `[INDEPENDIENTE]`

**Problema:** Varios textos en gold/sepia sobre parchment están al límite de WCAG AA, especialmente:
- `font-light` + `tracking-[0.22em]` en menús y eyebrows
- `text-gold/30` en footer copyright

**Cambios:**
1. Correr Lighthouse en `localhost:4321` → tab Accessibility
2. Para cada warning de contraste, aumentar peso (`font-light` → `font-normal`) o intensificar color (`text-gold` → `text-sepia` para texto que necesita ser legible)
3. Footer copyright: subir de `text-gold/30` a `text-gold/55`

**Aceptación:** Lighthouse Accessibility > 95.

---

### 14. Hero del index muy alto `[INDEPENDIENTE]`

**Archivo:** `src/pages/index.astro` — sección `#hero`

**Problema:** Ocupa toda la primera pantalla sin mostrar nada del portfolio. Usuario debe scrollear para descubrir qué es el sitio.

**Cambio:** Reducir `min-h-screen` del hero a `min-h-[80vh]` o similar, para que el primer card del portfolio asome al final del viewport e invite a scrollear.

**Aceptación:** Al cargar en desktop 1440×900, asoma ~10% de la sección de portfolio en la parte inferior.

---

### 15. README es el default de Astro `[INDEPENDIENTE]`

**Archivo:** `README.md`

**Cambio:** Reemplazar el README "Astro Starter Kit: Minimal" con uno específico del proyecto:
- Stack (Astro 6, Tailwind v4)
- Cómo correr local (`npm install && npm run dev`)
- Estructura de carpetas
- Dónde editar productos del catálogo (mock data en `src/pages/catalogo.astro` mientras la API no esté)
- Dónde se hospeda y cómo se hace deploy

---

### 16. Upgrade Astro `[INDEPENDIENTE]`

**Actual:** Astro 6.1.8. **Última:** 6.3.8.

```bash
npx @astrojs/upgrade
npm run build  # verificar que no rompa nada
```

**Aceptación:** `npm run build` pasa sin errores, `package.json` lista 6.3.x.

---

### 17. Cleanup: archivos enormes con CSS/JS inline `[INDEPENDIENTE]` (depende de #6)

**Problema:**
- `index.astro` 59 KB
- `catalogo.astro` ~40 KB
- `flores.astro` ~44 KB
- `nosotros.astro` ~30 KB

Cada uno tiene CSS inline gigante y scripts pegados.

**Cambios (incrementales, no de un solo PR):**

1. Después de #6 (Layout), extraer:
   - `src/components/PortfolioGrid.astro` (las 6 cards del portfolio)
   - `src/components/ServicesBar.astro` (la barra sticky de servicios)
   - `src/components/AboutSection.astro` (la sección Nosotros del index)
   - `src/components/ContactForm.astro` (formulario carta vintage)
   - `src/components/Cart.astro` (panel lateral, compartido entre catalogo y flores — sus implementaciones son casi idénticas)

2. Extraer JS del catálogo y flores a `src/scripts/catalog.ts` con funciones compartidas (`openModal`, `renderGallery`, `Cart` class) — usar `<script>` con `import` (Astro maneja bundle).

**Aceptación:** Cada `.astro` < 15 KB. Cambiar el carrito en un solo lugar se refleja en catálogo y flores.

---

### 18. URL final del sitio + deploy `[DATOS]`

Una vez resueltos #1-#5, configurar deploy.

**Datos requeridos:** Dominio final del sitio.

**Acciones:**
1. Setear `site:` en `astro.config.mjs` (necesario para canonical y OG URLs absolutas)
2. Configurar deploy en hosting elegido
3. Conectar dominio
4. Verificar HTTPS
5. Configurar redirects de www → apex (o viceversa)

---

## Datos que el dueño debe proveer

Resumen consolidado para pedirlos de una sola vez:

| # | Dato | Para qué |
|---|---|---|
| 1 | Teléfono real con código país | Footer + WhatsApp |
| 2 | Email del negocio | Footer + `mailto` del form |
| 3 | Instagram handle + URL | Footer link clickeable |
| 4 | Número WhatsApp (sin `+`) | Botón flotante |
| 5 | Hosting elegido (Netlify/Vercel/etc) | Configurar form de cotización |
| 6 | 6 fotos reales de eventos (1200px WebP) | Portfolio del index |
| 7 | Foto del equipo / montaje | Sección Nosotros |
| 8 | Métricas reales del negocio (años, eventos, etc) | Stats del index |
| 9 | Dominio final | `site:` config + deploy |
| 10 | OG image 1200×630 (o se genera) | Preview de shares |

---

## Orden recomendado de ejecución

1. **Quick wins independientes (sin esperar datos):** #6 (Layout), #7 (SEO base, deja `og-default.jpg` placeholder), #12 (sticky bar), #13 (a11y), #14 (hero), #15 (README), #16 (Astro upgrade), #17 (refactor componentes).
2. **Datos del dueño obtenidos:** ejecutar #1, #2, #3, #5, #8, #9, #11, #18 en paralelo.
3. **Optimizaciones finales:** #10 (compresión), validar Lighthouse en prod.

Cada tarea es atómica — un PR por tarea idealmente.
