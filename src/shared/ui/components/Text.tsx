import { FC, ReactNode } from "react";

const defaultClasses = ``;

export interface TextProps {
  children: ReactNode;
  className?: string;
}

export const Text: FC<TextProps> = ({ className, children }) => {
  return <p className={`${defaultClasses} ${className}`}>{children}</p>;
};
