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
    <section className="flex flex-col">
      <div className="content-end w-1/2">Hello World</div>
      <div className="content-end w-1/2 bg-white">{display}</div>
    </section>
  );
};

export default LoginPage;
