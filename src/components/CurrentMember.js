import React from "react";
import { useParams } from "react-router-dom";
// import slugArr from "../slugs.json";
import { Container } from "react-bootstrap";
import pwebsiteButton from "../img/website_button.png";
import linkedinButton from "../img/linkedin_button.png";
import twitterButton from "../img/website_button.png";
import vimeoButton from "../img/website_button.png";

function CurrentMember({
  setCurrMem,
  loading,
  currMem,
  slugObj,
  mediaObj,
  findSourceUrl,
}) {
  // console.log("")
  const { slug } = useParams();
  // console.log("CURR MEM SLUG?", slug);
  // console.log("SLUG OBJ", slugObj);

  if (slug) setCurrMem(slugObj[slug]);
  // console.log("CURR MEM COMP CURR MEM", currMem);

  // console.log("CURR MEM loading?", loading);

  // if (slugObj) {
  //   currMem = slugObj[slug];
  // } else {
  // }

  console.log("currMem in CM COMP", currMem);
  // if (currMem.acf.personalwebsite) console.log(currMem.acf.personalwebsite);
  // const { img, name, title, pronouns } = currMem;
  // console.log("img url", findSourceUrl(currMem.featured_media, mediaObj));
  // const { title } = currMem;

  return (
    <>
      <Container className="font-titles">
        <div className="big-flex-mem">
          <div>
            {/* {currMem && ( */}
            <img
              id="curr-mem-img"
              src={findSourceUrl(currMem.featured_media, mediaObj)}
              className="member"
              alt="current member"
            />
            {/* )} */}
          </div>

          <div id="name-title-div">
            <div className="work-sans-font" id="curr-mem-name">
              {currMem && (
                <span id="white-name"> {currMem.title.rendered}</span>
              )}
              {currMem && currMem.title.rendered}
              {/* <div id="curr-mem-details">
                {title} | {pronouns}
              </div> */}
            </div>
            <br />
          </div>
          {/* SOCIAL LINKS */}
          {/* PERSONAL WEBSITE */}
          {/* {currMem && currMem.acf.personalwebsite && (
            <a href={currMem.acf.personalwebsite}>
              <img
                className="socials"
                src={pwebsiteButton}
                alt="personal website button"
              />
            </a>
          )} */}

          {/* {currMem && currMem.acf.linkedin && (
            // <img id="logo" src={Logo} alt="BBDO logo" />
            <a href={currMem.acf.linkedin}>
              <img
                className="socials"
                // id="pw"
                src={linkedinButton}
                alt="linkedin button"
              />
            </a>
          )} */}
        </div>
      </Container>
    </>
  );
}

export default CurrentMember;
