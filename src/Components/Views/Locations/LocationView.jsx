import classes from "./Location.module.css";
import { useLocation, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LocationItem from "../../UI/LocationItem/LocationItem";

const LocationView = () => {
  const [locations, setLocations] = useState([]);
  const { state } = useLocation();
  const { setExpandCard, setLoading } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.locations) {
      navigate("/");
    } else {
      setExpandCard(true);
      setTimeout(() => {
        setLocations(state.locations);
        setLoading(false);
      }, 550);
    }
  }, [state, navigate, setExpandCard, setLoading]);

  const handleLocationClicked = (location) => {
    //  setLoading(true);
    fetch(
      `http://localhost:3000/weather?lat=${location.lat}&lon=${location.lon}`
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={classes["location-container"]}>
      {locations.map((location, i) => (
        <LocationItem
          key={i}
          location={location}
          onLocationClick={handleLocationClicked}
        />
      ))}
    </div>
  );
};

export default LocationView;
