import { Dispatch, SetStateAction } from "react";
import { SortingOptions } from "@/app/week-6/types";

const ButtonUnselected =
  "p-3 h-12 min-w-20 bg-slate-700 hover:bg-slate-600 rounded";
const ButtonSelected = "p-3 h-12 min-w-20 bg-slate-500 rounded";

export default function SortingButtons({
  sortBy,
  setSortBy,
}: {
  sortBy: SortingOptions;
  setSortBy: Dispatch<SetStateAction<SortingOptions>>;
}) {
  return (
    <div
      id="button-area-container"
      className="w-full flex items-center justify-center my-5"
    >
      <div className="min-w-[40rem] flex gap-5">
        <button
          className={sortBy === "name" ? ButtonSelected : ButtonUnselected}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={sortBy === "category" ? ButtonSelected : ButtonUnselected}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button
          className={sortBy === "group" ? ButtonSelected : ButtonUnselected}
          onClick={() => setSortBy("group")}
        >
          Group category
        </button>
      </div>
    </div>
  );
}
