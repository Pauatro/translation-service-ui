import * as RadixSelect from "@radix-ui/react-select";
import { FC } from "react";

interface BaseSelectInputs {
  options: string[];
  onChange: (option: string) => void;
  defaultValue: string;
  triggerClassName?: string;
  itemClassName?: string;
}

const baseTriggerClassName = `appearance-none border border-gray-800/20 rounded-xl px-4 py-2`;
const baseContentClassName = `appearance-none border border-gray-800/20 rounded-xl px-4 py-2 bg-white`;
const baseItemClassName = ``;

export const BaseSelect: FC<BaseSelectInputs> = ({
  triggerClassName,
  options,
  onChange,
  defaultValue,
}) => (
  <RadixSelect.Root onValueChange={onChange} defaultValue={defaultValue}>
    <RadixSelect.Trigger
      className={`${baseTriggerClassName} ${triggerClassName}`}
    >
      <RadixSelect.Value />
      <RadixSelect.Icon />
    </RadixSelect.Trigger>

    <RadixSelect.Portal>
      <RadixSelect.Content className={`${baseContentClassName}`}>
        <RadixSelect.ScrollUpButton />
        <RadixSelect.Viewport>
          {options.map((option) => (
            <RadixSelect.Item
              value={option}
              key={option}
              className={`${baseItemClassName}`}
            >
              <RadixSelect.ItemText>{option}</RadixSelect.ItemText>
              <RadixSelect.ItemIndicator />
            </RadixSelect.Item>
          ))}

          <RadixSelect.Separator />
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton />
        <RadixSelect.Arrow />
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);
