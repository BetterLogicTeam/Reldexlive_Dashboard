import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <>
        <section className="___flow___ footer_section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="foot_side___">
                  <h1 className="_seg____htxt_ text_white">
                    Most innovative binary option platform
                  </h1>
                  <div
                    className="_txt___"
                    style={{ fontSize: "inherit", color: "grey" }}
                  >
                    What is a market analysis? A market analysis is a thorough
                    assessment of a market within a specific industry. With this
                    analysis, you will study the dynamics of your market, such
                    as volume and value, potential customer segments, buying
                    patterns, competition, and other important factors.
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="foot_side___">
                  <h1 className="_seg____htxt_ text_white">Quick Links</h1>
                  <a className="_txt___ _fLink" href="/">
                    Home
                  </a>
                  <a className="_txt___ _fLink" href="/Login">
                    Login
                  </a>
                  <a className="_txt___ _fLink" href="/Register">
                    Register
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="foot_side___">
                  <p className="_txt___ _cLink">
                    Email:{" "}
                    <a
                      href="#"
                      style={{
                        fontSize: "inherit",
                        color: "#ff7913",
                        textTransform: "lowercase",
                      }}
                    >
                      <span className="__cf_email__">info@reldexlive.com</span>
                    </a>
                  </p>
                  <a href="/">
                    <img
                      className="logo"
                      src="assets/images/logo.png"
                      style={{ width: 190, height: 150 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="text-white">
                  Copyright © 2023 reldexlive.com | All Rights Reserved.
                </span>
              </div>
              <div className="col-md-6">
                <div className="socialLinks">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61550101464081&mibextid=ZbWKwL"
                        target="_blank"
                      >
                        <FaFacebookF className="ftr_icn"/>
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <FaTelegram className="ftr_icn"/>
                        <i className="fa fa-telegram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Footer;
