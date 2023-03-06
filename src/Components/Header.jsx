import React, { Component, useState, useEffect } from "react";

function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

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

  // TO DISABLE SCROLL WHEN NAV IS UP
  useEffect(() => {
    const body = document.querySelector("body");
    if (disableScroll) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [disableScroll]);

  // THE END OF DISABLE SCROLL

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDisableScroll(!disableScroll);
  };

  const hamburgerStyle = {
    width: "70px",
    height: "50px",
    color: "#03a062",
    background: "none",
    position: "absolute",
    right: "20px",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <header
      className={`${isScrolling ? "scrolling" : ""} ${
        headerVisible ? "" : "hide"
      }`}
    >
      <div className="logo-div">
        <img src="/mainLogo.png" className="logo" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={hamburgerStyle}
        onClick={toggleMenu}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>

      <nav className={isOpen ? "mobile open" : "closed"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={toggleMenu}
          style={hamburgerStyle}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

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
              <a href="#projects" onClick={handleClick}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
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
