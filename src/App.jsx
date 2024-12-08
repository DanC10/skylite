import classes from "./App.module.css";
import Card from "./Components/UI/Card/Card";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function App() {
  const [expandCard, setExpandCard] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className={classes.content}>
      <Card expand={expandCard}>
        <div style={{ width: "100%", display: `${loading ? "none" : "flex"}` }}>
          <Outlet context={{ setExpandCard, setLoading }} />
        </div>
        {loading && <CircularProgress sx={{ display: "flex", m: "auto 0" }} />}
      </Card>
    </div>
  );
}

export default App;
