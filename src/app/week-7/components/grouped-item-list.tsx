import { ItemType } from "@/app/week-6/types";
import Item from "@/app/week-6/components/item";

function ConstructGroupedArray(data: ItemType[]): React.ReactElement[] {
  const renderableElements: React.ReactElement[] = [];
  let localData = [...data];
  localData = localData.sort((a, b) => a.category.localeCompare(b.category));

  while (localData.length > 0) {
    const category = localData[0].category;
    const categoryItems: ItemType[] = [];

    for (let i = 0; i < localData.length; i++) {
      if (localData[i].category === category) {
        categoryItems.push(localData[i]);
        localData.splice(i, 1);
        i--;
      }
    }

    categoryItems.sort((a, b) => a.name.localeCompare(b.name));

    const categoryHeading: React.ReactElement = (
      <div className="w-[40rem]" key={category}>
        <h3 className="capitalize text-xl">{category}</h3>
      </div>
    );
    const categoryItemsRenderable: React.ReactElement[] = categoryItems.map(
      (item) => (
        <Item
          name={item.name}
          category={item.category}
          quantity={item.quantity}
          key={item.name}
        ></Item>
      ),
    );

    renderableElements.push(
      <div className="flex flex-col gap-5">
        {categoryHeading}
        <ul className="flex flex-col gap-5">{...categoryItemsRenderable}</ul>
      </div>,
    );
  }

  return renderableElements;
}

export default function GroupedItemList({ data }: { data: ItemType[] }) {
  return (
    <div id="item-list" className="flex flex-col gap-5">
      {ConstructGroupedArray(data)}
    </div>
  );
}
