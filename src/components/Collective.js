import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Collective_super from "../img/collective_super.png";
import Collective_copy from "../img/collective_copy.png";
// import memberArr from "../members.json";
import CurrentMember from "./CurrentMember";
import loadingGif from "../img/Arrows bar.gif";
import Members from "./Members";

// modularize into Member components

function Collective() {
  const [currMem, setCurrMem] = useState(null);
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
      // setTotPost(totalPosts);
      setMedia(totalMedia);

      console.log("****setting coll****", totalColl);
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
        // console.log(i);
        let curCol = totalColl[i];
        // console.log(curCol);

        let newColObj = {};
        newColObj.id = curCol.id;
        newColObj.slug = curCol.slug;
        newColObj.name = curCol.title.rendered;
        newColObj.featured_media = curCol.featured_media;
        // console.log(newColObj);
        // console.log("newColObj", newColObj);

        tempSlugObj[curCol.slug] = newColObj;
      }
      setSlugObj(tempSlugObj);
      console.log("****SLUG OBJ****", tempSlugObj);

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
    if (!feat_media_id) return "http://placekitten.com/400/300";
    // console.log(feat_media_id);
    let media = mediaObj[feat_media_id];
    let source_url = media.media_details.sizes.thumbnail.source_url;
    // console.log(source_url);
    return "https://wpapibbdostudios.azurewebsites.net" + source_url;
  }

  // IF THERE IS AN FEAT_MEDIA ID, RENDER THE IMG
  const wpMembers = allMembers.map((member) => {
    if (member.featured_media !== 0) {
      return (
        <div key={member.id} onClick={(e) => handleMemberClick(e, member.id)}>
          <img
            src={findSourceUrl(member.featured_media, mediaObj)}
            className="member"
            alt="individual member"
            onClick={() => {
              navigate(`/the-collective/${member.slug}`);
            }}
          />
        </div>
      );
    }
  });

  // click handler for when any member is clicked
  function handleMemberClick(e, id) {
    // LOOP THROUGH ALL MEMBERS AND SET THE CURRMEM THROUGH THE LOOP
    for (let i = 0; i < allMembers.length; i++) {
      if (allMembers[i].id === id) setCurrMem(allMembers[i]);
    }
    console.log(currMem);
  }

  return (
    <>
      <div className="mobile spacer"></div>

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
      {/* <div className="flex-mem">{members}</div> */}
      <div className="flex-mem pointer">{wpMembers}</div>

      {!loading && media.length > 0 ? (
        <Members mediaObj={mediaObj} allMembers={allMembers} />
      ) : (
        <img id="loading" src={loadingGif} alt="Loading GIF"></img>
      )}
      <div>
        {slug ? (
          <CurrentMember
            slugObj={slugObj}
            mediaObj={mediaObj}
            findSourceUrl={findSourceUrl}
          />
        ) : (
          ""
        )}
      </div>
      {/* <Outlet /> */}
    </>
  );
}

export default Collective;
