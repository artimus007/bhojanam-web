export const metadata = { title: 'Bhojanam', description: 'Share surplus food with NGOs & volunteers' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <header className="flex items-center justify-between py-2">
            <a href="/" className="text-2xl font-extrabold">🍲 Bhojanam</a>
            <nav className="flex gap-3 text-sm">
              <a className="px-3 py-2 rounded-xl bg-white shadow" href="/create">Create Surplus</a>
              <a className="px-3 py-2 rounded-xl bg-white shadow" href="/nearby">Find Nearby</a>
            </nav>
          </header>
          <main className="py-4">{children}</main>
          <footer className="py-8 text-sm text-center text-gray-500">Made with ❤️ to reduce food waste</footer>
        </div>
      </body>
    </html>
  );
}
