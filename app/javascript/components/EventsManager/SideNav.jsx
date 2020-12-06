import React, { Fragment } from "react";

const SideNav = ({ whichTab, setWhichTab }) => {
  // what's saved for
  const tabSetter = (clickedTab) => {
    setWhichTab(clickedTab);
  };
  return (
    <div className="w-1/2 bg-gray-300 border-0">
      <div onClick={() => tabSetter("events")}>Events</div>
      <div onClick={() => tabSetter("inbox")}>Inbox</div>
      <div onClick={() => tabSetter("saved")}>Saved</div>
      <div onClick={() => tabSetter("my_events")}>My Events</div>
      <div onClick={() => tabSetter("settings")}>Settings</div>
    </div>
  );
};

export default SideNav;
