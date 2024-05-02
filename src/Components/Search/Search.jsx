import React from "react";
import "./Search.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    // Open ResultP page in a new tab
    window.open("/ResultP", "_blank");
  };
  return (
    <div>
      <div className="container">
        <h2>Search and Location</h2>
        <p>Find the right program and university</p>
        <div className="search-location">
          <div className="input-container">
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" placeholder="Enter location" />
          </div>
          <div className="input-container">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
