import Item from "./item";
import { ItemType } from "@/app/week-6/types";

export default function ItemList({ items }: { items: ItemType[] }) {
  return (
    <div id="item-list" className="flex flex-col gap-5 items-center">
      {items.map((item, index) => {
        return (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={index}
          />
        );
      })}
    </div>
  );
}
