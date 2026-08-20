import type { Lang } from "../i18n/ui";

/** A product with every user-facing field available in both locales. */
export type LocalizedItem = {
  id: string | number;
  name: Record<Lang, string>;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  precio_renta: number;
  stock_total?: number;
  imagenes?: string[];
};

/** Flattened shape consumed by the client catalog script (initQuoteCatalog). */
export type ResolvedItem = {
  id: string | number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio_renta: number;
  stock_total?: number;
  imagenes?: string[];
};

/** Resolve a list of bilingual products to a single locale. */
export function resolveItems(items: LocalizedItem[], lang: Lang): ResolvedItem[] {
  return items.map((it) => ({
    id: it.id,
    nombre: it.name[lang],
    categoria: it.category[lang],
    descripcion: it.description[lang],
    precio_renta: it.precio_renta,
    stock_total: it.stock_total,
    imagenes: it.imagenes,
  }));
}
