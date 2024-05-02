import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About US</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>More</li>
        <li>
          <button className="btn">Login</button>
        </li>
        <li>
          <button className="btn2">SignUp</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
