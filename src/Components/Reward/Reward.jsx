import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function Reward() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.No", accessor: "sr" },
          { Header: "User Id", accessor: "userid" },
            { Header: "User Name", accessor: "userid2" },
          {Header:'				Direct Bussiness',accessor:'statuss'},
          {Header:'		Rank',accessor:'Date'},
          { Header: "	Income", accessor: "Rewardd" },
    
          { Header: "				Paid Staus", accessor: "Rewardddd" },
          { Header: "				Achieved Date", accessor: "Rewdd" },
        //   { Header: "			Remark", accessor: "Rewsdd" },
        //   { Header: "				Type", accessor: "Rewsddd" },
        //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
        //        {
        //   sr: "1",
        //   userid: "RD332211",
        //   userid2: "RD868854",
        //   statuss: "Brijesh",
        //   Date: "	1",
        //   Rewardd:"	0.0375",
        //   Rewardddd:"	0.2500",
        //   Rewdd:"22-08-2023"
    
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
                <h4 className="card-title">Reward </h4>
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
