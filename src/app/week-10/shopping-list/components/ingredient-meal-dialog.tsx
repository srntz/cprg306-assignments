import { IDialogData, IMealData } from "@/app/week-10/shopping-list/types";
import { Dispatch, SetStateAction } from "react";
import Dialog from "@/app/week-9/shopping-list/components/dialog";

export default function IngredientMealDialog({
  dialogData,
  setDialogData,
}: {
  dialogData: IDialogData;
  setDialogData: Dispatch<SetStateAction<IDialogData>>;
}) {
  function generateContent(): React.ReactNode {
    if (dialogData.data === undefined) {
      return <p>Loading...</p>;
    } else if (dialogData.data["meals"].length <= 0) {
      return <p>No meals were found</p>;
    }

    return (
      <>
        {dialogData.data["meals"].map((item: IMealData, index: number) => (
          <div
            key={index}
            className="h-14 flex items-center hover:bg-slate-200 hover:pl-2 transition-all duration-75 "
          >
            <p className="cursor-default">{item.strMeal}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <Dialog show={dialogData.isShown}>
      <div className="flex justify-between mb-3">
        <p className="text-slate-950 text-lg">
          Recipes for <i>{dialogData.itemName}</i>
        </p>
        <button
          className="text-slate-950"
          onClick={() =>
            setDialogData((prev) => {
              return { ...prev, isShown: false };
            })
          }
        >
          X
        </button>
      </div>
      <div className="text-slate-950 max-h-[70vh] overflow-y-auto">
        {generateContent()}
      </div>
    </Dialog>
  );
}
