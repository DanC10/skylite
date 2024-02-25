import classes from "./App.module.css";
import Card from "./Components/UI/Card/Card";
import { useState, useEffect } from "react";
import SearchView from "./Components/Views/Search/SearchView";
import LocationView from "./Components/Views/Locations/LocationView";

function App() {
  const [locations, setLocations] = useState([
    {
      name: "Kincardine",
      local_names: {
        en: "Kincardine",
        ga: "Cinn Chárdainn",
        gd: "Ceann Chàrdainn"
      },
      lat: 56.0683954,
      lon: -3.7184637,
      country: "GB",
      state: "Scotland"
    },
    {
      name: "Kincardine",
      lat: 44.1776378,
      lon: -81.6348713,
      country: "CA",
      state: "Ontario"
    }
  ]);
  const [expandCard, setExpandCard] = useState(false);

  useEffect(() => {
    if (locations.length) setExpandCard(true);
  }, [locations]);

  return (
    <div className={classes.content}>
      <Card expand={expandCard}>
        {!locations.length && <SearchView onLocationsFound={setLocations} />}
        {!!locations.length && <LocationView locations={locations} />}
      </Card>
    </div>
  );
}

export default App;
