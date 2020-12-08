import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { newUser } from "../../_helpers/Fetch";
import { generateKeyPair } from "../../_helpers/crypto/box";

const SignUp = ({ loggedInStatus }) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    public_key: "",
    private_key: "",
  });
  const [response, setResponse] = useState({ status: "000" });

  useEffect(() => {
    const keyPair = generateKeyPair();
    setInput({
      ...input,
      ["public_key"]: keyPair.public_key,
      ["private_key"]: keyPair.private_key,
    });
    console.log(keyPair);
    return keyPair;
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault;
    newUser(input, setResponse);
  };
  let displayResponse;
  if (Object.keys(response).includes("error")) {
    displayResponse = response.error.map((error) => `${error}. `);
  } else if (response.status === "created") {
    return <Redirect to="/user_profile" />;
  }

  const onHandleChange = (e) => {
    setInput({ ...input, [e.currentTarget.id]: e.currentTarget.value });
  };
  return (
    <div>
      <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
        Sign Up
      </h1>
      {displayResponse}
      <form>
        <div>
          <label htmlFor="Username">
            <input
              className="m-3 border-2 border-black rounded"
              id="username"
              onChange={onHandleChange}
              placeholder="Username"
              value={input.username}
              required
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
              required
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
              required
            />
          </label>
        </div>

        <button
          className="px-2 py-2 ml-4 text-xs text-white bg-black border-0 rounded focus:outline-black hover:bg-white hover:border-black hover:text-black hover:outline-back"
          type="button"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
