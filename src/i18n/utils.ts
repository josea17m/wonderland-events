import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export { defaultLang };
export type { Lang };

/** Page identity used to resolve localized URLs and active-nav state. */
export type RouteKey = "home" | "catalog" | "flowers" | "about";

/**
 * Slug map per locale. English is the default locale and lives at the root;
 * Spanish lives under the /es/ prefix. Keep these in sync with the files in
 * src/pages/ and src/pages/es/.
 */
export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { en: "/", es: "/es/" },
  catalog: { en: "/catalog", es: "/es/catalogo" },
  flowers: { en: "/flowers", es: "/es/flores" },
  about: { en: "/about", es: "/es/nosotros" },
};

export const locales: Lang[] = ["en", "es"];

/** Derive the active locale from the request URL. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang === "es") return "es";
  return defaultLang;
}

/** Returns a translator bound to a locale, with fallback to the default locale. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Localized path for a page in a given locale. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

/** The same page in the *other* locale (for the language switcher / hreflang). */
export function getAlternatePath(key: RouteKey, targetLang: Lang): string {
  return ROUTES[key][targetLang];
}

/** Convenience: the on-page anchor links (portfolio / contact live on home). */
export function homeAnchor(lang: Lang, hash: string): string {
  const base = ROUTES.home[lang];
  return `${base}#${hash}`;
}
