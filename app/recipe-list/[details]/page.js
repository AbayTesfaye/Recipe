import Link from "next/link";

async function fetchRecipeDetails(currentRecipeId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
        return data; // Return the recipe details
    } catch (error) {
        throw new Error(error.message);
    }
}

export default async function RecipeDetails({ params }) {
    const getRecipeDetails = await fetchRecipeDetails(params.details);

    if (!getRecipeDetails) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <h1 className="text-2xl text-red-500">Error: Recipe details not found!</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Link href="/" className="text-blue-500 text-lg mb-4 inline-block">Go to Home</Link>
            <h1 className="text-4xl font-bold text-center my-6 text-gray-800">Recipe Details</h1>

            <div className="flex flex-col sm:flex-row items-start justify-between bg-white shadow-lg rounded-lg p-6 space-y-6 sm:space-y-0 sm:space-x-6">
                {/* Recipe Image */}
                <div className="w-full sm:w-2/3">
                    <img
                        src={getRecipeDetails.image}
                        alt={getRecipeDetails.name}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Recipe Ingredients */}
                <div className="w-full sm:w-1/3">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredients</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {getRecipeDetails.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-lg">{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Cooking Instructions */}
            <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Cooking Instructions</h2>
                <p className="text-gray-600 text-sm">{getRecipeDetails.instructions}</p>
            </div>
        </div>
    );
}
