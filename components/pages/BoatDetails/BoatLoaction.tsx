// "use client";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// interface BoatLocationProps {
//   location: string; // e.g., "Zhenjiang, Jiangsu, China"
// }

// export default function BoatLocation({ location }: BoatLocationProps) {
//   const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
//     null
//   );

//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       try {
//         const response = await axios.get(
//           `https://nominatim.openstreetmap.org/search`,
//           {
//             params: {
//               q: location,
//               format: "json",
//               limit: 1,
//             },
//           }
//         );

//         if (response.data.length > 0) {
//           setCoords({
//             lat: parseFloat(response.data[0].lat),
//             lon: parseFloat(response.data[0].lon),
//           });
//         } else {
//           console.error("Location not found");
//         }
//       } catch (error) {
//         console.error("Error fetching location:", error);
//       }
//     };

//     fetchCoordinates();
//   }, [location]);

//   return (
//     <div>
//       <div className="space-y-4 mb-8">
//         <h2 className="text-2xl font-semibold text-[#1A1A1A]">Boat Location</h2>
//         <p className="text-gray-600 text-base">
//           Exact location information is provided after a booking is confirmed.
//         </p>
//       </div>

//       <div className="relative w-full h-[350px] overflow-hidden">
//         {coords ? (
//           <MapContainer
//             center={[coords.lat, coords.lon]}
//             zoom={13}
//             className="w-full h-full"
//           >
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <Marker position={[coords.lat, coords.lon]}>
//               <Popup>{location}</Popup>
//             </Marker>
//           </MapContainer>
//         ) : (
//           <p>Loading map...</p>
//         )}
//       </div>
//       <hr className="my-10" />
//     </div>
//   );
// }
