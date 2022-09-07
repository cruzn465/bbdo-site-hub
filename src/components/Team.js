import React from "react";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Team_super from '../img/team_super.png'
import Team_copy from '../img/team_copy.png'
import Team_bg_img from '../img/team_bg_img.jpg'
import Team_bg_grey from '../img/background_grey.png'



function Team() {
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
          <figure className="position-relative">

          <Image id="team_bg" src={Team_bg_img} alt="Office Background" className="img-fluid" />
          <Image id="test-image-grey" src={Team_bg_grey}></Image>
          {/* <Image id="test-image-grey-2" src={Team_bg_grey}></Image> */}
          {/* <Image id="test-image-grey-3" src={Team_bg_grey}></Image> */}

          </figure>


          {/* <div id="test-image"> */}
          {/* </div> */}
        </Container>

      </Container>
    </Container>
  );
}

export default Team;
