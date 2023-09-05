import React from "react";

function BuyOnline_Fund() {
  return (
    <div>
      <div className="content-page">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading ui-draggable-handle">
                    <div className="panel-title-box">
                      <h3> Buy Online Fund </h3>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div id="tblwithdrawl">
                      <div id="UpdatePanel1">
                        <div>
                          <table className="table table-stripped">
                            <tbody>
                              <form
                                action="/User/onlineFundPost"
                                method="post"
                                className="ng-pristine ng-valid"
                              />
                              <tr>
                                <td>
                                  <label>Select Mode </label>
                                </td>
                                <td>
                                  <select
                                    id="type"
                                    className="form-control"
                                    name="type"
                                    required=""
                                  >
                                    <option value="">Select Mode</option>
                                    <option value="BUSD.BEP20">BUSD</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label>Enter Amount </label>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="amounts"
                                    name="amounts"
                                    required=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="fruweiu" />
                                <td>
                                  <br />
                                  <button
                                    type="submit"
                                    id="submit"
                                    className="btn btn-primary"
                                  >
                                    SUBMIT
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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

export default BuyOnline_Fund;
