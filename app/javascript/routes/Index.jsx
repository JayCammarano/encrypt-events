import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Home from "../components/Pages/LandingPage";
import LoginPage from "../components/Pages/LoginPage";
import EventsManagerPage from "../components/Pages/EventsManagerPage";

export class Index extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {
        username: "",
        public_key: "NOT_LOGGED_IN",
        private_key: "NOT_LOGGED_IN",
      },
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  checkLoginStatus() {
    axios
      .get(`/api/v1/users/logged_in`, { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }
  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/login"
              exact
              render={(props) => (
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                  s="false"
                />
              )}
            />
            <Route
              path="/signup"
              exact
              render={(props) => (
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                  s="true"
                />
              )}
            />
            <Route
              path="/user_profile"
              exact
              render={(props) => (
                <EventsManagerPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route path="/" exact component={Home} />

            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Index;
