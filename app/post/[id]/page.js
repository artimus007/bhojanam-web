'use client';
import { useEffect, useState } from 'react';
import { apiGetPost, apiClaim } from '../../../lib/api';
import Map from '../../../components/Map';

export default function PostPage({ params }){
  const { id } = params;
  const [post, setPost] = useState(null);
  const [me, setMe] = useState({ name:'', phone:'', note:'' });
  const [busy, setBusy] = useState(false);

  useEffect(()=>{ (async()=>{ setPost(await apiGetPost(id)); })(); },[id]);
  if(!post) return <div>Loading...</div>;

  const center = [post.location.coordinates[1], post.location.coordinates[0]];

  async function claim(){
    setBusy(true);
    const r = await apiClaim({ postId: id, claimerName: me.name, claimerPhone: me.phone, note: me.note });
    setBusy(false);
    if(r.error) alert(r.error); else alert('Claimed! Contact donor and pick up.');
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-white rounded-2xl shadow p-6 space-y-2">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-gray-700">{post.description}</p>
        <p className="text-sm text-gray-600">Servings: {post.servings}</p>
        {post.address && <p className="text-sm">Address: {post.address}</p>}
        <p className="text-sm">Donor: {post.contactName} • {post.contactPhone}</p>
        <div className="pt-3">
          <input className="w-full border rounded-xl px-3 py-2 mb-2" placeholder="Your name" value={me.name} onChange={e=>setMe(s=>({...s, name:e.target.value}))} />
          <input className="w-full border rounded-xl px-3 py-2 mb-2" placeholder="Your phone" value={me.phone} onChange={e=>setMe(s=>({...s, phone:e.target.value}))} />
          <input className="w-full border rounded-xl px-3 py-2 mb-2" placeholder="Note (vehicle, org, etc.)" value={me.note} onChange={e=>setMe(s=>({...s, note:e.target.value}))} />
          <button disabled={busy} onClick={claim} className="px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow disabled:opacity-50">{busy? 'Submitting...':'Claim & Coordinate'}</button>
        </div>
      </div>
      <Map center={center} markers={[{ _id: post._id, title: post.title, servings: post.servings, lat:center[0], lng:center[1]}]} />
    </div>
  );
}
