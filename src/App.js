import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Restcard from "./components/RestCard";
import Restlist from "./components/RestList";
import Quotes from "./components/Quotes";



const App = () => {

  return (
    <>
      <Navbar />
      <Quotes />
      <Restcard />
      <Restlist />
    </>
  );
};

export default App;
