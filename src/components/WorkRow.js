import React from "react";

function WorkRow(props) {
  const { posts, media } = props;
  // const { media } = props;
  console.log(media, "MEDIA");
  // console.log(posts, "posts in workrow component");

  // MAPS OVER SUBARR & ADDS EMPTY DIVS FOR WHEN THERE'S ONLY 2/3 OR 1/3 IN THE ROW
  // https://wpapibbdostudios.azurewebsites.net/wp-content/uploads/ +  2023/01/1_Thumbnail_AARPKeepingScore.png
  // https://wpapibbdostudios.azurewebsites.net/wp-content/uploads/2023/01/1_Thumbnail_AARPKeepingScore.png"
  function createDivs(postSubArray, mediaSubArray) {
    let emptyDiv = <div className="work-col empty"></div>;
    if (postSubArray.length === 3) {
      return postSubArray.map((post, i) => (
        <div className="work-col" key={post.id} style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[i].source_url})` }}>
          {/* {post.title.rendered} */}
          {/* {post.id} */}
        </div>
      ));
    } else if (postSubArray.length === 2) {
      return (
        <>
          <div className="work-col" key={postSubArray[0].id} style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
            {/* {postSubArray[0].title.rendered} */}
          </div>
          <div className="work-col" key={postSubArray[1].id} style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[1].source_url})` }}>
            {/* {postSubArray[1].title.rendered} */}
          </div>
          {emptyDiv}
        </>
      );
    } else {
      return (
        <>
          <div className="work-col" key={postSubArray[0].id} style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
            {/* {postSubArray[0].title.rendered} */}
          </div>
          {emptyDiv}
          {emptyDiv}
        </>
      );
    }
  }
  return <div className="work-row">{createDivs(posts, media)}</div>;
}

export default WorkRow;
