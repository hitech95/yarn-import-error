import React from "react";
// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography } from "@material-ui/core";

import NotFound from "./notFound";
import HomeRoute from "./home";
import MeRoute from "./me";
import AuthRoute from "./AuthRoute";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomeRoute />} />
          Protected Routes
          <Route element={<AuthRoute />}>
            {/* User Registration */}
            <Route path="/profile" element={<MeRoute />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <NotFound to="/">
              <Typography style={{ textAlign: "center" }} variant="h2">
                Page not found
              </Typography>
            </NotFound>
          }
        />
      </Routes>
    </>
  );
};

const WelevelApp = () => (
  <BrowserRouter>
    <RoutesComponent />
  </BrowserRouter>
);

export default WelevelApp;
