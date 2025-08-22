import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-orange-500">Bhojanam</h1>
        <nav className="space-x-6 hidden md:flex">
          <Link href="#home" className="hover:text-orange-600">Home</Link>
          <Link href="#map" className="hover:text-orange-600">Map</Link>
          <Link href="#share" className="hover:text-orange-600">Share Food</Link>
        </nav>
      </div>
    </header>
  );
}
