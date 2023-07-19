import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Collective_super from "../img/mobile_coll_header.png";
import Members from "./Members";

// FOLLOW THIS FORMAT AND MAKE IMPORT STATEMENTS HERE FOR THE ICONS:
import loadingGif from "../img/SLATE_V2.gif";
import PWebsiteButton from "../img/website_button.png";

function Collective() {
  const [currMem, setCurrMem] = useState({});
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);
  const [mediaObj, setMediaObj] = useState({});
  const [slugObj, setSlugObj] = useState({});

  const navigate = useNavigate();
  const { slug } = useParams();
  // FETCHING MEMBERS FROM WORDPRESS ENDPOINT
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
      let media = mediaObj[feat_media_id];
      let source_url = media.media_details.sizes.thumbnail.source_url;
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
          // CLICK EVENTS WILL BE IN PHASE 2
          // onClick={() => {
          //   navigate(`/the-collective/${member.slug}`);
          // }}
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
          // CLICK EVENTS WILL BE IN PHASE 2
          // onClick={(e) => handleMemberClick(e, member)}
        >
          {/* <img
            src={findSourceUrl(member.featured_media, mediaObj)}
            className="member"
            alt="individual member"
            onClick={() => {
              navigate(`/the-collective/${member.slug}`);
            }}
          /> */}

          {/* CONDITIONALLY RENDER THE IMAGE IF THERE IS A FEAT. MEDIA ID */}
          {switchImgTag(member.featured_media, mediaObj, member)}

          {/* ***** THIS IS WHERE THE REST OF THE MEMBER DATA WILL GO ***** */}
          {/* ***** START ***** */}
          {/* NAME */}
          <div id="name-title-div">
            <div className="work-sans-font" id="curr-mem-name">
              {/* THIS SYNTAX MAKES SURE THAT IF THE MEMBER EXISTS, IT'LL SHOW THE NAME. FOLLOW THIS FORMAT FOR THE SKILLS */}
              {member && <span id="white-name"> {member.title.rendered}</span>}
              {member && member.title.rendered}
            </div>
            <br />
          </div>
          {/* SKILL1 */}
          {/* SKILL2 */}

          {/* SOCIALS: PERSONAL WEBSITE, LINKEDIN, TWITTER AND VIMEO/PROFILE */}
          {member.acf.personalwebsite && (
            <a href={member.acf.personalwebsite}>
              <img
                className="socials"
                src={PWebsiteButton}
                alt="personal website button"
              />
            </a>
          )}

          {/* ***** END ***** */}
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

      {/* THIS IS WHERE THE MEMBERS WILL GO */}
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
