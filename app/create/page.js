'use client';
import { useState } from 'react';
import { apiCreatePost } from '../../lib/api';

export default function CreatePage(){
  const [form, setForm] = useState({ title:'Extra Meals', description:'Veg meals', servings:50, address:'', contactName:'', contactPhone:'' });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const pos = await new Promise((res,rej)=> navigator.geolocation.getCurrentPosition(res,rej));
      const lat = pos.coords.latitude; const lng = pos.coords.longitude;
      const payload = { ...form, servings: Number(form.servings), lat, lng };
      const r = await apiCreatePost(payload);
      if(r.error) alert(r.error); else window.location.href = `/post/${r._id}`;
    } catch(err){ alert('Location permission is required.'); }
    finally { setLoading(false); }
  };

  const set = (k)=>(v)=> setForm(s=> ({...s, [k]: v.target? v.target.value: v}));

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow p-6 space-y-3">
        <h2 className="text-xl font-bold">Create Surplus</h2>
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Title" value={form.title} onChange={set('title')} />
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Description" value={form.description} onChange={set('description')} />
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Servings" type="number" value={form.servings} onChange={set('servings')} />
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Pickup address (optional)" value={form.address} onChange={set('address')} />
        <div className="grid grid-cols-2 gap-3">
          <input className="border rounded-xl px-3 py-2" placeholder="Your name" value={form.contactName} onChange={set('contactName')} />
          <input className="border rounded-xl px-3 py-2" placeholder="Your phone" value={form.contactPhone} onChange={set('contactPhone')} />
        </div>
        <button disabled={loading} className="px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow disabled:opacity-50">{loading? 'Publishing...': 'Publish'}</button>
      </form>
      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-sm text-gray-700">We’ll use your current location to place the pin so volunteers nearby can find it fast.</p>
      </div>
    </div>
  );
}
