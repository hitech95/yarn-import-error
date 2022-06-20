import { Box, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

const AuthRoute = () => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoading(false);
    }, 4000);
  }, []);

  if (authLoading) {
    return (
      <Box
        style={{
          height: "100vh",
        }}>
        <CircularProgress
          variant="indeterminate"
          color="primary"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translateXY(-50%)",
          }}
        />
      </Box>
    );
  }

  // common authenticated route
  return <Outlet />;
};

export default AuthRoute;
