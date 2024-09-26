import Header from "@/components/global/header";
import ItemList from "@/app/week-3/item-list";

export default function Page() {
  return (
    <main>
      <Header headerTitle={"Shopping List"} />
      <ItemList />
    </main>
  );
}
