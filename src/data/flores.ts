import type { LocalizedItem } from "./resolve";

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=900&q=75&fit=crop`;

// Category labels — must stay in sync with flowers.cat.* in src/i18n/ui.ts,
// because the filter chips render those same strings as data-cat values.
const cat = {
  arches: { en: "Floral Arches", es: "Arcos Florales" },
  centerpieces: { en: "Centerpieces", es: "Centros de Mesa" },
  bouquets: { en: "Bouquets", es: "Bouquets" },
  crowns: { en: "Crowns & Garlands", es: "Coronas & Guirnaldas" },
  petals: { en: "Petals & Floors", es: "Pétalos & Suelos" },
  accessories: { en: "Accessories", es: "Accesorios" },
};

export const floresItems: LocalizedItem[] = [
  {
    id: "f1",
    name: { en: "Countryside Floral Arch", es: "Arco Floral Campestre" },
    category: cat.arches,
    description: {
      en: "Round arch covered with roses, peonies and eucalyptus. Ideal for weddings and photo sessions. Dimensions: 2.40m × 2.40m.",
      es: "Arco redondo cubierto con rosas, peonías y eucalipto. Ideal para bodas y sesiones fotográficas. Dimensiones: 2.40m × 2.40m.",
    },
    precio_renta: 280,
    stock_total: 3,
    imagenes: [U("1519225421980-715cb0215aed"), U("1507003211169-0a1dd7228f2d"), U("1525772764200-be829a350797"), U("1606490194859-07c18c9f0968")],
  },
  {
    id: "f2",
    name: { en: "Half-Moon Arch", es: "Arco Media Luna" },
    category: cat.arches,
    description: {
      en: "Asymmetric floral semicircle with wildflowers, branches and green foliage. Metal structure included.",
      es: "Semicírculo floral asimétrico con flores silvestres, ramas y follaje verde. Estructura de metal incluida.",
    },
    precio_renta: 320,
    stock_total: 2,
    imagenes: [U("1465495976277-4387d4b0b4c6"), U("1606490194859-07c18c9f0968"), U("1525772764200-be829a350797")],
  },
  {
    id: "f3",
    name: { en: "White Canopy Arch", es: "Arco Marquesina Blanco" },
    category: cat.arches,
    description: {
      en: "Large rectangular structure with garlands of white flowers and green leaves. Elegant for outdoor ceremonies.",
      es: "Gran estructura rectangular con guirnaldas de flores blancas y hojas verdes. Elegante para ceremonias al aire libre.",
    },
    precio_renta: 450,
    stock_total: 1,
    imagenes: [U("1519741497674-611481863552"), U("1507003211169-0a1dd7228f2d"), U("1519225421980-715cb0215aed")],
  },
  {
    id: "f4",
    name: { en: "Tall Crystal Centerpiece", es: "Centro Alto Cristal" },
    category: cat.centerpieces,
    description: {
      en: "Tall glass vase with roses, alstroemerias and greenery. Approx. 70cm tall. Price per unit.",
      es: "Jarrón de cristal alto con rosas, astromelias y greenery. Altura aproximada 70cm. Precio por unidad.",
    },
    precio_renta: 85,
    stock_total: 20,
    imagenes: [U("1533038590840-1cde6e668a91"), U("1606800052052-a08af7148866"), U("1487530811176-3780de880c2d")],
  },
  {
    id: "f5",
    name: { en: "Low Rustic Centerpiece", es: "Centro Bajo Rústico" },
    category: cat.centerpieces,
    description: {
      en: "Wooden box with seasonal flowers, succulents and moss. Perfect for long rustic or boho tables.",
      es: "Caja de madera con flores de temporada, suculentas y musgo. Perfecto para mesas largas estilo rústico o boho.",
    },
    precio_renta: 55,
    stock_total: 30,
    imagenes: [U("1478146896981-b80fe463b330"), U("1487530811176-3780de880c2d"), U("1606800052052-a08af7148866")],
  },
  {
    id: "f6",
    name: { en: "Minimalist Centerpiece", es: "Centro Minimalista" },
    category: cat.centerpieces,
    description: {
      en: "Black cylindrical vase with 3 exotic flower stems and dried foliage. Modern and elegant for contemporary events.",
      es: "Florero cilíndrico negro con 3 tallos de flor exótica y follaje seco. Moderno y elegante para eventos contemporáneos.",
    },
    precio_renta: 45,
    stock_total: 25,
    imagenes: [U("1561128290-024d7d22cf2d"), U("1487530811176-3780de880c2d")],
  },
  {
    id: "f7",
    name: { en: "Bridal Cascade Centerpiece", es: "Centro Cascada Novia" },
    category: cat.centerpieces,
    description: {
      en: "Cascade-style centerpiece with English roses, lisianthus and hanging wisteria. Dramatic and romantic effect.",
      es: "Centro tipo cascada con rosas inglesas, lisianthus y wisteria colgante. Efecto dramático y romántico.",
    },
    precio_renta: 110,
    stock_total: 10,
    imagenes: [U("1507003211169-0a1dd7228f2d"), U("1494774157365-9e04c6720e47"), U("1487530811176-3780de880c2d"), U("1606800052052-a08af7148866")],
  },
  {
    id: "f8",
    name: { en: "Romantic Bridal Bouquet", es: "Bouquet Novia Romántico" },
    category: cat.bouquets,
    description: {
      en: "Compact round bouquet of David Austin English roses, peonies and eucalyptus. Satin ribbon included.",
      es: "Ramo redondo compacto de rosas inglesas David Austin, peonías y eucalipto. Incluye cinta de raso.",
    },
    precio_renta: 120,
    stock_total: 5,
    imagenes: [U("1494774157365-9e04c6720e47"), U("1487530811176-3780de880c2d"), U("1525772764200-be829a350797")],
  },
  {
    id: "f9",
    name: { en: "Wildflower Bouquet", es: "Bouquet Silvestre" },
    category: cat.bouquets,
    description: {
      en: "Asymmetric bouquet with seasonal flowers, aromatic herbs and wild foliage. Boho chic style.",
      es: "Ramo asimétrico con flores de temporada, hierbas aromáticas y follaje silvestre. Estilo boho chic.",
    },
    precio_renta: 85,
    stock_total: 8,
    imagenes: [U("1487530811176-3780de880c2d"), U("1494774157365-9e04c6720e47")],
  },
  {
    id: "f10",
    name: { en: "Bridesmaid Bouquet", es: "Bouquet Dama de Honor" },
    category: cat.bouquets,
    description: {
      en: "Small bouquet coordinated with the bridal bouquet. Perfect for the wedding party.",
      es: "Ramo pequeño coordinado con el bouquet de novia. Perfecto para el cortejo nupcial.",
    },
    precio_renta: 60,
    stock_total: 12,
    imagenes: [U("1494774157365-9e04c6720e47"), U("1487530811176-3780de880c2d")],
  },
  {
    id: "f11",
    name: { en: "Floral Head Crown", es: "Corona Floral Cabeza" },
    category: cat.crowns,
    description: {
      en: "Head crown with small fresh flowers and delicate foliage. Ideal for brides, quinceañeras and baby showers.",
      es: "Corona para la cabeza con flores frescas pequeñas y follaje delicado. Ideal para novias, quinceañeras y baby showers.",
    },
    precio_renta: 45,
    stock_total: 6,
    imagenes: [U("1487530811176-3780de880c2d"), U("1494774157365-9e04c6720e47"), U("1525772764200-be829a350797")],
  },
  {
    id: "f12",
    name: { en: "Eucalyptus & Rose Garland", es: "Guirnalda Eucalipto & Rosas" },
    category: cat.crowns,
    description: {
      en: "Per linear meter. Natural eucalyptus garland with interspersed roses. To decorate tables, stairs or entrances.",
      es: "Por metro lineal. Guirnalda de eucalipto natural con rosas intercaladas. Para decorar mesas, escaleras o entradas.",
    },
    precio_renta: 35,
    stock_total: 15,
    imagenes: [U("1465495976277-4387d4b0b4c6"), U("1533038590840-1cde6e668a91"), U("1478146896981-b80fe463b330")],
  },
  {
    id: "f13",
    name: { en: "Floral Chair Swag", es: "Swag Floral para Silla" },
    category: cat.crowns,
    description: {
      en: "Floral decoration for chair backs. Includes ribbon and a central flower. Price per unit.",
      es: "Decoración floral para el respaldo de sillas. Incluye cinta y flor central. Precio por unidad.",
    },
    precio_renta: 22,
    stock_total: 40,
    imagenes: [U("1487530811176-3780de880c2d"), U("1494774157365-9e04c6720e47")],
  },
  {
    id: "f14",
    name: { en: "Rose Petal Aisle", es: "Camino de Pétalos Rosas" },
    category: cat.petals,
    description: {
      en: "Natural rose petal path for the ceremony entrance. 10m long. Customizable colors.",
      es: "Camino de pétalos de rosa natural para la entrada de la ceremonia. Longitud 10m. Colores personalizables.",
    },
    precio_renta: 75,
    stock_total: 10,
    imagenes: [U("1561128290-024d7d22cf2d"), U("1606800052052-a08af7148866"), U("1487530811176-3780de880c2d")],
  },
  {
    id: "f15",
    name: { en: "Baby Flower Floor", es: "Alfombra Floral Bebé" },
    category: cat.petals,
    description: {
      en: "Floor 'flower floor' composition for photos. 2m × 1.5m with assorted flowers and leaves.",
      es: 'Composición floral en el suelo tipo "flower floor" para fotos. 2m × 1.5m con flores variadas y hojas.',
    },
    precio_renta: 140,
    stock_total: 3,
    imagenes: [U("1519225421980-715cb0215aed"), U("1606800052052-a08af7148866"), U("1561128290-024d7d22cf2d")],
  },
  {
    id: "f16",
    name: { en: "Vintage Bronze Vase", es: "Jarrón Vintage Bronce" },
    category: cat.accessories,
    description: {
      en: "Vintage-style vase in an aged bronze tone. Flowers not included. Ideal for decoration or with dried flowers.",
      es: "Jarrón estilo vintage en tono bronce envejecido. No incluye flores. Ideal para uso decorativo o con flores secas.",
    },
    precio_renta: 18,
    stock_total: 20,
    imagenes: [U("1478146896981-b80fe463b330"), U("1487530811176-3780de880c2d")],
  },
  {
    id: "f17",
    name: { en: "Bubble Glass Vase", es: "Florero de Cristal Burbuja" },
    category: cat.accessories,
    description: {
      en: "Spherical blown-glass vase. Flowers not included. Perfect as a decorative element or floating candle holder.",
      es: "Florero esférico de cristal soplado. No incluye flores. Perfecto como elemento decorativo o porta velas flotantes.",
    },
    precio_renta: 12,
    stock_total: 30,
    imagenes: [U("1478146896981-b80fe463b330"), U("1487530811176-3780de880c2d")],
  },
  {
    id: "f18",
    name: { en: "Wooden Flower Box", es: "Caja Madera para Flores" },
    category: cat.accessories,
    description: {
      en: "Rectangular wooden box painted white. Flowers not included. Use as a base for centerpieces or arrangements.",
      es: "Caja rectangular de madera pintada en blanco. No incluye flores. Uso como base para centros de mesa o arreglos.",
    },
    precio_renta: 15,
    stock_total: 18,
    imagenes: [U("1478146896981-b80fe463b330"), U("1606800052052-a08af7148866")],
  },
];
