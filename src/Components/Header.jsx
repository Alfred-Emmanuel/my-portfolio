import React, { Component } from "react";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src="/logo.jpeg" />
        </div>

        <div className="menu">
          <ol>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ol>
        </div>
        <div className="btn-div">
          <a>Resume</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
