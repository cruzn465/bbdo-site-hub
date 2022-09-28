import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/logo.png";
import TheWorkLink from "../img/header_the_work.png";
import TheWorkLinkClicked from "../img/header_the_work_clicked.png";

import TheTeamLink from "../img/header_the_team.png";
import TheTeamLinkClicked from "../img/header_the_team_clicked.png";

import TheCollectiveLink from "../img/header_the_collective.png";
import TheCollectiveLinkClicked from "../img/header_the_collective_clicked.png";

import TalkButton from "../img/header_talk_btn.png";
import { Link } from "react-router-dom";

function Header({ location }) {
  let workLink = TheWorkLink;
  let teamLink = TheTeamLink;
  let collectiveLink = TheCollectiveLink;

  if (location === "the-work") {
    workLink = TheWorkLinkClicked;
  } else if (location === "the-team") {
    teamLink = TheTeamLinkClicked;
  } else if (location === "the-collective") {
    collectiveLink = TheCollectiveLinkClicked;
  }

  return (
    <Navbar expand="lg" variant="dark" fixed="top">
      <Container id="nav-container">
        <Navbar.Brand as={Link} to={"/"}>
          <img id="logo" src={Logo} alt="BBDO logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end me-auto">
            <Nav.Link as={Link} to={"/the-work"}>
              <img
                className="header-links"
                id="the-work-link"
                src={workLink}
                alt="The Work link"
              />
            </Nav.Link>
            <Nav.Link as={Link} to={"/the-team"}>
              <img
                className="header-links"
                id="the-team-link"
                src={teamLink}
                alt="The Team link"
              />
            </Nav.Link>
            <Nav.Link as={Link} to={"/the-collective"}>
              <img
                className="header-links"
                id="the-collective-link"
                src={collectiveLink}
                alt="The Collective link"
              />
            </Nav.Link>
            <Nav.Link as={Link} to={"/talk-to-us"}>
              <img
                id="talk-to-us-button"
                src={TalkButton}
                alt="The Talk button"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
