import classes from "./App.module.css";
import Card from "./Components/UI/Card/Card";
import SearchInput from "./Components/UI/SearchInput/SearchInput";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import CustomSnackbar from "./Components/UI/Snackbar/CustomSnackbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleSearch = (value) => {
    if (!value.trim()) return false;
    setLoading(true);
    fetch(`http://localhost:3000/locations?q=${value}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          throw new Error("No locations found.");
        } else {
          throw new Error("Something went wrong, please try again.");
        }
      })
      .then((res) => {
        setLocations(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setShowError(true);
      })
      .finally(() => setLoading(false));
  };

  const handleSnackBarClose = () => {
    setShowError(false);
  };

  return (
    <main className={classes.content}>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showError}
        onClick={handleSnackBarClose}
        onClose={handleSnackBarClose}
        message={errorMessage}
      /> */}
      <CustomSnackbar
        open={showError}
        onClose={handleSnackBarClose}
        message={errorMessage}
      />
      <Card>
        {!loading ? (
          <SearchInput
            placeholder="Enter your location"
            onSearch={handleSearch}
          />
        ) : (
          <CircularProgress sx={{ display: "flex", m: "auto 0" }} />
        )}
      </Card>
    </main>
  );
}

export default App;
