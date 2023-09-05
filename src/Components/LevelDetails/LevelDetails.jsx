import React, { useState } from 'react'
import Table from '../../Helper/Table'

export default function LevelDetails() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
          { Header: "S.No.", accessor: "sr" },
          { Header: "From ID", accessor: "userid" },
            { Header: "User Name", accessor: "userid2" },
          {Header:'				Sponsor ID',accessor:'statuss'},
          {Header:'		Sponsor Name',accessor:'Date'},
          { Header: "	Mobile Number", accessor: "Rewardd" },
    
          { Header: "				Level", accessor: "Rewardddd" },
          { Header: "					Registration Date", accessor: "Rewdd" },
          { Header: "				Package	Package", accessor: "Rewsdd" },
          { Header: "				Activation Date", accessor: "Rewsddd" },
        //   { Header: "				Date & Time", accessor: "Rewskjhddd" },
        ],
        rows: [
               {
          sr: "1",
          userid: "RD332212",
          userid2: "Reldex",
          statuss: "RD332211",
          Date: "	R",
          Rewardd:"	9399688427",
          Rewardddd:"	1",
          Rewdd:"11/08/2023, 01:07:52 PM",
          Rewsdd:"100.00 BUSD",
          Rewsddd:"12/08/2023, 03:30:45 PM"
    
        },
               {
          sr: "2",
          userid: "RD332212",
          userid2: "Reldex",
          statuss: "RD332211",
          Date: "	Reldex",
          Rewardd:"	9399688427",
          Rewardddd:"	2",
          Rewdd:"11/08/2023, 01:07:52 PM",
          Rewsdd:"100.00 BUSD",
          Rewsddd:"12/08/2023, 03:30:45 PM"
    
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
                <h4 className="card-title">Level Detail</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <label>Choose Level</label>
                  <select
                    id="level"
                    onchange="getvalue()"
                    className="form-control"
                    data-val="true"
                    data-val-required="Position is required"
                  >
                    <option value={0}>All Levels</option>
                    <option value={1}>Level 1</option>
                    <option value={2}>Level 2</option>
                    <option value={3}>Level 3</option>
                    <option value={4}>Level 4</option>
                    <option value={5}>Level 5</option>
                    <option value={6}>Level 6</option>
                    <option value={7}>Level 7</option>
                    <option value={8}>Level 8</option>
                    <option value={9}>Level 9</option>
                    <option value={10}>Level 10</option>
                    <option value={11}>Level 11</option>
                    <option value={12}>Level 12</option>
                    <option value={13}>Level 13</option>
                    <option value={14}>Level 14</option>
                    <option value={15}>Level 15</option>
                    <option value={16}>Level 16</option>
                    <option value={17}>Level 17</option>
                    <option value={18}>Level 18</option>
                    <option value={19}>Level 19</option>
                    <option value={20}>Level 20</option>
                    <option value={21}>Level 21</option>
                    <option value={22}>Level 22</option>
                    <option value={23}>Level 23</option>
                    <option value={24}>Level 24</option>
                    <option value={25}>Level 25</option>
                    <option value={26}>Level 26</option>
                    <option value={27}>Level 27</option>
                    <option value={28}>Level 28</option>
                    <option value={29}>Level 29</option>
                    <option value={30}>Level 30</option>
                    <option value={31}>Level 31</option>
                    <option value={32}>Level 32</option>
                    <option value={33}>Level 33</option>
                    <option value={34}>Level 34</option>
                    <option value={35}>Level 35</option>
                    <option value={36}>Level 36</option>
                    <option value={37}>Level 37</option>
                    <option value={38}>Level 38</option>
                    <option value={39}>Level 39</option>
                    <option value={40}>Level 40</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Status</label>
                  <select
                    id="status"
                    onchange="getvalue()"
                    className="form-control"
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
