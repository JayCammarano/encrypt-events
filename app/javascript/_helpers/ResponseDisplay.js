import React from "react";

const ResponseDisplay = (responseMessage) => {
  if (responseMEssage.includes("Error")) {
    return <h3>Error!</h3>;
  } else if (responseMessage.includes("Success")) {
    return <h3>Success!</h3>;
  }
};

export default ResponseDisplay;
