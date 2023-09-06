import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Canva.css";
import { LiaCoinsSolid } from "react-icons/lia";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Canva = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="canvaMain">
     

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navMMain">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <a href="index.html" className="header-logo">
                  <img
                    src="assets/images/logo.png"
                    className="img-fluid rounded-normal light-logo"
                    alt="logo"
                  />
                </a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RD332211
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    RD332212
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    RD332213
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    RD332214
                  </a>
                </li>
              </ul>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="py-3"><HomeOutlinedIcon className="mr-2"/>Dashboard</div>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><PersonOutlineOutlinedIcon className="mr-2"/> Profile</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">My Account</li>
                      <li className="mt-3">Change Password</li>
                      <li className="mt-3">Change Transaction Password</li>
                      <li className="mt-3">Ecurrency Details</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Activation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Activation</li>
                      <li className="mt-3">Activation/Upgrade History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Manage Fund</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Buy Fund Online</li>
                      <li className="mt-3">Buy Fund Online History</li>
                      <li className="mt-3">Received Fund History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><DescriptionOutlinedIcon className="mr-2"/>Income</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Direct Income</li>
                      <li className="mt-3">Roi Income</li>
                      <li className="mt-3">Roi Level Income</li>
                      <li className="mt-3">Reward</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><PersonAddAltOutlinedIcon className="mr-2"/> My Team </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">My Referral</li>
                      <li className="mt-3">Level Details</li>
                      <li className="mt-3">My Team</li>
                      <li className="mt-3">Direct leg Bussiness</li>
                      <li className="mt-3">Bonanza</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Withdrawal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Withdrawal</li>
                      <li className="mt-3">Withdrawal History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Contact support </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">contactsupport</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <div className="py-3"><ExitToAppIcon className="mr-2"/>Logout</div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div className="content-page ">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-block align-items-center referralItem mb2">
                  <div className="form-group">
                    <h3>Referral Link</h3>
                    <div className="input-group mb-0 bgss">
                      <input
                        type="text"
                        id="MyValue"
                        className="form-control"
                      />
                      <span
                        text="button"
                        onclick="addressCopy()"
                        className="input-group-text"
                      >
                        <i className="fa fa-copy" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mb_flx">
                <div className="col-md-3">
                  <a href="#">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Current Package</h6>
                        </div>
                        <h5>8586</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/ActivationHistory">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Total Investment</h6>
                        </div>
                        <div>
                          <h5>5868</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/myReferral">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Total Referral</h6>
                        </div>
                        <h5>2364</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/myTeam">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Total Team</h6>
                        </div>
                        <h5>9582</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/myTeam">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Total Business</h6>
                        </div>
                        <h5>8282</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/DirectIncome">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Direct Income</h6>
                        </div>
                        <h5>8585</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/roiIncome">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Daily Profit Income</h6>
                        </div>
                        <h5>8957</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/RoiLevelIncome">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Daily Profit Level Income</h6>
                        </div>
                        <h5>869</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/Rewardincome">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Reward Income</h6>
                        </div>
                        <h5>458</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="#">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Total Income</h6>
                        </div>
                        <h5>2423</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/user/WithdrawHistory">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Withdrawal</h6>
                        </div>
                        <h5>3234</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="#">
                    <div className="card cardItem">
                      <div className="card-body">
                        <div className="card_heading">
                          <div className="iq-icon-box-2">
                            <LiaCoinsSolid />
                          </div>
                          <h6>Net Income</h6>
                        </div>
                        <h5>535</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mb_flx">
                <div className="col-md-12">
                  <div className="prgs">
                    <div id="myProgress">
                      <div id="myBar" />
                    </div>
                  </div>
                  <div
                    className="text_color mb_1 text-white"
                    style={{ fontSize: "medium" }}
                  >
                    You have earned Total 1.25 % (63 BUSD) out of 500 % (5000.00
                    BUSD) of total investment (1000.00 BUSD).
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mb_flx">
                <div className="col-md-12">
                  <div className="news_section">
                    <h4 className="userdet">News</h4>
                    <marquee
                      direction="up"
                      scrollamount={2}
                      onmouseover="this.stop();"
                      onmouseout="this.start();"
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ color: "white" }}>
                              Welcome To Reldexlive
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <tr>
                            <td>Comming Soon..</td>
                          </tr>
                        </tbody>
                      </table>
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loader" />
      </div>
    </div>
  );
};

export default Canva;
