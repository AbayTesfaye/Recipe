import RecipeList from "../../components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/recipes');
    const data = await apiResponse.json();
    return data?.recipes;
  } catch (error) {
    throw new Error(error)
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  return <RecipeList recipeList={recipeList} />;
}
