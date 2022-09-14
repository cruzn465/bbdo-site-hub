import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Team_super from '../img/team_super.png'
import Team_copy from '../img/team_copy.png'
// import Team_bg_img from '../img/team_bg_img.jpg'
// import Team_bg_grey from '../img/background_grey.png'
// import Team_prod_subcopies from '../img/prod_titles.png'
// import Team_prod from '../img/team_prod.png'
// import Team_digital_subcopies from '../img/digital_titles.png'
// import Team_digital from '../img/team_digital.png'
// import Team_post_subcopies from '../img/post_titles.png'
// import Team_post from '../img/team_post.png'

import { useRef, useState } from 'react';
import gsap from 'gsap';



function Team() {
  const prodRef = useRef();
  const [prodToggleClicked, setprodToggleClicked] = useState(false)
  const postRef = useRef();
  const [postToggleClicked, setpostToggleClicked] = useState(false)
  const digRef = useRef();
  const [digToggleClicked, setdigToggleClicked] = useState(false)

  const greyRef1 = useRef();
  const greyRef2 = useRef();
  const greyRef3 = useRef();


  // const tl = useRef();

  // useEffect(() => {            
  //   // add a box and circle animation to our timeline and play on first render
  //   console.log("creating timeline");
  //   tl.current && tl.current.progress(0).kill();
  //   tl.current = gsap.timeline()
  //     .to(q(".box"), {
  //       rotation: 360
  //     })
  //     .to(q(".circle"), {
  //       x: 100
  //     });

  // }, []);

  // think of how to make it so that when a user clicks anywhere, this will evaluate what is being clicked and expand the correct list.
  // function evaluateClick() {

  // }

  function handleProdToggleClicked() {
    setprodToggleClicked(!prodToggleClicked)
    setpostToggleClicked(false)
    setdigToggleClicked(false)

    // when prod is clicked, set other heights to 50
    // console.log("prod: ", prodToggleClicked,"post: ", postToggleClicked,"dig: ", digToggleClicked,)
    if (!prodToggleClicked) {
      gsap.to(prodRef.current, .7, { height: "300px" });
      gsap.to(postRef.current, .7, { height: "50px" });
      gsap.to(digRef.current, .7, { height: "50px" });

      // console.log(greyRef)
      gsap.to(greyRef1.current, .7,{height: "80vh"});
      gsap.to(greyRef2.current, .7,{height: "0vh"});
      gsap.to(greyRef3.current, .7,{height: "0vh"});

    }
    else {
      gsap.to(prodRef.current, .7, { height: "50px" })
      gsap.to(greyRef1.current, .7,{height: "0vh"});
    };
  }

  function handlePostToggleClicked() {
    setpostToggleClicked(!postToggleClicked)
    setprodToggleClicked(false)
    setdigToggleClicked(false)
    // console.log("prod: ", prodToggleClicked,"post: ", postToggleClicked,"dig: ", digToggleClicked,)
    if (!postToggleClicked) {
      gsap.to(postRef.current, .7, { height: "300px" });
      gsap.to(prodRef.current, .7, { height: "50px" });
      gsap.to(digRef.current, .7, { height: "50px" });

      gsap.to(greyRef1.current, .7,{height: "0vh"});
      gsap.to(greyRef2.current, .7,{height: "80vh"});
      gsap.to(greyRef3.current, .7,{height: "0vh"});
    }
    else {
      gsap.to(postRef.current, .7, { height: "50px" });
      gsap.to(greyRef2.current, .7,{height: "0vh"});
      
    }
  }

  function handleDigToggleClicked() {
    setdigToggleClicked(!digToggleClicked)
    setprodToggleClicked(true)
    setprodToggleClicked(true)

    if (!digToggleClicked) {
      gsap.to(digRef.current, .7, { height: "300px" });
      gsap.to(postRef.current, .7, { height: "50px" });
      gsap.to(prodRef.current, .7, { height: "50px" });

      gsap.to(greyRef1.current, .7,{height: "0vh"});
      gsap.to(greyRef2.current, .7,{height: "0vh"});
      gsap.to(greyRef3.current, .7,{height: "80vh"});
    }
    else {
      gsap.to(digRef.current, .7, { height: "50px" });
      gsap.to(greyRef3.current, .7,{height: "0vh"});

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
    <Container fluid className="bg">
      <div id='spacer'></div>
      <Container className="all-content">
        <Image className="header" src={Team_super} alt="Who We Are"></Image>
        <hr />
        {/* <h2 id="team-copy-not-pic">
          WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS, <br/>
          DELIVERING BEST-IN-CLASS CONTENT FOR GLOBAL AND LOCAL ALIKE.<br/>
          WITH QUALITY AND EFFICIENCY AT THE FOREFRONT OF EVERYTHING WE DO, WE'RE THE PEOPLE WHO ARE DRIVEN BY INNOVATION AND POWERED BY <b>THE WORK</b>
        </h2> */}
        <img className="copy" src={Team_copy} alt="WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS" />
        <hr />
        <Container id="outer-container">

          <Container id="office_bg">
          </Container>
          <Container id="grey-bg" className="abs-cont">
            <Row>
              <Col ref={greyRef1} id="grey-1" className='grey'>

              </Col>
              <Col ref={greyRef2} id="grey-2" className='grey' xs={4}>

              </Col>
              <Col ref={greyRef3} id="grey-3" className='grey'>

              </Col>
            </Row>
          </Container>
          <Container id="text" className="abs-cont">
          <Row>
            <Col className='grey'>
              <span ref={prodRef} className="team-title-center work-sans-font" onClick={() => handleProdToggleClicked()}>
                <div onClick={() => setprodToggleClicked(!prodToggleClicked)} className="font-titles">PRODUCTION</div>
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
            <Col className='grey' xs={4}>
              <span ref={postRef} className="team-title-center work-sans-font" onClick={() => handlePostToggleClicked()}>
                <div onClick={() => setpostToggleClicked(!postToggleClicked)} className="font-titles">POST</div>
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
            <Col className='grey'>
              <span ref={digRef} className="team-title-center work-sans-font" onClick={() => handleDigToggleClicked()}>
                <div onClick={() => setdigToggleClicked(!digToggleClicked)} className="font-titles">DIGITAL</div>
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

          {/* <Container > */}
          {/* <Row id="office_bg">
            <Col useRef={greyRef} id="grey-1" className={prodToggleClicked ? 'grey clear-bg animated' : 'grey clear-bg'}>
              <span ref={prodRef} className="team-title-center work-sans-font" onClick={() => handleProdToggleClicked()}>
                <div onClick={() => setprodToggleClicked(!prodToggleClicked)} className="font-titles">PRODUCTION</div>
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
            <Col id="grey-2" className={postToggleClicked ? 'grey clear-bg animated' : 'grey clear-bg'} xs={4}>
              <span ref={postRef} className="team-title-center work-sans-font" onClick={() => handlePostToggleClicked()}>
                <div onClick={() => setpostToggleClicked(!postToggleClicked)} className="font-titles">POST</div>
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
            <Col id="grey-3" className={digToggleClicked ? 'grey clear-bg animated' : 'grey clear-bg'}>
              <span ref={digRef} className="team-title-center work-sans-font" onClick={() => handleDigToggleClicked()}>
                <div onClick={() => setdigToggleClicked(!digToggleClicked)} className="font-titles">DIGITAL</div>
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
          </Row> */}
        </Container>

      </Container>
    </Container>
  );
}

export default Team;
