import React from "react";
import SideNav from "../EventsManager/SideNav";
import ViewWindow from "../EventsManager/ViewWindow";
const EventsManager = () => {
  const [whichTab, setWhichTab] = useState("events");
  // usestate for syncing info
  // fetch userinfo

  return (
    <div>
      <SideNav whichTab={whichTab} setWhichTab={setWhichTab} />
      <ViewWindow whichTab={whichTab} ß />
    </div>
  );
};

export default EventsManager;
