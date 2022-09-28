import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // // console.log(window.scrollY);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   console.log(window);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="App">
      <Container fluid className="bg">
        <div className="spacer"></div>
        <Container className="all-content">
          <Router>
            <Header />
            <Routing />
          </Router>
        </Container>
      </Container>
    </div>
  );
}

export default App;
