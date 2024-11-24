import Link from "next/link"; // Using Next.js Link for navigation
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react"; // Assuming you're using Lucide for icons

export default function RecipeList({ recipeList }) {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipeList.map((recipe, index) => (
                    <Link key={index} href={`/recipe-list/${recipe.id}`} passHref>
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
                                    <div className="px-10 py-2 flex items-center space-x-4">
                                        {/* Rating Section */}
                                        <div className="flex items-center space-x-1 text-yellow-500">
                                            <Star size={18} /> {/* Star icon from Lucide */}
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
