export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white p-6 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Bhojanam. Made with ❤️</p>
        <p>
          <a href="https://github.com/artimus007" target="_blank" className="underline">GitHub</a>
        </p>
      </div>
    </footer>
  );
}
