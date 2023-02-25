import React, { Component, useState, useEffect } from "react";

function Body() {
  const [activeDiv, setActiveDiv] = useState(1);

  const toggleDiv = divNum => {
    setActiveDiv(divNum);
  };

  const style = {
    width: "5%",
    height: "5%",
    margin: "1%",
    cursor: "pointer",
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
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque est, labore molestias voluptatum animi nisi eum
                  repellendus quo veniam quas ea voluptatem error voluptatibus
                  eaque. Saepe dolorem
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias, culpa totam. Eaque dolores eligendi omnis aperiam,
                  est iure nostrum? Quibusdam est magnam ipsum laborum, corporis
                  libero aliquid.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum sit quibusdam, fugiat.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <ul className="skills">
                <li>React</li>
                <li>Javascript</li>
                <li>CSS 3</li>
                <li>HTML 5</li>
                <li>Git and Github</li>
                <li>Wordpress</li>
              </ul>
            </div>
            <div className="image-wrapper">
              <img src="/face2.jpg" />
              <div class="overlay"></div>
            </div>
          </div>
        </section>
        <section id="jobs">
          <h2 className="heading">Places i've worked</h2>
          <div className="inner">
            <div className="job-tabs">
              <button onClick={() => toggleDiv(1)}>
                <span>Strictly Dev</span>
              </button>
              <button onClick={() => toggleDiv(2)}>
                <span>Strictly Dev</span>
              </button>
              <button onClick={() => toggleDiv(3)}>
                <span>Strictly Dev</span>
              </button>
            </div>
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
                  <div>
                    <p className="feature">Featured Project</p>
                    <h3 className="title"> CBT App</h3>
                    <div className="project-description">
                      <p>
                        This was created for a pharmaceutical company for an
                        entrance exam which students in more than half the
                        states in the country country took
                      </p>
                    </div>
                    <ul className="project-tech-stack">
                      <li>React</li>
                      <li>JSX</li>
                      <li>CSS</li>
                      <li>HTML</li>
                    </ul>
                    <div>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={style}
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={style}
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
                  <img src="/face.jpg" />
                  <div className="overlay"></div>
                </div>
                <div className="second-project-content">
                  <div>
                    <p className="second-feature">Featured Project</p>
                    <h3 className="second-title"> CBT App</h3>
                    <div className="second-project-description">
                      <p>
                        This was created for a pharmaceutical company for an
                        entrance exam which students in more than half the
                        country take
                      </p>
                    </div>
                    <ul className="second-project-tech-stack">
                      <li>React</li>
                      <li>JSX</li>
                      <li>CSS</li>
                      <li>HTML</li>
                    </ul>
                    <div>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={style}
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          style={style}
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            incidunt quas illum molestias facere a tempora placeat omnis itaque
            modi!
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
