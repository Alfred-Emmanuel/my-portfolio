import React, { Component, useState, useEffect } from "react";

function Body() {
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
              <img src="/face.jpg" />
              <div class="overlay"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Body;
