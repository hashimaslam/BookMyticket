import React from "react";

const Samp = () => {
  const itmes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const itmes2 = ["10", "11", "12", "13", "14", "15", "16", "18"];
  return (
    <>
      <div className="layout-block">
        <div className="seat-layout">
          <table
            cellSpacing="0"
            cellPadding="0"
            width="100%"
            className="mb-sm-5"
          >
            <tbody>
              <tr>
                <td colSpan="2">
                  <div className="smap-price-1">
                    EXECUTIVE OFFLINE-Rs. 110.00
                  </div>
                </td>
              </tr>
              {/* A row Starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3">A</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  {/* <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div> */}
                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* A row ends */}

              {/* B row starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">B</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* B row ends  */}
              {/* C row Starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">C</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* C row ends  */}
              {/* Price Range 2 starts */}
              <tr>
                <td colSpan="2">
                  <div className="smap-price-1 mt-sm-3">
                    SILVER OFFLINE-Rs. 110.00
                  </div>
                </td>
              </tr>
              {/* row D Starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">D</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* row D Ends here */}
              {/* Row E starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">E</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* row E ends here */}
              {/* Row F starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">F</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* row F ends here */}
              {/* row G starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">G</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* Row G ends here */}
              {/* Price Range 3 starts here */}
              <tr>
                <td colSpan="2">
                  <div className="smap-price-1 mt-sm-3">
                    NORMAL OFFLINE-Rs. 100.00
                  </div>
                </td>
              </tr>
              {/* Price Range 3 ends here */}
              {/* row H starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">H</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* Row H ends here */}
              {/* Row I Starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">I</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* Row I ends here */}
              {/* Row J Starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">J</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* Row J ends here */}
              {/* Row K starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">K</div>
                  {itmes.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {itmes2.map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={index}>
                        <p className="seat-A available">{item}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {/* Row K ends here */}
            </tbody>
          </table>
          <div className="screen-side">
            <div className="screen"></div>
            <p className="text-muted ">screen this way</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Samp;
