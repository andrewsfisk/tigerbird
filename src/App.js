import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Bookkeeping from "./pages/Bookkeeping";
import Mentoring from "./pages/Mentoring";
import Contact from "./pages/Contact";
import logo from "./logo.png";
import image from "./image.png";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);
  return (
    <div className="">
      <div>
        <nav className="navContainer">
          <img
            className="logo"
            width="150px"
            height="auto"
            alt="logo"
            src={logo}
          ></img>
          <ul className="inline">
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
                Mentoring
              </Link>
            </li>
            <li>
              <Link to="/Contact" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
          <div ref={ref} className="hamburger">
            <button
              className="toggle"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <MdClose
                  style={{ width: "32px", height: "32px", color: "#068d80" }}
                />
              ) : (
                <FiMenu
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "#068d80",
                  }}
                />
              )}
            </button>
            <ul className={`menu-nav${isOpen ? " show-menu" : ""}`}>
              <li>
                <Link
                  to="/"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Bookkeeping"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                >
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  to="/Mentoring"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                >
                  Mentoring
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
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
          <Route path="/" element={<Home />} />
          <Route path="/Bookkeeping" element={<Bookkeeping />} />
          <Route path="/Mentoring" element={<Mentoring />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
