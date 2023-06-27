import { useState, useEffect } from "react";
import homeVideo from "../img/Bbdostudiosreel081022bbdostudiosoptimized.mp4";
import React from "react";
import HomeMobileVid from "../img/Home.webp";
import HomeTabVid from "../img/HomePage_Header_Tablet.webp";

function Home() {
  // var w = window.innerWidth;
  const size = useWindowSize();
  if (size.width) {
    if (size.width <= 991)
      document.getElementById("video").removeAttribute("autoplay");
    else document.getElementById("video").play();
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

  return (
    <>
      <video loop muted playsInline controls id="video" className="desktop">
        <source src={homeVideo} type="video/mp4" className="desktop" />
      </video>
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
    </>
  );
}

export default Home;
