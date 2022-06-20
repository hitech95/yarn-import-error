import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import LoginRoute from "./LoginRoute";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route exact path="/login" component={LoginRoute} />
        <AuthRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
