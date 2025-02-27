"use client";
import GetValue from "./GetValue";
import GoogleMapComponent from "./GoogleMapComponent";
import useLocation from "./useLocation";

const TestCodding = () => {
  const { location, address, error } = useLocation();

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">📍 Your Location</h2>
      {error && <p className="text-red-500">{error}</p>}
      {location ? (
        <>
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
          {address && (
            <>
              <p>
                <strong>City:</strong> {address.city}
              </p>
              <p>
                <strong>Province:</strong> {address.province}
              </p>
              <p>
                <strong>Country:</strong> {address.country}
              </p>
            </>
          )}
        </>
      ) : (
        <p>Getting location...</p>
      )}
      <div className="flex">
        {/* Google Map */}
        <div className="w-full">
          <GoogleMapComponent />
        </div>
      </div>
      <GetValue />
    </div>
  );
};

export default TestCodding;
