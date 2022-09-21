import React from "react";
import { useParams } from "react-router-dom";
import testArr from "../test.json";
import { Container } from "react-bootstrap";

function CurrentMember() {
  const { slug } = useParams();
  const currMem = testArr[slug];
  const { img, name, title, pronouns } = currMem;

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
