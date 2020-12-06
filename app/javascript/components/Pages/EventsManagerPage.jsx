import React, { useState, Fragment } from "react";
import SideNav from "../EventsManager/SideNav";
import ViewWindow from "../EventsManager/ViewWindow";

const EventsManagerPage = () => {
  const [whichTab, setWhichTab] = useState("events");
  // usestate for syncing info
  // fetch userinfo
  // change header info dynamically

  return (
    <>
      <div className="container flex flex-col items-center px-4 py-6 mx-auto rounded sm:py-12 md:py-24 md:flex-row">
        <div className="flex flex-col mb-12 ml-4 lg:flex-grow md:w-8/12 lg:pr-24 md:pr-16 md:text-left md:mb-0"></div>
        <h1 className="mb-4 text-3xl font-medium leading-tight text-left text-gray-900 title-font sm:text-4xl">
          Hello, Monica
        </h1>
        <button
          className="px-6 py-2 ml-4 text-lg text-white bg-black border-0 rounded focus:outline-black hover:bg-white hover:border-black hover:text-black hover:outline-back"
          type="button"
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
          <ViewWindow whichTab={whichTab} />
        </div>
      </div>
    </>
  );
};

export default EventsManagerPage;
