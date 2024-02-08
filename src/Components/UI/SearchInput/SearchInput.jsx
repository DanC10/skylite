import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

const SearchInput = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search">{placeholder}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        type="text"
        onKeyDown={(e) => e.key === "Enter" && onSearch(inputValue)}
        onChange={(e) => setInputValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              edge="end"
              onClick={() => onSearch(inputValue)}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label={placeholder}
      />
    </FormControl>
  );
};

export default SearchInput;
