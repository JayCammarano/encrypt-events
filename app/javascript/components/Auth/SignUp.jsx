import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { newUser } from "../../_helpers/fetch";
import ResponseDisplay from "../../_helpers/ResponseDisplay";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [response, setResponse] = useState({});

  const onSubmitHandler = () => {
    newUser(input, setResponse);
  };

  let displayResponse;
  useEffect(() => {
    if (Object.keys(response).includes("error")) {
      responseMessage = `Error! ${response.error}`;
      displayResponse = <ResponseDisplay responseMessage={responseMessage} />;
    } else if (Object.keys(response).includes("user")) {
      <Redirect to="/user_profile" />;
    }
  }, [response]);

  const onHandleChange = (e) => {
    setInput({ ...input, [e.currentTarget.id]: e.currentTarget.value });
  };
  return (
    <div>
      <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
        Sign Up
      </h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="Username">
            <input
              className="m-3 border-2 border-black rounded"
              id="username"
              onChange={onHandleChange}
              placeholder="Username"
              value={input.username}
            />
          </label>
        </div>

        <div>
          <label htmlFor="Password">
            <input
              id="password"
              className="m-3 border-2 border-black rounded"
              onChange={onHandleChange}
              placeholder="Password"
              type="password"
              value={input.password}
            />
          </label>
        </div>
        <div>
          <label htmlFor="Password Confirmation">
            <input
              id="password_confirmation"
              className="m-3 border-2 border-black rounded"
              onChange={onHandleChange}
              placeholder="Password Confirmation"
              type="password"
              value={input.password_confirmation}
            />
          </label>
        </div>

        <button
          className="px-2 py-2 ml-4 text-xs text-white bg-black border-0 rounded focus:outline-black hover:bg-white hover:border-black hover:text-black hover:outline-back"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
