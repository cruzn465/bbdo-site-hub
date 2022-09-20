import React from "react";
import { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Collective_super from "../img/collective_super.png";
import Collective_copy from "../img/collective_copy.png";
import memberArr from "../members.json";
// import CurrentMember from "./CurrentMember";

// modularize into Member components

function Collective() {
  const [currMem, setCurrMem] = useState(memberArr[0]);
  const navigate = useNavigate();
  const members = memberArr.map((member) => (
    <div key={member.id} onClick={(e) => handleMemberClick(e, member.id)}>
      <img
        src={member.img}
        className="member"
        alt="individual member"
        onClick={() => {
          navigate(`/the-collective/${member.id}`);
        }}
      />
    </div>
  ));

  // click handler for when any member is clicked
  function handleMemberClick(e, id) {
    setCurrMem(memberArr[id - 1]);
  }

  return (
    <>
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
      {/* <Container className="font-titles">
        <hr /> */}
      {/* <CurrentMember
            img={currMem.img}
            name={currMem.name}
            title={currMem.title}
            pronouns={currMem.pronouns}
          /> */}
      {/* </Container> */}
      <Outlet></Outlet>
    </>
  );
}

export default Collective;
