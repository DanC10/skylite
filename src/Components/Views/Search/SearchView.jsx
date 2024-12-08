import { useState, useEffect } from "react";
import SearchInput from "../../UI/SearchInput/SearchInput";
import CustomSnackbar from "../../UI/Snackbar/CustomSnackbar";
import { useNavigate, useOutletContext } from "react-router-dom";

const SearchView = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const { setExpandCard, setLoading } = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    setExpandCard(false);
  }, [setExpandCard]);

  const handleSearch = async (value) => {
    if (!value.trim()) return false;
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/locations?q=${value}`
      );
      const data = await response.json();

      setTimeout(() => {
        navigate("/locations", { state: { locations: data } });
      }, 550);
    } catch (e) {
      setErrorMessage(e.message);
      setShowError(true);
      setLoading(false);
    }
  };

  const handleSnackBarClose = () => {
    setShowError(false);
  };

  return (
    <>
      <CustomSnackbar
        open={showError}
        onClose={handleSnackBarClose}
        message={errorMessage}
      />
      <SearchInput placeholder="Enter your city" onSearch={handleSearch} />
    </>
  );
};

export default SearchView;
