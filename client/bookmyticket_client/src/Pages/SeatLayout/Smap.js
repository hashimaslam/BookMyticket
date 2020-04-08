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
    fetch("http://localhost:5000/api/seatmap")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setSeats(
          data.data.sort(function(a, b) {
            return a.id - b.id;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    maincontext.dispatcher({ type: "Book Tickets", payload: bookedSeats });
  }, [bookedSeats]);
  useEffect(() => {
    if (count > tickets) {
      //dispatch
      maincontext.dispatcher({
        type: "Set ShowTicketsbtn",
        payload: true
      });
      let newSeats = bookedSeats.filter((item, index) => {
        return item != bookedSeats[bookedSeats.length - 1];
      });
      setBookedSeats(newSeats);
      setCount(prev => prev - 1);
      alert("pleasae deselect to select new seats");
    }
    if (count == tickets) {
      //dispatch
      maincontext.dispatcher({
        type: "Set ShowTicketsbtn",
        payload: true
      });

      //increment booked tickets array
    }
    if (count < tickets) {
      //disptach with false
      maincontext.dispatcher({
        type: "Set ShowTicketsbtn",
        payload: false
      });
      //increment booked tickets array
    }
  }, [count]);
  const handleSeats = (row, seat, price) => {
    let position;
    console.log(row, seat, price);
    if (bookedSeats.length == 0) {
      setBookedSeats(prev => [
        ...prev,
        { row: row, seat_no: seat, booked: true }
      ]);
      setCount(prev => prev + 1);
      console.log(tickets, "tickets");
    } else {
      bookedSeats.map((item, index) => {
        if (item.row == row && item.seat_no == seat) {
          position = index;
        }
      });
      console.log(position);
      if (position !== undefined) {
        let newSeats = bookedSeats.filter((item, index) => {
          return bookedSeats.indexOf(item) !== position;
        });
        setBookedSeats(newSeats);
        setCount(prev => prev - 1);

        console.log(`entered into ${position}`);
      } else {
        setCount(prev => prev + 1);
        setBookedSeats(prev => [
          ...prev,
          { row: row, seat_no: seat, booked: true }
        ]);
        console.log(tickets, "tickets");
      }
    }
    console.log(bookedSeats);
  };

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
                        onClick={
                          !item.booked
                            ? () => handleSeats("A", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                        onClick={
                          item.booked
                            ? () => handleSeats("A", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* A row ends */}

              {/* B row starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">B</div>
                  {seats.slice(18, 26).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={index.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("B", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(26, 34).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("B", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* B row ends  */}
              {/* C row Starts */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">C</div>
                  {seats.slice(34, 42).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("C", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(42, 50).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("C", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("D", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(58, 66).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("D", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* row D Ends here */}
              {/* Row E starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">E</div>
                  {seats.slice(66, 74).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("E", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(74, 82).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("E", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* row E ends here */}
              {/* Row F starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">F</div>
                  {seats.slice(82, 90).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("F", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(90, 98).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("F", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* row F ends here */}
              {/* row G starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">G</div>
                  {seats.slice(98, 106).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("G", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(106, 114).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("G", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  {seats.slice(114, 122).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("H", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(122, 130).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("H", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* Row H ends here */}
              {/* Row I Starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">I</div>
                  {seats.slice(130, 138).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("I", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(138, 146).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("I", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* Row I ends here */}
              {/* Row J Starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">J</div>
                  {seats.slice(146, 154).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("J", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(154, 162).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("J", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                </td>
              </tr>
              {/* Row J ends here */}
              {/* Row K starts here */}
              <tr>
                <td>
                  <div className="smap-row-name mr-sm-3 mt-2">K</div>
                  {seats.slice(162, 170).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("K", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>
                  <div className="seat-row-A mr-1">&nbsp;</div>

                  {seats.slice(170, 178).map((item, index) => {
                    return (
                      <div
                        className="seat-row-A mr-1"
                        key={item.id}
                        onClick={
                          !item.booked
                            ? () => handleSeats("K", item.seat_no, 110.0)
                            : null
                        }
                      >
                        {bookedSeats.some(data => {
                          return (
                            data.row == item.row && data.seat_no == item.seat_no
                          );
                        }) ? (
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
