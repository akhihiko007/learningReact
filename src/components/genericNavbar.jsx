import React from "react";
import { NavLink } from "react-router-dom";

const GenericNavbar = ({ NavbarHeading, NavbarItems, NavbarLocations }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" style={{ color: "white", paddingRight: "15px" }}>
        {NavbarHeading}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{renderNavbarItems()}</ul>
      </div>
    </nav>
  );

  function renderNavbarItems() {
    return NavbarItems.map((navbarItem, index) => (
      <NavLink
        to={NavbarLocations[index]}
        className="nav-item nav-link"
        key={index}
      >
        {navbarItem}
      </NavLink>
    ));
  }
};

export default GenericNavbar;
