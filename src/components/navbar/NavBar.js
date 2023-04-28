import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import image from "./image.png";

const NavBar = () => {
  return (
    <nav className="container">
      <img
        className="logo"
        width="150px"
        height="auto"
        alt="logo"
        src={logo}
      ></img>
      <text className="header">Home</text>
      <text className="header">Services</text>
      <text className="header">About</text>
      <text className="header">Contact Us</text>
      <img className="image" alt="logo" src={image} width="40" height="auto" />
    </nav>
  );
};

export default NavBar;
