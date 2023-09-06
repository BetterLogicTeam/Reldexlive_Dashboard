import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="main_btsa">
        <div className="container">
          <nav className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">
                <a href="/">
                  <img className="logo" src="assets/images/logo.png" />
                </a>
              </div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span />
                <span />
                <span />
              </label>
            </div>
            <ul className="nav-list">
              <li className="bt">
                <a href="/">Home</a>
              </li>
              <li className="bt">
                <a href="#About">About</a>
              </li>
              <li className="bt">
                <a href="#Market">Market</a>
              </li>
              <li className="bt">
                <a href="#Service">Service</a>
              </li>
              <li className="bt">
                <a href="#faq">Faq</a>
              </li>
              <li className="bt">
                <a href="#contact">Contact</a>
              </li>
              <li className="login_column pb_16">
                <a className="__tL" href="/Login">
                  Login
                </a>
                <a className="__tL" href="/Register">
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
