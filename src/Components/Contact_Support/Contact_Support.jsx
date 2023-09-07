import React from "react";

function Contact_Support() {
  return (
    <div>
      <div className="content-page">
        <div className="content">
          <div className="container">
            <div className="row padding_none">
              <div className="col-sm-12 padding_none">
                <div className="card CBHhdr">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Help Desk</h4>
                    </div>
                  </div>
                  <div className="card-header d-flex justify-content-between">
                    <form
                      action="/User/HelpDeskPost"
                      method="post"
                      className="ng-pristine ng-valid"
                    >
                      {" "}
                      <div className="row mt-12">
                        <div className="col-md-12 m-3">
                          <label>
                            <strong>Subject</strong>
                          </label>
                          <input
                            name="querTypeText"
                            className="form-control input-xlarge form-half "
                            type="text"
                            required=""
                          />
                        </div>
                        <div className="col-md-12 m-3">
                          <label>
                            <strong>Your Query</strong>
                          </label>
                          <textarea
                            name="query"
                            className="form-control input-xlarge form-full "
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-md-12 m-3">
                          <input
                            type="submit"
                            className="btn btn-success"
                            defaultValue="submit Query"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable"
                        className="table  table-striped table-bordered"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              style={{ width: 255 }}
                              colSpan={1}
                              rowSpan={1}
                              tabIndex={0}
                              className=""
                            >
                              #
                            </th>
                            <th
                              style={{ width: 180 }}
                              colSpan={1}
                              rowSpan={1}
                              tabIndex={0}
                            >
                              Status
                            </th>
                            <th
                              style={{ width: 526 }}
                              colSpan={1}
                              rowSpan={1}
                              tabIndex={0}
                            >
                              Date
                            </th>
                            <th style={{ width: 526 }} rowSpan={1} tabIndex={0}>
                              Query Subject{" "}
                            </th>
                            <th style={{ width: 526 }} rowSpan={1} tabIndex={0}>
                              Query{" "}
                            </th>
                            <th style={{ width: 526 }} rowSpan={1} tabIndex={0}>
                              Admin Reply
                            </th>
                            <th style={{ width: 526 }} rowSpan={1} tabIndex={0}>
                              Ticket Id
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={8} align="center">
                              {" "}
                              No Record found !
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
  );
}

export default Contact_Support;
