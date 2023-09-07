// import React from 'react'
import React, { useState } from "react";
import Table from "../../Helper/Table";
export default function Activation_history() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.NO", accessor: "sr" },
          { Header: "User ID", accessor: "srdd" },
          //   { Header: "	ON AMOUNT", accessor: "income" },
          // {Header:'				Level',accessor:'date'},
          // {Header:'	Level',accessor:'Reward'},
          { Header: "	Name", accessor: "Rewardd" },
    
          { Header: "				Amount", accessor: "Rewardddd" },
          { Header: "			Referby", accessor: "Rewdd" },
          { Header: "			Remark", accessor: "Rewsdd" },
          { Header: "				Type", accessor: "Rewsddd" },
          { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
          // {
          //   sr: "1",
          //   business: "12345",
          //   income: "Null ",
          //   Reward: "$ Null",
          //   date: "12/11/2021 1:40:08 PM",
          //   Sports_Bonus: "$ Null",
          //   Net_Income: "$ Null",
          // },
          // {
          //   sr: "2",
          //   business: "12345",
          //   income: "Null ",
          //   Reward: "$ Null",
          //   date: "12/11/2021 1:40:08 PM",
          //   Sports_Bonus: "$ Null",
          //   Net_Income: "$ Null",
          // },
          // {
          //   sr: "3",
          //   business: "12345",
          //   income: "Null ",
          //   Reward: "$ Null",
          //   date: "12/11/2021 1:40:08 PM",
          //   Sports_Bonus: "$ Null",
          //   Net_Income: "$ Null",
          // },
        ],
      });
  return (
    <div className="margin_page_top">
      <div className="content-page">
        <div className="content">
          <div className="container  ">
            <div className="row padding_none">
              <div className="col-sm-12 padding_none">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Activation/Upgrade History</h4>
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
  )
}
