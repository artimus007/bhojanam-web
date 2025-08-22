"use client";
import { useState } from "react";
import { apiNearby } from "@/lib/api";
import FoodCard from "@/components/FoodCard";

export default function NearbyPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadNearby() {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const res = await apiNearby(pos.coords.latitude, pos.coords.longitude, 10);
      setFoods(res);
      setLoading(false);
    });
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nearby Food Posts</h1>
      <button onClick={loadNearby} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        {loading ? "Loading..." : "Find Nearby"}
      </button>
      <div className="space-y-3">
        {foods.map(f => <FoodCard key={f._id} food={f} />)}
      </div>
    </div>
  );
}

