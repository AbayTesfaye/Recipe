import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-white relative z-10 p-6">
        <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-xl w-full">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-6 tracking-tight">
            Welcome to the Recipe App
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover amazing recipes, explore ingredients, and create your next culinary masterpiece!
          </p>
          <Link href="/recipe-list" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">    
              Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
