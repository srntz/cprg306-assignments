import CounterButton from "@/app/week-4/counter-button";
import { Dispatch, SetStateAction } from "react";

export default function Counter({
  counterValue,
  setCounter,
  className,
}: {
  counterValue: number;
  setCounter: Dispatch<SetStateAction<number>>;
  className?: string;
}) {
  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }

  return (
    <div
      id="new-item"
      className={`w-72 h-full bg-white rounded flex items-center justify-between py-2 px-3 ${className}`}
    >
      <div
        id="display"
        className="bg-slate-950 w-[50%] h-[90%] rounded flex items-center justify-center select-none"
      >
        {counterValue}
      </div>
      <CounterButton
        text="-"
        enabled={counterValue > 1}
        onClick={handleDecrement}
        className="h-[90%] w-[20%]"
      />
      <CounterButton
        text="+"
        enabled={counterValue < 20}
        onClick={handleIncrement}
        className="h-[90%] w-[20%]"
      />
    </div>
  );
}
