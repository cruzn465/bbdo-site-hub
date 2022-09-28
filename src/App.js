import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
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
