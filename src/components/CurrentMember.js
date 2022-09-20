import React from "react";
import { useParams } from "react-router-dom";
import memberArr from "../members.json";
import { Container } from "react-bootstrap";

function CurrentMember() {
  // { img, name, title, pronouns }
  const { id } = useParams();
  console.log("Name: ", memberArr[id]);
  const { img, name, title, pronouns } = memberArr[id - 1];
  return (
    <>
      <Container className="font-titles">
        <hr />
        <div className="flex-mem">
          <div>
            <img
              id="curr-mem-img"
              src={img}
              className="member"
              alt="current member"
            />
          </div>
          <div id="name-title-div">
            <div className="work-sans-font" id="curr-mem-name">
              {name}
              <div id="curr-mem-details">
                {title} | {pronouns}
              </div>
            </div>
            <br />
          </div>
        </div>
      </Container>
    </>
  );
}

export default CurrentMember;
