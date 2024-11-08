import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["es", "en"] as const;

export type Locale = typeof locales;

export const pathnames: Pathnames<Locale> = {
  home: {
    es: "/",
    en: "/",
  },
  about: {
    en: "/about",
    es: "/acerca",
  },
  services: {
    en: "/services",
    es: "/servicios",
  },
  contact: {
    en: "/contact",
    es: "/contacto",
  },
};

export const localePrefix: LocalePrefix<Locale> = "always";
