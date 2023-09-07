import React from "react";

export default function My_account() {
  return (
    <div className="margin_page_top">
      <div className="content-page ">
        <div className="content">
          <div className="container">
            <div className="row padding_none">
              <div className="col-lg-12">
                <div className="card CBHhdr">
                  <div className="card-body p-0">
                    <div className="iq-edit-list usr-edit">
                      <ul className="iq-edit-profile d-flex nav nav-pills justify-content-start">
                        <li className="col-md-3 p-0">
                          <a
                            className="nav-link active"
                            data-toggle="pill"
                            href="#personal-information"
                          >
                            Personal Information
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
                      className="tab-pane fade active show ng-scope"
                      id="personal-information"
                      role="tabpanel"
                      ng-controller="myProfileAngularCtrl"
                    >
                      <div className="card CBHhdr">
                        <div className="card-header d-flex justify-content-between">
                          <div className="iq-header-title">
                            <h4 className="card-title">Personal Information</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <form
                            ng-submit="updateUserProfile(p.userId)"
                            encType="multipart/form-data"
                            className="ng-pristine ng-valid ng-valid-maxlength"
                          >
                            <div className="panel-body">
                              <div
                                className="row align-items-center"
                                role="form"
                              >
                                <div className="form-group col-sm-6">
                                  <label htmlFor="userid">User Id:</label>
                                  <input
                                    type="hidden"
                                    ng-model="p.id"
                                    autoComplete="off"
                                    className="ng-pristine ng-untouched ng-valid ng-not-empty"
                                  />
                                  <input
                                    type="text"
                                    name="userid"
                                    ng-model="p.userId"
                                    className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                    disabled=""
                                    oninput="return noInputValidation(this);"
                                  />
                                </div>
                                <div className="form-group col-sm-6">
                                  <label htmlFor="userName">Name:</label>
                                  <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    ng-model="p.userName"
                                    className="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-not-empty"
                                    oninput="return nameValidation(this);"
                                    style={{ textTransform: "uppercase" }}
                                    maxLength={40}
                                  />
                                  <input
                                    type="hidden"
                                    ng-model="p.status"
                                    autoComplete="off"
                                    className="ng-pristine ng-untouched ng-valid ng-not-empty"
                                  />
                                </div>
                                <div className="form-group col-sm-6">
                                  <label htmlFor="mobile">Mobile No:</label>
                                  <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    ng-model="p.mobile"
                                    maxLength={10}
                                    className="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-not-empty"
                                    oninput="return numberValidation(this);"
                                    style={{ textTransform: "uppercase" }}
                                  />
                                </div>
                                <div className="form-group col-sm-6">
                                  <label htmlFor="email">Email Id:</label>
                                  <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    ng-model="p.email"
                                    className="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength ng-not-empty"
                                    oninput="return emailValidation(this);"
                                    style={{ textTransform: "uppercase" }}
                                    maxLength={40}
                                  />
                                  <input
                                    type="hidden"
                                    id="status"
                                    name="status"
                                    ng-model="p.status"
                                    className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                    autoComplete="off"
                                  />
                                </div>

                                <center>
                                  <div
                                    className="form-group row"
                                    id="divotp"
                                    hidden=""
                                  >
                                    <label className="col-md-3" />
                                  </div>
                                  <div className="form-group" id="divsubmit">
                                    <label className="col-md-3" />
                                    <span style={{ color: "red" }} />
                                    <br />
                                    <div className="col-md-5">
                                      <input
                                        type="submit"
                                        id="btnupdate"
                                        className="btn btn-primary mr-2"
                                        defaultValue="Submit"
                                      />
                                      <br />
                                      <br />
                                    </div>
                                  </div>
                                </center>
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
      </div>
    </div>
  );
}
