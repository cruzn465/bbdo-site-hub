import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import homeVideo from "../img/Bbdostudiosreel081022bbdostudiosoptimized.mp4";
import React from "react";
import HomeMobileVid from "../img/MobileWebsite_Home.webp";

function Home() {
  // homeVideo.play
  return (
    <>
      <video loop muted autoPlay controls id="video" className="desktop">
        <source src={homeVideo} type="video/mp4" className="desktop" />
      </video>
      {/* <Container fluid className="mobile home-vid"> */}
      <img src={HomeMobileVid} id="mobile-video" className="mobile" />
      {/* </Container> */}
    </>
  );
}

export default Home;
