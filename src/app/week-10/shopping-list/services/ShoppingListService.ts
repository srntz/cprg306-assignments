import { db } from "../../utils/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { ItemType } from "@/app/week-6/types";

export async function getItems(userId: string) {
  const items = await getDocs(collection(db, "users", `${userId}`, "items"));
  const itemArray: ItemType[] = [];

  items.forEach((doc) => {
    const item: ItemType = {
      id: doc.id,
      name: doc.data().name,
      quantity: doc.data().quantity,
      category: doc.data().category,
    };

    itemArray.push(item);
  });

  return itemArray;
}

export async function addItem(userId: string, item: ItemType) {
  await setDoc(doc(db, "users", `${userId}`, "items", `${item.id}`), {
    name: item.name,
    quantity: item.quantity,
    category: item.category,
  });

  return item.id;
}
