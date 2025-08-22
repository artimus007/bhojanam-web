export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-200 via-orange-100 to-orange-300 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Share & Discover Food Nearby</h1>
      <p className="text-xl md:text-2xl mb-6">Helping communities share meals, reduce waste, and connect through food.</p>
      <div className="space-x-4">
        <a href="#share" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">Share Food</a>
        <a href="#map" className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-100 transition">Find Food</a>
      </div>
    </section>
  );
}
