import { Typography } from "@material-ui/core";
import React from "react";
import Timer from "react-compound-timer";
import { useNavigate } from "react-router-dom";

const NotFound = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Timer
      initialTime={5000}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => navigate("/"),
        },
      ]}>
      <div style={{ marginTop: "30vh" }}>
        {children}
        <Typography
          style={{ textAlign: "center", marginTop: "20px" }}
          variant="h3">
          Redirect in <Timer.Seconds /> seconds
        </Typography>
      </div>
    </Timer>
  );
};

export default NotFound;
