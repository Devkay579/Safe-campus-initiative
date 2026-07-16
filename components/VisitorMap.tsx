'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type VisitorPoint = {
  id: number;
  ip: string;
  country: string | null;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
  createdAt: Date;
};

const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

export default function VisitorMap({ visitors }: { visitors: VisitorPoint[] }) {
  const points = visitors.filter((visitor) => visitor.latitude && visitor.longitude);

  return (
    <MapContainer center={[20, 0]} zoom={2} className="h-[320px] w-full rounded-2xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((visitor) => (
        <Marker
          key={visitor.id}
          position={[visitor.latitude as number, visitor.longitude as number]}
          icon={markerIcon}
        >
          <Popup>
            <div className="space-y-1 text-sm">
              <p className="font-semibold">{visitor.city ?? 'Unknown City'}</p>
              <p>{visitor.country ?? 'Unknown Country'}</p>
              <p>{visitor.ip}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
