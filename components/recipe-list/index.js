import Link from "next/link"; // Using Next.js Link for navigation
import { Card, CardContent } from "@/components/ui/card";

export default function RecipeList({ recipeList }) {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipeList.map((recipe, index) => (
                    <Link key={index} href={`/recipe/${recipe.id}`} passHref>
                        <Card className="cursor-pointer">
                            <CardContent>
                                <div className="bg-white shadow-lg rounded-lg mt-4 overflow-hidden transition-transform transform hover:scale-105">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-gray-700">{recipe.name}</h2>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
