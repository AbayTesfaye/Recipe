import Link from "next/link";
import { FaUtensils } from 'react-icons/fa'; // Recipe-related icon

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div> {/* Gradient overlay for smoother transition */}
      
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-white relative z-10 p-6">
        <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-xl w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-6 tracking-tight animate__animated animate__fadeIn animate__delay-1s">
            Welcome to the Recipe App
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Discover amazing recipes, explore ingredients, and create your next culinary masterpiece!
          </p>
          
          {/* Icon with text for more engaging CTA */}
          <Link href="/recipe-list" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
            <FaUtensils className="text-2xl" /> {/* Recipe icon */}
            Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
