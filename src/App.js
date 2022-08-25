import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './img/logo.png'
import TheWorkLink from './img/header_the_work.png'
import TheTeamLink from './img/header_the_team.png'
import TheCollectiveLink from './img/header_the_collective.png'

import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routing from './components/Routing';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/home"}>
            <img id="logo" src={Logo} alt="BBDO logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end me-auto" >
              {/* <Nav.Link as={Link} to={"/home"}>Home</Nav.Link> */}
              <Nav.Link as={Link} to={"/the-work"}>
                <img className='header-links' id="the-work-link" src={TheWorkLink} alt="The Work link" />
              </Nav.Link>
              <Nav.Link as={Link} to={"/the-team"}>
                <img className='header-links' id="the-team-link" src={TheTeamLink} alt="The Team link" />
              </Nav.Link>
              <Nav.Link as={Link} to={"/the-collective"}>
                <img className='header-links' id="the-collective-link" src={TheCollectiveLink} alt="The Collective link" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routing/>
    </Router>
    </div>
  );
}

export default App;
