import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FoodCard from "../components/FoodCard";
import MapSection from "../components/MapSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/api/food")
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <section id="share" className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16 px-4">
          {foods.map(food => (
            <FoodCard key={food._id} food={food} />
          ))}
        </section>
        <MapSection foods={foods} />
      </main>
      <Footer />
    </>
  );
}
