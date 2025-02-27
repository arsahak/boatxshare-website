"use client";
import axios from "axios";

const apiKey = "AIzaSyAhKIJBvwaRIxJ3lZsPPFJ5PH-zPDv0XI4";

const friends = [
  {
    name: "Masum",
    city: "Dinajpur",
    province: "Dhaka",
    country: "Bangladesh",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Habib",
    city: "Cox's Bazar",
    province: "Dhaka",
    country: "Bangladesh",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Sumin",
    city: "Cumilla",
    province: "Dhaka",
    country: "Bangladesh",
    image: "https://via.placeholder.com/50",
  },
];

const GetValue = () => {
  const getCoordinates = async (city) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}`
      );
      const { lat, lng } = response.data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } catch (error) {
      console.error(`Error fetching coordinates for ${city}:`, error);
      return { latitude: null, longitude: null };
    }
  };

  const addCoordinatesToFriends = async () => {
    const updatedFriends = await Promise.all(
      friends.map(async (friend) => {
        const { latitude, longitude } = await getCoordinates(friend.city);
        return { ...friend, latitude, longitude };
      })
    );

    console.log(updatedFriends);
    return updatedFriends;
  };

  addCoordinatesToFriends();

  return <div>GetValue</div>;
};

export default GetValue;
