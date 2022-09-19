import React from "react";
import { useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Collective_super from "../img/collective_super.png";
import Collective_copy from "../img/collective_copy.png";
import memberArr from "../members.json";
// import Member from "./Member";

// modularize into Member components
function CurrentMember(props) {
  // console.log("props", props);
  const { img, name, title, pronouns } = props;
  return (
    <div className="flex-mem">
      <div>
        <img
          id="curr-mem-img"
          src={img}
          className="member"
          alt="current member"
        />
      </div>
      <div id="name-title-div" className="work-sans-font">
        {name} <br />
        {title} | {pronouns}
      </div>
    </div>
  );
}

function Collective() {
  const [currMem, setCurrMem] = useState(memberArr[0]);

  // console.log(memberArr)
  // <Member member={member} key={member.id} />
  const members = memberArr.map((member) => (
    <div key={member.id} onClick={(e) => handleMemberClick(e, member.id)}>
      <img src={member.img} className="member" alt="individual member" />
    </div>
  ));
  // click handler for when any member is clicked
  function handleMemberClick(e, id) {
    setCurrMem(memberArr[id - 1]);
    console.log(memberArr[id - 1]);
  }

  // maybe use members[0] for default member
  // let dynamicText = 'hello world'
  return (
    <Container fluid className="bg">
      <div id="spacer"></div>
      <Container className="all-content">
        <Image
          className="header"
          id="collective-header"
          src={Collective_super}
          alt="Who We Are"
        />
        <hr />
        <Image
          className="copy"
          src={Collective_copy}
          alt="WE’RE A TEAM OF AWARD-WINNING CREATORS AND UNCONVENTIONAL MAKERS"
        />
        <hr />
        <h2 className="germain" id="curr-mem-title">
          CURRENT MEMBERS
        </h2>
        <div className="flex-mem">{members}</div>
        <Container className="font-titles">
          <hr />
          <CurrentMember
            img={currMem.img}
            name={currMem.name}
            title={currMem.title}
            pronouns={currMem.pronouns}
          />
        </Container>
      </Container>
    </Container>
  );
}

export default Collective;
