import { Dispatch, SetStateAction } from "react";
import { IDialogData } from "@/app/week-9/shopping-list/types";
import { FetchMealByIngredient } from "@/app/week-9/shopping-list/services/MealService";
import { FormatString } from "@/app/week-9/shopping-list/utils/utils";

export default function Item({
  name,
  quantity,
  category,
  setDialogData,
}: {
  name: string;
  quantity: number;
  category: string;
  setDialogData: Dispatch<SetStateAction<IDialogData>>;
}) {
  async function handleItemPress() {
    setDialogData({
      isShown: true,
      itemName: FormatString(name),
      data: undefined,
    });
    const recipes = await FetchMealByIngredient(name);
    setDialogData((prev) => {
      return { ...prev, data: recipes };
    });
  }
  return (
    <li
      className="item flex flex-col bg-slate-400 p-4 rounded w-[40rem] hover:bg-slate-500 transition"
      onClick={handleItemPress}
    >
      <p className="font-bold text-xl text-slate-950">{name}</p>
      <p className="text-slate-800">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
