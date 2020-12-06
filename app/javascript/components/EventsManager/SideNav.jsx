import React, { Fragment } from "react";

const SideNav = ({ whichTab, setWhichTab }) => {
  // what's saved for
  const tabSetter = (clickedTab) => {
    setWhichTab(clickedTab);
  };
  return (
    <div className="w-1/2 px-4 py-6">
      <div className="w-1/2 px-4 py-6" onClick={() => tabSetter("events")}>
        Events
      </div>
      <div className="w-1/2 px-4 py-6" onClick={() => tabSetter("inbox")}>
        Inbox
      </div>
      <div className="w-1/2 px-4 py-6" onClick={() => tabSetter("saved")}>
        Saved
      </div>
      <div className="w-1/2 px-4 py-6" onClick={() => tabSetter("my_events")}>
        My Events
      </div>
      <div
        className="w-1/2 px-4 py-6 border-0"
        onClick={() => tabSetter("settings")}
      >
        Settings
      </div>
    </div>
  );
};

export default SideNav;
