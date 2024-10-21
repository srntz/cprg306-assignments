"use client";

import Header from "@/components/global/header";
import data from "./data/items.json";
import ItemList from "@/app/week-6/components/item-list";
import { useState } from "react";
import SortingButtons from "@/app/week-6/components/sorting-buttons";
import GroupedItemList from "@/app/week-6/components/grouped-item-list";
import { SortingOptions } from "@/app/week-6/types";

export default function Page() {
  const [sortBy, setSortBy] = useState<SortingOptions>("name");
  return (
    <>
      <Header headerTitle={"Shopping list"} />

      <SortingButtons sortBy={sortBy} setSortBy={setSortBy} />

      {sortBy === "name" && (
        <ItemList items={data.sort((a, b) => a.name.localeCompare(b.name))} />
      )}

      {sortBy === "category" && (
        <ItemList
          items={data.sort((a, b) => a.category.localeCompare(b.category))}
        />
      )}

      {sortBy === "group" && <GroupedItemList data={data} />}
    </>
  );
}
