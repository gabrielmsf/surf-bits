/**
 * Utilitário centralizado para gerenciamento de rotas do sistema.
 * Segue o padrão exigido pelas regras de sites estáticos.
 */

export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  DEALS: '/deals',
  REVIEWS: '/reviews',
} as const;

export type RouteValue = typeof ROUTES[keyof typeof ROUTES];

/**
 * Helper para construir URLs dinâmicas de forma segura.
 */
export const getRoute = {
  home: () => ROUTES.HOME,
  blog: (slug?: string) => slug ? `${ROUTES.BLOG}/${slug}` : ROUTES.BLOG,
  deal: (slug: string) => `${ROUTES.DEALS}/${slug}`,
  review: (slug: string) => `${ROUTES.REVIEWS}/${slug}`,
};
