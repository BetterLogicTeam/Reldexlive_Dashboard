import React from "react";
import { LiaCoinsSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div>
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                    className="text_color mb_1"
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
}
