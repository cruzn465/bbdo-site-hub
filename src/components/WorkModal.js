import React from "react";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import XButton from "../img/x-button.png";
import Vimeo from "@vimeo/player";
import loadingGif from "../img/Arrows bar.gif";
// GET AN XBUTTONCLICKED VERSION SO IT LOOKS LIKE IT'S WORKING
// import XButtonClicked from "../img/header_the_team_clicked.png";

function WorkModal(props) {
  // const { post, selectedMedia } = props;
  const { post, selectedMedia } = props;

  const video_id_arr = selectedMedia[1].slice(18).split("/");
  // console.log(video_id_arr);

  // const source_url = selectedMedia.source_url;
  // console.log("post in workmodal*******", post);
  const title = decode(post.title.rendered);

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }
  if (true) {
    // var iframe = document.querySelector("iframe");
    // var player = new Vimeo.Player(iframe);
    // player.on("play", function () {
    //   console.log("Played the video");
    // });
    // FOR SOME REASON, IFRAME IS NULL??
    // console.log(iframe);
    // iframe.play();
    // ("video").play();
  }

  // console.log("MODAL media", selectedMedia);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div onClick={props.onHide}>
        <img
          className="pointer"
          id="modal-button"
          src={XButton}
          alt="close modal"
        ></img>
      </div>
      <Modal.Body>
        <h4 className="h-center modal-title cap work-sans-font">{title}</h4>
        {/* IF THERE IS NO VIDEO, THERE WILL BE A STOCK CAT IMG... */}
        {selectedMedia[0] === "img" && (
          <div
            className="work-col"
            id="modal-img"
            style={{ backgroundImage: `url(${selectedMedia[1]})` }}
          ></div>
        )}
        {selectedMedia[0] === "video" && (
          <iframe
            className="modal-video"
            // id="modal-img"
            src={`https://player.vimeo.com/video/${video_id_arr[0]}?h=${video_id_arr[1]}&amp;app_id=122963`}
            // width="100%"
            // height="300"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            autoplay
            title={title}
          ></iframe>
        )}

        {/* <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p> */}
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
}

export default WorkModal;
