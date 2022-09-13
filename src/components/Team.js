import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Team_super from '../img/team_super.png'
import Team_copy from '../img/team_copy.png'
import Team_bg_img from '../img/team_bg_img.jpg'
import Team_bg_grey from '../img/background_grey.png'
import Team_prod_subcopies from '../img/prod_titles.png'
import Team_prod from '../img/team_prod.png'
import Team_digital_subcopies from '../img/digital_titles.png'
import Team_digital from '../img/team_digital.png'
import Team_post_subcopies from '../img/post_titles.png'
import Team_post from '../img/team_post.png'

// Following the video with these imports:
import { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from 'gsap'
import gsap from 'gsap';



function Team() {
  // // toggle on and off based on user clicks
  // let prodtoggle = false
  // let digitaltoggle = false 
  // let posttoggle = false
  const prodRef = useRef();
  const [prodToggleClicked, setprodToggleClicked] = useState(false)
  const postRef = useRef();
  const [postToggleClicked, setpostToggleClicked] = useState(false)
  const digRef = useRef();
  const [digToggleClicked, setdigToggleClicked] = useState(false)

  const greyRef = useRef();


  function handleProdToggleClicked() {
    setprodToggleClicked(!prodToggleClicked)
    // console.log(prodToggleClicked)
    if (!prodToggleClicked) {
      gsap.to(prodRef.current, .7,{height: "300px" });
      gsap.to(greyRef.current, .7,{height: "0px" });
      
    }
    else gsap.to(prodRef.current, .7,{height: "50px" });
  }

  function handlePostToggleClicked() {
    setpostToggleClicked(!postToggleClicked)
    // console.log(prodToggleClicked)
    if (!postToggleClicked) gsap.to(postRef.current, .7,{height: "300px" });
    else gsap.to(postRef.current, .7,{height: "50px" });
  }

  function handleDigToggleClicked() {
    setdigToggleClicked(!digToggleClicked)
    // console.log(prodToggleClicked)
    if (!digToggleClicked) gsap.to(digRef.current, .7,{height: "300px" });
    else gsap.to(digRef.current, .7,{height: "10px" });
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
    <Container fluid className="bg">
      <div id='spacer'></div>
      <Container id="test-container">
        <Image className="header" src={Team_super} alt="Who We Are"></Image>
        <hr />
        {/* <h2 id="team-copy-not-pic">
          WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS, <br/>
          DELIVERING BEST-IN-CLASS CONTENT FOR GLOBAL AND LOCAL ALIKE.<br/>
          WITH QUALITY AND EFFICIENCY AT THE FOREFRONT OF EVERYTHING WE DO, WE'RE THE PEOPLE WHO ARE DRIVEN BY INNOVATION AND POWERED BY <b>THE WORK</b>
        </h2> */}
        <img className="copy" src={Team_copy} alt="WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS" />
        <hr />
        <Container>
          <Container >
            <Row id="office_bg">
              <Col useRef={greyRef} id="grey-1" className="grey" >
                <span ref={prodRef} className="team-title-center work-sans-font" onClick={() => setprodToggleClicked(!prodToggleClicked)}>
                  <div onClick={() => handleProdToggleClicked()} className="font-titles">PRODUCTION</div>
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
              <Col id="grey-2" className="grey" xs={4}>
                <span ref={postRef} className="team-title-center work-sans-font" onClick={() => setpostToggleClicked(!postToggleClicked)}>
                  <div onClick={() => handlePostToggleClicked()} className="font-titles">POST</div>
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
              <Col id="grey-3" className="grey">
                <span ref={digRef} className="team-title-center work-sans-font" onClick={() => setdigToggleClicked(!digToggleClicked)}>
                  <div onClick={() => handleDigToggleClicked()} className="font-titles">DIGITAL</div>
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

                </span>              </Col>
            </Row>
          </Container>
        </Container>

      </Container>
    </Container>
  );
}

export default Team;
