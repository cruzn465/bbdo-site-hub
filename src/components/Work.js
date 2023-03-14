import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import WorkRow from "./WorkRow";
import WorkModal from "./WorkModal";
import loadingGif from "../img/Arrows bar.gif";

function Work() {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [post, setPost] = useState({});
  const [selectedMedia, setSelectedMedia] = useState({});
  // https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?per_page=100
  // https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?page=2
  useEffect(() => {
    Axios.get("https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts?per_page=100")
      .then((res) => {
        setPosts(res.data);
        console.log("****setting posts****", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Axios.get("https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?per_page=100")
      .then((res) => {
        setMedia(res.data);
        console.log("****setting media****", res.data);
      })
      .catch((err) => console.log(err));
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
  const groupedMedia = groupPosts(media);

  return (
    <>
      <Container>
        <Container>
          <Container id="works">
            {/*  */}
            {/* HERE I'LL MAKE A DYNAMIC VERSION OF MAPPING IT INTO ROWS AND COLS */}
            {/* {media.length > 0 && groupedPosts.map((postSubArray, i) => <WorkRow key={i} posts={postSubArray} media={groupedMedia[i]} setModalShow={setModalShow} setPost={setPost} setSelectedMedia={setSelectedMedia} />)} */}
            {media.length > 0 ? groupedPosts.map((postSubArray, i) => <WorkRow key={i} posts={postSubArray} media={groupedMedia[i]} setModalShow={setModalShow} setPost={setPost} setSelectedMedia={setSelectedMedia} />) : <img id="loading" src={loadingGif}></img>}

            {modalShow && <WorkModal show={modalShow} onHide={() => setModalShow(false)} selectedMedia={selectedMedia} post={post} />}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Work;
