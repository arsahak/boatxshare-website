"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

interface Address {
  city?: string;
  province?: string;
  country?: string;
}

const useLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Reverse Geocoding with OpenStreetMap
        axios
          .get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
          .then((response) => {
            const data = response.data.address;
            setAddress({
              city:
                data.city ||
                data.town ||
                data.village ||
                data.hamlet ||
                "Unknown",
              province: data.state || "Unknown",
              country: data.country || "Unknown",
            });
          })
          .catch(() => {
            setError("Failed to get address details");
          });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  return { location, address, error };
};

export default useLocation;
