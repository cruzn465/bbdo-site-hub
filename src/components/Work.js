import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WorkRow from "./WorkRow";
import Filter from "./Filter";
// import WorkRows from "./WorkRows";
import WorkModal from "./WorkModal";
// import FetchMoreButton from "./FetchMoreButton";

import mobileLoadingGif from "../img/SLATE_Desktop.gif";
import desktopLoadingGif from "../img/SLATE_Mobile.gif";

import MobileVid from "../img/TheWork.webp";
import TabletVid from "../img/TheWorkHeaderLong_Tablet.webp";

function Work() {
  const [posts, setPosts] = useState([]);

  // const [groupedPosts, setGroupedPosts] = useState([]);

  const [media, setMedia] = useState([]);
  const [mediaObj, setMediaObj] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [post, setPost] = useState({});
  const [totPost, setTotPost] = useState({});

  const [selectedMedia, setSelectedMedia] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  // FETCHING POSTS & MEDIA
  useEffect(() => {
    const fetchPostsAndMedia = async () => {
      let totalPosts = [];
      let totalMedia = [];
      setLoading(true);
      let currentPage = 1;
      // https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=1&per_page=100
      const resP = await Axios.get(
        `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=${currentPage}&per_page=100`
      );
      const resM = await Axios.get(
        `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}&per_page=100`
      );

      totalPosts = [...resP.data];
      totalMedia = [...resM.data];

      let totalPagesTemp = await parseFloat(
        resP.headers.get("X-WP-TotalPages")
      );

      // loop through "totalPagesTemp"xs
      for (let i = 0; i < totalPagesTemp - 1; i++) {
        currentPage += 1;
        const resLoopP = await Axios.get(
          `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=${currentPage}&per_page=100`
        );
        const resLoopM = await Axios.get(
          `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}&per_page=100`
        );
        totalPosts = [...totalPosts, ...resLoopP.data];
        totalMedia = [...totalMedia, ...resLoopM.data];
      }

      setPosts(totalPosts);
      setTotPost(totalPosts);
      setMedia(totalMedia);

      // console.log("****setting posts****", totalPosts);
      // console.log("****setting media****", totalMedia);

      // MAKE THE MEDIAOBJ FROM TOTAL MEDIA
      let tempObj = {};
      for (let i = 0; i < totalMedia.length; i++) {
        let curr = totalMedia[i];
        tempObj[curr.id] = curr;
      }
      setMediaObj(tempObj);
      setLoading(false);
    };

    fetchPostsAndMedia();
  }, []);

  // loop through array, push in arrays of 3 or less
  function groupPosts(arr) {
    let tempArr = [],
      res = [];
    for (let i = 0; i < arr.length; i++) {
      if (!(i % 3) && i) {
        res.push(tempArr);
        tempArr = [];
      }
      tempArr.push(arr[i]);
    }
    if (tempArr.length) res.push(tempArr);
    return res;
  }

  const handleSelect = (e) => {
    if (e) {
      const strE = String(e);
      let filteredPosts = [];
      for (let i = 0; i < totPost.length; i++) {
        const curPost = totPost[i];
        for (let j = 0; j < curPost.categories.length; j++) {
          let cur = String(curPost.categories[j]);
          if (cur === strE) filteredPosts.push(curPost);
        }
      }
      if (strE === "1") filteredPosts = totPost;
      setPosts(filteredPosts);
    }
  };

  // const handleDropdownSelect = (eventKey) => {
  //   // Handle the dropdown item selection here
  //   // You can pass the selected eventKey to the parent component or perform any other logic
  //   if (handleSelect) {
  //     handleSelect(eventKey);
  //   }
  // };

  return (
    <>
      <div id="works">
        {/* THIS IS WHERE THE MOBILE WEBP WILL GO */}
        <div className="work-bg spacer-video">
          <div className="mobile fpo-video">
            <img
              id="mobile-outer-container"
              className="mobile copy"
              src={MobileVid}
              alt="Video showcasing BBDO work"
            />
          </div>
        </div>
        <div className="mobile spacer-video"></div>

        {/* TABLET WORK BG TOP VIDEO TRY IT OUT */}
        <Container fluid className="work-bg spacer-video-tab">
          <img
            id="tab-mobile-outer-container"
            className="mobile"
            src={TabletVid}
            alt="Video showcasing BBDO work"
          />
        </Container>
        <div className="tablet spacer-video-tab"></div>

        <Filter
          handleSelect={handleSelect}
          setPosts={setPosts}
          totPost={totPost}
        />
        {/* IF THE LOADING VAR IS TRUTHY, MAP THRU THE SUBARRAYS */}
        {!loading && media.length > 0 ? (
          groupPosts(posts).map((postSubArray, i) => (
            <WorkRow
              mediaObj={mediaObj}
              key={i}
              posts={postSubArray}
              setModalShow={setModalShow}
              setPost={setPost}
              setSelectedMedia={setSelectedMedia}
            />
          ))
        ) : (
          <>
            <img
              className="mobile-gif"
              id="loading"
              src={mobileLoadingGif}
              alt="Loading GIF"
            ></img>
            <img
              className="desktop-gif"
              id="loading"
              src={desktopLoadingGif}
              alt="Loading GIF"
            ></img>
          </>
        )}
        {modalShow && (
          <WorkModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            selectedMedia={selectedMedia}
            post={post}
          />
        )}
      </div>
    </>
  );
}

export default Work;
