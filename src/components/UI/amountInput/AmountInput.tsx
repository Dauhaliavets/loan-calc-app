import React, { FC, useEffect, useRef } from "react";
import s from "./AmountInput.module.css";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const AmountInput: FC<AmountInputProps> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  useEffect(() => {
    if (inputRef && value) {
      inputRef.current?.setSelectionRange(value.length, value.length);
    }
  }, [value]);

  return (
    <div className={s.inputField}>
      <label className={s.label}>Введите сумму кредита</label>
      <input
        className={s.input}
        type="text"
        value={value ? `${value} ₽` : ""}
        onChange={handleInputChange}
        placeholder="Введите данные"
        ref={inputRef}
      />
    </div>
  );
};
