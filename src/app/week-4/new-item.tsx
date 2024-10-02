"use client";
import { useState } from "react";
import CounterButton from "@/app/week-4/counter-button";

export default function NewItem() {
  const [counter, setCounter] = useState(1);

  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }
  return (
    <div
      id="new-item"
      className="w-72 h-20 bg-white rounded flex items-center justify-between p-5"
    >
      <div
        id="display"
        className="bg-slate-950 w-[50%] h-12 rounded flex items-center justify-center select-none"
      >
        {counter}
      </div>
      <CounterButton text="-" enabled={counter > 1} onClick={handleDecrement} />
      <CounterButton
        text="+"
        enabled={counter < 20}
        onClick={handleIncrement}
      />
    </div>
  );
}
