import React, { useState } from "react";
import Datetime from "react-datetime";
import moment from "moment";
import { string } from "prop-types";
import { encrypt } from "../../../_helpers/crypto/tweetNACL";

const CreateEvent = ({ user }) => {
  const [input, setInput] = useState({
    datetime: moment(),
    title: "",
    description: "",
    location: "",
    invites: [],
  });
  const convertDateTime = () => {
    const stringDate = input.datetime._d;
    return stringDate;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault;
    const stringDate = convertDateTime();
    const eventObject = { ...input, datetime: stringDate };
    encryptedEvent = encryptEvent(eventObject, user.private_key);
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.currentTarget.id]: e.currentTarget.value });
  };
  const handleDateChange = (e) => {
    setInput({ ...input, datetime: e.currentTarget });
  };
  const handleInvites = (e) => {
    let invites = input.invites;
    if (e.key === "Enter" && !input.invites.includes(e.currentTarget.value)) {
      invites.push(e.currentTarget.value);

      setInput({
        ...input,
        invites,
      });
    }
  };

  const yesterday = moment().subtract(1, "day");
  const valid = (current) => {
    return current.isAfter(yesterday);
  };

  let displayInvitedUsers;

  return (
    <div>
      <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
        Login
      </h1>

      <form>
        <div>
          <label htmlFor="Title">
            <input
              className="m-3 border-2 border-black rounded"
              id="title"
              onChange={handleChange}
              placeholder="Title"
              value={input.Title}
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            <input
              id="description"
              className="m-3 border-2 border-black rounded"
              onChange={handleChange}
              placeholder="description"
              type="text-field"
              value={input.description}
            />
          </label>
        </div>
        <div>
          <label htmlFor="Location">
            <input
              id="location"
              className="m-3 border-2 border-black rounded"
              onChange={handleChange}
              placeholder="Location"
              value={input.description}
            />
          </label>
        </div>
        {displayInvitedUsers}
        <div>
          <label htmlFor="Invite Users">
            <input
              id="invites"
              className="m-3 border-2 border-black rounded"
              onKeyDown={handleInvites}
              placeholder="Type a username to invite someone"
            />
          </label>
        </div>
        <div>
          <label htmlFor="Date and Time">
            <Datetime
              onChange={handleDateChange}
              isValidDate={valid}
              value={input.datetime}
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

export default CreateEvent;
