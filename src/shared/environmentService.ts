interface EnvironmentService {
  translationApiBaseUrl: string;
}

export const environmentService: EnvironmentService = {
  translationApiBaseUrl: import.meta.env.VITE_TRANSLATIONS_BASE_URL,
};
