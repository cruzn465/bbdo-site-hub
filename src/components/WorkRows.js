import React from "react";

function WorkRows(props) {
  //   const { posts, media, setModalShow, setPost, setSelectedMedia, mediaObjToBeP } = props;
  const { posts, mediaObj } = props;

  function handleClick(e, post, media) {
    // e.preventDefault();
    // setModalShow(true);
    // setPost(post);
    // setSelectedMedia(media);
    // console.log("media*******", media);
  }

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  // MAPS OVER SUBARR & ADDS EMPTY DIVS FOR WHEN THERE'S ONLY 2/3 OR 1/3 IN THE ROW
  // https://wpapibbdostudios.azurewebsites.net/wp-content/uploads/ +  2023/01/1_Thumbnail_AARPKeepingScore.png
  // https://wpapibbdostudios.azurewebsites.net/wp-content/uploads/2023/01/1_Thumbnail_AARPKeepingScore.png"
  function createDivs(postSubArray, mediaSubArray) {
    let emptyDiv = <div className="work-col empty"></div>;

    if (postSubArray.length === 3) {
      // console.log("mediaSubArray", mediaSubArray);
      return postSubArray.map((post, i) => (
        <React.Fragment key={post.id}>
          <div className="outer-container pointer" onClick={(e) => handleClick(e, post, mediaSubArray[i])}>
            {/* <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[i].source_url})` }}> */}
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[i].media_details.sizes.medium_large.source_url})` }}>
              {/* {post.title.rendered} */}
            </div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">{decode(post.title.rendered)}</h2>
            </div>
          </div>
        </React.Fragment>
      ));
    } else if (postSubArray.length === 2) {
      return (
        <React.Fragment key={postSubArray[0].id}>
          <div className="outer-container pointer" key={postSubArray[0].id} onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0].media_details.sizes.medium_large.source_url)}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
              {/* {postSubArray[0].title.rendered} */}
            </div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">{decode(postSubArray[0].title.rendered)}</h2>
            </div>
          </div>
          <div className="outer-container pointer" key={postSubArray[1].id} onClick={(e) => handleClick(e, postSubArray[1], mediaSubArray[1].media_details.sizes.medium_large.source_url)}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[1].source_url})` }}>
              {/* {postSubArray[1].title.rendered} */}
            </div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">{decode(postSubArray[1].title.rendered)}</h2>
            </div>
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
          <div className="outer-container pointer" onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0])}>
            <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].media_details.sizes.medium_large.source_url})` }}>
              {/* {postSubArray[0].title.rendered} */}
            </div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">{decode(postSubArray[0].title.rendered)}</h2>
            </div>
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

  // IF FT. MEDIA DOESN'T EXIST, MAKE THE DEFAULT A CAT PIC
  // ELSE, FIND THE FT MEDIA BY THE ID IN MEDIA OBJ AND RETURN A URL
  function findSourceUrl(post) {
    if (!post.featured_media || !post) return "http://placekitten.com/400/300";
    let ft_media_id = post.featured_media;
    let media = mediaObj[ft_media_id];
    let source_url = media.media_details.sizes.medium_large.source_url;
    return "https://wpapibbdostudios.azurewebsites.net" + source_url;
  }

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
  
  // LOOP THROUGH THE GROUPED POSTS AND PULL THE MEDIA FROM THE MEDIA OBJECT BY THE ID
  function createDivRows(posts, mediaObj) {
    const groupedPosts = groupPosts(posts);

    let emptyDiv = <div className="work-col empty"></div>;

    // console.log("groupedPosts", groupedPosts);
    for (let i = 0; i < groupedPosts.length; i++) {
      let curArr = groupedPosts[i];
      // console.log(i, groupedPosts.length, groupedPosts,curArr)
      // let acc = ''
      if (curArr.length === 3) { 
        return (
          <React.Fragment key={i}>
            <div
              className="outer-container pointer"
              //  onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0].media_details.sizes.medium_large.source_url)}
            >
              <div className="work-col" style={{ backgroundImage: `url(${findSourceUrl(curArr[0])})` }}></div>
              <div className="red abs-cont">
                <h2 className="post-titles cap">{decode(curArr[0].title.rendered)}</h2>
              </div>
              {/* NEED TO COPY FOR THE OTHER DIVS */}
            </div>
            <div
              className="outer-container pointer"
              //  onClick={(e) => handleClick(e, postSubArray[1], mediaSubArray[1].media_details.sizes.medium_large.source_url)}
            >
              <div className="work-col" style={{ backgroundImage: `url(${findSourceUrl(curArr[1])})` }}></div>
              <div className="red abs-cont">
                <h2 className="post-titles cap">{decode(curArr[1].title.rendered)}</h2>
              </div>
            </div>
            <div
              className="outer-container pointer"
              //  onClick={(e) => handleClick(e, postSubArray[2], mediaSubArray[2].media_details.sizes.medium_large.source_url)}
            >
              <div className="work-col" style={{ backgroundImage: `url(${findSourceUrl(curArr[2])})` }}></div>
              <div className="red abs-cont">
                <h2 className="post-titles cap">{decode(curArr[2].title.rendered)}</h2>
              </div>
            </div>
          </React.Fragment>
        );
      }
      //   else if (postSubArray.length === 2) {
      //     return (
      //       <React.Fragment key={postSubArray[0].id}>
      //         <div className="outer-container pointer" key={postSubArray[0].id} onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0].media_details.sizes.medium_large.source_url)}>
      //           <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
      //             {/* {postSubArray[0].title.rendered} */}
      //           </div>
      //           <div className="red abs-cont">
      //             <h2 className="post-titles cap">{decode(postSubArray[0].title.rendered)}</h2>
      //           </div>
      //         </div>
      //         <div className="outer-container pointer" key={postSubArray[1].id} onClick={(e) => handleClick(e, postSubArray[1], mediaSubArray[1].media_details.sizes.medium_large.source_url)}>
      //           <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[1].source_url})` }}>
      //             {/* {postSubArray[1].title.rendered} */}
      //           </div>
      //           <div className="red abs-cont">
      //             <h2 className="post-titles cap">{decode(postSubArray[1].title.rendered)}</h2>
      //           </div>
      //         </div>
      //         <div className="outer-container no-display">
      //           {emptyDiv}
      //           <div className="red abs-cont"></div>
      //         </div>
      //       </React.Fragment>
      //     );
      //   } else {
      //     return (
      //       <React.Fragment key={postSubArray[0].id}>
      //         <div className="outer-container pointer" onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0])}>
      //           <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].media_details.sizes.medium_large.source_url})` }}>
      //             {/* {postSubArray[0].title.rendered} */}
      //           </div>
      //           <div className="red abs-cont">
      //             <h2 className="post-titles cap">{decode(postSubArray[0].title.rendered)}</h2>
      //           </div>
      //         </div>

      //         <div className="outer-container no-display" key="4356">
      //           {emptyDiv}
      //           <div className="red abs-cont"></div>
      //         </div>
      //         <div className="outer-container no-display" key="78">
      //           {emptyDiv}
      //           <div className="red abs-cont"></div>
      //         </div>
      //       </React.Fragment>
      //     );
      //   }
    }
  }

  function compLength() {
    if (!posts || !mediaObj) return false;
    // IF THERE IS ONE LESS MEDIA IN THE ROW, SIMPLY SKIP THAT ROW
    // THAT WON'T WORK NOW BC I'M GOING TO LOOP THRU EVERYTHING IN THIS COMPONENT
    // INSTEAD, JUST MAKE A DEFAULT BG IMG
    // if (posts.length === Object.keys(mediaObj).length) return true;
    return true;
  }
  return (
    <>
      {" "}
      TEST
      {/* {compLength() && <div className="work-row">{createDivs(posts, media)}</div>} */}
      {compLength() && <div className="work-row">{createDivRows(posts, mediaObj)}</div>}
    </>
  );
}

export default WorkRows;
