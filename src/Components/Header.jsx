import React, { Component } from "react";

function Header() {
  return (
    <header>
      <ul className="header">
        <li>
          <img src="logo.jpeg" />
        </li>
        <li>
          <h3>01. About</h3>
        </li>
        <li>
          <h3>02. Work</h3>
        </li>
        <li>
          <h3>03. Experience</h3>
        </li>
        <li>
          <h3>04. Contact</h3>
        </li>
        <li>
          <button>Resume</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
