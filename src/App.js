import React, { useState, useEffect } from "react";
import { Route, Switch, } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Restcard from "./components/RestCard";
import Restlist from "./components/RestList";
import Quotes from "./components/Quotes";



const App = () => {

  return (
    <Navbar />
  );
};

export default App;
