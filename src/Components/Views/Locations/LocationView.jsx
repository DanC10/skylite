import classes from "./Location.module.css";

const LocationView = ({ locations }) => {
  return (
    <div className={classes["location-container"]}>
      {locations.map((l, i) => {
        return (
          <div key={i} className={classes["location-item"]}>
            {`${l.name}, ${l.state}, ${l.country}`}
          </div>
        );
      })}
    </div>
  );
};

export default LocationView;
