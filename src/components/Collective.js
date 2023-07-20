import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Collective_super from "../img/mobile_coll_header.png";
// import Collective_copy from "../img/collective_copy.png";
// import memberArr from "../members.json";
import CurrentMember from "./CurrentMember";
// import loadingGif from "../img/Arrows bar.gif";
import loadingGif from "../img/SLATE_V2.gif";
import linkedInButton from "../img/linkedin_button.png";
import twitterButton from "../img/twitter_button.png";
import vimeoButton from "../img/vimeo_button.png";
import websiteButton from "../img/website_button.png";

import Members from "./Members";

// modularize into Member components

function Collective() {
  const [currMem, setCurrMem] = useState({});
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);
  const [mediaObj, setMediaObj] = useState({});
  const [slugObj, setSlugObj] = useState({});

  const navigate = useNavigate();
  const { slug } = useParams();
  // FETCHING MEMBIES
  useEffect(() => {
    const fetchMembers = async () => {
      let totalColl = [];
      let totalMedia = [];

      setLoading(true);
      let currentPage = 1;
      const resC = await Axios.get(
        `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/thecollective?page=${currentPage}&per_page=100`
      );
      const resM = await Axios.get(
        `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}&per_page=100`
      );
      totalColl = [...resC.data];
      totalMedia = [...resM.data];

      let totalPagesTemp = await parseFloat(
        resC.headers.get("X-WP-TotalPages")
      );

      // loop through "totalPagesTemp"xs
      for (let i = 0; i < totalPagesTemp - 1; i++) {
        currentPage += 1;
        const resLoopC = await Axios.get(
          `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/thecollective?page=${currentPage}&per_page=100`
        );
        const resLoopM = await Axios.get(
          `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}&per_page=100`
        );
        totalColl = [...totalColl, ...resLoopC.data];
        totalMedia = [...totalMedia, ...resLoopM.data];
      }

      setAllMembers(totalColl);
      setMedia(totalMedia);

      // console.log("****setting coll****", totalColl);
      // console.log("****setting media****", totalMedia);

      // MAKE THE MEDIAOBJ FROM TOTAL MEDIA
      let tempObj = {};
      for (let i = 0; i < totalMedia.length; i++) {
        let curr = totalMedia[i];
        tempObj[curr.id] = curr;
      }
      setMediaObj(tempObj);
      // console.log("****MEDIA OBJ****", tempObj);

      // MAKE SLUGOBJ (AN OBJ WHERE THE KEYS ARE THE SLUGS AND THE VALS HAVE NAMES)
      let tempSlugObj = {};
      for (let i = 0; i < totalColl.length; i++) {
        let curCol = totalColl[i];
        let newColObj = curCol;

        tempSlugObj[curCol.slug] = newColObj;
      }
      setSlugObj(tempSlugObj);

      setCurrMem(tempSlugObj[slug]);
      // console.log("****SLUG OBJ****", tempSlugObj);

      setLoading(false);
    };

    fetchMembers();
  }, []);

  // const members = memberArr.map((member) => (
  //   <div key={member.id} onClick={(e) => handleMemberClick(e, member.id)}>
  //     <img
  //       src={member.img}
  //       className="member"
  //       alt="individual member"
  //       onClick={() => {
  //         navigate(`/the-collective/${member.slug}`);
  //       }}
  //     />
  //   </div>
  // ));

  function findSourceUrl(feat_media_id, mediaObj) {
    // GET A PLACEHOLDER IMAGE FOR POSTS WITHOUT ANY MEDIA
    if (feat_media_id) {
      // console.log(feat_media_id);
      let media = mediaObj[feat_media_id];
      let source_url = media.media_details.sizes.thumbnail.source_url;
      // console.log(source_url);
      return "https://wpapibbdostudios.azurewebsites.net" + source_url;
    } else {
      return "";
    }
  }
  // RETURN IMG TAGS BASED ON FEAT_ID EXISTENCE
  function switchImgTag(feat_media_id, mediaObj, member) {
    if (!loading) {
      return (
        <img
          src={findSourceUrl(member.featured_media, mediaObj)}
          className="member"
          alt="individual member"
          onClick={() => {
            navigate(`/the-collective/${member.slug}`);
          }}
        />
      );
    } else {
      return "";
    }
  }

  // IF THERE IS AN FEAT_MEDIA ID, RENDER THE IMG
  const wpMembers = allMembers.map((member) => {
    if (member.featured_media !== 0) {
      return (
        <div
          key={member.id}
          className="hover-mem"
          onClick={(e) => handleMemberClick(e, member)}
        >
          {/* <img
            src={findSourceUrl(member.featured_media, mediaObj)}
            className="member"
            alt="individual member"
            onClick={() => {
              navigate(`/the-collective/${member.slug}`);
            }}
          /> */}
          {switchImgTag(member.featured_media, mediaObj, member)}
          <div className="mem-details">
            <div className="mem-name">
              {member.title.rendered}
            </div>
            <div className="skills">
              <div className="mem-skill1">
                {member.acf.skill1}
              </div>
              <div className="mem-skill2">
                {member.acf.skill2}
              </div>
            </div>
            <div className="mem-social">
              {member.acf.personalwebsite !== 0 ?
                (<a href="{member.acf.personalwebsite}" title="Personal Website" target="_blank">
                  <img
                    src={websiteButton}
                    id="web-button"
                    className="socialButton w100"
                    alt="Website Button"
                  />
                </a>
                )
                : null}
              {member.acf.linkedin !== 0 ?
                (<a href="{member.acf.personalwebsite}" title="Personal Website" target="_blank">
                  <img
                    src={linkedInButton}
                    id="web-button"
                    className="socialButton w100"
                    alt="Website Button"
                  />
                </a>
                )
                : null}
              {member.acf.twitter !== 0 ?
                (<a href="{member.acf.personalwebsite}" title="Personal Website" target="_blank">
                  <img
                    src={twitterButton}
                    id="web-button"
                    className="socialButton w100"
                    alt="Website Button"
                  />
                </a>
                )
                : null}
              {member.acf.profile !== 0 ?
                (<a href="{member.acf.personalwebsite}" title="Personal Website" target="_blank">
                  <img
                    src={vimeoButton}
                    id="web-button"
                    className="socialButton w100"
                    alt="Website Button"
                  />
                </a>
                )
                : null}
            </div>
          </div>

        </div>
      );
    } else return null;
  });

  // click handler for when any member is clicked
  function handleMemberClick(e, m) {
    setCurrMem(m);
    // console.log(currMem);
  }

  return (
    <>
      <div className="tablet spacer"></div>
      <div className="mobile spacer"></div>
      {/* mobile */}
      <Image
        className="header mobile-tablet "
        id="collective-header"
        src={Collective_super}
        alt="Who We Are"
      />
      {/* tablet */}
      <div className="mid-tablet tablet header-text work-sans-font germain header-font">
        THE PRODUCTION COLLECTIVE
        <span className="white-text"> THE PRODUCTION COLLECTIVE</span>
      </div>
      {/* desktop */}
      <div className="desktop header-text work-sans-font germain header-font">
        THE PRODUCTION COLLECTIVE
        <span className="white-text"> THE PRODUCTION COLLECTIVE</span>
      </div>
      <hr />
      <h2 className="sub-header-text work-sans-font desktop">
        BUILT TO OPEN DOORS FOR&nbsp;CREATORS, THE&nbsp;BBDO&nbsp;STUDIOS CAREER
        DEVELOPMENT INITIATIVE GIVES PARTICIPANTS ACCESS TO A VARIETY OF
        NETWORKING AND WORK OPPORTUNITIES WITHIN BBDO&nbsp;NY. OUR CORE MISSION
        IS TO HELP SET UP OUR MEMBERS FOR PROFESSIONAL SUCCESS BOTH WITHIN BBDO
        AND BEYOND.
      </h2>
      <h2 className="sub-header-text work-sans-font tablet">
        BUILT TO OPEN DOORS FOR&nbsp;CREATORS, THE&nbsp;BBDO&nbsp;STUDIOS CAREER
        DEVELOPMENT INITIATIVE GIVES PARTICIPANTS ACCESS TO A VARIETY OF
        NETWORKING AND WORK OPPORTUNITIES WITHIN BBDO&nbsp;NY. OUR CORE MISSION
        IS TO HELP SET UP OUR MEMBERS FOR PROFESSIONAL SUCCESS BOTH WITHIN
        BBDO&nbsp;AND BEYOND.
      </h2>
      <h2 className="sub-header-text work-sans-font mobile">
        BUILT TO OPEN DOORS FOR CREATORS, THE BBDO STUDIOS CAREER DEVELOPMENT
        INITIATIVE GIVES PARTICIPANTS ACCESS TO A VARIETY OF NETWORKING AND WORK
        OPPORTUNITIES WITHIN BBDO&nbsp;NY. OUR CORE MISSION IS TO HELP SET UP
        OUR MEMBERS FOR PROFESSIONAL SUCCESS BOTH WITHIN BBDO&nbsp;AND BEYOND.
      </h2>
      <hr />
      <div className="curr-header-text curr-header-font work-sans-font germain header-font">
        CURRENT MEMBERS
        <span className="white-text"> CURRENT MEMBERS</span>
      </div>

      {/* THIS  */}
      {!loading && media.length > 0 ? (
        <div className="container flex-mem pointer no-display-mobile">
          {/* <div className="off-set-member"></div> */}
          {wpMembers}
          {/* <div className="off-set-member"></div> */}
        </div>
      ) : (
        <img id="loading" src={loadingGif} alt="Loading GIF"></img>
      )}

      {/* <div>
        <hr />
        {!loading && currMem ? (
          <CurrentMember
            setCurrMem={setCurrMem}
            currMem={currMem}
            loading={loading}
            slugObj={slugObj}
            mediaObj={mediaObj}
            findSourceUrl={findSourceUrl}
          />
        ) : (
          ""
        )}
      </div> */}
      {/* <Outlet /> */}
    </>
  );
}

export default Collective;
