import React from "react";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";

function Filter({ handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <div id="filter-spacer"></div>

      <Dropdown
        title="Dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onSelect={handleSelect}
        className="work-sans-font"
      >
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          FILTER BY
        </Dropdown.Toggle>

        {isOpen && (
          <Dropdown.Menu show={isOpen}>
            {/* <Dropdown.Item href="#/action-1">ALL</Dropdown.Item> */}
            <Dropdown.Item eventKey="1">ALL</Dropdown.Item>
            <Dropdown.Item eventKey="3">BRANDED + DOCU-STYLE</Dropdown.Item>
            <Dropdown.Item eventKey="4">COMMERCIAL SPOTS</Dropdown.Item>
            <Dropdown.Item eventKey="5">CREATOR + SOCIAL</Dropdown.Item>
            {/* <Dropdown.Item eventKey="?">DIGITAL</Dropdown.Item> */}
            <Dropdown.Item eventKey="9" className="last-dropdown-item">
              EXPERIENTIAL + INTERACTIVE
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

export default Filter;
