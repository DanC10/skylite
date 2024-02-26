import classes from "./App.module.css";
import Card from "./Components/UI/Card/Card";
import { useState, useEffect } from "react";
import SearchView from "./Components/Views/Search/SearchView";
import LocationView from "./Components/Views/Locations/LocationView";

function App() {
  const [locations, setLocations] = useState([]);

  const [expandCard, setExpandCard] = useState(false);

  useEffect(() => {
    if (locations.length) setExpandCard(true);
  }, [locations]);

  return (
    <div className={classes.content}>
      <Card expand={expandCard}>
        {!locations.length ? (
          <SearchView onLocationsFound={setLocations} />
        ) : (
          <LocationView locations={locations} />
        )}
      </Card>
    </div>
  );
}

export default App;
