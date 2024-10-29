import Item from "./item";
import { ItemType, SortingOptions } from "@/app/week-6/types";
import SortingButtons from "@/app/week-7/components/sorting-buttons";
import { useState } from "react";
import GroupedItemList from "@/app/week-7/components/grouped-item-list";

export default function ItemList({ items }: { items: ItemType[] }) {
  const [sortBy, setSortBy] = useState<SortingOptions>("name");

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
              />
            );
          })
        )}
      </div>
    </>
  );
}
