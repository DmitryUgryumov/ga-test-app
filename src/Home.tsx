// @ts-nocheck
import { Link } from "react-router-dom";
import React from "react";

const sendEvent = (eventName, eventParams) => {
  console.log("send");
  if (window.gtag) {
    console.log(window.gtag);
    window.gtag("event", eventName, eventParams);
  } else {
    console.warn("Google Analytics is not initialized");
  }
};

const Home = () => {
  const handleClick = () => {
    sendEvent("screen_view_event", {
      app_name: "testApp",
      screen_name: "HomePage",
    });
  };

  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={handleClick}>Send GA event</button>
      <Link to="/second">
        <button>Go to Second Page</button>
      </Link>
    </div>
  );
};

export default Home;
