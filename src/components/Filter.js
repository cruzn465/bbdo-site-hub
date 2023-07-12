import React from "react";
import { Dropdown } from "react-bootstrap";
import { useState, useRef } from "react";

function Filter({ totPost, setPosts }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSelect = (e) => {
    const strE = String(e);
    let filteredPosts = [];
    if (strE === "1") {
      filteredPosts = totPost;
    } else {
      for (let i = 0; i < totPost.length; i++) {
        const curPost = totPost[i];
        for (let j = 0; j < curPost.categories.length; j++) {
          let cur = String(curPost.categories[j]);
          if (cur === strE) {
            filteredPosts.push(curPost);
            break; // Exit the inner loop if a match is found
          }
        }
      }
    }
    setPosts(filteredPosts);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-end">
      <div id="filter-spacer"></div>

      <Dropdown
        title="Dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onSelect={handleSelect}
        className="work-sans-font"
        show={isOpen}
      >
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          FILTER BY
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* <Dropdown.Item href="#/action-1">ALL</Dropdown.Item> */}
          <Dropdown.Item eventKey="1">ALL</Dropdown.Item>
          <Dropdown.Item eventKey="3">BRANDED + DOCU-STYLE</Dropdown.Item>
          <Dropdown.Item eventKey="4">COMMERCIAL SPOTS</Dropdown.Item>
          <Dropdown.Item eventKey="5">CREATOR + SOCIAL</Dropdown.Item>
          <Dropdown.Item eventKey="8">DIGITAL</Dropdown.Item>
          <Dropdown.Item eventKey="9" className="last-dropdown-item">
            EXPERIENTIAL + INTERACTIVE
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filter;
