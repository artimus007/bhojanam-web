export default function FoodCard({ food }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-orange-500 mb-2">{food.title}</h2>
      <p className="text-gray-700 mb-1">{food.description}</p>
      <p className="text-gray-500">Quantity: {food.quantity}</p>
    </div>
  );
}
