import { FC, ReactNode, useEffect, useRef } from "react";
import s from "./Popup.module.css";
import { CloseButton } from "../UI/closeButton/CloseButton";

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
}
export const Popup: FC<PopupProps> = ({ children, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={s.overlay}>
      <div className={s.content} ref={popupRef}>
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>
  );
};
