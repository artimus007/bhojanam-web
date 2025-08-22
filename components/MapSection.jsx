import dynamic from "next/dynamic";
const Map = dynamic(() => import("./MapInner"), { ssr: false });

export default function MapSection({ foods }) {
  return (
    <section id="map" className="h-[500px] my-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Nearby Food</h2>
      <Map foods={foods} />
    </section>
  );
}
