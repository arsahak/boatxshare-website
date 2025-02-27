"use client";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

import React, { useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 23.685, // Default center (Bangladesh)
  lng: 90.3563,
};

// Friends’ locations
const friends = [
  {
    name: "Masum",
    city: "Dinajpur",
    province: "Dhaka",
    country: "Bangladesh",
    lat: 25.6274,
    lng: 88.636,
    image: "https://via.placeholder.com/50", // Profile image
  },
  {
    name: "Habib",
    city: "Cox's Bazar",
    province: "Dhaka",
    country: "Bangladesh",
    lat: 21.4272,
    lng: 92.0058,
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Sumin",
    city: "Cumilla",
    province: "Dhaka",
    country: "Bangladesh",
    lat: 23.4607,
    lng: 91.1809,
    image: "https://via.placeholder.com/50",
  },
];

const getIconUrl = (color = "red") => {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="${color}">
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9s-1.12 2.5-2.5 2.5z"/>
    </svg>
  `)}`;
};

const GoogleMapComponent: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<any>(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAhKIJBvwaRIxJ3lZsPPFJ5PH-zPDv0XI4">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={6}>
        {friends.map((friend, index) => (
          <Marker
            key={index}
            position={{ lat: friend.lat, lng: friend.lng }}
            onClick={() => setSelectedFriend(friend)}
            label={{
              text: friend.name,
              fontSize: "12px",
              fontWeight: "bold",
            }}
            icon={{
              url: getIconUrl("red"),
            }}
          />
        ))}

        {selectedFriend && (
          <InfoWindow
            position={{ lat: selectedFriend.lat, lng: selectedFriend.lng }}
            onCloseClick={() => setSelectedFriend(null)}
          >
            <div>
              <h3>{selectedFriend.name}</h3>
              <p>
                📍 {selectedFriend.city}, {selectedFriend.province},{" "}
                {selectedFriend.country}
              </p>
              <img
                src={selectedFriend.image}
                alt={selectedFriend.name}
                width="100"
              />
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
