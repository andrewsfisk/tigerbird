import React from "react";
import { Routes, Route, Redirect, NavLink as Link } from "react-router-dom";
import "./NavBar.css";
import Home from "../../pages/Home";
import Bookkeeping from "../../pages/Bookkeeping";
import Mentoring from "../../pages/Mentoring";
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
              <Link to="/Bookkeeping" activeClassName="active">
                Bookkeeping
              </Link>
            </li>
            <li>
              <Link to="/Mentoring" activeClassName="active">
                Hospitality Mentoring
              </Link>
            </li>
            <li>
              <Link to="/Contact" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
          <img
            className="navimg"
            alt="logo"
            src={image}
            width="40px"
            height="auto"
          />
        </nav>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Bookkeeping" element={<Bookkeeping />} />
          <Route path="/Mentoring" element={<Mentoring />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};
export default NavBar;
