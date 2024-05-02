import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router } from "react-router-dom";
import ResultP from "./Components/ResultP/ResultP";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Router>
        <Search />
      </Router>
    </div>
  );
};

export default App;
