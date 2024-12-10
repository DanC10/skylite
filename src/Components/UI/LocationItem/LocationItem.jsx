import classes from "./LocationItem.module.css";
import ReactCountryFlag from "react-country-flag";

function LocationItem({ location, onLocationClick }) {
  return (
    <div className={classes["location-item"]} onClick={onLocationClick}>
      {`${location.name}, ${location.state}, ${location.country}`}
      <ReactCountryFlag
        svg
        alt={location.country}
        style={{
          width: "1.75rem",
          height: "1.75rem"
        }}
        countryCode={location.country}
      />
    </div>
  );
}

export default LocationItem;
