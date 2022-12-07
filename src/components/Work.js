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
              <div className="work-col"></div>
              <div className="work-col empty"></div>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Work;
