import React, { useState, useContext } from "react";
import { MainContext } from "../App";
// import ModalVideo from "react-modal-video";
import Modal from "react-bootstrap/Modal";
const VideoModal = props => {
  const maincontext = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(maincontext.state.modalVideo);
  return (
    <div>
      {/* <ModalVideo
        channel="youtube"
        isOpen={maincontext.state.modalVideo}
        videoId={maincontext.state.videoUrl}
        onClose={() =>
          maincontext.dispatcher({
            type: "Open Video",
            payload: {
              url: "L61p2uyiMSo",
              modal: !maincontext.state.modalVideo
            }
          })
        }
      /> */}
      <div
        className="play-button"
        onClick={() => {
          maincontext.dispatcher({
            type: "Open Video",
            payload: {
              url: props.video.key,
              modal: !maincontext.state.modalVideo
            }
          });
          console.log(maincontext.state);
        }}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 426.667 426.667"
          style={{
            enableBackground: "new 0 0 426.667 426.667"
          }}
          space="preserve"
        >
          <g>
            <g>
              <g>
                <polygon points="170.667,309.333 298.667,213.333 170.667,117.333 			" />
                <path
                  d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
S384,119.253,384,213.333S307.413,384,213.333,384z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <Modal
        centered
        show={maincontext.state.modalVideo}
        onHide={() =>
          maincontext.dispatcher({
            type: "Open Video",
            payload: {
              url: "L61p2uyiMSo",
              modal: !maincontext.state.modalVideo
            }
          })
        }
      >
        <Modal.Body className="p-0">
          <iframe
            className="video-frame-desktop"
            src={`https://www.youtube.com/embed/${maincontext.state.videoUrl}`}
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoModal;
