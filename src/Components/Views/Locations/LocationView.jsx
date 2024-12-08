import classes from "./Location.module.css";
import ReactCountryFlag from "react-country-flag";
import { useLocation, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      }, 550);
    }
  }, [state, navigate, setExpandCard]);

  const locationClicked = (location) => {
    setLoading(true);
    fetch(
      `http://localhost:3000/weather?lat=${location.lat}&lon=${location.lon}`
    ).then((res) => {});
  };

  return (
    <div className={classes["location-container"]}>
      {locations.map((l, i) => {
        return (
          <div
            key={i}
            className={classes["location-item"]}
            onClick={() => locationClicked(l)}
          >
            {`${l.name}, ${l.state}, ${l.country}`}
            <ReactCountryFlag svg countryCode={l.country} />
          </div>
        );
      })}
    </div>
  );
};

export default LocationView;
