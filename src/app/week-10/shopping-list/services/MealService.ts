import { FormatString } from "@/app/week-10/shopping-list/utils/utils";

export async function FetchMealByIngredient(ingredient: string) {
  const formattedIngredient = FormatString(ingredient);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${formattedIngredient}`,
  );
  const json = await res.json();
  if (json["meals"] === null) {
    return { meals: [] };
  }
  return json;
}
