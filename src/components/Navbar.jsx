import React from "react";
import { NavLink } from "react-router-dom";

import ToggleDarkLight from "./ToggleDarkLight";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const retourHaut = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" onClick={() => retourHaut()}>
          Accueil
        </NavLink>

        <NavLink to="/details" onClick={() => retourHaut()}>
          Details
        </NavLink>
      </nav>
      <ToggleDarkLight setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Navbar;
