import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleDarkLight = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <div
      className={
        isDarkMode ? "toggle-mode dark-theme" : "light-theme toggle-mode"
      }
    >
      <input
        type="checkbox"
        id="toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
      <label className="toggle" htmlFor="toggle">
        <FaSun className="icon sun" />
        <FaMoon className="icon moon" />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ToggleDarkLight;
