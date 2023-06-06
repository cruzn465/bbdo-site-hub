import React from "react";

function WorkRow(props) {
  const { posts, setModalShow, setPost, setSelectedMedia, mediaObj } = props;

  function handleClick(e, post, mediaArr) {
    setModalShow(true);
    setPost(post);
    // console.log("MEDIA ARRAY!!!!", mediaArr);
    setSelectedMedia(mediaArr);
  }

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  function findSourceUrl(post) {
    // GET A PLACEHOLDER IMAGE FOR POSTS WITHOUT ANY MEDIA
    if (!post.featured_media || !post) return "http://placekitten.com/400/300";
    let ft_media_id = post.featured_media;
    let media = mediaObj[ft_media_id];
    let source_url = media.media_details.sizes.medium_large.source_url;
    return "https://wpapibbdostudios.azurewebsites.net" + source_url;
  }

  // RETURN AN ARRAY ["video"/"img", VIMEO LINK/PLACEHOLDER IMAGE]
  function determineModalMedia(post) {
    // type & media
    let t;
    let m;
    if (!post) {
      t = "img";
      return [t, "http://placekitten.com/400/300"];
    }
    // USE STATIC IMAGE FROM findSourceUrl
    if (!post.acf.video_url) {
      t = "img";
      return [t, findSourceUrl(post)];
    }
    t = "video";
    m = post.acf.video_url;
    return [t, m];
  }

  // decodes and adds a colon
  function addHoverTitle(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str + ":";
    return txt.value;
  }

  function createDivs(postCurArr) {
    let emptyDiv = <div className="work-col empty"></div>;

    if (postCurArr.length === 3) {
      return (
        <React.Fragment>
          {/* clickable outer container */}
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[0], determineModalMedia(postCurArr[0]))
            }
          >
            {/* bg img */}
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[0])})`,
              }}
            ></div>
            {/* red overlay with text*/}
            <div className="red abs-cont">
              <h2 className="post-titles">
                <span className="hover-title">
                  {postCurArr[0].acf.Client &&
                    addHoverTitle(postCurArr[0].acf.Client)}
                </span>
                {/* {postCurArr[0].acf.Client && <br />} */}
                <span className="cap">
                  {decode(postCurArr[0].title.rendered)}
                </span>
              </h2>
            </div>
          </div>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[1], determineModalMedia(postCurArr[1]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[1])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles">
                <span className="hover-title">
                  {postCurArr[1].acf.Client &&
                    addHoverTitle(postCurArr[1].acf.Client)}
                </span>
                {/* {postCurArr[1].acf.Client && <br />} */}
                <span className="cap">
                  {decode(postCurArr[1].title.rendered)}
                </span>
              </h2>
            </div>
          </div>
          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[2], determineModalMedia(postCurArr[2]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[2])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles">
                <span className="hover-title">
                  {postCurArr[2].acf.Client &&
                    addHoverTitle(postCurArr[2].acf.Client)}
                </span>
                {/* {postCurArr[2].acf.Client && <br />} */}
                <span className="cap">
                  {decode(postCurArr[2].title.rendered)}
                </span>
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
              handleClick(e, postCurArr[0], determineModalMedia(postCurArr[0]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[0])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles">
                <span className="hover-title">
                  {postCurArr[0].acf.Client &&
                    addHoverTitle(postCurArr[0].acf.Client)}
                </span>
                {/* {postCurArr[0].acf.Client && <br />} */}
                <span className="cap">
                  {decode(postCurArr[0].title.rendered)}
                </span>
              </h2>
            </div>
          </div>

          <div
            className="outer-container pointer"
            onClick={(e) =>
              handleClick(e, postCurArr[1], determineModalMedia(postCurArr[1]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[1])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles">
                <span className="hover-title">
                  {postCurArr[1].acf.Client &&
                    addHoverTitle(postCurArr[1].acf.Client)}
                </span>
                {/* {postCurArr[1].acf.Client && <br />} */}
                <span className="cap">
                  {decode(postCurArr[1].title.rendered)}
                </span>
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
              handleClick(e, postCurArr[0], determineModalMedia(postCurArr[0]))
            }
          >
            <div
              className="work-col"
              style={{
                backgroundImage: `url(${findSourceUrl(postCurArr[0])})`,
              }}
            ></div>
            <div className="red abs-cont">
              <h2 className="post-titles">
                <span className="hover-title">
                  {postCurArr[0].acf.Client &&
                    addHoverTitle(postCurArr[0].acf.Client)}
                </span>
                {/* {postCurArr[2].acf.Client && <br />} */}
                <span className="cap">
                  {decode(postCurArr[0].title.rendered)}
                </span>
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

  // ADD IN LOGIC TO PREVENT INDIVIDUAL ROWS FROM BEING RENDERED, FOR WHATEVER REASON!
  function postMediaCheck() {
    if (!posts || !mediaObj) return false;
    return true;
  }

  return (
    <>
      {postMediaCheck() && <div className="work-row">{createDivs(posts)}</div>}
    </>
  );
}

export default WorkRow;
