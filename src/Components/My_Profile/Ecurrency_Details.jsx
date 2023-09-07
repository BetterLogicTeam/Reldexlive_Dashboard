import React from "react";

function Ecurrency_Details() {
  return (
    <div className="margin_page_top">
      <div className="content-page">
        <div className="content">
          <div className="container">
            <div className="row padding_none">
              <div className="col-lg-12">
                <div className="card CBHhdr">
                  <div className="card-body p-0">
                    <div className="iq-edit-list usr-edit">
                      <ul
                        className="iq-edit-profile d-flex nav nav-pills"
                        style={{ justifyContent: "flex-start" }}
                      >
                        <li className="col-md-2 p-0">
                          <a
                            className="nav-link active"
                            data-toggle="pill"
                            href="#personal-information"
                          >
                            Ecurrency Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="iq-edit-list-data">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="personal-information"
                      role="tabpanel"
                    >
                      <div className="card CBHhdr">
                        <div className="card-header d-flex justify-content-between"></div>
                        <div className="card-body">
                          <form className="ng-pristine ng-valid ng-valid-maxlength">
                            <div className=" row align-items-center">
                              <div className="form-group col-sm-6">
                                <label htmlFor="fname">
                                  BUSD(BEP20) Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                  id="btcaddress"
                                  ng-model="p.btcaddress"
                                />
                              </div>
                            </div>
                            <button
                              type="button"
                              ng-click="updateBankDetails('btc')"
                              className="btn btn-primary"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="personal-informations"
                      role="tabpanel"
                    >
                      <div className="card">
                        <div className="card-header d-flex justify-content-between"></div>
                        <div className="card-body">
                          <form className="ng-pristine ng-valid ng-valid-maxlength">
                            <div className=" row align-items-center">
                              <div className="form-group col-sm-6">
                                <label htmlFor="fname">Holder Name:</label>
                                <input
                                  type="text"
                                  className="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                                  id="acholder"
                                  ng-model="p.AccountHolderName"
                                  oninput="nameValidation(this);"
                                  maxLength={40}
                                  style={{ textTransform: "uppercase" }}
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label htmlFor="uname">Account No:</label>
                                <input
                                  type="text"
                                  className="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                                  id="acnumber"
                                  maxLength={25}
                                  ng-model="p.AccountNumber"
                                  oninput="numberValidation(this);"
                                  style={{ textTransform: "uppercase" }}
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label htmlFor="uname"> IFSC Code:</label>
                                <input
                                  type="text"
                                  id="ifsc"
                                  className="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
                                  ng-keyup="bankBranchDetails(p.IFSCCode)"
                                  ng-model="p.IFSCCode"
                                  maxLength={20}
                                  style={{ textTransform: "uppercase" }}
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label htmlFor="lname">Bank Name:</label>
                                <input
                                  type="text"
                                  id="bankname"
                                  className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                                  ng-model="p.BankName"
                                  disabled=""
                                  oninput="noInputValidation(this);"
                                  style={{ textTransform: "uppercase" }}
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label htmlFor="uname"> Branch Name:</label>
                                <input
                                  type="text"
                                  className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                                  id="branchname"
                                  ng-model="p.BranchName"
                                  disabled=""
                                  oninput="noInputValidation(this);"
                                  style={{ textTransform: "uppercase" }}
                                />
                              </div>
                            </div>
                            <button
                              type="button"
                              ng-click="updateBankDetails('bank')"
                              className="btn btn-primary"
                            >
                              Submit
                            </button>
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
      </div>
    </div>
  );
}

export default Ecurrency_Details;
