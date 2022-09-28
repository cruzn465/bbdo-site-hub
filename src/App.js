import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
// import { useLocation } from "react-router-dom";

function App() {
  // have the state of the location of the app here and pass it down to header
  // in header: have the images swap out based on the props, cL it 1st
  const [location, setLocation] = useState("");
  console.log(location);

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
