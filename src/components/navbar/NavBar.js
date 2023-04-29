import React from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import "./NavBar.css";
import Home from "../../pages/Home";
import Services from "../../pages/Services";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import logo from "./logo.png";
import image from "./image.png";

const NavBar = () => {
  return (
    <div className="">
      <div>
        <nav>
          <img
            className="logo"
            width="150px"
            height="auto"
            alt="logo"
            src={logo}
          ></img>
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Services" activeClassName="active">
                Services
              </Link>
            </li>
            <li>
              <Link to="/About" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
          <img
            className="img"
            alt="logo"
            src={image}
            width="40"
            height="auto"
          />
        </nav>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};
export default NavBar;
