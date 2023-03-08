import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid className="bg"></Container>
        <div className="spacer"></div>
        <Container className="all-content">
          <Header />
          <Routing />
        </Container>
      </div>
    </Router>
  );
}

export default App;
