import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import WorkRow from "./WorkRow";

function Work() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // loop through the testJSON array, push in arrays of 3 or less
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
      <h1>The Work</h1>
      <Container>
        <Container>
          <Container id="works">
            {/* HERE I'LL MAKE A DYNAMIC VERSION OF MAPPING IT INTO ROWS AND COLS */}
            {groupedPosts.map((post, i) => (
              <WorkRow key={i} posts={post} />
            ))}

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
