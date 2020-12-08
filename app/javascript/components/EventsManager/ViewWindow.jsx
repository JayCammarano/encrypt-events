import React, { Fragment } from "react";
import Events from "./Views/Events";
import Inbox from "./Views/Inbox";
import My_Events from "./Views/My_Events";
import Settings from "./Views/Settings";
import Saved from "./Views/Saved";
import CreateEvent from "./Views/CreateEvent";

const ViewWindow = ({ whichTab, user }) => {
  let display;

  if (whichTab === "events") {
    display = <Events />;
  } else if (whichTab === "inbox") {
    display = <Inbox />;
  } else if (whichTab === "create") {
    display = <CreateEvent user={user} />;
  } else if (whichTab === "my_events") {
    display = <My_Events />;
  } else if (whichTab === "settings") {
    display = <Settings />;
  } else {
    display = <Saved />;
  }

  return <>{display}</>;
};

export default ViewWindow;
