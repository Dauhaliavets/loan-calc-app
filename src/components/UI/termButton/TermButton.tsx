import { FC } from "react";
import s from "./TermButton.module.css";
import clsx from "clsx";

interface TermButtonProps {
  value: number;
  children: string | number;
  className: string;
  onClick: (term: number) => void;
}

export const TermButton: FC<TermButtonProps> = ({
  value,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(s.termButton, s[className])}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
};
