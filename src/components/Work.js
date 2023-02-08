import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import WorkRow from "./WorkRow";

function Work() {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    Axios.get("https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
        // console.log("****setting posts****", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Axios.get("https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media")
      .then((res) => {
        setMedia(res.data);
        // console.log("****setting media****", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // loop through posts and add the media link
  function addToPosts() {
    let resArr = [...posts];
    for (let i = 0; i < posts.length; i++) {
      resArr[i].source_url = media[i].source_url;
    }
    // console.log("adding media link");
    setPosts(resArr);
    return;
  }

  // addToPosts();

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

  // console.log("POSTS AND MEDIA", groupedPosts, groupedMedia);

  // console.log(posts, "posts in work component");

  return (
    <>
      {/* <h1>The Work</h1> */}
      <Container>
        <Container>
          <Container id="works">
            {/* HERE I'LL MAKE A DYNAMIC VERSION OF MAPPING IT INTO ROWS AND COLS */}
            {media.length > 0 && groupedPosts.map((postSubArray, i) => <WorkRow key={i} posts={postSubArray} media={groupedMedia[i]} />)}

            {/* HERE I'LL MAKE A STATIC VERSION WITH COLS AND ROWS */}
            {/* <div className="work-row">
              <div className="work-col"></div>
              <div className="work-col"></div>
              <div className="work-col"></div>
            </div>
            <div className="work-row">
              <div className="work-col"></div>
              <div className="work-col empty"></div>
              <div className="work-col empty"></div>
            </div> */}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Work;

// const testJson = [
//   {
//     id: 42,
//     title: {
//       rendered: "Not Your Summer Google Slides",
//     },
//   },
//   {
//     id: 36,
//     title: {
//       rendered: "Test Client1 &#8211; Test Title1",
//     },
//   },
//   {
//     id: 29,
//     title: {
//       rendered: "Test Workpost1 Title",
//     },
//   },
//   {
//     id: 1,
//     title: {
//       rendered: "Hello world!",
//     },
//   },
// ];
