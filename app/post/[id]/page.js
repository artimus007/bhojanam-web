"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGetPost, apiClaim } from "@/lib/api";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function load() {
      const res = await apiGetPost(id);
      setPost(res);
    }
    load();
  }, [id]);

  async function handleClaim() {
    const res = await apiClaim({ postId: id, volunteer: "Anonymous" });
    if (res._id) {
      setMsg("✅ Claimed successfully!");
    } else {
      setMsg("❌ Claim failed");
    }
  }

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.description}</p>
      <p className="mt-1 text-sm text-gray-600">Quantity: {post.quantity}</p>
      <button onClick={handleClaim} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Claim</button>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}

