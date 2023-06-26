// import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import homeVideo from "../img/Bbdostudiosreel081022bbdostudiosoptimized.mp4";
import React from "react";
import HomeMobileVid from "../img/Home.webp";
import HomeTabVid from "../img/HomePage_Header_Tablet.webp";

function Home() {
  // var w = window.innerWidth;
  const size = useWindowSize();
  if (size.width) {
    if (size.width <= 991) {
      // mobile
      console.log("this is mobile", size.width);
      document.getElementById("video").removeAttribute("autoplay");
    } else {
      console.log("this is desktop", size.width);

      document.getElementById("video").play();
    }
  }

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  // useEffect(() => {
  //   if (size.width <= 991) {
  //     // mobile
  //     document.getElementById("video").removeAttribute("autoplay");
  //   } else {
  //     // console.log(document.getElementById("video").setAttribute("autoplay"));
  //     document.getElementById("video").setAttribute("autoplay", true);
  //   }
  // }, []); // Empty array ensures that effect is only run on mount

  // homeVideo.play;
  return (
    <>
      <video
        // preload="true"
        loop
        muted
        // autoPlay
        playsInline
        controls
        id="video"
        className="desktop"
      >
        <source src={homeVideo} type="video/mp4" className="desktop" />
      </video>
      {/* <Container fluid className="mobile home-vid"> */}

      <img
        src={HomeMobileVid}
        id="mobile-video"
        className="mobile"
        alt="Video showcasing different BBDO projects"
      />
      <img
        src={HomeTabVid}
        id="tablet-video"
        className="tablet"
        alt="Video showcasing different BBDO projects"
      />

      {/* </Container> */}
    </>
  );
}

export default Home;
