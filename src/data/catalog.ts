import type { LocalizedItem } from "./resolve";

// TODO(datos): cuando la API esté lista, reemplazar estos datos mock por el fetch real.
const cat = {
  furniture: { en: "Furniture", es: "Mobiliario" },
  florals: { en: "Florals", es: "Florales" },
  linens: { en: "Linens", es: "Mantelería" },
};

export const catalogItems: LocalizedItem[] = [
  // ─── FURNITURE (4) ───
  {
    id: 1,
    name: { en: "Gold Tiffany Chair", es: "Silla Tiffany Dorada" },
    category: cat.furniture,
    description: {
      en: "Crystal chair with a gold finish and ivory cushion. Perfect for weddings and formal events.",
      es: "Silla cristal acabado dorado, cojín marfil. Ideal para bodas y eventos formales.",
    },
    precio_renta: 85,
    stock_total: 200,
    imagenes: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 2,
    name: { en: "Cream Lounge Armchair", es: "Sillón Lounge Crema" },
    category: cat.furniture,
    description: {
      en: "Single armchair upholstered in cream linen. Perfect for lounges and chill areas.",
      es: "Sillón individual tapizado en lino crema. Perfecto para lounges y áreas chill.",
    },
    precio_renta: 450,
    stock_total: 24,
    imagenes: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 3,
    name: { en: "Round Banquet Table", es: "Mesa Redonda Banquete" },
    category: cat.furniture,
    description: {
      en: "1.80 m round table for 10 guests. Wood finish or standard folding.",
      es: "Mesa redonda de 1.80 m para 10 personas. Acabado madera o plegable estándar.",
    },
    precio_renta: 320,
    stock_total: 40,
    imagenes: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 4,
    name: { en: "Crystal Imperial Table", es: "Mesa Imperial Cristal" },
    category: cat.furniture,
    description: {
      en: "Long rectangular table with a glass base. Ideal for head tables.",
      es: "Mesa rectangular larga con base de cristal. Ideal para mesas presidenciales.",
    },
    precio_renta: 1200,
    stock_total: 8,
    imagenes: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=75&fit=crop",
    ],
  },

  // ─── FLORALS (3) ───
  {
    id: 5,
    name: { en: "Pastel Rose Centerpiece", es: "Centro Floral Rosas Pastel" },
    category: cat.florals,
    description: {
      en: "Low centerpiece in pastel tones — roses, peonies and fresh eucalyptus.",
      es: "Centro de mesa bajo en tonos pastel — rosas, peonías y eucalipto fresco.",
    },
    precio_renta: 850,
    stock_total: 30,
    imagenes: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1561128290-024d7d22cf2d?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 6,
    name: { en: "Ceremony Floral Arch", es: "Arco Floral de Ceremonia" },
    category: cat.florals,
    description: {
      en: "Round or rectangular arch covered with fresh flowers and foliage. Setup included.",
      es: "Arco circular o rectangular cubierto con flores frescas y follaje. Montaje incluido.",
    },
    precio_renta: 4500,
    stock_total: 5,
    imagenes: [
      "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 7,
    name: { en: "Cascade Bridal Bouquet", es: "Ramo Cascada de Novia" },
    category: cat.florals,
    description: {
      en: "Cascade bouquet with white roses, orchids and greenery. Made to order.",
      es: "Ramo en cascada con rosas blancas, orquídeas y verde. Diseño a medida.",
    },
    precio_renta: 1800,
    stock_total: 12,
    imagenes: [
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=75&fit=crop",
    ],
  },

  // ─── LINENS (3) ───
  {
    id: 8,
    name: { en: "Ivory Linen Tablecloth", es: "Mantel Lino Marfil" },
    category: cat.linens,
    description: {
      en: "Round ivory linen tablecloth. 3 m diameter, with a floor-length drop.",
      es: "Mantel redondo de lino color marfil. Tamaño 3 m de diámetro, con caída al piso.",
    },
    precio_renta: 180,
    stock_total: 60,
    imagenes: [
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 9,
    name: { en: "Embroidered Table Runner", es: "Camino de Mesa Bordado" },
    category: cat.linens,
    description: {
      en: "Hand-embroidered runner, gold or silver. 3.5 m long. Perfect for long tables.",
      es: "Camino bordado a mano, dorado o plateado. Largo 3.5 m. Perfecto para mesas largas.",
    },
    precio_renta: 220,
    stock_total: 35,
    imagenes: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=75&fit=crop",
    ],
  },
  {
    id: 10,
    name: { en: "Damask Napkin", es: "Servilleta Damasco" },
    category: cat.linens,
    description: {
      en: "Fabric napkin with a damask pattern, several colors available. 50×50 cm.",
      es: "Servilleta de tela con patrón damasco, varios colores disponibles. 50×50 cm.",
    },
    precio_renta: 35,
    stock_total: 500,
    imagenes: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=900&q=75&fit=crop",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=75&fit=crop",
    ],
  },
];
