import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
// import { useLocation } from "react-router-dom";

function App() {
  // have the state of the location of the app here and pass it down to header
  // Header: have the images swap out based on the props, cL it 1st
  // this gives an error but it doesn't seem to break the app.
  // Not sure if it'll be better to consolidate everything into 1 master component since modularizing it is causing the error..?
  const [location, setLocation] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(window.scrollY);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(window);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Container fluid className="bg">
        <div className="spacer"></div>
        <Container className="all-content">
          <Router>
            <Header location={location} />
            <Routing setLocation={setLocation} />
          </Router>
        </Container>
      </Container>
    </div>
  );
}

export default App;
