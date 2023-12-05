import type { InputHTMLAttributes } from "react";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const baseTextAreaClasses =
  "appearance-none border border-gray-800/20 h-36 rounded-xl w-full py-4 px-4 text-gray-800 placeholder:text-gray-800/20 focus:outline-none hover:border-primary-100 focus-within:border-primary-100 active:border-primary-100";

const outlineInputClasses =
  "ring-primary-100 transition-all duration-75 focus-within:ring-1 hover:ring-1 focus:ring-1";

export const TextArea = ({ className, ...props }: TextAreaProps) => (
  <textarea
    {...props}
    className={`${baseTextAreaClasses} ${outlineInputClasses} ${className}`}
  />
);

TextArea.displayName = "TextArea";
