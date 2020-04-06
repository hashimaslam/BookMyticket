import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../components/App";

const Samp = () => {
  const itmes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const itmes2 = ["10", "11", "12", "13", "14", "15", "16", "18"];
  const [seats, setSeats] = useState([]);
  const [booked, setBooked] = useState("");
  const [bookedSeats, setBookedSeats] = useState([]);
  const maincontext = useContext(MainContext);
  const [count, setCount] = useState(0);
  let tickets = maincontext.state.tickets;
  // let bookedSeats = [];
  useEffect(() => {
    fetch("http://bookmyticket-app-movies.herokuapp.com/api/seatmap")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSeats(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleSeats = (row, seat, price) => {
    let position;
    console.log(row, seat, price);
    if (bookedSeats.length == 0) {
      setBookedSeats(prev => [...prev, row + seat]);
      setCount(prev => prev + 1);
    } else {
      bookedSeats.map((item, index) => {
        if (item == row + seat) {
          position = index;
          console.log(row + seat);
        }
      });
      console.log(position);
      if (position !== undefined) {
        let newSeats = bookedSeats.filter((item, index) => {
          return bookedSeats.indexOf(item) !== position;
        });
        setBookedSeats(newSeats);
        setCount(prev => prev - 1);
        if (count != tickets) {
          maincontext.dispatcher({
            type: "Set ShowTicketsbtn",
            payload: false
          });
        }
        console.log(`entered into ${position}`);
      } else {
        if (count == tickets) {
          maincontext.dispatcher({
            type: "Set ShowTicketsbtn",
            payload: true
          });
        } else {
          setCount(prev => prev + 1);
          setBookedSeats(prev => [...prev, row + seat]);
        }
      }
    }
    console.log(bookedSeats);
  };
  // const setClass = (item, row) => {
  //   let classname = "seat-A available";
  //   bookedSeats.map(seat => {
  //     if (
  //       Object.values(seat).join() == item &&
  //       Object.keys(seat).join() == row
  //     ) {
  //       classname = "seat-A blocked";
  //     }
  //   });
  //   console.log("entered into setclass");
  //   return classname;
  // };
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
                  {seats.slice(0, 9).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={() => handleSeats("A", item.seat_no, 110.0)}
                      >
                        {bookedSeats.includes(item.row + item.seat_no) ? (
                          <p className="seat-A blocked">{item.seat_no}</p>
                        ) : (
                          <p
                            className={
                              item.booked ? "seat-A booked" : "seat-A available"
                            }
                          >
                            {item.seat_no}
                          </p>
                        )}
                      </div>
                    );
                  })}
                  {/* <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div> */}
                  {seats.slice(9, 18).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={index.id}
                        onClick={() => handleSeats("A", item.seat_no, 110.0)}
                      >
                        <p
                          className={
                            item.booked ? "seat-A booked" : "seat-A available"
                          }
                        >
                          {item.seat_no}
                        </p>
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
                  {seats.slice(18, 26).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p
                          className={
                            item.booked ? "seat-A booked" : "seat-A available"
                          }
                        >
                          {item.seat_no}
                        </p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(26, 34).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p
                          className={
                            item.booked ? "seat-A booked" : "seat-A available"
                          }
                        >
                          {item.seat_no}
                        </p>
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
                  {seats.slice(34, 42).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p
                          className={
                            item.booked ? "seat-A booked" : "seat-A available"
                          }
                        >
                          {item.seat_no}
                        </p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(42, 50).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p className="seat-A available">{item.seat_no}</p>
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
                    SILVER OFFLINE-Rs. 180.00
                  </div>
                </td>
              </tr>
              {/* row D Starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">D</div>
                  {seats.slice(50, 58).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p className="seat-A available">{item.seat_no}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(58, 66).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p className="seat-A available">{item.seat_no}</p>
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
                  {seats.slice(66, 74).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p className="seat-A available">{item.seat_no}</p>
                      </div>
                    );
                  })}
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(74, 82).map((item, index) => {
                    return (
                      <div className="seat-row-A mr-1" key={item.id}>
                        <p className="seat-A available">{item.seat_no}</p>
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
