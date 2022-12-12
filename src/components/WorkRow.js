import React from "react";

function WorkRow(props) {
  const { posts } = props;

  // MAPS OVER SUBARR & ADDS EMPTY DIVS FOR WHEN THERE'S ONLY 2/3 OR 1/3 IN THE ROW
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
  }
  return <div className="work-row">{createDivs(posts)}</div>;
}

export default WorkRow;
