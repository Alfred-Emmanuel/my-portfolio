import React, { Component, useState, useEffect } from "react";
import LeftSideBar from "./leftSideBar";
import ComingSoon from "../comingSoon";

function Body(props) {
  const [activeDiv, setActiveDiv] = useState(1);

  const toggleDiv = divNum => {
    setActiveDiv(divNum);
  };

  const transparentBg = {
    backgroundColor: "transparent",
  };

  return (
    <div className="main-content">
      <main>
        <section className="introduction">
          <div className="h2-div">
            <h2>Hi, my name is</h2>
          </div>
          <div className="name-div">
            <h1 className="description">Alfred Emmanuel.</h1>
          </div>
          <div className="description-div">
            <h3 className="description">
              I create beautiful <br />
              websites.
            </h3>
          </div>
          <div className="introduction-div">
            <p>
              As a frontend engineer, my primary focus is on building engaging
              and responsive user interfaces that provide seamless and enjoyable
              experiences for users. I work with a variety of web technologies,
              to design and develop web applications that are visually appealing
              and highly functional.
            </p>
          </div>
          <div className="div-btn-body">
            <a>Check it out</a>
          </div>
        </section>

        <section id="about">
          <h2 className="about-me">About Me</h2>
          <div className="inner">
            <div className="inner-inner">
              <div>
                <p>
                  Hello, my name is Alfred and i enjoy turning or creating
                  designs into visually appealing and user friendly web apps
                </p>
                <p>
                  My interest in web development started back in 2020 when i
                  decided to break the stereotype of having to be able to work
                  from only one location.
                </p>
                <p>
                  I enjoy the fast-paced and constantly evolving nature of
                  frontend engineering, which requires me to stay up-to-date
                  with the latest trends and best practices in the field. My
                  passion for creating intuitive user interfaces that enhance
                  the user experience drives me to continuously learn and
                  improve my skills.
                </p>
                <p>
                  Below are some of the technologies i consider myself to be
                  proficient in
                </p>
              </div>
              <ul className="skills">
                <li>React</li>
                <li>Javascript</li>
                <li>CSS 3</li>
                <li>HTML 5</li>
                <li>Git</li>
                <li>Github</li>
                <li>Wordpress</li>
              </ul>
            </div>
            <div className="image-wrapper">
              <img src="/face2.jpg" />
              <div class="overlay"></div>
            </div>
          </div>
        </section>

        <ComingSoon>
          <section id="jobs">
            <h2 className="heading">Places i've worked</h2>
            <div className="inner">
              <div className="job-tabs">
                <button onClick={() => toggleDiv(1)}>
                  <span>Strictly Dev</span>
                </button>
                <button onClick={() => toggleDiv(2)}>
                  <span>Here</span>
                </button>
                <button onClick={() => toggleDiv(3)}>
                  <span>and There</span>
                </button>{" "}
                <button onClick={() => toggleDiv(3)}>
                  <span>Somewhere else</span>
                </button>
              </div>{" "}
              <div className="outer-job-description-div">
                <div
                  className="inner-job-description-div"
                  style={{ display: activeDiv === 1 ? "block" : "none" }}
                >
                  <h3>
                    <span> FrontEnd Developer </span>
                    <span className="company">
                      @{" "}
                      <a className="inline-link" href="google.com">
                        Strictly Dev
                      </a>
                    </span>
                  </h3>
                  <p className="range"> June 2021 - July 2022</p>
                  <div>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam nemo provident cumque perferendis quaerat voluptate
                        tempore sed cupiditate unde minima!
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam perferendis quisquam ab est earum, cum voluptatem
                        nemo excepturi nulla ut, distinctio facere illum fugit
                        error.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores error veniam dolore cum, itaque quia?
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="inner-job-description-div"
                  style={{ display: activeDiv === 2 ? "block" : "none" }}
                >
                  <h3>
                    <span> MiddleEnd Developer </span>
                    <span className="company">
                      @{" "}
                      <a className="inline-link" href="google.com">
                        Strictly Dev
                      </a>
                    </span>
                  </h3>
                  <p className="range"> June 2021 - July 2022</p>
                  <div>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam nemo provident cumque perferendis quaerat voluptate
                        tempore sed cupiditate unde minima!
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam perferendis quisquam ab est earum, cum voluptatem
                        nemo excepturi nulla ut, distinctio facere illum fugit
                        error.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores error veniam dolore cum, itaque quia?
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="inner-job-description-div"
                  style={{ display: activeDiv === 3 ? "block" : "none" }}
                >
                  <h3>
                    <span> BackEnd Developer </span>
                    <span className="company">
                      @{" "}
                      <a className="inline-link" href="google.com">
                        Strictly Dev
                      </a>
                    </span>
                  </h3>
                  <p className="range"> June 2021 - July 2022</p>
                  <div>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam nemo provident cumque perferendis quaerat voluptate
                        tempore sed cupiditate unde minima!
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam perferendis quisquam ab est earum, cum voluptatem
                        nemo excepturi nulla ut, distinctio facere illum fugit
                        error.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores error veniam dolore cum, itaque quia?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ComingSoon>
        <section id="projects">
          <div>
            <h2 className="heading">Things I've Built</h2>
            <ul className="projects-ul">
              <li className="the-grid">
                <div className="project-image">
                  <img src="/cbt-app.png" alt="QUIZ project" />
                  <div className="overlay"></div>
                </div>
                <div className="project-content">
                  <div style={transparentBg}>
                    <p className="feature" style={transparentBg}>
                      Featured Project
                    </p>
                    <h3 className="title"> CBT App</h3>
                    <div
                      className="project-description"
                      style={props.mobileSize ? transparentBg : null}
                    >
                      <p>
                        This was created for a pharmaceutical company for an
                        entrance exam which students in more than half the
                        states in the country country took
                      </p>
                    </div>
                    <ul className="project-tech-stack">
                      <li style={props.mobileSize ? transparentBg : null}>
                        React
                      </li>
                      <li style={props.mobileSize ? transparentBg : null}>
                        JSX
                      </li>
                      <li style={props.mobileSize ? transparentBg : null}>
                        CSS
                      </li>
                      <li style={props.mobileSize ? transparentBg : null}>
                        HTML
                      </li>
                    </ul>
                    <div style={transparentBg}>
                      <a style={transparentBg}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={props.style}
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a style={transparentBg}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={props.style}
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="the-second-grid">
                <div className="second-project-image">
                  <img src="/logo.jpeg" />
                  <div className="overlay"></div>
                </div>
                <div className="second-project-content">
                  <div style={transparentBg}>
                    <p className="second-feature" style={transparentBg}>
                      Featured Project
                    </p>
                    <h3 className="second-title"> CBT App</h3>
                    <div
                      className="second-project-description"
                      style={props.mobileSize ? transparentBg : null}
                    >
                      <p className="description-text">
                        This was created for a pharmaceutical company for an
                        entrance exam which students in more than half the
                        country take
                      </p>
                    </div>
                    <ul
                      className="second-project-tech-stack"
                      style={transparentBg}
                    >
                      <li style={props.mobileSize ? transparentBg : null}>
                        React
                      </li>
                      <li style={props.mobileSize ? transparentBg : null}>
                        JSX
                      </li>
                      <li style={props.mobileSize ? transparentBg : null}>
                        CSS
                      </li>
                      <li style={props.mobileSize ? transparentBg : null}>
                        HTML
                      </li>
                    </ul>
                    <div style={transparentBg}>
                      <a style={transparentBg}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={props.style}
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a style={transparentBg}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={props.style}
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="contact">
          <h2 className="contact">Wanna Talk?</h2>
          <h2 className="contact-description">Shoot me a message</h2>
          <p className="contact-text">
            I am a dedicated, self-taught and experienced Frontend engineer with
            a passion for building top notch websites committed to delivering
            exceptional results and providing value to clients and employers
            alike.
            <br /> I am actively seeking new opportunities to apply my skills
            and expertise in Frontend engineering. Please feel free to contact
            me for any potential job openings or collaborations.
          </p>
          <a className="contact-link" href="mailto:ealfred828@gmail.com">
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
}

export default Body;
