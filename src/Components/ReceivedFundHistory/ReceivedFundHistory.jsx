import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function ReceivedFundHistory() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.No.", accessor: "sr" },
          { Header: "To User Id", accessor: "user id" },
            { Header: "	From User Id", accessor: "user id2" },
          {Header:'				Received Amount',accessor:'statuss'},
          {Header:'		Deduct Amount',accessor:'Date'},
          { Header: "	Remark", accessor: "Rewardd" },
    
          { Header: "				UTR No", accessor: "Rewardddd" },
          { Header: "				Date", accessor: "Rewdd" },
        //   { Header: "			Remark", accessor: "Rewsdd" },
        //   { Header: "				Type", accessor: "Rewsddd" },
        //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
        //   {
        //     sr: "1",
        //     srdd: "RD332211",
        //     income: "15.0000 ",
        //     statuss: "",
        //     Date: "21/08/2023, 04:01 PM",
           
        //   },
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
    <div>

<div className="content-page">
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Fund Resived History</h4>
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
