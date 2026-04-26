/**
 * Alyxflow catalog widget — embed your product catalog on any website.
 *
 * Usage:
 *   <div id="alyxflow-catalog"></div>
 *   <script
 *     src="https://app.alyxflow.com/widget.js"
 *     data-slug="tu-negocio"
 *     data-api-key="optional-key"
 *     data-container="#alyxflow-catalog"
 *     data-accent="#2563eb"
 *     data-lang="es"
 *   ></script>
 *
 * Optional query params forwarded to the API:
 *   data-categoria="sillas"
 *   data-fecha-inicio="2026-05-01"
 *   data-fecha-fin="2026-05-03"
 *   data-disponible="true"
 */
(function () {
  'use strict';

  const SCRIPT = document.currentScript;
  if (!SCRIPT) return;

  const slug        = SCRIPT.getAttribute('data-slug');
  const apiKey      = SCRIPT.getAttribute('data-api-key') || '';
  const containerId = SCRIPT.getAttribute('data-container') || '#alyxflow-catalog';
  const accent      = SCRIPT.getAttribute('data-accent') || '#2563eb';
  const lang        = SCRIPT.getAttribute('data-lang') || 'es';
  const categoria   = SCRIPT.getAttribute('data-categoria') || '';
  const fechaInicio = SCRIPT.getAttribute('data-fecha-inicio') || '';
  const fechaFin    = SCRIPT.getAttribute('data-fecha-fin') || '';
  const disponible  = SCRIPT.getAttribute('data-disponible') || '';

  const API_BASE = 'https://damaris-backend.onrender.com/api';

  const i18n = {
    es: {
      loading: 'Cargando catálogo…',
      empty: 'No hay artículos disponibles.',
      error: 'No se pudo cargar el catálogo.',
      request: 'Solicitar',
      available: 'disponibles',
      price: 'Precio renta',
      outOfStock: 'Sin stock',
    },
    en: {
      loading: 'Loading catalog…',
      empty: 'No items available.',
      error: 'Could not load catalog.',
      request: 'Request',
      available: 'available',
      price: 'Rental price',
      outOfStock: 'Out of stock',
    },
  };
  const t = i18n[lang] || i18n.es;

  if (!slug) {
    console.error('[alyxflow-widget] data-slug is required');
    return;
  }

  function getContainer() {
    return document.querySelector(containerId) ||
      document.getElementById(containerId.replace('#', ''));
  }

  function buildUrl() {
    const params = new URLSearchParams();
    if (apiKey)      params.set('api_key', apiKey);
    if (categoria)   params.set('categoria', categoria);
    if (fechaInicio) params.set('fecha_inicio', fechaInicio);
    if (fechaFin)    params.set('fecha_fin', fechaFin);
    if (disponible)  params.set('disponible', disponible);
    const qs = params.toString();
    return `${API_BASE}/public/${encodeURIComponent(slug)}${qs ? '?' + qs : ''}`;
  }

  function css() {
    const id = 'alyxflow-widget-style';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      .alyx-widget{font-family:system-ui,-apple-system,sans-serif;color:#1e293b;box-sizing:border-box}
      .alyx-widget *{box-sizing:border-box}
      .alyx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;padding:0;margin:0;list-style:none}
      .alyx-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:8px;transition:box-shadow .15s}
      .alyx-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.08)}
      .alyx-card-name{font-size:15px;font-weight:600;margin:0}
      .alyx-card-desc{font-size:13px;color:#64748b;margin:0;flex:1}
      .alyx-card-cat{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;padding:2px 8px;border-radius:999px;background:#f1f5f9;color:#64748b;align-self:flex-start}
      .alyx-card-price{font-size:14px;color:#475569}
      .alyx-card-price strong{font-size:17px;color:#0f172a}
      .alyx-card-stock{font-size:12px;color:#94a3b8}
      .alyx-card-btn{margin-top:4px;padding:8px 14px;border-radius:8px;border:none;cursor:pointer;font-size:13px;font-weight:600;color:#fff;transition:opacity .15s}
      .alyx-card-btn:hover{opacity:.88}
      .alyx-card-btn:disabled{opacity:.4;cursor:default}
      .alyx-card-img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:8px;margin-bottom:4px}
      .alyx-msg{padding:24px;text-align:center;color:#94a3b8;font-size:14px}
      .alyx-header{margin-bottom:16px}
      .alyx-header h2{font-size:20px;font-weight:700;margin:0 0 4px}
      .alyx-header p{font-size:14px;color:#64748b;margin:0}
    `;
    document.head.appendChild(style);
  }

  function renderError(container, msg) {
    container.innerHTML = `<div class="alyx-widget"><p class="alyx-msg">⚠️ ${msg}</p></div>`;
  }

  function renderCatalog(container, negocio, articulos, accentColor) {
    if (!articulos.length) {
      container.innerHTML = `<div class="alyx-widget"><p class="alyx-msg">${t.empty}</p></div>`;
      return;
    }

    const items = articulos.map(a => {
      const avail = a.available_count != null ? a.available_count : a.stock_total;
      const outOfStock = avail != null && avail <= 0;
      const stockLabel = avail != null
        ? (outOfStock ? t.outOfStock : `${avail} ${t.available}`)
        : '';
      const catalogUrl = `https://app.alyxflow.com/catalogo/${encodeURIComponent(slug)}`;

      const firstImg = Array.isArray(a.imagenes) && a.imagenes.length > 0 ? a.imagenes[0] : null;

      return `
        <li class="alyx-card">
          ${firstImg
            ? `<img src="${firstImg}" alt="${a.nombre}" class="alyx-card-img" loading="lazy" />`
            : ''}
          ${a.categoria ? `<span class="alyx-card-cat">${a.categoria}</span>` : ''}
          <p class="alyx-card-name">${a.nombre}</p>
          ${a.descripcion ? `<p class="alyx-card-desc">${a.descripcion}</p>` : ''}
          ${a.precio_renta != null
            ? `<p class="alyx-card-price">${t.price}: <strong>$${Number(a.precio_renta).toFixed(2)}</strong></p>`
            : ''}
          ${stockLabel ? `<p class="alyx-card-stock">${stockLabel}</p>` : ''}
          <a href="${catalogUrl}" target="_blank" rel="noopener">
            <button
              class="alyx-card-btn"
              style="background:${accentColor}"
              ${outOfStock ? 'disabled' : ''}
            >${t.request}</button>
          </a>
        </li>`;
    }).join('');

    container.innerHTML = `
      <div class="alyx-widget">
        ${negocio.nombre ? `
          <div class="alyx-header">
            <h2>${negocio.nombre}</h2>
            ${negocio.descripcion ? `<p>${negocio.descripcion}</p>` : ''}
          </div>` : ''}
        <ul class="alyx-grid">${items}</ul>
      </div>`;
  }

  function init() {
    css();
    const container = getContainer();
    if (!container) {
      console.error('[alyxflow-widget] container not found:', containerId);
      return;
    }

    container.innerHTML = `<p class="alyx-msg">${t.loading}</p>`;

    fetch(buildUrl())
      .then(r => r.json())
      .then(data => {
        if (data.error) { renderError(container, t.error); return; }
        const ac = data.negocio?.accent || accent;
        renderCatalog(container, data.negocio || {}, data.articulos || [], ac);
      })
      .catch(() => renderError(container, t.error));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
