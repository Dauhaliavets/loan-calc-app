import { useCallback, useEffect, useState } from "react";
import { Button } from "../UI/button/Button";
import { TermButton } from "../UI/termButton/TermButton";
import { AmountInput } from "../UI/amountInput/AmountInput";
import s from "./LoanCalculation.module.css";
import formatToString from "../../shared/utils/formatToString";
import { paymentTerms, terms } from "../../shared/constants";
import formatToNumber from "../../shared/utils/formatToNumber";

export const LoanCalculation = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [numberOfMonths, setNumberOfMonths] = useState<number>(12);
  const [paymentTermMonth, setPaymentTermMonth] = useState<number>(1);
  const [payment, setPayment] = useState<number>(0);

  const onLoanAmountChange = (newValue: string) => {
    setLoanAmount(formatToString(newValue));
  };

  const handleCalculate = useCallback(() => {
    const loanAmountNumber = formatToNumber(loanAmount);
    if (loanAmount) {
      const currentPayment = Math.round(
        (loanAmountNumber / numberOfMonths) * paymentTermMonth
      );
      setPayment(currentPayment);
    }
  }, [loanAmount, numberOfMonths, paymentTermMonth]);

  const onCalculateClick = () => {
    setCurrentStep(2);
    handleCalculate();
  };

  const onNumberOfMonthsChange = (newTerm: number) => {
    setNumberOfMonths(newTerm);
  };

  const onPaymentTermMonthChange = (newTerm: number) => {
    setPaymentTermMonth(newTerm);
  };

  useEffect(() => {
    handleCalculate();
  }, [numberOfMonths, paymentTermMonth, handleCalculate]);

  return (
    <div>
      <h4 className={s.title}>Платежи по кредиту</h4>
      <p className={s.description}>
        Введите сумму кредита и выберите срок, на который вы хотите его
        оформить. <br />
        Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
        лучше спланировать свои финансы.
      </p>

      <AmountInput value={loanAmount} onChange={onLoanAmountChange} />
      <Button onClick={onCalculateClick}>Рассчитать</Button>

      <div className={s.numberOfMonthsBlock}>
        <h5 className={s.numberOfMonthsTitle}>Количество месяцев?</h5>
        <div className={s.termButtons}>
          {terms.map((term) => (
            <TermButton
              key={term}
              value={term}
              className={numberOfMonths === term ? "active" : ""}
              onClick={onNumberOfMonthsChange}
            >
              {term}
            </TermButton>
          ))}
        </div>
      </div>

      {currentStep === 2 ? (
        <div className={s.paymentBlock}>
          <h5 className={s.paymentTitle}>Итого ваш платеж по кредиту:</h5>

          <div className={s.termButtons}>
            {paymentTerms.map((paymentTermObj) => {
              const [key, value] = Object.entries(paymentTermObj)[0];
              return (
                <TermButton
                  key={value}
                  value={value}
                  className={paymentTermMonth === value ? "active" : ""}
                  onClick={onPaymentTermMonthChange}
                >
                  {key}
                </TermButton>
              );
            })}
          </div>

          <div className={s.payment}>{`${formatToString(payment)} рублей`}</div>
        </div>
      ) : null}
      <div className={s.bottomActionsBlock}>
        <Button variant="contained" onClick={() => {}}>
          Добавить
        </Button>
      </div>
    </div>
  );
};
