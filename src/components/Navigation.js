import React from "react";
// This Navlink in react is used at <a> in html
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* add class "nav-active" only when the "nav" is active (isActive) */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
