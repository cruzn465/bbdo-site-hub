import React from "react";
import { useEffect, useState, useRef } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/BBDOStudios_logo.webp";
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
  // let bgToggle = sfalse;
  const headerBg = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expanded, setExpanded] = useState(false);

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
      // console.log("position is less than 50");
      gsap.to(headerBg.current, 1, {
        backgroundColor: "rgba(0, 0, 0, .8)",
      });
    } else {
      // do the gsap reversed animation
      // console.log("FALSE");
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
    // <Router>
    <Navbar
      ref={headerBg}
      expand="lg"
      variant="dark"
      fixed="top"
      expanded={expanded}
    >
      <Container id="nav-container">
        <Navbar.Brand as={Link} to={"/"}>
          <img id="logo" src={Logo} alt="BBDO logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Nav.Link
          className="mobile last-dropdown-item"
          onClick={() =>
            (window.location = "mailto:studioteam@bbdostudios.com")
          }
        >
          <img id="talk-to-us-button" src={TalkButton} alt="The Talk button" />
        </Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end me-auto">
            <Nav.Link
              as={Link}
              to={"/the-work"}
              onClick={() => setExpanded(false)}
            >
              <img
                className="header-links"
                id="the-work-link"
                src={workLink}
                alt="The Work link"
              />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/the-team"}
              onClick={() => setExpanded(false)}
            >
              <img
                className="header-links"
                id="the-team-link"
                src={teamLink}
                alt="The Team link"
              />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/the-collective"}
              onClick={() => setExpanded(false)}
              className="last-dropdown-item"
            >
              <img
                className="header-links"
                id="the-collective-link"
                src={collectiveLink}
                alt="The Collective link"
              />
            </Nav.Link>
            <Nav.Link
              className="desktop last-dropdown-item"
              onClick={() =>
                (window.location = "mailto:studioteam@bbdostudios.com")
              }
            >
              <img
                id="talk-to-us-button"
                src={TalkButton}
                alt="The Talk button"
              />

              {/* <div className="header-links cap work-sans-font" id="red-box">
                talk to us
              </div> */}
            </Nav.Link>
            {/* </a> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
}

export default Header;
