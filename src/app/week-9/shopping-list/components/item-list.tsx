import Item from "./item";
import { ItemType, SortingOptions } from "@/app/week-6/types";
import SortingButtons from "@/app/week-9/shopping-list/components/sorting-buttons";
import { useState } from "react";
import GroupedItemList from "@/app/week-9/shopping-list/components/grouped-item-list";
import { IDialogData } from "@/app/week-9/shopping-list/types";
import IngredientMealDialog from "@/app/week-9/shopping-list/components/ingredient-meal-dialog";

export default function ItemList({ items }: { items: ItemType[] }) {
  const [sortBy, setSortBy] = useState<SortingOptions>("name");

  const [dialogData, setDialogData] = useState<IDialogData>({
    itemName: "",
    data: undefined,
    isShown: false,
  });

  let sortedItemList: ItemType[] = [];

  if (sortBy === "name") {
    sortedItemList = [...items.sort((a, b) => a.name.localeCompare(b.name))];
  } else if (sortBy === "category") {
    sortedItemList = [
      ...items.sort((a, b) => a.category.localeCompare(b.category)),
    ];
  }

  return (
    <>
      <IngredientMealDialog
        dialogData={dialogData}
        setDialogData={setDialogData}
      />

      <SortingButtons sortBy={sortBy} setSortBy={setSortBy} />

      <div id="item-list" className="flex flex-col gap-5 overflow-auto">
        {sortBy === "group" ? (
          <GroupedItemList data={items} />
        ) : (
          sortedItemList.map((item, index) => {
            return (
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                key={index}
                setDialogData={setDialogData}
              />
            );
          })
        )}
      </div>
    </>
  );
}
