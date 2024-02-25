import { useState } from "react";
import SearchInput from "../../UI/SearchInput/SearchInput";
import { CircularProgress } from "@mui/material";
import CustomSnackbar from "../../UI/Snackbar/CustomSnackbar";

const SearchView = ({ onLocationsFound }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

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
        onLocationsFound(res);
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

  return !loading ? (
    <>
      <CustomSnackbar
        open={showError}
        onClose={handleSnackBarClose}
        message={errorMessage}
      />
      <SearchInput placeholder="Enter your city" onSearch={handleSearch} />
    </>
  ) : (
    <CircularProgress sx={{ display: "flex", m: "auto 0" }} />
  );
};

export default SearchView;
