import React from "react";

const Market = () => {
  return (
    <div>
      <section id="Market">
        <div className="container">
          <h2>Market</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="bg_b">
                  <th>Name</th>
                  <th>MKT CAP</th>
                  <th>FD MKT CAP</th>
                  <th>PRICE</th>
                  <th>AVAIL COINS</th>
                  <th>TOTAL COINS</th>
                  <th>TRADED VOL</th>
                  <th>CHG %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg_b">
                  <td>1</td>
                  <td>
                    <img src="assets/images/3305874.png" alt="" width="40px" />
                    <span className="text-warning"> Bitcoin</span>
                  </td>
                  <td>BTC</td>
                  <td>$134.655,333</td>
                  <td className="text-warning">$768.655</td>
                  <td className="text-warning">$122.998</td>
                  <td className="text-warning">$5.443.233,600</td>
                  <td className="text-danger">
                    %8.14 <i className="fa fa-arrow-down" />
                  </td>
                </tr>
                <tr className="bg_b">
                  <td>1</td>
                  <td>
                    <img src="assets/images/3305874.png" alt="" width="40px" />
                    <span className="text-warning"> Bitcoin</span>
                  </td>
                  <td>BTC</td>
                  <td>$134.655,333</td>
                  <td className="text-warning">$768.655</td>
                  <td className="text-warning">$122.998</td>
                  <td className="text-warning">$5.443.233,600</td>
                  <td className="text-danger">
                    %8.14 <i className="fa fa-arrow-down" />
                  </td>
                </tr>
                <tr className="bg_b">
                  <td>1</td>
                  <td>
                    <img src="assets/images/3305874.png" alt="" width="40px" />
                    <span className="text-warning"> Bitcoin</span>
                  </td>
                  <td>BTC</td>
                  <td>$134.655,333</td>
                  <td className="text-warning">$768.655</td>
                  <td className="text-warning">$122.998</td>
                  <td className="text-warning">$5.443.233,600</td>
                  <td className="text-danger">
                    %8.14 <i className="fa fa-arrow-down" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="_seg____header__">
                WHY CHOOSE <span className="l_text2">US? </span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="_seg____ b_none_">
                <center>
                  <h1
                    className="_seg____htxt_"
                    style={{ textAlign: "center", color: "#F58634" }}
                  >
                    WE SAVE YOUR TIME
                  </h1>
                  <div className="text-white">
                    You don’t need to spend hours in front of the charts and
                    news channel everyday. We do that for you while you can
                    spend that time elsewhere. You can have our service and make
                    money while you are on a job or spending time with your
                    family, or can follow a passion and find a new dream. In the
                    meantime, Vableta LTD will keep making you productive!!
                  </div>
                </center>
              </div>
            </div>
            <div className="col-md-6">
              <div className="_seg____ b_none_">
                <center>
                  <h1
                    className="_seg____htxt_"
                    style={{ textAlign: "center", color: "#F58634" }}
                  >
                    WE SAVE YOUR MONEY
                  </h1>
                  <div className="text-white">
                    Making money consistently in the Forex market takes years of
                    experience which includes losing a lot of money in the
                    process. We trade our expertise to save you from the losses
                    and make you money from the beginning. No need to spend time
                    studying the charts, graphs, and patterns to identify an
                    opportunity, We will do all that for you!
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;
