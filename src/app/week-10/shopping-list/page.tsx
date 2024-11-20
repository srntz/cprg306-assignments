"use client";

import NewItem from "@/app/week-10/shopping-list/components/new-item";
import ItemList from "@/app/week-10/shopping-list/components/item-list";
import { useEffect, useState } from "react";
import { ItemType } from "@/app/week-6/types";
import { useAuthContext } from "@/app/week-9/utils/auth-context";
import { redirect } from "next/navigation";
import { getItems } from "@/app/week-10/shopping-list/services/ShoppingListService";
import { User } from "@firebase/auth";

export default function Page() {
  const [items, setItems] = useState<ItemType[]>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      redirect("/week-10");
    }

    async function getUserItems() {
      const userItems = await getItems((user as User).uid);
      setItems(userItems);
    }

    getUserItems();
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
