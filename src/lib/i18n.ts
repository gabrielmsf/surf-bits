export const LANGUAGES = {
  PT: 'pt',
  EN: 'en',
  ES: 'es',
} as const;

export const COUNTRIES = {
  BR: 'br',
  US: 'us',
  AU: 'au',
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export type Country = typeof COUNTRIES[keyof typeof COUNTRIES];

export const uiTranslations = {
  [LANGUAGES.PT]: {
    selectRegion: 'Selecione sua região',
    comingSoon: 'Em Breve',
    subtitle: 'A melhor curadoria de equipamentos de surf.',
  },
  [LANGUAGES.EN]: {
    selectRegion: 'Select your region',
    comingSoon: 'Coming Soon',
    subtitle: 'The best curation of surf gear.',
  },
  [LANGUAGES.ES]: {
    selectRegion: 'Selecciona tu región',
    comingSoon: 'Próximamente',
    subtitle: 'La mejor selección de equipo de surf.',
  },
};

export const getUiTranslation = (lang: Language) => {
  return uiTranslations[lang] || uiTranslations[LANGUAGES.PT];
};
