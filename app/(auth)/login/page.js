"use client";
import { useState } from "react";
import { apiLogin } from "@/lib/api";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await apiLogin(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      setMsg("Login successful ✅");
    } else {
      setMsg(res.error);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input placeholder="Email" type="email" className="border w-full p-2"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" className="border w-full p-2"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </div>
  );
}
