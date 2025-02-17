// "use client";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// interface MapProps {
//   lat: number;
//   lon: number;
//   location: string;
// }

// export default function CrewSection({ lat, lon, location }: MapProps) {
//   return (
//     <MapContainer
//       center={[lat, lon]}
//       zoom={13}
//       className="w-full h-[350px]"
//       style={{ height: "350px", width: "100%" }} // Ensure height is properly set
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={[lat, lon]}>
//         <Popup>{location}</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }
