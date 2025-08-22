'use client';
import { useEffect, useState } from 'react';
import { apiNearby } from '../../lib/api';
import Map from '../../components/Map';

export default function Nearby(){
  const [center, setCenter] = useState([17.385,78.486]);
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((p)=>{
        const c = [p.coords.latitude, p.coords.longitude];
        setCenter(c); load(c);
      }, ()=> load(center));
    } else { load(center); }
    // eslint-disable-next-line
  },[]);

  async function load(c){
    const r = await apiNearby(c[0], c[1], 15);
    setPosts(r || []);
  }

  const markers = posts.map(p=> ({ _id:p._id, title:p.title, servings:p.servings, lat:p.location.coordinates[1], lng:p.location.coordinates[0] }));

  return (
    <div className="grid gap-6">
      <Map center={center} markers={markers} />
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map(p=> (
          <a key={p._id} href={`/post/${p._id}`} className="bg-white rounded-2xl shadow p-4 hover:shadow-md">
            <div className="font-bold">{p.title}</div>
            <div className="text-sm text-gray-600">Servings: {p.servings}</div>
            <div className="text-xs text-gray-500">Status: {p.status}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
