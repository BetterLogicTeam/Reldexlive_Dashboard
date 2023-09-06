import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  return (
    <div>
      <div className="wrapper regMain">
        <section className="login-content">
          <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="login_item">
                      <h2>Sign in your account</h2>
                      <p className="text-white">
                        To Keep connected with us please login with your
                        personal info.
                      </p>
                      <div>
                      
                          <div className="row">
                            <div id="error-msg" />
                            <div className="col-lg-12">
                              <div className="floating-label form-group">
                                <input
                                  name="__RequestVerificationToken"
                                  type="hidden"
                                  defaultValue="UAA2SQDfv5WmbxgIwYytgcdCPBFwKutkmPoMdkh636PXoAaLEsr8eNFqFhp4aTqFltK8aUL_0oE6qD55J2FS6JEQKcIdUwnzqMIOVYUNihA1"
                                />
                                <input
                                  className="floating-input form-control"
                                  data-val="true"
                                  data-val-length="The field uid must be a string with a minimum length of 4 and a maximum length of 100."
                                  data-val-length-max={100}
                                  data-val-length-min={4}
                                  data-val-required="User Id is required"
                                  id="uid"
                                  maxLength={8}
                                  name="uid"
                                  placeholder="User Id"
                                  style={{
                                    width: "100%",
                                    border: "solid 1px #b25ddc",
                                    borderRadius: 5,
                                    padding: 10,
                                    color: "black",
                                  }}
                                  type="text"
                                  defaultValue=""
                                />
                                <span
                                  className="field-validation-valid"
                                  data-valmsg-for="uid"
                                  data-valmsg-replace="true"
                                  style={{ color: "red" }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="floating-label form-group">
                                <input
                                  className="floating-input  form-control"
                                  data-val="true"
                                  data-val-required="The password field is required."
                                  id="password"
                                  maxLength={40}
                                  name="password"
                                  placeholder="Enter Password"
                                  style={{
                                    width: "100%",
                                    border: "solid 1px #b25ddc",
                                    borderRadius: 5,
                                    padding: 10,
                                    color: "black",
                                  }}
                                  type="password"
                                />
                                <span
                                  className="field-validation-valid"
                                  data-valmsg-for="password"
                                  data-valmsg-replace="true"
                                  style={{ color: "red" }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6 rtl-left">
                              <a
                                href="ForgotPassword.html"
                                className="text-primary float-right"
                              >
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <a href="/dashboard">
                            <button className="btn btn-primary">Sign In</button>
                          </a>
                       
                      </div>
                      <div className="loader" />
                      <p className="mt-3 text-white">
                        Create an Account
                        <a href="Register.html" className="text-primary">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                    <div className="login_item md_none">
                      <br />
                      <img
                        src="assets/LoginAssets/images/login.png"
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

export default Login;
