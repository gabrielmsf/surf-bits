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
  // blog: (lang: Language, country: Country, slug?: string) => ...
  // deal: (lang: Language, country: Country, slug: string) => ...
};
