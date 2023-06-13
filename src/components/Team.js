import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Team_super from "../img/team_super.png";
import Team_copy from "../img/team_copy.png";
import Team_copy_m from "../img/team_copy_m.png";
import TeamMobile from "../img/TheTeam.webp";

// import Team_bg_img from '../img/team_bg_img.jpg'
// import Team_bg_grey from '../img/background_grey.png'
// import Team_prod_subcopies from '../img/prod_titles.png'
// import Team_prod from '../img/team_prod.png'
// import Team_digital_subcopies from '../img/digital_titles.png'
// import Team_digital from '../img/team_digital.png'
// import Team_post_subcopies from '../img/post_titles.png'
// import Team_post from '../img/team_post.png'

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

  function handleProdToggleClicked() {
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
      gsap.to(greyRef1.current, 0.7, { height: "80vh" });
      gsap.to(greyRef2.current, 0.7, { height: "0vh" });
      gsap.to(greyRef3.current, 0.7, { height: "0vh" });
    } else {
      gsap.to(prodRef.current, 0.7, { height: "50px" });
      gsap.to(greyRef1.current, 0.7, { height: "0vh" });
    }
  }

  function handlePostToggleClicked() {
    setpostToggleClicked(!postToggleClicked);
    setprodToggleClicked(false);
    setdigToggleClicked(false);
    // console.log("prod: ", prodToggleClicked,"post: ", postToggleClicked,"dig: ", digToggleClicked,)
    if (!postToggleClicked) {
      gsap.to(postRef.current, 0.7, { height: "300px" });
      gsap.to(prodRef.current, 0.7, { height: "50px" });
      gsap.to(digRef.current, 0.7, { height: "50px" });

      gsap.to(greyRef1.current, 0.7, { height: "0vh" });
      gsap.to(greyRef2.current, 0.7, { height: "80vh" });
      gsap.to(greyRef3.current, 0.7, { height: "0vh" });
    } else {
      gsap.to(postRef.current, 0.7, { height: "50px" });
      gsap.to(greyRef2.current, 0.7, { height: "0vh" });
    }
  }

  function handleDigToggleClicked() {
    setdigToggleClicked(!digToggleClicked);
    setprodToggleClicked(false);
    setpostToggleClicked(false);

    if (!digToggleClicked) {
      gsap.to(digRef.current, 0.7, { height: "300px" });
      gsap.to(postRef.current, 0.7, { height: "50px" });
      gsap.to(prodRef.current, 0.7, { height: "50px" });

      gsap.to(greyRef1.current, 0.7, { height: "0vh" });
      gsap.to(greyRef2.current, 0.7, { height: "0vh" });
      gsap.to(greyRef3.current, 0.7, { height: "80vh" });
    } else {
      gsap.to(digRef.current, 0.7, { height: "50px" });
      gsap.to(greyRef3.current, 0.7, { height: "0vh" });
    }
  }
  // // store a reference to the box div
  // const boxRef = useRef();

  // useEffect(() => {
  //   // toggle
  //   console.log("toggling reverse to", prodToggleClicked);
  //    gsap.to(prodRef.current, 2,{height: "100px" });
  //   // tl.current.prodToggleClicked(prodToggleClicked);
  // }, [prodToggleClicked]);

  return (
    <>
      <div className="mobile spacer"></div>
      <Image
        className="header"
        id="team-header"
        src={Team_super}
        alt="Who We Are"
      ></Image>
      <hr />
      {/* <h2 id="team-copy-not-pic">
          WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS, <br/>
          DELIVERING BEST-IN-CLASS CONTENT FOR GLOBAL AND LOCAL ALIKE.<br/>
          WITH QUALITY AND EFFICIENCY AT THE FOREFRONT OF EVERYTHING WE DO, WE'RE THE PEOPLE WHO ARE DRIVEN BY INNOVATION AND POWERED BY <b>THE WORK</b>
        </h2> */}
      <img
        className="copy desktop"
        src={Team_copy}
        alt="WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS"
      />
      <img
        className="copy mobile"
        src={Team_copy_m}
        alt="WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS"
      />
      <hr />
      <Container id="outer-container" className="desktop">
        <Container id="office_bg" className="hidden-on-mobile"></Container>
        <Container id="grey-bg" className="abs-cont hidden-on-mobile">
          <Row>
            <Col ref={greyRef1} id="grey-1" className="grey"></Col>
            <Col ref={greyRef2} id="grey-2" className="grey" xs={4}></Col>
            <Col ref={greyRef3} id="grey-3" className="grey"></Col>
          </Row>
        </Container>
        <Container id="text" className="abs-cont hidden-on-mobile">
          <Row>
            <Col className="grey">
              <span
                ref={prodRef}
                className="team-title-center work-sans-font"
                onClick={() => handleProdToggleClicked()}
              >
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
            <Col className="grey" xs={4}>
              <span
                ref={postRef}
                className="team-title-center work-sans-font"
                onClick={() => handlePostToggleClicked()}
              >
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
            <Col className="grey">
              <span
                ref={digRef}
                className="team-title-center work-sans-font"
                onClick={() => handleDigToggleClicked()}
              >
                <div
                  onClick={() => setdigToggleClicked(!digToggleClicked)}
                  className="font-titles"
                >
                  DIGITAL
                </div>
                <div>Augmented Reality</div>
                <div>Banner Design</div>
                <div>Community Management</div>
                <div>Digital Development</div>
                <div>Dynamic Creation and Optimization</div>
                <div>Platform-Native Content Creation</div>
                <div>Tech & Prototyping</div>
                <div>Web 3.0</div>
                <div>Website Design</div>
                <div>Artificial Intelligence</div>
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
    </>
  );
}

export default Team;
