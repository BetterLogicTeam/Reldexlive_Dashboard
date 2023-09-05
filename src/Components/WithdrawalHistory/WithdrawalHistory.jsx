import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function WithdrawalHistory() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.No.", accessor: "sr" },
          { Header: "User ID", accessor: "userid" },
            { Header: "User Name", accessor: "userid2" },
          {Header:'				Request Amount(BUSD)',accessor:'statuss'},
          {Header:'			Admin Charge',accessor:'Date'},
          { Header: "		Withdrawal Amount(BUSD)", accessor: "Rewardd" },
    
          { Header: "					Payment Type", accessor: "Rewardddd" },
          { Header: "					Request Date", accessor: "Rewdd" },
          { Header: "				Status", accessor: "Rewsdd" },
          { Header: "					View txn", accessor: "Rewsddd" },
          { Header: "				Paid Date", accessor: "Rewskjhddd" },
        ],
        rows: [
        //        {
        //   sr: "1",
        //   userid: "	RD868854",
        //   userid2: "Brijesh",
        //   statuss: "50.0000",
        //   Date: "		0.0000",
        //   Rewardd:"		50.0000",
        // //   Rewardddd:"	1",
        // //   Rewdd:"11/08/2023, 01:07:52 PM",
        // //   Rewsdd:"100.00 BUSD",
        // //   Rewsddd:"12/08/2023, 03:30:45 PM"
    
        // },
        //        {
        //   sr: "2",
        //   userid: "RD831069",
        //   userid2: "sumit",
        //   statuss: "50.0000",
        //   Date: "	0.0000",
        //   Rewardd:"	50.0000",
        // //   Rewardddd:"	2",
        // //   Rewdd:"11/08/2023, 01:07:52 PM",
        // //   Rewsdd:"100.00 BUSD",
        // //   Rewsddd:"12/08/2023, 03:30:45 PM"
    
        // },
          
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
                <h4 className="card-title">Withdrawal History</h4>
              </div>
            </div>
            <Table  data={reward_income.rows}
                    columns={reward_income.cols} />

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </div>
  )
}
