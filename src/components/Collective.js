import React from "react";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Collective_super from '../img/collective_super.png'
import Collective_copy from '../img/collective_copy.png'

function Collective() {
    return (
      <Container fluid className="bg">
      <div id='spacer'></div>
      <Container id="test-container">
        <Image className="header" id="collective-header" src={Collective_super} alt="Who We Are" />
        <hr  />  
        <Image className="copy" src={Collective_copy} alt="WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS" />
        <hr />  

      </Container>
    </Container>
    );
  }
  
  export default Collective;
  