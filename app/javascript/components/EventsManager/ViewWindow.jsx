import React from "react";
import Events from "./Views/Events";
import Inbox from "./Views/Inbox";
import My_Events from "./Views/My_Events";
import Settings from "./Views/Settings";
import Saved from "./Views/Saved";

const ViewWindow = ({ whichTab }) => {
  let display;

  if (whichTab === "events") {
    display = <Events />;
  } else if (whichTab === "inbox") {
    display = <Inbox />;
  } else if (whichTab === "my_events") {
    display = <My_Events />;
  } else if (whichTab === "settings") {
    display = <Settings />;
  } else {
    display = <Saved />;
  }

  return (
    <div className="w-1/2">
      View Window
      {display}
    </div>
  );
};

export default ViewWindow;
