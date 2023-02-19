import React, { Component } from "react";

function Body() {
  return (
    <div className="main-content">
      <main>
        <section className="introduction">
          <div>
            <h2>Hi, my name is</h2>
          </div>
          <div className="name-div">
            <h1 className="description">Alfred Emmanuel.</h1>
          </div>
          <div>
            <h3 className="description">
              I create beautiful <br />
              websites.
            </h3>
          </div>
          <div>
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
      </main>
    </div>
  );
}

export default Body;
