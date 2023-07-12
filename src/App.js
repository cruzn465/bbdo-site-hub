// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// testing if I can pull a change?
// testing 2nd change
import React, { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import Routing from "./components/Routing";
import Header from "./components/Header";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import { Container } from "react-bootstrap";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);
import gsap from "gsap";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navBg = useRef();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 50) {
      // do the gsap animation?
      // console.log("position is less than 50");
      gsap.to(navBg.current, 1, {
        backgroundColor: "rgba(0, 0, 0, .8)",
      });
    } else {
      // do the gsap reversed animation
      // console.log("FALSE");
      gsap.to(navBg.current, 1, {
        backgroundColor: "rgba(0, 0, 0, .3)",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Router basename="/">
        {/* <Container fluid className="bg mobile-no-pad mobile-no-mar"></Container> */}
        <BackgroundSwitcher />
        <div className="desktop spacer"></div>

        <Container className="all-content max_width_content_big_screen">
          <Header />
          <Routing />
          <div ref={navBg} className="nav-bg"></div>
        </Container>
      </Router>
    </div>
  );
}

export default App;
