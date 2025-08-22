'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
const MapBase = dynamic(() => import('./MapInner'), { ssr: false });
export default function Map({ center, markers=[] }) { return <MapBase center={center} markers={markers} /> }
