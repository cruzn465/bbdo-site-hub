import React from "react";
import { Container } from "react-bootstrap";
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
          <Image id="team_prod" className="team_super_titles" src={Team_prod}></Image>
          <Image id="team_prod_subCopies" src={Team_prod_subcopies}></Image>

          <Image id="test-image-grey-2" src={Team_bg_grey}></Image>
          <Image id="team_post" className="team_super_titles" src={Team_post}></Image>
          <Image id="team_post_subCopies" src={Team_post_subcopies}></Image>


          <Image id="test-image-grey-3" src={Team_bg_grey}></Image>
          <Image id="team_digital" className="team_super_titles" src={Team_digital}></Image>
          <Image id="team_digital_subCopies" src={Team_digital_subcopies}></Image>

          </figure>


          {/* <div id="test-image"> */}
          {/* </div> */}
        </Container>

      </Container>
    </Container>
  );
}

export default Team;
