import Link from "next/link";
import { FaUtensils } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>

      {/* Content Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center text-white relative z-10 px-6">
        <div className="max-w-3xl w-full bg-white bg-opacity-90 shadow-2xl rounded-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Main Heading */}
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-wide animate__animated animate__fadeInDown">
            Welcome to the Recipe App
          </h1>

          {/* Subheading */}
          <p className="text-2xl text-gray-800 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Discover delicious recipes that inspire your next culinary adventure.
          </p>

          {/* Tagline */}
          <p className="text-md text-gray-600 italic mb-8">
            "Good food is the foundation of genuine happiness."
          </p>

          {/* Explore Button */}
          <Link
            href="/recipe-list"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xl font-bold py-3 px-10 rounded-full flex items-center justify-center gap-4 transition transform duration-300  hover:shadow-lg"
          >
            <FaUtensils className="text-3xl animate-bounce" /> {/* Animated Icon */}
            Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
