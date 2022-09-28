import React from "react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/BBDOStudios_logo_gif.gif";
import TheWorkLink from "../img/header_the_work.png";
import TheWorkLinkClicked from "../img/header_the_work_clicked.png";

import TheTeamLink from "../img/header_the_team.png";
import TheTeamLinkClicked from "../img/header_the_team_clicked.png";

import TheCollectiveLink from "../img/header_the_collective.png";
import TheCollectiveLinkClicked from "../img/header_the_collective_clicked.png";

import TalkButton from "../img/header_talk_btn.png";
import { Link } from "react-router-dom";
import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);

function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  let workLink = TheWorkLink;
  let teamLink = TheTeamLink;
  let collectiveLink = TheCollectiveLink;
  let bgToggle = false;
  const headerBg = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  if (location === "the-work") {
    workLink = TheWorkLinkClicked;
  } else if (location === "the-team") {
    teamLink = TheTeamLinkClicked;
  } else if (location === "the-collective") {
    collectiveLink = TheCollectiveLinkClicked;
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 50) {
      // do the gsap animation?
      console.log("position is less than 50");
      gsap.to(headerBg.current, 1, {
        backgroundColor: "rgba(0, 0, 0, .8)",
      });
    } else {
      // do the gsap reversed animation
      console.log("FALSE");
      gsap.to(headerBg.current, 1, {
        backgroundColor: "rgba(0, 0, 0, 0)",
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
    <Navbar ref={headerBg} expand="lg" variant="dark" fixed="top">
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
