"use client";
import Link from "next/link";

export default function FoodCard({ food }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-lg font-semibold">{food.title}</h2>
      <p className="text-sm text-gray-600">{food.description}</p>
      <p className="text-sm">Quantity: {food.quantity}</p>
      <Link href={`/post/${food._id}`} className="text-blue-600 underline text-sm">
        View Details
      </Link>
    </div>
  );
}
