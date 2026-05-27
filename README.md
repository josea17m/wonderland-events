# Wonderland Events

Sitio corporativo y catálogo de Wonderland Events construido con Astro 6 y Tailwind CSS v4.

## Stack

- Astro 6
- Tailwind CSS v4 con `@tailwindcss/vite`
- Páginas `.astro` con estilos inline y componentes compartidos

## Desarrollo local

```sh
npm install
npm run dev
```

El build de producción se valida con:

```sh
npm run build
```

## Estructura del proyecto

```text
/
├── public/                  # assets estáticos, OG, favicon, imágenes
├── src/
│   ├── components/          # navegación, footer y componentes reutilizables
│   ├── layouts/             # layout base compartido
│   ├── pages/               # rutas Astro
│   └── styles/              # tokens globales y utilidades
├── PLAN.md                  # backlog operativo del rediseño
├── PENDIENTES.md            # datos reales todavía faltantes
└── RESUMEN.md               # estado final de ejecución
```

## Rutas principales

- `/` inicio y formulario de cotización
- `/catalogo` catálogo general de rentals
- `/flores` catálogo floral
- `/nosotros` historia y presentación del estudio

## Dónde editar contenido

- Home principal: [src/pages/index.astro](/Users/josemontero/Desktop/wonderland-events/src/pages/index.astro)
- Catálogo mock temporal: [src/pages/catalogo.astro](/Users/josemontero/Desktop/wonderland-events/src/pages/catalogo.astro)
- Catálogo floral: [src/pages/flores.astro](/Users/josemontero/Desktop/wonderland-events/src/pages/flores.astro)
- Página Nosotros: [src/pages/nosotros.astro](/Users/josemontero/Desktop/wonderland-events/src/pages/nosotros.astro)
- Layout compartido: [src/layouts/Base.astro](/Users/josemontero/Desktop/wonderland-events/src/layouts/Base.astro)

Mientras no exista API, el catálogo sigue saliendo de `MOCK_ITEMS` dentro de `src/pages/catalogo.astro`.

## Deploy

El proyecto ya tiene `site` configurado para `https://wonderlandevents.mx` como placeholder operativo para canonical, sitemap y OG.

Antes de publicar:

- Confirmar dominio final
- Definir hosting real
- Confirmar el proveedor del formulario de cotización
- Reemplazar placeholders documentados en `PENDIENTES.md`

## Verificación rápida

```sh
npm run build
```

Si quieres validar el sitemap generado:

```sh
npm run build
ls dist
```
