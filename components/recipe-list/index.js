import Link from "next/link"; // Using Next.js Link for navigation
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react"; // Assuming you're using Lucide for icons

export default function RecipeList({ recipeList }) {
    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {recipeList.map((recipe, index) => (
                    <Link key={index} href={`/recipe-list/${recipe.id}`} passHref>
                        <Card className="cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
                            <CardContent className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className="w-full h-56 object-cover rounded-lg transition-all transform hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-gray-800 text-sm font-semibold shadow-md">
                                        {recipe.cuisine}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800">{recipe.name}</h2>
                                    <div className="mt-3 flex items-center space-x-4">
                                        {/* Rating Section */}
                                        <div className="flex items-center space-x-1 text-yellow-500">
                                            <Star size={20} />
                                            <p className="text-sm font-semibold">{recipe.rating}</p>
                                        </div>
                                        {/* Cuisine Section */}
                                        <div className="text-sm font-medium text-gray-600">
                                            <span className="text-blue-500">{recipe.cuisine}</span>
                                        </div>
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
