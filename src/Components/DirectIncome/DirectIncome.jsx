import React, { useState } from "react";
import Table from "../../Helper/Table";

export default function DirectIncome() {
  var [reward_income, set_reward_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "from Id", accessor: "userid" },
      { Header: "	User Name", accessor: "userid2" },
      { Header: "				Level", accessor: "statuss" },
      { Header: "		Income", accessor: "Date" },
      { Header: "		Package", accessor: "Rewardd" },

      { Header: "				Remark", accessor: "Rewardddd" },
      { Header: "				Date & Time", accessor: "Rewdd" },
      //   { Header: "			Remark", accessor: "Rewsdd" },
      //   { Header: "				Type", accessor: "Rewsddd" },
      //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
    ],
    rows: [
        {
          sr: "1",
          userid: "RD868854",
          userid2: "R",
          statuss: "1",
          Date: "2.5000 BUSD",
          Rewardd:"50.0000 BUSD",
          Rewardddd:"Direct Income Activate",
          Rewdd:"21-08-2023"

        },
      //   {
      //     sr: "2",
      //     srdd: "RD332211",
      //     income: "15.0000 ",
      //     statuss: "",
      //     Date: "21/08/2023, 04:01 PM",
      //   },
    ],
  });
  return (
    <div className="margin_page_top">
      <div className="content-page">
        <div className="content">
          <div className="container">
            <div className="row padding_none">
              <div className="col-sm-12 padding_none">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Direct Income</h4>
                    </div>
                  </div>
                  <Table
                    data={reward_income.rows}
                    columns={reward_income.cols}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
