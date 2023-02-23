import React, { Component, useState, useEffect } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  function handleClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top;
      const currentPosition = window.pageYOffset;
      const offset = targetPosition + currentPosition;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  const show = `${isScrolling ? "scrolling-header" : ""} ${
    headerVisible ? "" : "hide"
  } `;

  console.log(show);
  return (
    <header
      className={`${isScrolling ? "scrolling" : ""} ${
        headerVisible ? "" : "hide"
      }`}
    >
      <nav>
        <div className="logo-div">
          <img src="/mainLogo.png" className="logo" />
        </div>

        <div className="menu">
          <ol>
            <li>
              <a href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li>
              <a href="#jobs" onClick={handleClick}>
                Work
              </a>
            </li>
            <li>
              <a href="" onClick={handleClick}>
                Experience
              </a>
            </li>
            <li>
              <a href="" onClick={handleClick}>
                Contact
              </a>
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
