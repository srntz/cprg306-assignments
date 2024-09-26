import { items } from "@/app/week-3/item-data";
import Item from "./item";

export default function ItemList() {
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
