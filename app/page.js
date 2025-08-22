export default function Page() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-black leading-tight">Stop wasting. Start sharing.</h1>
        <p className="text-gray-600">Event ended with extra food? Publish it so nearby NGOs & volunteers can pick it up quickly.</p>
        <div className="flex gap-3">
          <a href="/create" className="px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow">Create Surplus</a>
          <a href="/nearby" className="px-4 py-3 rounded-2xl bg-white shadow">Find Nearby</a>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
          <li>Tap <b>Create Surplus</b> and fill quick details.</li>
          <li>We use your location to show volunteers near you.</li>
          <li>They claim and pick up before food goes to waste.</li>
        </ol>
      </div>
    </section>
  );
}
