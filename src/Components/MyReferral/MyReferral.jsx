import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function MyReferral() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.Number", accessor: "sr" },
          { Header: "From ID", accessor: "userid" },
            { Header: "User Name", accessor: "userid2" },
          {Header:'				Registration Date',accessor:'statuss'},
          {Header:'		Package',accessor:'Date'},
          { Header: "	Activation Date", accessor: "Rewardd" },
    
          { Header: "				Status", accessor: "Rewardddd" },
        //   { Header: "				Achieved Date", accessor: "Rewdd" },
        //   { Header: "			Remark", accessor: "Rewsdd" },
        //   { Header: "				Type", accessor: "Rewsddd" },
        //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
               {
          sr: "1",
          userid: "RD868854",
          userid2: "Brijesh",
          statuss: "21/08/2023, 05:12 PM",
          Date: "	50.00 BUSD",
          Rewardd:"	21/08/2023, 05:14 PM",
          Rewardddd:"	Active",
        //   Rewdd:"22-08-2023"
    
        },
               {
          sr: "2",
          userid: "RD831069",
          userid2: "sumit",
          statuss: "21/08/2023, 05:12 PM",
          Date: "	50.00 BUSD",
          Rewardd:"	21/08/2023, 05:14 PM",
          Rewardddd:"	Active",
        //   Rewdd:"22-08-2023"
    
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
                <h4 className="card-title">My Referral</h4>
              </div>
            </div>
            <div className="card-body">
              <form className="ng-pristine ng-valid">
                <div className="row myx_5">
                  <div className="col-md-2">
                    <label>Choose Status</label>
                    <select
                      id="status"
                      onchange="getvalue()"
                      className="form-control"
                      name="status"
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
              </form>
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
