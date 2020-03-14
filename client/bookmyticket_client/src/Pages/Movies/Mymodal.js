import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FilterPage from "../FiltersPage/FiltersPage";
const Mymodal = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleModalClick = () => {
    setLgShow(prev => !prev);
  };
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="filters-modal-nav"
      >
        <Modal.Body>
          <FilterPage handlemodal={handleModalClick} />
        </Modal.Body>
      </Modal>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <div className="wrapper-filter-nav" onClick={() => setLgShow(true)}>
        <div className="filter-icon">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="20px"
            height="22px"
            viewBox="0 0 410.182 410.182"
            style={{ enableBackground: "new 0 0 410.182 410.182" }}
            space="preserve"
          >
            <g>
              <g>
                <path
                  d="M392.995,0H17.187c-5.632,0-9.216,6.144-5.632,11.264l137.728,193.024c6.144,8.192,9.728,18.944,9.728,29.696v168.448
			c0.512,5.632,5.12,9.216,9.728,7.168l78.336-29.696c2.56-0.512,4.096-3.584,4.096-6.144V233.984
			c0-10.752,3.584-20.992,9.728-29.696L398.627,11.264C402.211,6.144,398.627,0,392.995,0z"
                />
              </g>
            </g>
          </svg>
        </div>{" "}
      </div>
    </>
  );
};

export default Mymodal;
