'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize:[25,41], iconAnchor:[12,41]
});

export default function MapInner({ center=[17.385,78.486], markers=[] }){
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom style={{ height: 360 }} className="rounded-2xl">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />
      {markers.map((m,i)=> (
        <Marker key={i} position={[m.lat, m.lng]} icon={icon}>
          <Popup>
            <div className="text-sm">
              <div className="font-bold">{m.title}</div>
              <div>Servings: {m.servings}</div>
              <a className="text-emerald-700 underline" href={`/post/${m._id}`}>View</a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
