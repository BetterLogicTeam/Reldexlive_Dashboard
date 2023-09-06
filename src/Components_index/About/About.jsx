import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#232733" }} id="About">
        <div className="container">
          <div className="col-md-12">
            <h2 className="_seg____header__ mt_50" style={{ color: "#F58634" }}>
              About Us
            </h2>
          </div>
          <div className="row">
          <div className="col-md-6 emg_flx">
            <img
              src="assets/images/ab.png"
              className="img_fluid"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="__content__ text-white">
              What is a market analysis? A market analysis is a thorough
              assessment of a market within a specific industry. With this
              analysis, you will study the dynamics of your market, such as
              volume and value, potential customer segments, buying patterns,
              competition, and other important factors. A market analysis
              studies the attractiveness and the dynamics of a special market
              within a special industry. It is part of the industry analysis and
              thus in turn of the global environmental analysis. Through all of
              these analyses, the strengths, weaknesses, opportunities and
              threats of a company can be identified
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
