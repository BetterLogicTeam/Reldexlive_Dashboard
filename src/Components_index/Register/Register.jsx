import React from "react";

const Register = () => {
  return (
    <div>
      <div className="wrapper regMain">
        <section className="login-content">
          <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="login_item mt_5">
                      <h2 className="mb-2">Sign Up</h2>
                      <p className="text-white">
                        Enter your personal details and start journey with us.
                      </p>
                      <div id="error-msg" />
                      <div className="loader" style={{ display: "none" }} />
                      <form
                        
                      >
                        <input
                          name="__RequestVerificationToken"
                          type="hidden"
                          defaultValue="PJJuP8Xf6VJlLy7zM5vhEyuyuyU1Kq2UDj6AbbBDjn2VKw1ixzsUpBtK7ReaSazNLAa6pKaG0sxZabBeg2iPkLoZOLSNLPsDQMCiS6xyJQk1"
                        />
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                className="form-control input_reg"
                                data-val="true"
                                data-val-length="The field sponser_id must be a string with a minimum length of 4 and a maximum length of 12."
                                data-val-length-max={12}
                                data-val-length-min={4}
                                data-val-required="Sponser Id is required"
                                id="sponser_id"
                                maxLength={8}
                                name="sponser_id"
                                placeholder="Enter Sponser Id"
                                type="text"
                                defaultValue=""
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="sponser_id"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                className="form-control input_reg floating-input"
                                id="sponsername"
                                name="sponsername"
                                placeholder="Sponsor Name"
                                readOnly="true"
                                type="text"
                                defaultValue=""
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="sponsername"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                className="form-control input_reg"
                                data-val="true"
                                data-val-length="The field User name must be a string with a minimum length of 1 and a maximum length of 50."
                                data-val-length-max={50}
                                data-val-length-min={1}
                                data-val-required="The User name field is required."
                                id="f_name"
                                maxLength={40}
                                name="f_name"
                                oninput="return nameValidation(this)"
                                placeholder="Enter Your Name"
                                type="text"
                                defaultValue=""
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="f_name"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                className="form-control input_reg input-log-cls"
                                data-val="true"
                                data-val-email="Invalid Email Address"
                                data-val-required="Email address is required"
                                id="email"
                                maxLength={50}
                                name="email"
                                placeholder="Enter Email Id"
                                style={{
                                  width: "100%",
                                  border: "solid 1px #ccc",
                                  borderRadius: 5,
                                  padding: 10,
                                  color: "black",
                                }}
                                type="text"
                                defaultValue=""
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="email"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                className="floating-input form-control input_reg"
                                data-val="true"
                                data-val-required="Mobile number is required"
                                id="mobile"
                                maxLength={10}
                                name="mobile"
                                oninput="return numberValidation(this)"
                                placeholder="Enter Mobile"
                                type="text"
                                defaultValue=""
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="mobile"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                defaultValue=""
                                autoComplete="off"
                                className="floating-input form-control input_reg"
                                data-val="true"
                                data-val-length="Enter minimum 5 character"
                                data-val-length-max={50}
                                data-val-length-min={5}
                                data-val-required="The Enter Password field is required."
                                id="password"
                                maxLength={50}
                                minLength={5}
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="password"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                defaultValue=""
                                className="floating-input form-control input_reg"
                                data-val="true"
                                data-val-equalto="The password and confirmation password do not match."
                                data-val-equalto-other="*.password"
                                data-val-required="The confirmpassword field is required."
                                id="confirmpassword"
                                maxLength={50}
                                minLength={5}
                                name="confirmpassword"
                                placeholder="Enter Confirm Password"
                                type="password"
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="confirmpassword"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="floating-label form-group">
                              <input
                                defaultValue=""
                                autoComplete="off"
                                className="floating-input form-control input_reg"
                                data-val="true"
                                data-val-length="Enter minimum 5 character"
                                data-val-length-max={50}
                                data-val-length-min={5}
                                data-val-required="The Enter Password field is required."
                                id="transpassword"
                                maxLength={50}
                                minLength={5}
                                name="transpassword"
                                placeholder="Enter Transaction Password"
                                type="password"
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="transpassword"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                data-val="true"
                                data-val-required="The TermsAndConditions field is required."
                                id="TermsAndConditions"
                                name="TermsAndConditions"
                                type="checkbox"
                                defaultValue="true"
                              />
                              <input
                                name="TermsAndConditions"
                                type="hidden"
                                defaultValue="false"
                              />
                              <span
                                className="field-validation-valid"
                                data-valmsg-for="TermsAndConditions"
                                data-valmsg-replace="true"
                              />
                              <label className="" htmlFor="customCheck1">
                                 I Agree Your
                                <a href="#">Terms and Conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Sign Up
                        </button>
                        <p className="mt-3 text-white">
                          Already have an Account 
                           <a href="/Login" className="text-primary">
                             Sign In
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                    <div className="login_item md_none minHeight">
                      <br />
                      <br />
                      <br />
                      <img
                        src="assets/LoginAssets/images/register.png"
                        className="img-fluid w-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
