import React from "react";
import "./style.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">That JS Dude</a>
      </div>
      <ul className="nav-menu">
        <li>
          <button href="#home">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
