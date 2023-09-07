import React from "react";

function Withdrawal_form() {
  return (
    <div className="margin_page_top" >
      <div className="Main_Width">

      <div className="content-page">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="widget-content rowmb2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="section-heading">
                        <h3 className="card-title">Withdrawal</h3>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <form className="ng-pristine ng-valid ng-valid-maxlength">
                      <div className="panel-body">
                        <div>
                          <p id="metamaskConnection">Wallet is locked</p>
                          <input
                            type="hidden"
                            id="address"
                            defaultValue="0x484879EF6aB088ec42Cdf445B8B61d361c73Af39"
                            autoComplete="off"
                          />
                          <input
                            type="hidden"
                            id="userid"
                            defaultValue={332211}
                            autoComplete="off"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label>Wallet Amount</label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                              id="walletAmount"
                              ng-model="p.walletAmount"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label>Enter USD Amount</label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                              id="amount"
                              ng-model="p.requestAmount"
                              placeholder="Enter USD Amount"
                              oninput="return numberValidation(this);"
                              maxLength={10}
                            />
                          </div>
                        </div>
                        {/* <div class="row">
                                      <div class="col-md-4">
                                          <label>Withdrawal Type</label>
                                      </div>
                                      <div class="col-md-8" style="margin-top: 5px;">
                                          <select class="form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="p.paymode" id="selectmode"><option value="? undefined:undefined ?" selected="selected"></option>
                                              <option value="0">Select Payment Mode</option>
                                              
                                              <option value="2">BUSD(BEP20)</option>
                                          </select>
                                      </div>
                                  </div> */}
                        <div className="row">
                          <div className="col-md-4">
                            <label>Calculated Token Amount</label>
                          </div>
                          <div className="col-md-8" style={{ marginTop: 5 }}>
                            <input
                              type="password"
                              className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                              id="transpassword"
                              ng-model="p.transpassword"
                              placeholder=""
                              disabled=""
                            />
                          </div>
                        </div>
                        <div className="row" id="divsubmit">
                          <div className="col-md-3 col-md-offset-2">
                            <button
                              className="btn btn-primary"
                              type="submit"
                              onclick="return withdrawAmount_V();"
                              style={{ marginTop: 10 }}
                            >
                              Withdrawal
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Withdrawal_form;
