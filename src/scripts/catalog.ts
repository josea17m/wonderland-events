type Item = {
  id: string | number;
  nombre: string;
  categoria?: string;
  descripcion?: string;
  precio_renta: number;
  stock_total?: number;
  imagenes?: string[];
};

type InitOptions = {
  items: Item[];
  whatsappNumber: string;
  emptyCartHtml: string;
  whatsappGreeting: string;
  itemLabel?: string;
  notesFallback: string;
  placeholderHtml: (name: string) => string;
  cardHtml: (item: Item) => string;
  dynamicCategories?: boolean;
  onInit?: () => void;
};

export function initQuoteCatalog(options: InitOptions) {
  const state = {
    allItems: [...options.items],
    filtered: [...options.items],
    activeCategory: "all",
    searchTerm: "",
    cart: {} as Record<string, { item: Item; qty: number }>,
    currentItem: null as Item | null,
    currentQty: 1,
    currentPhotoIdx: 0,
  };

  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;
  const searchInput = $("searchInput") as HTMLInputElement | null;
  const resultsCount = $("resultsCount");
  const grid = $("catalogGrid");
  const catsContainer = $("catsContainer");

  if (!grid || !searchInput || !resultsCount || !catsContainer) return;

  const buildCategories = () => {
    if (!options.dynamicCategories) return;

    const cats = [...new Set(state.allItems.map((item) => item.categoria).filter(Boolean))];
    catsContainer.innerHTML = '<button class="cat-chip active" data-cat="all">Todos</button>';
    cats.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "cat-chip";
      btn.dataset.cat = String(cat);
      btn.textContent = String(cat);
      catsContainer.appendChild(btn);
    });
  };

  const updateCardStates = () => {
    document.querySelectorAll<HTMLElement>(".item-card").forEach((card) => {
      const id = card.dataset.id ?? "";
      const inCart = Boolean(state.cart[id]);
      card.classList.toggle("in-cart", inCart);
      const btn = card.querySelector<HTMLButtonElement>(".card-add");
      if (btn) {
        btn.textContent = inCart ? "✓ Agregado" : "+ Agregar";
        btn.classList.toggle("added", inCart);
      }
    });
  };

  const renderModalGallery = () => {
    if (!state.currentItem) return;

    const imgs = state.currentItem.imagenes || [];
    const wrap = $("modalImg");
    const thumbsEl = $("modalThumbs");
    if (!wrap || !thumbsEl) return;

    if (!imgs.length) {
      wrap.innerHTML = options.placeholderHtml(state.currentItem.nombre || "foto");
      thumbsEl.style.display = "none";
      thumbsEl.innerHTML = "";
      return;
    }

    const src = imgs[state.currentPhotoIdx];
    let html = `<div class="modal-gallery-main"><img src="${src}" alt="${state.currentItem.nombre}"></div>`;
    if (imgs.length > 1) {
      html += `<div class="modal-counter">${state.currentPhotoIdx + 1} / ${imgs.length}</div>`;
      html += `<button class="modal-arrow prev" data-dir="-1" aria-label="Foto anterior">‹</button>`;
      html += `<button class="modal-arrow next" data-dir="1" aria-label="Foto siguiente">›</button>`;
    }
    wrap.innerHTML = html;

    if (imgs.length > 1) {
      thumbsEl.style.display = "flex";
      thumbsEl.innerHTML = imgs
        .map(
          (image, index) =>
            `<div class="modal-thumb ${index === state.currentPhotoIdx ? "active" : ""}" data-idx="${index}"><img src="${image}" alt=""></div>`,
        )
        .join("");
      thumbsEl.querySelectorAll<HTMLElement>(".modal-thumb").forEach((thumb) => {
        thumb.addEventListener("click", (event) => {
          event.stopPropagation();
          state.currentPhotoIdx = Number(thumb.dataset.idx);
          renderModalGallery();
        });
      });
    } else {
      thumbsEl.style.display = "none";
      thumbsEl.innerHTML = "";
    }

    wrap.querySelectorAll<HTMLElement>(".modal-arrow").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const dir = Number(button.dataset.dir);
        const total = imgs.length;
        state.currentPhotoIdx = (state.currentPhotoIdx + dir + total) % total;
        renderModalGallery();
      });
    });
  };

  const updateCartUI = () => {
    const ids = Object.keys(state.cart);
    const count = ids.length;
    const countEl = $("cartCount");
    const itemsEl = $("cartItems");
    const totalRow = $("cartTotalRow");
    const totalVal = $("cartTotalVal");

    if (!countEl || !itemsEl || !totalRow || !totalVal) return;

    countEl.textContent = String(count);
    countEl.classList.toggle("visible", count > 0);

    if (!count) {
      itemsEl.innerHTML = options.emptyCartHtml;
      (totalRow as HTMLElement).style.display = "none";
      return;
    }

    let total = 0;
    itemsEl.innerHTML = ids
      .map((id) => {
        const { item, qty } = state.cart[id];
        const subtotal = Number(item.precio_renta) * qty;
        total += subtotal;
        const image = item.imagenes?.[0] ? `<img src="${item.imagenes[0]}" alt="${item.nombre}">` : "";
        return `<div class="cart-item" data-id="${id}">
          <div class="ci-img">${image}</div>
          <div class="ci-info">
            <p class="ci-cat">${item.categoria || "General"}</p>
            <p class="ci-name">${item.nombre}</p>
            <div class="ci-qty-row">
              <button class="ci-qty-btn ci-minus">−</button>
              <span class="ci-qty">${qty}</span>
              <button class="ci-qty-btn ci-plus">+</button>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
            <p class="ci-price">$${subtotal.toLocaleString()}</p>
            <button class="ci-remove">✕</button>
          </div>
        </div>`;
      })
      .join("");

    (totalRow as HTMLElement).style.display = "flex";
    totalVal.textContent = `$${total.toLocaleString()}`;

    itemsEl.querySelectorAll<HTMLElement>(".cart-item").forEach((row) => {
      const id = row.dataset.id ?? "";
      row.querySelector<HTMLElement>(".ci-remove")?.addEventListener("click", () => {
        delete state.cart[id];
        updateCartUI();
        updateCardStates();
      });
      row.querySelector<HTMLElement>(".ci-minus")?.addEventListener("click", () => {
        if (state.cart[id] && state.cart[id].qty > 1) {
          state.cart[id].qty -= 1;
          updateCartUI();
        }
      });
      row.querySelector<HTMLElement>(".ci-plus")?.addEventListener("click", () => {
        if (state.cart[id]) {
          state.cart[id].qty += 1;
          updateCartUI();
        }
      });
    });
  };

  const toggleCartItem = (id: string, qty: number) => {
    if (state.cart[id]) {
      delete state.cart[id];
    } else {
      const item = state.allItems.find((entry) => String(entry.id) === String(id));
      if (item) state.cart[id] = { item, qty: qty || 1 };
    }
    updateCartUI();
    updateCardStates();
  };

  const closeModal = () => {
    $("modalBackdrop")?.classList.remove("open");
    document.body.style.overflow = "";
    state.currentItem = null;
  };

  const openModal = (id: string) => {
    state.currentItem = state.allItems.find((item) => String(item.id) === String(id)) || null;
    if (!state.currentItem) return;

    state.currentQty = state.cart[id]?.qty || 1;
    state.currentPhotoIdx = 0;
    renderModalGallery();
    $("modalCat")!.textContent = state.currentItem.categoria || "General";
    $("modalName")!.textContent = state.currentItem.nombre;
    $("modalPrice")!.innerHTML = `$${Number(state.currentItem.precio_renta).toLocaleString()} <small>/ renta</small>`;
    $("modalStock")!.textContent = `${state.currentItem.stock_total || 0} disponibles`;
    $("modalDesc")!.textContent = state.currentItem.descripcion || "Artículo disponible para renta.";
    $("qtyDisplay")!.textContent = String(state.currentQty);
    const inCart = Boolean(state.cart[id]);
    const modalAddBtn = $("modalAddBtn");
    if (modalAddBtn) {
      modalAddBtn.textContent = inCart ? "✓ En cotización" : "Agregar a cotización";
      modalAddBtn.classList.toggle("added", inCart);
    }
    $("modalBackdrop")?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const renderGrid = () => {
    if (!state.filtered.length) {
      grid.innerHTML = '<div class="state-msg"><p>Sin resultados</p><small>Prueba otra búsqueda o categoría</small></div>';
      return;
    }

    grid.innerHTML = state.filtered.map(options.cardHtml).join("");
    grid.querySelectorAll<HTMLElement>(".item-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        const id = card.dataset.id ?? "";
        if ((event.target as HTMLElement).closest(".card-add")) {
          event.stopPropagation();
          toggleCartItem(id, 1);
          return;
        }
        openModal(id);
      });

      const slots = card.querySelectorAll<HTMLElement>(".card-img-slot");
      const dots = card.querySelectorAll<HTMLElement>(".card-dot");
      if (slots.length > 1) {
        let index = 0;
        let timer = 0;
        card.addEventListener("mouseenter", () => {
          timer = window.setInterval(() => {
            slots[index].classList.remove("active");
            dots[index]?.classList.remove("active");
            index = (index + 1) % slots.length;
            slots[index].classList.add("active");
            dots[index]?.classList.add("active");
          }, 900);
        });
        card.addEventListener("mouseleave", () => {
          window.clearInterval(timer);
          slots.forEach((slot, slotIndex) => slot.classList.toggle("active", slotIndex === 0));
          dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === 0));
          index = 0;
        });
      }
    });
    updateCardStates();
  };

  const applyFilters = () => {
    state.filtered = state.allItems.filter((item) => {
      const matchesCategory = state.activeCategory === "all" || item.categoria === state.activeCategory;
      const matchesSearch =
        !state.searchTerm ||
        [item.nombre, item.descripcion, item.categoria].some((value) =>
          value?.toLowerCase().includes(state.searchTerm),
        );
      return matchesCategory && matchesSearch;
    });
    renderGrid();
    resultsCount.textContent = `${state.filtered.length} artículo${state.filtered.length !== 1 ? "s" : ""}`;
  };

  catsContainer.addEventListener("click", (event) => {
    const chip = (event.target as HTMLElement).closest<HTMLElement>(".cat-chip");
    if (!chip) return;
    catsContainer.querySelectorAll<HTMLElement>(".cat-chip").forEach((button) => button.classList.remove("active"));
    chip.classList.add("active");
    state.activeCategory = chip.dataset.cat || "all";
    applyFilters();
  });

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = (event.target as HTMLInputElement).value.toLowerCase().trim();
    applyFilters();
  });

  $("modalClose")?.addEventListener("click", closeModal);
  $("modalBackdrop")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (!$("modalBackdrop")?.classList.contains("open")) return;
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (!state.currentItem?.imagenes || state.currentItem.imagenes.length < 2) return;
    const total = state.currentItem.imagenes.length;
    if (event.key === "ArrowLeft") {
      state.currentPhotoIdx = (state.currentPhotoIdx - 1 + total) % total;
      renderModalGallery();
    }
    if (event.key === "ArrowRight") {
      state.currentPhotoIdx = (state.currentPhotoIdx + 1) % total;
      renderModalGallery();
    }
  });

  $("qtyMinus")?.addEventListener("click", () => {
    if (state.currentQty > 1) {
      state.currentQty -= 1;
      $("qtyDisplay")!.textContent = String(state.currentQty);
    }
  });
  $("qtyPlus")?.addEventListener("click", () => {
    if (state.currentQty < (state.currentItem?.stock_total || 99)) {
      state.currentQty += 1;
      $("qtyDisplay")!.textContent = String(state.currentQty);
    }
  });
  $("modalAddBtn")?.addEventListener("click", () => {
    if (!state.currentItem) return;
    toggleCartItem(String(state.currentItem.id), state.currentQty);
    const inCart = Boolean(state.cart[String(state.currentItem.id)]);
    const modalAddBtn = $("modalAddBtn");
    if (modalAddBtn) {
      modalAddBtn.textContent = inCart ? "✓ En cotización" : "Agregar a cotización";
      modalAddBtn.classList.toggle("added", inCart);
    }
  });

  $("openCartBtn")?.addEventListener("click", () => {
    $("cartPanel")?.classList.add("open");
    $("cartOverlay")?.classList.add("open");
    document.body.style.overflow = "hidden";
  });
  $("cartClose")?.addEventListener("click", () => {
    $("cartPanel")?.classList.remove("open");
    $("cartOverlay")?.classList.remove("open");
    document.body.style.overflow = "";
  });
  $("cartOverlay")?.addEventListener("click", () => {
    $("cartPanel")?.classList.remove("open");
    $("cartOverlay")?.classList.remove("open");
    document.body.style.overflow = "";
  });

  $("sendQuoteBtn")?.addEventListener("click", () => {
    const name = ($("fNombre") as HTMLInputElement | null)?.value.trim();
    const phone = ($("fTelefono") as HTMLInputElement | null)?.value.trim();
    const email = ($("fCorreo") as HTMLInputElement | null)?.value.trim();
    if (!name || !phone || !email) {
      alert("Por favor llena nombre, teléfono y correo.");
      return;
    }
    document.querySelector<HTMLElement>(".quote-actions")!.style.display = "none";
    $("successMsg")?.classList.add("show");
    window.setTimeout(() => {
      $("successMsg")?.classList.remove("show");
      document.querySelector<HTMLElement>(".quote-actions")!.style.display = "flex";
      state.cart = {};
      updateCartUI();
      updateCardStates();
      $("cartPanel")?.classList.remove("open");
      $("cartOverlay")?.classList.remove("open");
      document.body.style.overflow = "";
    }, 3000);
  });

  $("whatsappBtn")?.addEventListener("click", () => {
    const name = ($("fNombre") as HTMLInputElement | null)?.value.trim() || "Cliente";
    const ids = Object.keys(state.cart);
    if (!ids.length) {
      alert(options.itemLabel === "flores" ? "Agrega flores a tu cotización primero." : "Agrega artículos a tu cotización primero.");
      return;
    }
    const items = ids
      .map((id) => {
        const { item, qty } = state.cart[id];
        return `• ${item.nombre} x${qty} — $${(Number(item.precio_renta) * qty).toLocaleString()}`;
      })
      .join("\n");
    const eventDate = ($("fFecha") as HTMLInputElement | null)?.value || "Por definir";
    const notes = ($("fNotas") as HTMLInputElement | null)?.value || options.notesFallback;
    const itemLabel = options.itemLabel ? ` ${options.itemLabel}` : "";
    const message = `${options.whatsappGreeting} *${name}* y me interesa cotizar${itemLabel}:\n\n${items}\n\nFecha: ${eventDate}\n${notes}`;
    window.open(`https://wa.me/${options.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  });

  buildCategories();
  applyFilters();
  options.onInit?.();
}
