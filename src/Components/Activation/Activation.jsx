import React from "react";

function Activation() {
  return (
    <div>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-6">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className="avlbal">
                          <h2
                            id="exampleModal3Label2"
                            style={{ color: "#fff" }}
                          >
                            Activation
                          </h2>
                          <h5 className="modal-title" id="exampleModal3Label2">
                            Available Token Balance :
                            <span id="tokenbalance">0</span>
                            <span> RDX</span>
                          </h5>
                          <h5 className="modal-title" id="exampleModal3Label2">
                            Available BUSD Balance :
                            <span id="BUSDbalance">0</span>
                            <span> BUSD</span>
                          </h5>
                          <h5 className="modal-title" id="exampleModal3Label2">
                            Available BNB Balance :
                            <span readOnly="" id="getBalance">
                              0
                            </span>
                            <span> BNB</span>
                          </h5>
                          <h5 className="modal-title" id="exampleModal3Label2">
                            Live Rate :
                            <span
                              id="txtchangevalue"
                              style={{ color: "#fff" }}
                            />
                          </h5>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="popup_net">
                          <span
                            className="metamaskConnection"
                            style={{ color: "#fff" }}
                          />
                          <div className="addNum">
                            <div className="trxnumber">
                              <input
                                type="text"
                                defaultValue={0}
                                readOnly=""
                                id="txtamount"
                                className="form5"
                                placeholder="Package Amount"
                              />
                              <span>USD</span>
                            </div>
                            <div className="trxnumber">
                              <input
                                type="text"
                                defaultValue={0}
                                readOnly=""
                                id="txtamount1"
                                className="form5"
                                placeholder="Package Amount"
                              />
                              <span>USD</span>
                            </div>
                            <div className="trxnumber">
                              <input
                                type="text"
                                readOnly=""
                                id="txtTokenvalue"
                                className="form5"
                                placeholder="Calculated Coin Value"
                              />
                              <span>Token</span>
                            </div>
                            <div className="trxnumber">
                              <input
                                type="text"
                                defaultValue=""
                                readOnly=""
                                id="txtTronvalue"
                                className="form5"
                                placeholder="Calculated BUSD Value"
                              />
                              <span>BUSD</span>
                            </div>
                            <div className="numbtn">
                              <button onclick="addactivationValue(50)">
                                + 50 $
                              </button>
                              <button onclick="addactivationValue(100)">
                                + 100 $
                              </button>
                              <button onclick="addactivationValue(200)">
                                + 200 $
                              </button>
                              <button onclick="addactivationValue(500)">
                                + 500 $
                              </button>
                              <button onclick="addactivationValue(1000)">
                                + 1000 $
                              </button>
                            </div>
                            <div className="numbtn">
                              <button onclick="addactivationValue(2500)">
                                + 2500 $
                              </button>
                              <button onclick="addactivationValue(5000)">
                                + 5000 $
                              </button>
                              <button onclick="addactivationValue(10000)">
                                + 10000 $
                              </button>
                              <button onclick="addactivationValue(25000)">
                                + 25000 $
                              </button>
                            </div>
                            <input
                              type="hidden"
                              id="packageamount"
                              name="name"
                              autoComplete="off"
                            />
                            <div className="row joinbtn justify-content-center">
                              <div className="col-md-8 ActvHdR">
                                <div className="d-flex resetBtn">
                                  <div>
                                    <button
                                      className="button"
                                      onclick="reset2()"
                                    >
                                      Reset
                                    </button>
                                  </div>
                                  <div>
                                    <button
                                      className="button"
                                      style={{ backgroundColor: "#52AA0B" }}
                                    >
                                      <a href="/user/Dashboard">
                                        {" "}
                                        Back To Home{" "}
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*-onclick number increase end*/}
                          <h5 className="tomenname" />
                          <div className=" select_network">
                            <div className="text-center ng-scope">
                              {/* ngIf: p.top_up=='0' */}
                              {/* ngIf: p.top_up!='0' */}
                              <div ng-if="p.top_up!='0'" className="ng-scope">
                                <div className="col-md-12">
                                  <a href="#" onclick="Upgrade_V1();">
                                    <div className="text-center net_box ">
                                      <img
                                        src="Assets/images/activate.png"
                                        className="img-fluid"
                                        width="12%"
                                      />
                                      <h4>Upgrade</h4>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              {/* end ngIf: p.top_up!='0' */}
                            </div>
                            {/* end ngIf: p.top_up!='0' */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activation;
