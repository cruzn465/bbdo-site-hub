import React from "react";
import { useParams } from "react-router-dom";
// import slugArr from "../slugs.json";
import { Container } from "react-bootstrap";

function CurrentMember({
  setCurrMem,
  loading,
  currMem,
  slugObj,
  mediaObj,
  findSourceUrl,
}) {
  console.log("CURR MEM COMP CURR MEM", currMem);
  // console.log("")
  const { slug } = useParams();
  console.log("CURR MEM SLUG?", slug);
  console.log("SLUG OBJ", slugObj);

  if (slug) setCurrMem(slugObj[slug]);

  console.log("CURR MEM loading?", loading);

  // if (slugObj) {
  //   currMem = slugObj[slug];
  // } else {
  // }

  console.log("currMem in CM COMP", currMem);
  // const { img, name, title, pronouns } = currMem;
  // console.log("img url", findSourceUrl(currMem.featured_media, mediaObj));
  // const { title } = currMem;

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
              {/* <span id="white-name">{title}</span> */}
              {/* {title} */}
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
