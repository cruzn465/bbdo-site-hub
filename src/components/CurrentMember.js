import React from "react";
import { useParams } from "react-router-dom";
// import slugArr from "../slugs.json";
import { Container } from "react-bootstrap";

function CurrentMember({ slugObj, mediaObj, findSourceUrl }) {
  const { slug } = useParams();
  const currMem = slugObj[slug];
  console.log("currMem", currMem);
  // const { img, name, title, pronouns } = currMem;
  console.log("img url", findSourceUrl(currMem.featured_media, mediaObj));
  const { name } = currMem;

  return (
    <>
      <Container className="font-titles">
        <hr />
        <div className="flex-mem">
          <div>
            <img
              id="curr-mem-img"
              src={findSourceUrl(currMem.featured_media, mediaObj)}
              className="member"
              alt="current member"
            />
          </div>
          <div id="name-title-div">
            <div className="work-sans-font" id="curr-mem-name">
              {/* <div> */}
              <span id="white-name">{name}</span>
              {name}
              {/* </div> */}

              <div id="curr-mem-details">{/* {title} | {pronouns} */}</div>
            </div>
            <br />
          </div>
        </div>
      </Container>
    </>
  );
}

export default CurrentMember;
