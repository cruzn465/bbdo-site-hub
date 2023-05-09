import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WorkRow from "./WorkRow";
import Filter from "./Filter";

// import WorkRows from "./WorkRows";

import WorkModal from "./WorkModal";
// import FetchMoreButton from "./FetchMoreButton";

import loadingGif from "../img/Arrows bar.gif";
// import { Button } from "bootstrap";

function Work() {
  const [posts, setPosts] = useState([]);
  // const [cat, setCat] = useState(0);

  // const [groupedPosts, setGroupedPosts] = useState([]);

  const [media, setMedia] = useState([]);
  const [mediaObj, setMediaObj] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [post, setPost] = useState({});
  const [selectedMedia, setSelectedMedia] = useState("");
  // const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  // FETCHING POSTS & MEDIA
  useEffect(() => {
    const fetchPostsAndMedia = async () => {
      let totalPosts = [];
      let totalMedia = [];
      setLoading(true);
      let currentPage = 1;
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

      // FILTERING
      setPosts(totalPosts);

      setMedia(totalMedia);

      // console.log("****setting posts****", totalPosts);
      // console.log("****setting media****", totalMedia);

      // MAKE THE MEDIAOBJ FROM TOTAL MEDIA
      let tempObj = {};
      for (let i = 0; i < totalMedia.length; i++) {
        let curr = totalMedia[i];
        tempObj[curr.id] = curr;
      }
      // console.log("tempObj", tempObj);
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

  // const groupedPosts = groupPosts(posts);
  // setGroupedPosts(groupPosts(posts));

  return (
    <>
      {/* <Container> */}
      {/* <Container> */}
      <Container id="works">
        {/* FILTER COMPONENT PASS THE CATEGORY */}
        <Filter />
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
          <img id="loading" src={loadingGif} alt="Loading GIF"></img>
        )}
        {modalShow && (
          <WorkModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            selectedMedia={selectedMedia}
            post={post}
          />
        )}
      </Container>
      {/* </Container> */}
      {/* </Container> */}
    </>
  );
}

export default Work;
