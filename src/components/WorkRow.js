import React from "react";

function WorkRow(props) {
  const { posts, media, setModalShow, setPost, setSelectedMedia, mediaObj } =
    props;

  function handleClick(e, post, mediaStr) {
    setModalShow(true);
    setPost(post);
    setSelectedMedia(mediaStr);
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

  // ADD IN LOGIC TO PREVENT INDIVIDUAL ROWS FROM BEING RENDERED, FOR WHATEVER REASON!
  function postMediaCheck() {
    if (!posts || !media) return false;
    return true;
  }

  return (
    <>
      {postMediaCheck() && <div className="work-row">{createDivs(posts)}</div>}
    </>
  );
}

export default WorkRow;
