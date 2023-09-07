import React from "react";

function Change_Password() {
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
                            Change Password
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
                      id="chang-pwd"
                      role="tabpanel"
                      ng-controller="ChangeLoginPasswordAngularCtrl"
                    >
                      <div className="card CBHhdr">
                        <div className="card-header d-flex justify-content-between">
                          <div className="iq-header-title">
                            <h4 className="card-title">Change Password</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <form
                            ng-submit="changePassword();"
                            encType="multipart/form-data"
                            className="ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength"
                          >
                            <div className="form-group">
                              <label htmlFor="cpass">Current Password:</label>
                              <input
                                type="password"
                                id="currentpass"
                                required="required"
                                name="currentpass"
                                ng-model="p.password"
                                className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength"
                                ng-change="chkpswd(p.password)"
                                maxLength={10}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="npass">New Password:</label>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                ng-model="p.newpassword"
                                className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength"
                                required="required"
                                maxLength={10}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="vpass">Verify Password:</label>
                              <input
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                ng-model="p.confirmpassword"
                                className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength"
                                required="required"
                                maxLength={10}
                              />
                            </div>
                            <input
                              type="submit"
                              className="btn btn-primary mr-2"
                              defaultValue="Submit"
                            />
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

export default Change_Password;
