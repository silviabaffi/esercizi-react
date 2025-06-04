import { useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);

  const handleLocation = () => {
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setLocationLoading(false);
      },
      (error) => {
        setLocationError(error);
        setLocationLoading(false);
      }
    );
  };

  return { location, locationLoading, locationError, handleLocation };
};

export default useCurrentLocation;
