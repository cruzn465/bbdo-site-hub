import React from "react";
import { Dropdown } from "react-bootstrap";

function Filter({ handleSelect }) {
  return (
    <>
      <Dropdown
        title="Dropdown"
        onSelect={handleSelect}
        className="work-sans-font"
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
          {/* <Dropdown.Item eventKey="?">DIGITAL</Dropdown.Item> */}
          <Dropdown.Item eventKey="9" className="last-dropdown-item">
            EXPERIENTIAL + INTERACTIVE
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* JUST IN CASE I GIVE UP AND WANT TO DO IT FROM SCRATCH?? */}
      {/* <Container className="filter-container">
        <div className="filter-default">FILTER BY</div>
        <div className="filter-container-sub">
          <div>1</div>
          <div>2</div>
        </div>
      </Container> */}
    </>
  );
}

export default Filter;
