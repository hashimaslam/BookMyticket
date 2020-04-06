import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import tickets from "../../assets/images/tickets.png";
import { MainContext } from "../../components/App";
function MyVerticallyCenteredModal(props) {
  const history = useHistory();
  const maincontext = useContext(MainContext);
  const ticket = [1, 2, 3, 4, 5, 6];
  const handleTickets = item => {
    let id = props.id;
    maincontext.dispatcher({ type: "Set Ticket", payload: item });
    return history.push(`/theatres/${id}`);
  };
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="text-center mb-3">Pick the number of tickets</h4>
        <img
          src={tickets}
          alt="tickets"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
        <div className="tickets-count-container mt-3">
          {ticket.map((item, index) => {
            return (
              <div
                className="tickets-count"
                key={index}
                onClick={() => handleTickets(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
}

function TicketsModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className="ticket-button" onClick={() => setModalShow(true)}>
        Book Tickets
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.id}
      />
    </>
  );
}

export default TicketsModal;
