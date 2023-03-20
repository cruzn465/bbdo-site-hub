import React from "react";

function FetchMoreButton(props) {
  const { handleFetch } = props;
  return <div onClick={(e) => handleFetch(e)}>THIS IS A BUTTON</div>;
}

export default FetchMoreButton;
