export const defaultLang = "en" as const;
export type Lang = "en" | "es";

// English is the source of truth for the key set. Spanish must mirror these keys.
export const ui = {
  en: {
    // ── Nav ──────────────────────────────────────────────
    "nav.portfolio": "Portfolio",
    "nav.catalog": "Catalog",
    "nav.flowers": "Flowers",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.home": "Home",
    "nav.quote": "Get a quote",
    "nav.openMenu": "Open menu",
    "nav.quoteCart": "Quote",

    // ── Footer ───────────────────────────────────────────
    "footer.tagline": "Curiouser and Curiouser · Rentals & Decoration",

    // ── WhatsApp FAB ─────────────────────────────────────
    "fab.aria": "Contact us on WhatsApp",
    "fab.message": "Hi! I'd like a quote for an event.",

    // ── Home · hero ──────────────────────────────────────
    "home.meta.title": "Wonderland Events — Rentals & Decoration",
    "home.meta.desc":
      "Wonderland Events — Rentals and decoration for weddings, baby showers, graduations and themed events. We transform spaces into unforgettable moments.",
    "home.hero.tagline_html":
      "We transform spaces into unforgettable moments —<br>every detail, perfectly curated.",
    "home.hero.portfolio": "View Portfolio",
    "home.hero.catalog": "View Catalog",

    // ── Home · services bar ──────────────────────────────
    "home.svc.weddings": "Weddings",
    "home.svc.baby": "Baby Showers",
    "home.svc.grad": "Graduations",
    "home.svc.rentals": "Rentals & Décor",
    "home.svc.themed": "Themed Events",

    // ── Home · portfolio ─────────────────────────────────
    "home.portfolio.eyebrow": "Our Work",
    "home.portfolio.title_html": "Event <em class=\"not-italic\">Portfolio</em>",
    "home.portfolio.sub": "Every celebration is a world of its own",
    "home.portfolio.weddingsKicker": "Weddings",
    "home.portfolio.babyKicker": "Baby Showers",
    "home.portfolio.gradKicker": "Graduations",
    "home.portfolio.c1.title": "Dream Weddings",
    "home.portfolio.c1.desc": "Floral decoration, furniture and full ambiance",
    "home.portfolio.c2.title": "Tables & Florals",
    "home.portfolio.c2.desc": "Custom centerpieces and luxury glassware",
    "home.portfolio.c3.title": "Baby Shower",
    "home.portfolio.c3.desc": "Sweet, memorable settings for the new arrival",
    "home.portfolio.c4.title": "Photobooth & Backdrops",
    "home.portfolio.c4.desc": "The perfect moment for every photo in the album",
    "home.portfolio.c5.title": "Graduations",
    "home.portfolio.c5.desc": "Celebrate the achievement with style and elegance",
    "home.portfolio.c6.title": "Arches & Structures",
    "home.portfolio.c6.desc": "Entrances and floral arches that define the mood",

    // ── Home · services (what we offer) ──────────────────
    "home.offer.eyebrow": "Our Services",
    "home.offer.title_html": "What We <em class=\"not-italic\">Offer</em>",
    "home.offer.sub": "Rentals, décor & everything in between",
    "home.offer.s1.name": "Furniture Rentals",
    "home.offer.s1.sub": "Mobiliario",
    "home.offer.s1.desc": "Tables, chairs, sofas and lounges — for any style and scale of event.",
    "home.offer.s2.name": "Arches & Florals",
    "home.offer.s2.sub": "Arcos & Florales",
    "home.offer.s2.desc": "Floral structures, arches and arrangements that create the perfect mood.",
    "home.offer.s3.name": "Linens & Draping",
    "home.offer.s3.sub": "Mantelería",
    "home.offer.s3.desc": "Fabrics, linens and draping in hundreds of colors and textures.",
    "home.offer.s4.name": "Centerpieces",
    "home.offer.s4.sub": "Centros de Mesa",
    "home.offer.s4.desc": "Unique designs for every table, from subtle to dramatic.",
    "home.offer.s5.name": "Photobooth",
    "home.offer.s5.sub": "Backdrops & Photo Stations",
    "home.offer.s5.desc": "Backdrops, props and photo setups for the perfect moment.",
    "home.offer.s6.name": "Tableware & Glassware",
    "home.offer.s6.sub": "Vajilla & Cristalería",
    "home.offer.s6.desc": "Fine tableware, glasses and high-quality table accessories.",
    "home.offer.s7.name": "Themed Décor",
    "home.offer.s7.sub": "Decoración Temática",
    "home.offer.s7.desc": "From Wonderland to a Rose Garden — we build complete worlds.",
    "home.offer.s8.name": "Full-Service Decoration",
    "home.offer.s8.sub": "Servicio Completo",
    "home.offer.s8.desc": "We handle everything — design, setup and teardown included.",

    // ── Home · about teaser ──────────────────────────────
    "home.about.eyebrow": "About Us",
    "home.about.title_html": "Curiouser<br><em class=\"not-italic\">and Curiouser</em>",
    "home.about.body_html":
      "At Wonderland Events we believe every celebration deserves to be extraordinary. We don't rent items — we create experiences.<br><br>From the first floral arrangement to the last detail on the table, our team makes sure every element tells a story.",
    "home.about.cta": "Start Your Event",
    "home.about.imgAlt": "Decorative setup by Wonderland Events",

    // ── Home · contact letter ────────────────────────────
    "home.contact.greeting": "Dear Wonderland Events,",
    "home.contact.lblName": "My name is",
    "home.contact.phName": "Your full name",
    "home.contact.lblPhone": "My phone",
    "home.contact.phPhone": "+1 000 000 0000",
    "home.contact.lblEmail": "My email",
    "home.contact.phEmail": "you@email.com",
    "home.contact.lblType": "Event type",
    "home.contact.phType": "Wedding, baby shower, graduation...",
    "home.contact.lblDate": "Event date",
    "home.contact.lblMessage": "I'd love to tell you that...",
    "home.contact.phMessage":
      "Tell us about your event, style, budget or any special detail...",
    "home.contact.sign": "With love and excitement,",
    "home.contact.nameDefault": "Your name",
    "home.contact.send": "Send letter",
    "home.contact.successLine1": "Thank you! Your letter arrived with all our love. ✦",
    "home.contact.successLine2": "We'll be in touch very soon.",
    "home.contact.whatsapp": "WhatsApp",
    "home.contact.instagram": "Instagram",
    "home.contact.email": "Email",
    "home.contact.subject": "Wonderland Events Quote",

    // ── Catalog page ─────────────────────────────────────
    "catalog.meta.title": "Catalog — Wonderland Events",
    "catalog.meta.desc":
      "Explore our rentals and decoration catalog: furniture, floral arches, linens, centerpieces, photobooth and more.",
    "catalog.eyebrow": "Rentals & Decoration · Wonderland Events",
    "catalog.title": "Catalog",
    "catalog.sub": "Everything you need for your perfect event",
    "catalog.search": "Search item...",
    "catalog.loading": "Loading items...",
    "catalog.cartTitle": "My Quote",
    "catalog.empty_html": "<p class='cart-empty'>You haven't added any items yet.<br>Explore the catalog!</p>",
    "catalog.success_html":
      "Quote sent! ✦<br><small style=\"font-size:13px;font-style:normal;font-family:var(--sans);color:var(--sepia);opacity:0.8;\">We'll get in touch with you soon.</small>",

    // ── Flowers page ─────────────────────────────────────
    "flowers.meta.title": "Flowers — Wonderland Events",
    "flowers.meta.desc":
      "Floral arrangements, crowns and flower decoration for weddings and events. Wonderland Events — every petal tells a story.",
    "flowers.eyebrow": "Flower Rentals · Event Floristry",
    "flowers.title": "Flowers & Florals",
    "flowers.sub":
      "Floral compositions for every celebration — arches, centerpieces, bouquets and more",
    "flowers.search": "Search arrangement...",
    "flowers.loading": "Loading...",
    "flowers.cartTitle": "My Quote — Flowers",
    "flowers.notes": "Colors, style, event location...",
    "flowers.empty_html": "<p class='cart-empty'>You haven't added any flowers yet.<br>Explore our arrangements!</p>",
    "flowers.success_html":
      "Quote sent! ✿<br><small style='font-size:13px;font-style:normal;font-family:var(--font-sans);color:var(--color-sepia);opacity:0.8;'>We'll get in touch soon.</small>",
    "flowers.emptyAlert": "Add flowers to your quote first.",
    // Flower categories (chip data-cat values must match item categories per locale)
    "flowers.cat.arches": "Floral Arches",
    "flowers.cat.centerpieces": "Centerpieces",
    "flowers.cat.bouquets": "Bouquets",
    "flowers.cat.crowns": "Crowns & Garlands",
    "flowers.cat.petals": "Petals & Floors",
    "flowers.cat.accessories": "Accessories",

    // ── About page ───────────────────────────────────────
    "about.meta.title": "About — Wonderland Events",
    "about.meta.desc":
      "Meet the team behind Wonderland Events. We create unique experiences for weddings, baby showers, graduations and more.",
    "about.eyebrow": "Our Story · Who We Are",
    "about.title": "About Us",
    "about.sub":
      "We are the makers of moments remembered forever — with passion, with detail, with love.",
    "about.story.eyebrow": "Our Story",
    "about.story.title_html": "It began with a <em class=\"not-italic\">dream</em>",
    "about.story.p1_html":
      "Wonderland Events was born from the conviction that <strong class=\"font-medium text-ink italic\">every celebration deserves to be extraordinary</strong>. What started as a small furniture rental business grew, event by event, into a full studio for designing and decorating experiences.",
    "about.story.p2_html":
      "We draw inspiration from Alice's world — that place where the impossible becomes possible, where every corner hides magic and every detail tells a story. That's how we approach each event entrusted to us: with curiosity, with attention to detail and with the firm conviction that <strong class=\"font-medium text-ink italic\">nothing should be left to chance</strong>.",
    "about.story.p3":
      "From intimate weddings to grand celebrations, our team works hand in hand with every client to bring their vision to life — adding our experience, our network of suppliers and, above all, our passion for the beautiful.",
    "about.story.imgAlt": "Floral setup and workspace at Wonderland Events",
    "about.quote.text":
      "We don't decorate spaces. We build worlds where every moment becomes an eternal memory.",
    "about.quote.attr": "✦ Wonderland Events · Philosophy",
    "about.values.eyebrow": "What Defines Us",
    "about.values.title_html": "Our <em class=\"not-italic text-gold-light\">Pillars</em>",
    "about.values.v1.title": "Attention to Detail",
    "about.values.v1.desc":
      "Every ribbon, every flower, every candle has a purpose. We review each element until everything fits perfectly.",
    "about.values.v2.title": "Experience & Aesthetics",
    "about.values.v2.desc":
      "Years of work in the field have given us a sharp eye for composition, color and visual harmony.",
    "about.values.v3.title": "Personalized Service",
    "about.values.v3.desc":
      "No two events are alike. We listen, propose and execute to fit every dream and every budget.",
    "about.values.v4.title": "Trust & Punctuality",
    "about.values.v4.desc":
      "Your day is unrepeatable. We arrive on time, deliver what we promise and stay with you from start to finish.",
    "about.process.eyebrow": "How We Work",
    "about.process.title_html": "From your <em class=\"not-italic\">vision</em> to reality",
    "about.process.s1.title": "Initial consultation",
    "about.process.s1.desc": "We meet to learn your vision, style, budget and event date.",
    "about.process.s2.title": "Creative proposal",
    "about.process.s2.desc": "We build a visual concept with a moodboard, palette and item list.",
    "about.process.s3.title": "Quote",
    "about.process.s3.desc": "We present a detailed, flexible quote — no surprises.",
    "about.process.s4.title": "Logistics & setup",
    "about.process.s4.desc": "We coordinate delivery, setup and supervision on the event day.",
    "about.process.s5.title": "Teardown",
    "about.process.s5.desc": "We pack everything up at the end. You just enjoy and remember.",
    "about.stats.s1": "Events delivered",
    "about.stats.s2": "Average rating",
    "about.stats.s3": "Years of experience",
    "about.stats.s4": "Happy clients",
    "about.team.eyebrow": "The Team",
    "about.team.title_html": "The minds <em class=\"not-italic\">behind the magic</em>",
    "about.team.photoAlt": "profile photo",
    "about.team.m1.name": "Damaris Flores",
    "about.team.m1.role": "Founder & Creative Director",
    "about.team.m1.bio":
      "With over 8 years transforming spaces, Damaris leads every project with her unique eye and her passion for the details that make the difference.",
    "about.team.m2.name": "Event Coordinator",
    "about.team.m2.role": "Logistics & Production",
    "about.team.m2.bio":
      "A specialist in coordinating timelines, suppliers and resources so every event flows seamlessly from the very first minute.",
    "about.team.m3.name": "Floral Designer",
    "about.team.m3.role": "Floristry & Decoration",
    "about.team.m3.bio":
      "Her talent with flowers turns every arrangement into a unique piece. Specialized in compositions for weddings and themed celebrations.",
    "about.cta.eyebrow": "Ready for your perfect event?",
    "about.cta.title_html": "Tell us your <em class=\"not-italic text-gold-light\">story</em>",
    "about.cta.sub": "We'd love to be part of your special day",
    "about.cta.contact": "Contact now",
    "about.cta.catalog": "View catalog",

    // ── Cart shell (shared) ──────────────────────────────
    "cart.quantity": "Quantity",
    "cart.totalLabel": "Estimated total",
    "cart.contactTitle": "Contact details",
    "cart.lblName": "Name",
    "cart.phName": "Your name",
    "cart.lblPhone": "Phone",
    "cart.phPhone": "+1 000 000 0000",
    "cart.lblEmail": "Email",
    "cart.phEmail": "you@email.com",
    "cart.lblDate": "Event date",
    "cart.lblNotes": "Additional notes",
    "cart.phNotes": "Event type, location, etc.",
    "cart.send": "Send quote",
    "cart.whatsapp": "WhatsApp",
    "cart.modalAdd": "Add to quote",
    "cart.close": "Close",
    "cart.subtract": "Subtract",
    "cart.add": "Add",

    // ── Catalog script labels (client) ───────────────────
    "js.allCategory": "All",
    "js.addToCart": "+ Add",
    "js.addedToCart": "✓ Added",
    "js.prevPhoto": "Previous photo",
    "js.nextPhoto": "Next photo",
    "js.generalCategory": "General",
    "js.availableSuffix": "available",
    "js.itemAvailable": "Item available for rent.",
    "js.perRent": "/ rent",
    "js.modalAdd": "Add to quote",
    "js.modalInCart": "✓ In quote",
    "js.noResultsTitle": "No results",
    "js.noResultsHint": "Try another search or category",
    "js.countSingular": "item",
    "js.countPlural": "items",
    "js.fillRequired": "Please fill in name, phone and email.",
    "js.emptyQuoteAlert": "Add items to your quote first.",
    "js.dateTBD": "TBD",
    "js.whatsappGreeting": "Hi! I'm",
    "js.whatsappWants": "and I'd like a quote for",
    "js.whatsappDate": "Date",
    "js.photoPlaceholder": "photo",
  },

  es: {
    // ── Nav ──────────────────────────────────────────────
    "nav.portfolio": "Portfolio",
    "nav.catalog": "Catálogo",
    "nav.flowers": "Flores",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.home": "Inicio",
    "nav.quote": "Cotizar",
    "nav.openMenu": "Abrir menú",
    "nav.quoteCart": "Cotización",

    // ── Footer ───────────────────────────────────────────
    "footer.tagline": "Curiouser and Curiouser · Rentals & Decoration",

    // ── WhatsApp FAB ─────────────────────────────────────
    "fab.aria": "Contáctanos por WhatsApp",
    "fab.message": "Hola! Me interesa cotizar un evento.",

    // ── Home · hero ──────────────────────────────────────
    "home.meta.title": "Wonderland Events — Rentals & Decoración",
    "home.meta.desc":
      "Wonderland Events — Rentals y decoración para bodas, baby showers, graduaciones y eventos temáticos. Transformamos espacios en momentos inolvidables.",
    "home.hero.tagline_html":
      "Transformamos espacios en momentos inolvidables —<br>cada detalle, perfectamente curado.",
    "home.hero.portfolio": "Ver Portfolio",
    "home.hero.catalog": "Ver Catálogo",

    // ── Home · services bar ──────────────────────────────
    "home.svc.weddings": "Bodas & Weddings",
    "home.svc.baby": "Baby Showers",
    "home.svc.grad": "Graduaciones",
    "home.svc.rentals": "Rentals & Décor",
    "home.svc.themed": "Eventos Temáticos",

    // ── Home · portfolio ─────────────────────────────────
    "home.portfolio.eyebrow": "Nuestro Trabajo",
    "home.portfolio.title_html": "<em class=\"not-italic\">Portfolio</em> de Eventos",
    "home.portfolio.sub": "Cada celebración es un mundo en sí mismo",
    "home.portfolio.weddingsKicker": "Bodas · Weddings",
    "home.portfolio.babyKicker": "Baby Showers",
    "home.portfolio.gradKicker": "Graduaciones",
    "home.portfolio.c1.title": "Bodas de Ensueño",
    "home.portfolio.c1.desc": "Decoración floral, mobiliario y ambientación completa",
    "home.portfolio.c2.title": "Mesas & Florales",
    "home.portfolio.c2.desc": "Centros de mesa personalizados y cristalería de lujo",
    "home.portfolio.c3.title": "Baby Shower",
    "home.portfolio.c3.desc": "Ambientes dulces y memorables para la nueva llegada",
    "home.portfolio.c4.title": "Photobooth & Backdrops",
    "home.portfolio.c4.desc": "El momento perfecto para cada foto del álbum",
    "home.portfolio.c5.title": "Graduaciones",
    "home.portfolio.c5.desc": "Celebra el logro con estilo y elegancia",
    "home.portfolio.c6.title": "Arcos & Estructuras",
    "home.portfolio.c6.desc": "Entradas y arcos florales que definen el ambiente",

    // ── Home · services (what we offer) ──────────────────
    "home.offer.eyebrow": "Catálogo de Servicios",
    "home.offer.title_html": "Lo Que <em class=\"not-italic\">Ofrecemos</em>",
    "home.offer.sub": "Rentals, décor & everything in between",
    "home.offer.s1.name": "Mobiliario",
    "home.offer.s1.sub": "Furniture Rentals",
    "home.offer.s1.desc": "Mesas, sillas, sofás y lounge — para cualquier estilo y escala de evento.",
    "home.offer.s2.name": "Arcos & Florales",
    "home.offer.s2.sub": "Arches & Florals",
    "home.offer.s2.desc": "Estructuras florales, arcos y arrangements que crean el ambiente perfecto.",
    "home.offer.s3.name": "Mantelería",
    "home.offer.s3.sub": "Linens & Draping",
    "home.offer.s3.desc": "Telas, manteles y draping en cientos de colores y texturas.",
    "home.offer.s4.name": "Centros de Mesa",
    "home.offer.s4.sub": "Centerpieces",
    "home.offer.s4.desc": "Diseños únicos para cada mesa, desde sutiles hasta dramáticos.",
    "home.offer.s5.name": "Photobooth",
    "home.offer.s5.sub": "Backdrops & Photo Stations",
    "home.offer.s5.desc": "Backdrops, props y setups fotográficos para el momento perfecto.",
    "home.offer.s6.name": "Vajilla & Cristalería",
    "home.offer.s6.sub": "Tableware & Glassware",
    "home.offer.s6.desc": "Vajillas finas, copas y accesorios de mesa de alta calidad.",
    "home.offer.s7.name": "Decoración Temática",
    "home.offer.s7.sub": "Themed Décor",
    "home.offer.s7.desc": "Desde Wonderland hasta Jardín de Rosas — creamos mundos completos.",
    "home.offer.s8.name": "Servicio Completo",
    "home.offer.s8.sub": "Full-Service Decoration",
    "home.offer.s8.desc": "Nos encargamos de todo — diseño, montaje y desmontaje incluidos.",

    // ── Home · about teaser ──────────────────────────────
    "home.about.eyebrow": "Nosotros · About",
    "home.about.title_html": "Curiouser<br><em class=\"not-italic\">and Curiouser</em>",
    "home.about.body_html":
      "En Wonderland Events creemos que cada celebración merece ser extraordinaria. No rentamos artículos — creamos experiencias.<br><br>Desde el primer arreglo floral hasta el último detalle de la mesa, nuestro equipo se asegura de que cada elemento cuente una historia.",
    "home.about.cta": "Empieza tu Evento",
    "home.about.imgAlt": "Montaje decorativo de Wonderland Events",

    // ── Home · contact letter ────────────────────────────
    "home.contact.greeting": "Querida Wonderland Events,",
    "home.contact.lblName": "Mi nombre es",
    "home.contact.phName": "Tu nombre completo",
    "home.contact.lblPhone": "Mi teléfono",
    "home.contact.phPhone": "+1 000 000 0000",
    "home.contact.lblEmail": "Mi correo",
    "home.contact.phEmail": "tu@correo.com",
    "home.contact.lblType": "Tipo de evento",
    "home.contact.phType": "Boda, baby shower, graduación...",
    "home.contact.lblDate": "Fecha del evento",
    "home.contact.lblMessage": "Me gustaría contarles que...",
    "home.contact.phMessage":
      "Cuéntanos sobre tu evento, estilo, presupuesto o cualquier detalle especial...",
    "home.contact.sign": "Con cariño y mucha ilusión,",
    "home.contact.nameDefault": "Tu nombre",
    "home.contact.send": "Enviar carta",
    "home.contact.successLine1": "¡Gracias! Tu carta llegó con todo nuestro amor. ✦",
    "home.contact.successLine2": "Nos pondremos en contacto muy pronto.",
    "home.contact.whatsapp": "WhatsApp",
    "home.contact.instagram": "Instagram",
    "home.contact.email": "Email",
    "home.contact.subject": "Cotización Wonderland Events",

    // ── Catalog page ─────────────────────────────────────
    "catalog.meta.title": "Catálogo — Wonderland Events",
    "catalog.meta.desc":
      "Explora nuestro catálogo de rentals y decoración: mobiliario, arcos florales, mantelería, centros de mesa, photobooth y más.",
    "catalog.eyebrow": "Rentals & Decoration · Wonderland Events",
    "catalog.title": "Catálogo",
    "catalog.sub": "Todo lo que necesitas para tu evento perfecto",
    "catalog.search": "Buscar artículo...",
    "catalog.loading": "Cargando artículos...",
    "catalog.cartTitle": "Mi Cotización",
    "catalog.empty_html": "<p class='cart-empty'>Aún no has agregado artículos.<br>¡Explora el catálogo!</p>",
    "catalog.success_html":
      "¡Cotización enviada! ✦<br><small style=\"font-size:13px;font-style:normal;font-family:var(--sans);color:var(--sepia);opacity:0.8;\">Nos pondremos en contacto contigo pronto.</small>",

    // ── Flowers page ─────────────────────────────────────
    "flowers.meta.title": "Flores — Wonderland Events",
    "flowers.meta.desc":
      "Arreglos florales, coronas y decoración con flores para bodas y eventos. Wonderland Events — cada pétalo cuenta una historia.",
    "flowers.eyebrow": "Renta de Flores · Floricultura para Eventos",
    "flowers.title": "Flores & Florales",
    "flowers.sub":
      "Composiciones florales para cada celebración — arcos, centros de mesa, bouquets y más",
    "flowers.search": "Buscar arreglo...",
    "flowers.loading": "Cargando...",
    "flowers.cartTitle": "Mi Cotización — Flores",
    "flowers.notes": "Colores, estilo, lugar del evento...",
    "flowers.empty_html": "<p class='cart-empty'>Aún no has agregado flores.<br>¡Explora nuestros arreglos!</p>",
    "flowers.success_html":
      "¡Cotización enviada! ✿<br><small style='font-size:13px;font-style:normal;font-family:var(--font-sans);color:var(--color-sepia);opacity:0.8;'>Nos pondremos en contacto pronto.</small>",
    "flowers.emptyAlert": "Agrega flores a tu cotización primero.",
    "flowers.cat.arches": "Arcos Florales",
    "flowers.cat.centerpieces": "Centros de Mesa",
    "flowers.cat.bouquets": "Bouquets",
    "flowers.cat.crowns": "Coronas & Guirnaldas",
    "flowers.cat.petals": "Pétalos & Suelos",
    "flowers.cat.accessories": "Accesorios",

    // ── About page ───────────────────────────────────────
    "about.meta.title": "Nosotros — Wonderland Events",
    "about.meta.desc":
      "Conoce al equipo detrás de Wonderland Events. Creamos experiencias únicas para bodas, baby showers, graduaciones y más.",
    "about.eyebrow": "Nuestra Historia · Who We Are",
    "about.title": "Nosotros",
    "about.sub":
      "Somos los artífices de los momentos que se recuerdan para siempre — con pasión, con detalle, con amor.",
    "about.story.eyebrow": "Nuestra Historia",
    "about.story.title_html": "Nació de un <em class=\"not-italic\">sueño</em>",
    "about.story.p1_html":
      "Wonderland Events nació de la convicción de que <strong class=\"font-medium text-ink italic\">cada celebración merece ser extraordinaria</strong>. Lo que comenzó como una pequeña empresa de renta de mobiliario se transformó, evento a evento, en un estudio completo de diseño y decoración de experiencias.",
    "about.story.p2_html":
      "Nos inspiramos en el mundo de Alicia — ese lugar donde lo imposible se vuelve posible, donde cada rincón esconde magia y cada detalle cuenta una historia. Así abordamos cada evento que nos confían: con curiosidad, con atención al detalle y con la firme convicción de que <strong class=\"font-medium text-ink italic\">nada debe dejarse al azar</strong>.",
    "about.story.p3":
      "Desde bodas íntimas hasta grandes celebraciones, nuestro equipo trabaja codo a codo con cada cliente para materializar su visión — aportando nuestra experiencia, nuestra red de proveedores y, sobre todo, nuestra pasión por lo bello.",
    "about.story.imgAlt": "Montaje floral y espacio de trabajo de Wonderland Events",
    "about.quote.text":
      "No decoramos espacios. Construimos mundos donde cada momento se convierte en un recuerdo eterno.",
    "about.quote.attr": "✦ Wonderland Events · Filosofía",
    "about.values.eyebrow": "Lo Que Nos Define",
    "about.values.title_html": "Nuestros <em class=\"not-italic text-gold-light\">Pilares</em>",
    "about.values.v1.title": "Atención al Detalle",
    "about.values.v1.desc":
      "Cada lazo, cada flor, cada vela tiene un propósito. Revisamos cada elemento hasta que todo encaja a la perfección.",
    "about.values.v2.title": "Experiencia & Estética",
    "about.values.v2.desc":
      "Años de trabajo en el sector nos han dado un ojo privilegiado para la composición, el color y la armonía visual.",
    "about.values.v3.title": "Servicio Personalizado",
    "about.values.v3.desc":
      "No hay dos eventos iguales. Escuchamos, proponemos y ejecutamos a la medida de cada sueño y cada presupuesto.",
    "about.values.v4.title": "Confianza & Puntualidad",
    "about.values.v4.desc":
      "Tu día es irrepetible. Llegamos a tiempo, cumplimos lo que prometemos y estamos contigo de principio a fin.",
    "about.process.eyebrow": "Cómo Trabajamos",
    "about.process.title_html": "De tu <em class=\"not-italic\">visión</em> a la realidad",
    "about.process.s1.title": "Consulta inicial",
    "about.process.s1.desc": "Nos reunimos para conocer tu visión, estilo, presupuesto y fecha del evento.",
    "about.process.s2.title": "Propuesta creativa",
    "about.process.s2.desc": "Elaboramos un concepto visual con moodboard, paleta y lista de artículos.",
    "about.process.s3.title": "Cotización",
    "about.process.s3.desc": "Presentamos una cotización detallada y flexible, sin sorpresas.",
    "about.process.s4.title": "Logística & montaje",
    "about.process.s4.desc": "Coordinamos entrega, montaje y supervisión el día del evento.",
    "about.process.s5.title": "Desmontaje",
    "about.process.s5.desc": "Recogemos todo al finalizar. Tú solo disfrutas y recuerdas.",
    "about.stats.s1": "Eventos realizados",
    "about.stats.s2": "Calificación promedio",
    "about.stats.s3": "Años de experiencia",
    "about.stats.s4": "Clientes satisfechos",
    "about.team.eyebrow": "El Equipo",
    "about.team.title_html": "Las mentes <em class=\"not-italic\">detrás de la magia</em>",
    "about.team.photoAlt": "foto de perfil",
    "about.team.m1.name": "Damaris Flores",
    "about.team.m1.role": "Fundadora & Directora Creativa",
    "about.team.m1.bio":
      "Con más de 8 años transformando espacios, Damaris lidera cada proyecto con su mirada única y su pasión por los detalles que marcan la diferencia.",
    "about.team.m2.name": "Coordinadora de Eventos",
    "about.team.m2.role": "Logística & Producción",
    "about.team.m2.bio":
      "Especialista en coordinar los tiempos, proveedores y recursos para que cada evento fluya sin contratiempos desde el primer minuto.",
    "about.team.m3.name": "Diseñadora Floral",
    "about.team.m3.role": "Floricultura & Decoración",
    "about.team.m3.bio":
      "Su talento con las flores convierte cada arreglo en una pieza única. Especializada en composiciones para bodas y celebraciones temáticas.",
    "about.cta.eyebrow": "¿Lista para tu evento perfecto?",
    "about.cta.title_html": "Cuéntanos tu <em class=\"not-italic text-gold-light\">historia</em>",
    "about.cta.sub": "Nos encantaría ser parte de tu día especial",
    "about.cta.contact": "Contactar ahora",
    "about.cta.catalog": "Ver catálogo",

    // ── Cart shell (shared) ──────────────────────────────
    "cart.quantity": "Cantidad",
    "cart.totalLabel": "Total estimado",
    "cart.contactTitle": "Datos de contacto",
    "cart.lblName": "Nombre",
    "cart.phName": "Tu nombre",
    "cart.lblPhone": "Teléfono",
    "cart.phPhone": "+1 000 000 0000",
    "cart.lblEmail": "Correo electrónico",
    "cart.phEmail": "tu@correo.com",
    "cart.lblDate": "Fecha del evento",
    "cart.lblNotes": "Notas adicionales",
    "cart.phNotes": "Tipo de evento, lugar, etc.",
    "cart.send": "Enviar cotización",
    "cart.whatsapp": "WhatsApp",
    "cart.modalAdd": "Agregar a cotización",
    "cart.close": "Cerrar",
    "cart.subtract": "Restar",
    "cart.add": "Sumar",

    // ── Catalog script labels (client) ───────────────────
    "js.allCategory": "Todos",
    "js.addToCart": "+ Agregar",
    "js.addedToCart": "✓ Agregado",
    "js.prevPhoto": "Foto anterior",
    "js.nextPhoto": "Foto siguiente",
    "js.generalCategory": "General",
    "js.availableSuffix": "disponibles",
    "js.itemAvailable": "Artículo disponible para renta.",
    "js.perRent": "/ renta",
    "js.modalAdd": "Agregar a cotización",
    "js.modalInCart": "✓ En cotización",
    "js.noResultsTitle": "Sin resultados",
    "js.noResultsHint": "Prueba otra búsqueda o categoría",
    "js.countSingular": "artículo",
    "js.countPlural": "artículos",
    "js.fillRequired": "Por favor llena nombre, teléfono y correo.",
    "js.emptyQuoteAlert": "Agrega artículos a tu cotización primero.",
    "js.dateTBD": "Por definir",
    "js.whatsappGreeting": "Hola! Soy",
    "js.whatsappWants": "y me interesa cotizar",
    "js.whatsappDate": "Fecha",
    "js.photoPlaceholder": "foto",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
