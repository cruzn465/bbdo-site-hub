import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import WorkRow from "./WorkRow";
import WorkModal from "./WorkModal";
import FetchMoreButton from "./FetchMoreButton";

import loadingGif from "../img/Arrows bar.gif";
import { Button } from "bootstrap";

function Work() {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [post, setPost] = useState({});
  const [selectedMedia, setSelectedMedia] = useState({});
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

  /*
  USES ASYNC/AWAIT INSTEAD OF 
  ALSO  DONT FORGET THAT THIS WORKS WITH A LOADING VAR THAT I COMMENTED OUT 
  
  
*/

  // FETCHING POSTS
  useEffect(() => {
    // TO USE ASYNC/AWAIT, YOU NEED TO DECLARE AN ASYNC FXN AND THE INVOKE IT THIS IS BC YOU CAN'T MAKE USEEFFECT ASYNCRONOUS!
    const fetchPostsAndMedia = async () => {
      let totalPosts = [];
      let totalMedia = [];
      setLoading(true);
      let currentPage = 1;
      const resP = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=${currentPage}&per_page=100`);
      const resM = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}&per_page=100`);

      totalPosts = [...resP.data];
      totalMedia = [...resM.data];

      let totalPagesTemp = await parseFloat(resP.headers.get("X-WP-TotalPages"));
      // setTotalPages(totalPagesTemp);
      setPosts([...posts, ...resP.data]);
      setMedia([...media, ...resM.data]);

      // loop through "totalPagesTemp"xs
      for (let i = 0; i < totalPagesTemp - 1; i++) {
        currentPage += 1;
        const resLoopP = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=${currentPage}&per_page=100`);
        const resLoopM = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}&per_page=100`);
        // setPosts([...posts, ...resLoopP.data]);
        // setMedia([...media, ...resLoopM.data]);
        totalPosts = [...totalPosts, ...resLoopP.data];
        totalMedia = [...totalMedia, ...resLoopM.data];
      }
      setPosts(totalPosts);
      setMedia(totalMedia);

      console.log("****setting posts****", totalPosts);
      console.log("****setting media****", totalMedia);

      setLoading(false);
    };

    fetchPostsAndMedia();
    // setCurrentPage(currentPage + 1);
  }, []);

  // FETCHING MEDIA
  // useEffect(() => {
  //   const fetchMedia = async () => {
  //     const res = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}`);
  //     // setMedia(res.data);
  //     setMedia([...media, ...res.data]);
  //     console.log("****setting media****", res.data);
  //   };
  //   fetchMedia();
  // }, []);

  // MAKE A HANDLE FETCH THAT UPDATES THE CURRENTPAGE AND ALSO DOES A FETCH

  // function handleFetch(e, post, media) {
  //   // e.preventDefault();
  //   setLoading(true);

  //   console.log(currentPage);
  //   const fetchMorePosts = async () => {
  //     const endpoint = `https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=${currentPage}`;
  //     console.log(endpoint);
  //     const resPosts = await Axios.get(endpoint);
  //     setPosts([...posts, ...resPosts.data]);
  //     setLoading(false);
  //   };
  //   fetchMorePosts();

  //   const fetchMoreMedia = async () => {
  //     const resMedia = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}`);
  //     setMedia([...media, ...resMedia.data]);
  //   };
  //   fetchMoreMedia();
  //   // setCurrentPage(media);
  //   console.log("FETCH NEXT PAGE");
  //   setCurrentPage(currentPage + 1);
  // }

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
  const groupedMedia = groupPosts(media);

  return (
    <>
      <Container>
        <Container>
          <Container id="works">
            {/* {media.length > 0 && groupedPosts.map((postSubArray, i) => <WorkRow key={i} posts={postSubArray} media={groupedMedia[i]} setModalShow={setModalShow} setPost={setPost} setSelectedMedia={setSelectedMedia} />)} */}
            {/* IF THE LOADING VAR IS TRUTHY, MAP THRU THE SUBARRAYS */}
            {!loading && media.length > 0 ? groupedPosts.map((postSubArray, i) => <WorkRow key={i} posts={postSubArray} media={groupedMedia[i]} setModalShow={setModalShow} setPost={setPost} setSelectedMedia={setSelectedMedia} />) : <img id="loading" src={loadingGif}></img>}
            {/* {currentPage !== totalPages && !loading ? <FetchMoreButton handleFetch={handleFetch} /> : null} */}
            {modalShow && <WorkModal show={modalShow} onHide={() => setModalShow(false)} selectedMedia={selectedMedia} post={post} />}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Work;
