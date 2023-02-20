import React, { Component, useState, useEffect } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition >= scrollPosition) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setScrollPosition(currentPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <header className={headerVisible ? "" : "hide"}>
      <nav>
        <div>
          <img src="/logo.jpeg" />
        </div>

        <div className="menu">
          <ol>
            <li>
              <a href="/#about">About</a>
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
