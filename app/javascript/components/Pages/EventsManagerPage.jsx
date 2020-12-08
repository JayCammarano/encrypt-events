import React, { useState, Fragment } from "react";
import SideNav from "../EventsManager/SideNav";
import ViewWindow from "../EventsManager/ViewWindow";
import { Redirect } from "react-router-dom";

const EventsManagerPage = ({ userObject }) => {
  const [whichTab, setWhichTab] = useState("my_events");
  if (userObject.username === "NOT_LOGGED_IN") {
    return <Redirect to="/" />;
  }
  const setCreateEvent = () => {
    setWhichTab("create");
  };
  return (
    <>
      <div className="container flex flex-col items-center px-4 py-6 mx-auto rounded sm:py-12 md:py-24 md:flex-row">
        <div className="flex flex-col mb-12 ml-4 lg:flex-grow md:w-8/12 lg:pr-24 md:pr-16 md:text-left md:mb-0"></div>
        <h1 className="mb-4 text-3xl font-medium leading-tight text-left text-gray-900 title-font sm:text-4xl">
          Hello, {userObject.username}
        </h1>
        <button
          className="px-6 py-2 ml-4 text-lg text-white bg-black border-0 rounded focus:outline-black hover:bg-white hover:border-black hover:text-black hover:outline-back"
          type="button"
          onClick={setCreateEvent}
        >
          Create an Event
        </button>
      </div>
      <div className="float-left w-1/6 py-6 bg-gray-300 xl:px-4 sm:py-12 md:py-24 md:flex-row">
        <div className="mr-0 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <SideNav whichTab={whichTab} setWhichTab={setWhichTab} />
        </div>
      </div>
      <div className="float-right w-5/6 px-4 py-6 ml-0 text-center bg-white border-2 border-black lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <div className="sm:py-12 md:py-24 md:flex-row">
          <ViewWindow whichTab={whichTab} user={userObject} />
        </div>
      </div>
    </>
  );
};

export default EventsManagerPage;
