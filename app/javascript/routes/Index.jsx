import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/LandingPage/Layout";
import LoginPage from "../components/Pages/LoginPage";

export default (
  <Router>
    <Switch>
      <Route path="/login" exact render={(props) => <LoginPage s="false" />} />

      <Route path="/signup" exact render={(props) => <LoginPage s="true" />} />
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);
