import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function MyTeam() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.No.", accessor: "sr" },
          { Header: "From ID", accessor: "userid" },
            { Header: "User Name", accessor: "userid2" },
          {Header:'				Sponsor ID',accessor:'statuss'},
          {Header:'		Sponsor Name',accessor:'Date'},
          { Header: "	Mobile Number", accessor: "Rewardd" },
    
          { Header: "				Registration Date", accessor: "Rewardddd" },
          { Header: "					Package", accessor: "Rewdd" },
          { Header: "				Activation Date", accessor: "Rewsdd" },
        //   { Header: "				Activation Date", accessor: "Rewsddd" },
        //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
               {
          sr: "1",
          userid: "RD903979",
          userid2: "B Sandeep",
          statuss: "	RD710521",
          Date: "	Indian",
          Rewardd:"	7208526181",
          Rewardddd:"		04/09/2023, 03:47 PM",
          Rewdd:"",
          Rewsdd:"",
        //   Rewsddd:"12/08/2023, 03:30:45 PM"
    
        },
               {
          sr: "2",
          userid: "RD332212",
          userid2: "Reldex",
          statuss: "RD332211",
          Date: "	Reldex",
          Rewardd:"	9399688427",
          Rewardddd:"	2",
          Rewdd:"",
          Rewsdd:"",
        //   Rewsddd:"12/08/2023, 03:30:45 PM"
    
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
    <div>
    <div className="content-page">
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">My Team</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <label>Status</label>
                  <select
                    id="status"
                    onchange="getvalue()"
                    className="floating-input form-control select_bg"
                    data-val="true"
                    data-val-required="Position is required"
                  >
                    <option value="">Select Status</option>
                    <option value={2}>All</option>
                    <option value={1}>Active</option>
                    <option value={0}>In-Active</option>
                  </select>
                </div>
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
