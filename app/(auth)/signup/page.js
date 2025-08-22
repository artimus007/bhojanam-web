"use client";
import { useState } from "react";
import { apiSignup } from "@/lib/api";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await apiSignup(form);
    setMsg(res.message || res.error);
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input placeholder="Name" className="border w-full p-2"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" type="email" className="border w-full p-2"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" className="border w-full p-2"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Signup</button>
      </form>
      {msg && <p className="mt-2 text-red-500">{msg}</p>}
    </div>
  );
}
