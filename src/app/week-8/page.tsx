"use client";

import NewItem from "@/app/week-8/components/new-item";
import ItemList from "@/app/week-8/components/item-list";
import { useState } from "react";
import { ItemType } from "@/app/week-6/types";
import { itemsData } from "@/app/week-8/data/itemsData";

export default function Page() {
  const [items, setItems] = useState<ItemType[]>(itemsData);

  return (
    <>
      <main className="w-full px-2 flex flex-col py-5 h-[100vh] overflow-y-hidden">
        <NewItem setItem={setItems} />
        <ItemList items={items} />
      </main>
    </>
  );
}
