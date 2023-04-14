// import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import Axios from "axios";

function WorkRow(props) {
  const { posts, media, setModalShow, setPost, setSelectedMedia, mediaObj } =
    props;
  // console.log(posts);
  // const [lgShow, setLgShow] = useState(false);
  // const title = decode(post.title.rendered);

  // const fetchImg = async () => {
  //   const res = await Axios.get(`https://wpapibbdostudios.azurewebsites.net/wp-json/wp/v2/media?page=${currentPage}`);
  //   // setMedia(res.data);
  //   setMedia([...media, ...res.data]);
  //   console.log("****setting media****", res.data);
  // };
  // fetchImg();

  function handleClick(e, post, mediaStr) {
    // e.preventDefault();
    setModalShow(true);
    setPost(post);
    setSelectedMedia(mediaStr);
    // console.log("media STR*******", media);
  }

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  function findSourceUrl(post) {
    // have a placeholder img made?
    if (!post.featured_media || !post) return "http://placekitten.com/400/300";
    let ft_media_id = post.featured_media;
    let media = mediaObj[ft_media_id];
    let source_url = media.media_details.sizes.medium_large.source_url;
    return "https://wpapibbdostudios.azurewebsites.net" + source_url;
  }

  function createDivs(postCurArr) {
    let emptyDiv = <div className="work-col empty"></div>;

    if (postCurArr.length === 3) {
      return (
        <React.Fragment>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[0], findSourceUrl(postCurArr[0]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[0])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">
                {decode(postCurArr[0].title.rendered)}
              </h2>
            </div>
          </div>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[1], findSourceUrl(postCurArr[1]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[1])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">
                {decode(postCurArr[1].title.rendered)}
              </h2>
            </div>
          </div>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[2], findSourceUrl(postCurArr[2]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[2])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">
                {decode(postCurArr[2].title.rendered)}
              </h2>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (postCurArr.length === 2) {
      return (
        <React.Fragment>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[0], findSourceUrl(postCurArr[0]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[0])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">
                {decode(postCurArr[0].title.rendered)}
              </h2>
            </div>
          </div>

          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[1], findSourceUrl(postCurArr[1]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[1])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">
                {decode(postCurArr[1].title.rendered)}
              </h2>
            </div>
          </div>
          <div className="outer-container no-display" key="78">
            {emptyDiv}
            <div className="red abs-cont"></div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[0], findSourceUrl(postCurArr[0]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[0])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles cap">
                {decode(postCurArr[0].title.rendered)}
              </h2>
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
  // if (postSubArray.length === 3) {
  // console.log("mediaSubArray", mediaSubArray);
  // return postSubArray.map((post, i) => (
  //   <React.Fragment key={post.id}>
  //     <div className="outer-container pointer" onClick={(e) => handleClick(e, post, mediaSubArray[i])}>
  //       {/* <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[i].source_url})` }}> */}
  //       <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[i].media_details.sizes.medium_large.source_url})` }}>
  //         {/* {post.title.rendered} */}
  //       </div>
  //       <div className="red abs-cont">
  //         <h2 className="post-titles cap">{decode(post.title.rendered)}</h2>
  //       </div>
  //     </div>
  //   </React.Fragment>
  // ));
  // } else if (postSubArray.length === 2) {
  //   return (
  //     <React.Fragment key={postSubArray[0].id}>
  //       <div className="outer-container pointer" key={postSubArray[0].id} onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0].media_details.sizes.medium_large.source_url)}>
  //         <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].source_url})` }}>
  //           {/* {postSubArray[0].title.rendered} */}
  //         </div>
  //         <div className="red abs-cont">
  //           <h2 className="post-titles cap">{decode(postSubArray[0].title.rendered)}</h2>
  //         </div>
  //       </div>
  //       <div className="outer-container pointer" key={postSubArray[1].id} onClick={(e) => handleClick(e, postSubArray[1], mediaSubArray[1].media_details.sizes.medium_large.source_url)}>
  //         <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[1].source_url})` }}>
  //           {/* {postSubArray[1].title.rendered} */}
  //         </div>
  //         <div className="red abs-cont">
  //           <h2 className="post-titles cap">{decode(postSubArray[1].title.rendered)}</h2>
  //         </div>
  //       </div>
  //       <div className="outer-container no-display">
  //         {emptyDiv}
  //         <div className="red abs-cont"></div>
  //       </div>
  //     </React.Fragment>
  //   );
  // } else {
  //   return (
  //     <React.Fragment key={postSubArray[0].id}>
  //       <div className="outer-container pointer" onClick={(e) => handleClick(e, postSubArray[0], mediaSubArray[0])}>
  //         <div className="work-col" style={{ backgroundImage: `url(${"https://wpapibbdostudios.azurewebsites.net" + mediaSubArray[0].media_details.sizes.medium_large.source_url})` }}>
  //           {/* {postSubArray[0].title.rendered} */}
  //         </div>
  //         <div className="red abs-cont">
  //           <h2 className="post-titles cap">{decode(postSubArray[0].title.rendered)}</h2>
  //         </div>
  //       </div>

  //       <div className="outer-container no-display" key="4356">
  //         {emptyDiv}
  //         <div className="red abs-cont"></div>
  //       </div>
  //       <div className="outer-container no-display" key="78">
  //         {emptyDiv}
  //         <div className="red abs-cont"></div>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // }

  function compLength() {
    return true;
    if (!posts || !media) return false;
    if (posts.length === media.length) return true;
    else return false;
  }

  return (
    <>{compLength() && <div className="work-row">{createDivs(posts)}</div>}</>
  );
}

export default WorkRow;
