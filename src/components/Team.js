import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamMobile from "../img/TheTeam.webp";
import TeamTab from "../img/TheTeam_Tablet.webp";

import { useRef, useState } from "react";
import gsap from "gsap";

function Team() {
  const prodRef = useRef();
  const [prodToggleClicked, setprodToggleClicked] = useState(false);
  const postRef = useRef();
  const [postToggleClicked, setpostToggleClicked] = useState(false);
  const digRef = useRef();
  const [digToggleClicked, setdigToggleClicked] = useState(false);

  const greyRef1 = useRef();
  const greyRef2 = useRef();
  const greyRef3 = useRef();

  // function handleProdToggleClicked() {
  //   setprodToggleClicked(!prodToggleClicked);
  //   setpostToggleClicked(false);
  //   setdigToggleClicked(false);

  //   // when prod is clicked, set other heights to 50
  //   // console.log("prod: ", prodToggleClicked,"post: ", postToggleClicked,"dig: ", digToggleClicked,)
  //   if (!prodToggleClicked) {
  //     gsap.to(prodRef.current, 0.7, { height: "300px" });
  //     gsap.to(postRef.current, 0.7, { height: "50px" });
  //     gsap.to(digRef.current, 0.7, { height: "50px" });

  //     // console.log(greyRef)
  //     gsap.to(greyRef1.current, 0.7, { height: "80vh" });
  //     gsap.to(greyRef2.current, 0.7, { height: "0vh" });
  //     gsap.to(greyRef3.current, 0.7, { height: "0vh" });
  //   } else {
  //     gsap.to(prodRef.current, 0.7, { height: "50px" });
  //     gsap.to(greyRef1.current, 0.7, { height: "0vh" });
  //   }
  // }
  function handleProdMouseEnter() {
    setprodToggleClicked(!prodToggleClicked);
    setpostToggleClicked(false);
    setdigToggleClicked(false);

    // when prod is clicked, set other heights to 50
    // console.log("prod: ", prodToggleClicked,"post: ", postToggleClicked,"dig: ", digToggleClicked,)
    if (!prodToggleClicked) {
      gsap.to(prodRef.current, 0.7, { height: "300px" });
      gsap.to(postRef.current, 0.7, { height: "50px" });
      gsap.to(digRef.current, 0.7, { height: "50px" });

      // console.log(greyRef)
      gsap.to(greyRef1.current, 0.7, { height: "100%" });
      gsap.to(greyRef2.current, 0.7, { height: "0vh" });
      gsap.to(greyRef3.current, 0.7, { height: "0vh" });
    } else {
      gsap.to(prodRef.current, 0.7, { height: "50px" });
      gsap.to(greyRef1.current, 0.7, { height: "0vh" });
    }
  }

  function handlePostMouseEnter() {
    setpostToggleClicked(!postToggleClicked);
    setprodToggleClicked(false);
    setdigToggleClicked(false);
    // console.log("prod: ", prodToggleClicked,"post: ", postToggleClicked,"dig: ", digToggleClicked,)
    if (!postToggleClicked) {
      gsap.to(postRef.current, 0.7, { height: "300px" });
      gsap.to(prodRef.current, 0.7, { height: "50px" });
      gsap.to(digRef.current, 0.7, { height: "50px" });

      gsap.to(greyRef1.current, 0.7, { height: "0vh" });
      gsap.to(greyRef2.current, 0.7, { height: "100%" });
      gsap.to(greyRef3.current, 0.7, { height: "0vh" });
    } else {
      gsap.to(postRef.current, 0.7, { height: "50px" });
      gsap.to(greyRef2.current, 0.7, { height: "0vh" });
    }
  }

  function handleDigMouseEnter() {
    setdigToggleClicked(!digToggleClicked);
    setprodToggleClicked(false);
    setpostToggleClicked(false);

    if (!digToggleClicked) {
      gsap.to(digRef.current, 0.7, { height: "300px" });
      gsap.to(postRef.current, 0.7, { height: "50px" });
      gsap.to(prodRef.current, 0.7, { height: "50px" });

      gsap.to(greyRef1.current, 0.7, { height: "0vh" });
      gsap.to(greyRef2.current, 0.7, { height: "0vh" });
      gsap.to(greyRef3.current, 0.7, { height: "100%" });
    } else {
      gsap.to(digRef.current, 0.7, { height: "50px" });
      gsap.to(greyRef3.current, 0.7, { height: "0vh" });
    }
  }

  function handleMouseLeave() {
    gsap.to([prodRef.current, postRef.current, digRef.current], 0.7, {
      height: "50px",
    });
    gsap.to([greyRef1.current, greyRef2.current, greyRef3.current], 0.7, {
      height: "0vh",
    });
  }

  return (
    <>
      <div className="tablet spacer"></div>
      <div className="mobile spacer"></div>
      <div className="header-text work-sans-font germain header-font">
        WHO WE ARE
        <span className="white-text"> WHO WE ARE</span>
      </div>
      <hr />

      <h2 className="container sub-header-text work-sans-font desktop">
        WE’RE A TEAM OF AWARD-WINNING&nbsp;CREATORS AND
        UNCONVENTIONAL&nbsp;MAKERS, DELIVERING&nbsp;BEST-IN-CLASS CONTENT FOR
        GLOBAL&nbsp;AND&nbsp;LOCAL ALIKE. WITH QUALITY&nbsp;AND&nbsp;EFFICIENCY
        AT THE FOREFRONT OF EVERYTHING WE DO, WE'RE&nbsp;THE&nbsp;PEOPLE WHO ARE
        DRIVEN&nbsp;BY&nbsp;INNOVATION AND POWERED&nbsp;BY&nbsp;
        <span id="the-work-text">THE WORK</span>
      </h2>
      <h2 className="container sub-header-text work-sans-font tablet">
        WE’RE A TEAM OF AWARD-WINNING CREATORS&nbsp;AND UNCONVENTIONAL MAKERS,
        DELIVERING&nbsp;BEST-IN-CLASS CONTENT FOR GLOBAL AND LOCAL ALIKE. WITH
        QUALITY AND EFFICIENCY AT THE FOREFRONT OF EVERYTHING WE DO,
        WE'RE&nbsp;THE&nbsp;PEOPLE WHO ARE DRIVEN&nbsp;BY&nbsp;INNOVATION AND
        POWERED&nbsp;BY&nbsp;
        <span id="the-work-text">THE&nbsp;WORK</span>
      </h2>
      <h2 className="container sub-header-text work-sans-font mobile">
        WE’RE A TEAM OF AWARD-WINNING CREATORS&nbsp;AND UNCONVENTIONAL MAKERS,
        DELIVERING BEST-IN-CLASS CONTENT FOR GLOBAL AND LOCAL ALIKE. WITH
        QUALITY AND EFFICIENCY AT THE FOREFRONT OF EVERYTHING WE DO, WE'RE THE
        PEOPLE WHO ARE DRIVEN BY INNOVATION AND POWERED&nbsp;BY&nbsp;
        <span id="the-work-text">THE&nbsp;WORK</span>
      </h2>

      <hr />
      <Container id="outer-container" className="desktop">
        <Container
          id="office_bg"
          className="hidden-on-mobile team_height_container"
        ></Container>
        <Container
          id="grey-bg"
          className="abs-cont hidden-on-mobile team_height_container"
        >
          <Row className="all_height">
            <Col ref={greyRef1} id="grey-1" className="grey"></Col>
            <Col ref={greyRef2} id="grey-2" className="grey" xs={4}></Col>
            <Col ref={greyRef3} id="grey-3" className="grey"></Col>
          </Row>
        </Container>
        <Container
          id="text"
          className="abs-cont hidden-on-mobile team_height_container"
        >
          <Row className="all_height">
            <Col
              className="grey"
              onMouseEnter={handleProdMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span ref={prodRef} className="team-title-center work-sans-font">
                <div
                  onClick={() => setprodToggleClicked(!prodToggleClicked)}
                  className="font-titles"
                >
                  PRODUCTION
                </div>
                <div>Cinematography</div>
                <div>Creator Partnership</div>
                <div>Directing</div>
                <div>Experiential</div>
                <div>Influencer Campaigns</div>
                <div>Live Events</div>
                <div>Photography</div>
                <div>Producing</div>
                <div>Virtual Reality</div>
                <div>Voiceover Recording</div>
              </span>
            </Col>
            <Col
              className="grey"
              xs={4}
              onMouseEnter={handlePostMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span ref={postRef} className="team-title-center work-sans-font">
                <div
                  onClick={() => setpostToggleClicked(!postToggleClicked)}
                  className="font-titles"
                >
                  POST
                </div>
                <div>Animation</div>
                <div>Audio Mixing</div>
                <div>Editorial</div>
                <div>Sound Design</div>
                <div>Visual Effects</div>
                <div className="hidden">1</div>
                <div className="hidden">1</div>
                <div className="hidden">1</div>
                <div className="hidden">1</div>
                <div className="hidden">1</div>
              </span>
            </Col>
            <Col
              className="grey"
              onMouseEnter={handleDigMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span ref={digRef} className="team-title-center work-sans-font">
                <div
                  onClick={() => setdigToggleClicked(!digToggleClicked)}
                  className="font-titles"
                >
                  INTERACTIVE
                </div>
                <div>Artificial Intelligence</div>
                <div>Augmented Reality</div>
                <div>Banner Design</div>
                <div>Community Management</div>
                <div>Digital Development</div>
                <div>Dynamic Creation and Optimization</div>
                <div>Platform-Native Content Creation</div>
                <div>Tech & Prototyping</div>
                <div>Web 3.0</div>
                <div>Website Design</div>
                <div className="hidden">1</div>
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <img
          id="mobile-outer-container"
          className="mobile copy"
          src={TeamMobile}
          alt="Office background with descriptions of BBDO studios work"
        />
      </Container>
      <Container>
        <img
          // id="mobile-outer-container"
          className="tablet copy"
          src={TeamTab}
          alt="Office background with descriptions of BBDO studios work"
        />
      </Container>
      {/* <div className="spacer"></div> */}
    </>
  );
}

export default Team;

// USE SPACE BELOW FOR GETTING CODE SNIPPET
