import React from "react";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import { Redirect } from "react-router-dom";
const LoginPage = ({ loggedInStatus, s }) => {
  let display;
  if (s == "true") {
    display = <SignUp />;
  } else {
    display = <Login />;
  }

  if (loggedInStatus === "LOGGED_IN") {
    return <Redirect to="/user_profile" />;
  }
  return (
    <section className="flex flex-col">
      <div className="content-end w-1/2">Hello World</div>
      <div className="content-end w-1/2 bg-white">{display}</div>
    </section>
  );
};

export default LoginPage;
