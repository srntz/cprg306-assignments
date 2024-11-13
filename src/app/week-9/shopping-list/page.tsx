"use client";

import NewItem from "@/app/week-9/shopping-list/components/new-item";
import ItemList from "@/app/week-9/shopping-list/components/item-list";
import { useEffect, useState } from "react";
import { ItemType } from "@/app/week-6/types";
import { itemsData } from "@/app/week-9/shopping-list/data/itemsData";
import { useAuthContext } from "@/app/week-9/utils/auth-context";
import { redirect } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState<ItemType[]>(itemsData);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      redirect("/week-9");
    }
  }, [user]);

  return (
    <>
      {user && (
        <main className="w-full px-2 flex flex-col py-5 h-[100vh] overflow-y-hidden">
          <NewItem setItem={setItems} />
          <ItemList items={items} />
        </main>
      )}
    </>
  );
}
