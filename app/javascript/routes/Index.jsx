import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Pages/LandingPage";
import LoginPage from "../components/Pages/LoginPage";
import EventsManager from "../components/Pages/EventsManager";

export default (
  <Router>
    <Switch>
      <Route path="/login" exact render={(props) => <LoginPage s="false" />} />
      <Route path="/signup" exact render={(props) => <LoginPage s="true" />} />
      <Route path="/user_profile" exact render={(props) => <EventsManager />} />
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);
