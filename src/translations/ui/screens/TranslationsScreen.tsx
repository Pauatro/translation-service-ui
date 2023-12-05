import { SyntheticEvent } from "react";
import { TextArea } from "../../../shared/ui/components/TextArea";
import { BaseSelect } from "../../../shared/ui/components/BaseSelect";
import { useTranslationForm } from "../../application/hooks/useTranslationForm";
import { Text } from "../../../shared/ui/components/Text";

export const TranslationsScreen = () => {
  const {
    availableLanguages,
    selectedLanguage,
    setSelectedLanguage,
    textInput,
    setTextInput,
    translatedText,
  } = useTranslationForm();

  const onTextInputChange = (event: SyntheticEvent) =>
    setTextInput((event.target as HTMLTextAreaElement).value);

  const onSelectOptionsChange = (option: string) => setSelectedLanguage(option);

  return (
    <div className="p-8 flex flex-col items-start">
      <Text className="font-bold">Language</Text>
      <BaseSelect
        options={availableLanguages}
        defaultValue={selectedLanguage}
        onChange={onSelectOptionsChange}
        triggerClassName="my-2"
      />
      <div className="flex gap-6 w-full">
        <div className="flex flex-col items-start w-full">
          <Text className="font-bold">Text to Translate</Text>
          <TextArea value={textInput} onChange={onTextInputChange} />
        </div>
        <div className="flex flex-col items-start w-full">
          <Text className="font-bold">Translation</Text>
          <TextArea readOnly value={translatedText} />
        </div>
      </div>
    </div>
  );
};
