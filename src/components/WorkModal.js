import React from "react";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import XButton from "../img/x-button.png";
// GET AN XBUTTONCLICKED VERSION SO IT LOOKS LIKE IT'S WORKING
// import XButtonClicked from "../img/header_the_team_clicked.png";

function WorkModal(props) {
  const { post, selectedMedia } = props;
  const source_url = selectedMedia.source_url;
  console.log("selectedMedia*******", selectedMedia);
  const title = decode(post.title.rendered);

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  // console.log("MODAL media", selectedMedia);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header> */}
      <div onClick={props.onHide}>
        <img className="pointer" id="modal-button" src={XButton} alt="close modal"></img>
      </div>
      <Modal.Body>
        <h4 className="h-center modal-title cap work-sans-font">{title}</h4>
        <div className="work-col" id="modal-img" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + source_url})` }}></div>
        {/* <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p> */}
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
}

export default WorkModal;
