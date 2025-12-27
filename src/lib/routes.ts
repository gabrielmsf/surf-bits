import { type Language, type Country } from './i18n';

/**
 * Utilitário centralizado para gerenciamento de rotas do sistema.
 * Segue o padrão exigido pelas regras de sites estáticos.
 */

export const ROUTES = {
  HOME: '/',
} as const;

/**
 * Helper para construir URLs dinâmicas de forma segura.
 */
export const getRoute = {
  home: () => ROUTES.HOME,

  // Regional Routes
  regionalHome: (lang: Language, country: Country) => `/${lang}/${country}`,

  // Placeholder for future routes (to be implemented with real logic later)
  // deal: (lang: Language, country: Country, slug: string) => ...

  // Content (Spots replace Blog)
  spot: (lang: Language, country: Country, region: string, slug: string) =>
    `/${lang}/${country}/${region}/${slug}`,
};
