import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

function WorkRow(props) {
  const { posts, media, setModalShow, setPost, setSelectedMedia } = props;
  // const [lgShow, setLgShow] = useState(false);

  function handleClick(e, post, media) {
    // e.preventDefault();
    setModalShow(true);
    setPost(post);
    setSelectedMedia(media);
    console.log("media*******", media);
  }

  // const { media } = props;
  // console.log(media, "MEDIA");
  // console.log(posts, "posts in workrow component");

  // MAPS OVER SUBARR & ADDS EMPTY DIVS FOR WHEN THERE'S ONLY 2/3 OR 1/3 IN THE ROW
  // https://wpapibbdostudios.azurewebsites.net/wp-content/uploads/ +  2023/01/1_Thumbnail_AARPKeepingScore.png
  // https://wpapibbdostudios.azurewebsites.net/wp-content/uploads/2023/01/1_Thumbnail_AARPKeepingScore.png"
  function createDivs(postSubArray, mediaSubArray) {
    let emptyDiv = <div className="work-col empty"></div>;
    if (postSubArray.length === 3) {
      // console.log("mediaSubArray", mediaSubArray);
      return postSubArray.map((post, i) => (
        <React.Fragment key={post.id}>
          {/* {console.log("hi", post.id)} */}
          <div className="outer-container pointer" onClick={(e) => handleClick(e, post, mediaSubArray[i])}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[i].source_url})` }}>
              {/* {post.title.rendered} */}
            </div>
            <div className="red abs-cont"></div>
          </div>
        </React.Fragment>
      ));
    } else if (postSubArray.length === 2) {
      return (
        <React.Fragment key={postSubArray[0].id}>
          <div className="outer-container pointer" key={postSubArray[0].id} onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0])}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
              {/* {postSubArray[0].title.rendered} */}
            </div>
            <div className="red abs-cont"></div>
          </div>
          <div className="outer-container pointer" key={postSubArray[1].id} onClick={(e) => handleClick(e, postSubArray[1], mediaSubArray[1])}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[1].source_url})` }}>
              {postSubArray[1].title.rendered}
            </div>
            <div className="red abs-cont"></div>
          </div>
          <div className="outer-container no-display">
            {emptyDiv}
            <div className="red abs-cont"></div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={postSubArray[0].id}>
          {/* <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>{postSubArray[0].title.rendered}</Modal.Body>
          </Modal> */}
          <div className="outer-container pointer" onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0])}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
              {/* {postSubArray[0].title.rendered} */}
            </div>
            <div className="red abs-cont"></div>
          </div>

          <div className="outer-container no-display" key="4356">
            {emptyDiv}
            <div className="red abs-cont"></div>
          </div>
          <div className="outer-container no-display" key="78">
            {emptyDiv}
            <div className="red abs-cont"></div>
          </div>
        </React.Fragment>
      );
    }
  }
  return (
    <>
      <div className="work-row">{createDivs(posts, media)}</div>
    </>
  );
}

export default WorkRow;
