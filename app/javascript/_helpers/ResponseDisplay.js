import React from "react";

const ResponseDisplay = (responseMessage) => {
  if (responseMessage.includes("Error")) {
    const message = responseMessage.map((error) => `Error! ${error}`);
    return message;
  }
};

export default ResponseDisplay;
