import { FC } from "react";
import clsx from "clsx";
import s from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
}
export const Button: FC<ButtonProps> = ({
  variant = "text",
  onClick,
  children,
}) => {
  return (
    <button className={clsx(s.button, s[variant])} onClick={onClick}>
      {children}
    </button>
  );
};
