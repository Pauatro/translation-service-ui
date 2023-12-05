import { useState, useEffect, useCallback } from "react";
import { TranslationsApi } from "../../api";
import debounce from "lodash.debounce";

const JERINGOZA_STRING = "jeringoza";
const DEFAULT_TRANSLATION_TEXT = "Hello. How are you?";

export const useTranslationForm = () => {
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(JERINGOZA_STRING);
  const [textInput, setTextInput] = useState<string>(DEFAULT_TRANSLATION_TEXT);
  const [translatedText, setTranslatedText] = useState("");

  const fetchAvailableLanguages = useCallback(() => {
    TranslationsApi.fetchAvailableLanguages().then((languages) => {
      languages && setAvailableLanguages([JERINGOZA_STRING, ...languages]);
    });
  }, []);

  const translateToJeringoza = useCallback(
    debounce((text: string) => {
      TranslationsApi.translateToJeringoza(text).then((translation) => {
        translation && setTranslatedText(translation);
      });
    }, 1000),
    []
  );

  const translateToLanguage = useCallback(
    debounce((language: string, text: string) => {
      TranslationsApi.translateToLanguage(language, text).then(
        (translation) => {
          translation && setTranslatedText(translation);
        }
      );
    }, 1000),
    []
  );

  useEffect(() => {
    fetchAvailableLanguages();
  }, []);

  useEffect(() => {
    if (selectedLanguage === JERINGOZA_STRING) {
      translateToJeringoza(textInput);
    } else {
      setTextInput(DEFAULT_TRANSLATION_TEXT);
      selectedLanguage &&
        translateToLanguage(selectedLanguage, DEFAULT_TRANSLATION_TEXT);
    }
  }, [selectedLanguage, textInput, translateToJeringoza, translateToLanguage]);

  return {
    availableLanguages,
    selectedLanguage,
    setSelectedLanguage,
    textInput,
    setTextInput,
    translatedText,
  };
};
