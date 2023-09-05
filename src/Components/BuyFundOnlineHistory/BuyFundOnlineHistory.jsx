import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function BuyFundOnlineHistory() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.No.", accessor: "sr" },
          { Header: "User Id", accessor: "srdd" },
            { Header: "	Amount", accessor: "income" },
          {Header:'				Status',accessor:'statuss'},
          {Header:'	Date',accessor:'Date'},
        //   { Header: "	Name", accessor: "Rewardd" },
    
        //   { Header: "				Amount", accessor: "Rewardddd" },
        //   { Header: "			Referby", accessor: "Rewdd" },
        //   { Header: "			Remark", accessor: "Rewsdd" },
        //   { Header: "				Type", accessor: "Rewsddd" },
        //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
          {
            sr: "1",
            srdd: "RD332211",
            income: "15.0000 ",
            statuss: "",
            Date: "21/08/2023, 04:01 PM",
           
          },
          {
            sr: "2",
            srdd: "RD332211",
            income: "15.0000 ",
            statuss: "",
            Date: "21/08/2023, 04:01 PM",
           
          },
         
        ],
      });
  return (
    <div>

<div className="content-page">
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Online Fund History</h4>
              </div>
            </div>
          <Table  data={reward_income.rows}
                    columns={reward_income.cols}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
