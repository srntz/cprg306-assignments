"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Counter from "@/app/week-5/components/counter/counter";
import { options } from "@/app/week-5/data/selectOptions";
import { ItemType } from "@/app/week-6/types";
import { addItem } from "@/app/week-10/shopping-list/services/ShoppingListService";
import { useAuthContext } from "@/app/week-9/utils/auth-context";
import { User } from "@firebase/auth";

const DEFAULT_COUNTER = 1;
const DEFAULT_NAME = "";
const DEFAULT_CATEGORY = "Produce";

export default function NewItem({
  setItem,
}: {
  setItem: Dispatch<SetStateAction<ItemType[]>>;
}) {
  const [counter, setCounter] = useState(DEFAULT_COUNTER);
  const [name, setName] = useState(DEFAULT_NAME);
  const [category, setCategory] = useState(DEFAULT_CATEGORY);

  const { user } = useAuthContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const item: ItemType = {
      id: window.crypto.randomUUID(),
      name: name,
      category: category,
      quantity: counter,
    };

    if (user) {
      addItem(user.uid, item);
    }

    setItem((prev) => [...prev, item]);

    setCounter(DEFAULT_COUNTER);
    setName(DEFAULT_NAME);
    setCategory(DEFAULT_CATEGORY);
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="form-container"
      className="rounded bg-slate-500 w-[28rem] h-[13.5rem] flex flex-col p-3 justify-between gap-3"
    >
      <div id="row-1" className="h-[3.5rem]">
        <input
          className="w-full h-full px-5 rounded text-slate-950"
          placeholder="Name..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
      </div>

      <div id="row-2" className="h-[3.5rem] flex gap-4">
        <Counter
          counterValue={counter}
          setCounter={setCounter}
          className={"row-start-2 h-[4rem] w-[50%]"}
        />
        <select
          className="w-[50%] rounded text-slate-950 px-3"
          value={category}
          onChange={handleSelect}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div id="row-3" className="h-[3.5rem]">
        <button
          className="w-full h-full bg-slate-800 rounded hover:bg-slate-950"
          type="submit"
        >
          +
        </button>
      </div>
    </form>
  );
}
