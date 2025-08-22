"use client";
import { useEffect, useState } from "react";
import { apiNearby } from "@/lib/api";
import FoodCard from "@/components/FoodCard";
import Link from "next/link";

export default function HomePage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function load() {
      // fallback: Bangalore center
      const res = await apiNearby(12.9716, 77.5946, 20);
      setFoods(res);
    }
    load();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">🍲 Bhojanam</h1>
      <p className="text-center text-gray-600 mb-8">
        A platform to share surplus food and fight hunger.  
        Post nearby food, claim as a volunteer, and reduce waste. 🌍
      </p>

      <div className="flex justify-center space-x-4 mb-8">
        <Link href="/create" className="bg-green-600 text-white px-4 py-2 rounded">
          + Create Post
        </Link>
        <Link href="/nearby" className="bg-blue-600 text-white px-4 py-2 rounded">
          Find Nearby
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Latest Food Posts</h2>
      <div className="space-y-3">
        {foods.length === 0 && <p>No posts yet. Be the first to share!</p>}
        {foods.map(f => <FoodCard key={f._id} food={f} />)}
      </div>
    </div>
  );
}

