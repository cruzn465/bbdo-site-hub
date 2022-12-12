import React from "react";
// import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

function Work() {
  const testJson = [
    {
      id: 42,
      title: {
        rendered: "Not Your Summer Google Slides",
      },
    },
    {
      id: 36,
      title: {
        rendered: "Test Client1 &#8211; Test Title1",
      },
    },
    {
      id: 29,
      title: {
        rendered: "Test Workpost1 Title",
      },
    },
    {
      id: 1,
      title: {
        rendered: "Hello world!",
      },
    },
  ];
  // const [posts, setPosts] = useState(testJson);
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

  const groupedPosts = groupPosts(testJson);
  // let posts = createPostRows(groupedPosts);
  // [[1,2,3], [4]]
  //
  function createPostRows(arr) {
    arr.map((post) => (
      <div className="work">
        testing posts
        {/* {post.title.rendered} */}
      </div>
    ));
    // const res;
    // arr.forEach((subArr) => <div className="work-row">{createDivs(subArr)}</div>);
    arr.forEach((subArr) => {
      return <div>hi</div>;
    });

    // returns the subArray divs
    function createDivs(subArr) {
      let emptyDiv = <div className="work-col empty"></div>;
      if (subArr.length === 3) {
        return subArr.map((post) => (
          <div className="work-col" key={post.id}>
            {post.title.rendered}
          </div>
        ));
      } else if (subArr.length === 2) {
        return (
          <>
            <div className="work-col" key={subArr[0].id}>
              {subArr[0].title.rendered}
            </div>
            <div className="work-col" key={subArr[1].id}>
              {subArr[1].title.rendered}
            </div>
            {emptyDiv}
          </>
        );
      } else {
        return (
          <>
            <div className="work-col" key={subArr[0].id}>
              {subArr[0].title.rendered}
            </div>
            {emptyDiv}
            {emptyDiv}
          </>
        );
      }
      //  for (let i = 0; i < subArr.length; i++) {}
    }
  }

  // console.log("groupedPosts", groupedPosts);
  // console.log("GROUPED POSTS", groupedPosts);
  // console.log("GROUPED POSTS[0]", groupedPosts[1]);

  return (
    <>
      <h1>The Work</h1>
      <Container>
        <Container>
          <Container id="works">
            {/* {posts.map((post) => (
          <div className="work" key={post.id}>
            {post.title.rendered}
          </div>
        ))} */}
            {/* HERE I'LL MAKE A DYNAMIC VERSION OF MAPPING IT INTO ROWS AND COLS */}

            {/* HERE I'LL MAKE A STATIC VERSION WITH COLS AND ROWS */}
            <div className="work-row">
              <div className="work-col"></div>
              <div className="work-col"></div>
              <div className="work-col"></div>
            </div>
            <div className="work-row">
              <div className="work-col"></div>
              <div className="work-col empty"></div>
              <div className="work-col empty"></div>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Work;
