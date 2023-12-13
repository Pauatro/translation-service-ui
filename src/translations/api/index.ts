import { ApiMethod, fetchApi } from "../../shared/api";
import { environmentService } from "../../shared/environmentService";

interface TranslateToJeringozaRequestBody {
  text: string;
}

interface TranslateToLanguageRequestBody {
  text: string;
  language: string;
}

interface TranslationEndpointResponse {
  data: string;
}

interface AvailableLanguagesEndpointResponse {
  data: string[];
}

export class TranslationsApi {
  private static baseUrl = environmentService.translationApiBaseUrl;
  private static translationsApiPrefix = "/translations";
  private static translationsApiEndpoints = {
    jeringoza: `${this.baseUrl}${this.translationsApiPrefix}/jeringoza`,
    languageTranslation: `${this.baseUrl}${this.translationsApiPrefix}`,
    fetchLanguages: `${this.baseUrl}${this.translationsApiPrefix}/languages`,
  };

  static async translateToJeringoza(text: string) {
    const translation = await fetchApi<TranslationEndpointResponse>({
      url: this.translationsApiEndpoints.jeringoza,
      method: ApiMethod.POST,
      data: {
        text,
      } as TranslateToJeringozaRequestBody,
    });
    return translation?.data;
  }

  static async translateToLanguage(language: string, text: string) {
    const translation = await fetchApi<TranslationEndpointResponse>({
      url: this.translationsApiEndpoints.languageTranslation,
      method: ApiMethod.POST,
      data: {
        language,
        text,
      } as TranslateToLanguageRequestBody,
    });
    return translation?.data;
  }

  static async fetchAvailableLanguages() {
    const translation = await fetchApi<AvailableLanguagesEndpointResponse>({
      url: this.translationsApiEndpoints.fetchLanguages,
      method: ApiMethod.GET,
    });
    return translation?.data;
  }
}
