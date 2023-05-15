import React from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Bookkeeping from "./pages/Bookkeeping";
import Mentoring from "./pages/Mentoring";
import Contact from "./pages/Contact";
import logo from "./logo.png";
import image from "./image.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito";

function App() {
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
          <Route exact path="/" element={<Home />} />
          <Route path="/Bookkeeping" element={<Bookkeeping />} />
          <Route path="/Mentoring" element={<Mentoring />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;