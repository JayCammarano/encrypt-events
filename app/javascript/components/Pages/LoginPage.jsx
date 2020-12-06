import React from "react";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
const LoginPage = ({ s }) => {
  let display;
  if (s == "true") {
    display = <SignUp />;
  } else {
    display = <Login />;
  }

  return (
    <section>
      Hello World
      {display}
    </section>
  );
};

export default LoginPage;
