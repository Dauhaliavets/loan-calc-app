import { useState } from "react";
import { Popup } from "../../components/popup/Popup";
import s from "./LoanCalculationWidget.module.css";
import { Button } from "../../components/UI/button/Button";
import { LoanCalculation } from "../../components/loanCalculation/LoanCalculation";

export const LoanCalculationWidget = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  if (isOpenPopup)
    return <Popup onClose={closePopup} children={<LoanCalculation />} />;

  return (
    <div className={s.layout}>
      <Button variant="outlined" onClick={openPopup}>
        Расчет платежей
      </Button>
    </div>
  );
};
