import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import WorkRow from "./WorkRow";
import WorkRows from "./WorkRows";

import WorkModal from "./WorkModal";
import FetchMoreButton from "./FetchMoreButton";

import loadingGif from "../img/Arrows bar.gif";
import { Button } from "bootstrap";

function Work() {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);

  const [mediaObj, setMediaObj] = useState({});
  /* 
  HERE'S THE PLAN, I'M GOING TO MAKE AN OBJECT WITH ALL THE MEDIA AND I'LL MAKE THE KEY THE ID (WHICH I'LL GET FROM THE POST OBJ)
  THEN IN THE WORK ROW COMPONENT, I'LL  INDIVIDUALLY FETCH 
  https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media/${ID}
  and then get the medium large size from the media details

  */

  const [modalShow, setModalShow] = React.useState(false);
  const [post, setPost] = useState({});
  const [selectedMedia, setSelectedMedia] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  // VARS FROM THE YOUTUBE PAGINATION VIDDY:
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?per_page=100
  // https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=2
  // useEffect(() => {
  //   Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=${currentPage}`)
  //     .then((res) => {
  //       // console.log("init posts", posts);
  //       // console.log("adding posts", res.data);

  //       console.log("****setting posts****", res.data);

  //       // setPosts(res.data);
  //       setPosts([...posts, ...res.data]);
  //       // *****FIGURE OUT THE (REACT) THAT THE REFRESH MAKES THE APP LOSE ITS PLACE FOR THE AMOUNT OF POSTS? IT SHOULD PERSIST/RELOAD ONLY PAGE 1
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}`)
  //     .then((res) => {
  //       setMedia([...media, ...res.data]);
  //       // setMedia(res.data);

  //       console.log("****setting media****", res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
      // setTotalPages(totalPagesTemp);

      // setPosts(resP.data);
      // setMedia(resM.data);

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
      setMedia(totalMedia);

      console.log("****setting posts****", totalPosts);
      console.log("****setting media****", totalMedia);

      // MAKE THE MEDIAOBJ FROM TOTAL MEDIA
      let tempObj = {};
      for (let i = 0; i < totalMedia.length; i++) {
        let curr = totalMedia[i];

        // let featMedia = curr._links["wp:featuredmedia"][0];
        // let { href } = featMedia;
        // let id = href.slice(63); //slices off anything past "https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media/"
        // const res = await Axios.get(href);
        // tempObj[id] = res.data;
        // "/wp-content/uploads/2023/01/30_Thumbnail_BacardiHoliday-768x430.png"
        // tempObj[id] = res.data.media_details.sizes.medium_large.source_url;
        tempObj[curr.id] = curr;
      }
      console.log("tempObj", tempObj);
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

  const groupedPosts = groupPosts(posts);

  return (
    <>
      <Container>
        <Container>
          <Container id="works">
            {/* {media.length > 0 && groupedPosts.map((postSubArray, i) => <WorkRow key={i} posts={postSubArray} media={groupedMedia[i]} setModalShow={setModalShow} setPost={setPost} setSelectedMedia={setSelectedMedia} />)} */}
            {/* IF THE LOADING VAR IS TRUTHY, MAP THRU THE SUBARRAYS */}
            {/* {!loading && !!mediaObj ? (
              <WorkRows
                posts={posts}
                mediaObj={mediaObj}
                groupedPosts={groupedPosts}

                // setModalShow={setModalShow}
                // setPost={setPost}
                // setSelectedMedia={setSelectedMedia}
              />
            ) : (
              <img id="loading" src={loadingGif}></img>
            )} */}

            {!loading && media.length > 0 ? (
              groupedPosts.map((postSubArray, i) => (
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
              <img id="loading" src={loadingGif}></img>
            )}
            {/* {currentPage !== totalPages && !loading ? <FetchMoreButton handleFetch={handleFetch} /> : null} */}
            {modalShow && (
              <WorkModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedMedia={selectedMedia}
                post={post}
              />
            )}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Work;
