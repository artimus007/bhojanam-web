"use client";
import { useState } from "react";
import { apiCreatePost } from "@/lib/api";

export default function CreatePage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    lat: "",
    lng: "",
    quantity: ""
  });
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("Submitting...");
    try {
      const res = await apiCreatePost(form);
      if (res._id) {
        setMsg("✅ Food post created!");
        setForm({ title: "", description: "", lat: "", lng: "", quantity: "" });
      } else {
        setMsg("❌ Failed to create post");
      }
    } catch (err) {
      setMsg("❌ Error creating post");
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Food Post</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <textarea className="w-full p-2 border rounded" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input className="w-full p-2 border rounded" placeholder="Latitude" value={form.lat} onChange={e => setForm({ ...form, lat: e.target.value })} />
        <input className="w-full p-2 border rounded" placeholder="Longitude" value={form.lng} onChange={e => setForm({ ...form, lng: e.target.value })} />
        <input className="w-full p-2 border rounded" placeholder="Quantity (people)" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {msg && <p className="mt-4">{msg}</p>}
    </div>
  );
}

