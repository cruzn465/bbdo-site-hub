import React from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

function Filter({ handleSelect }) {
  return (
    <>
      <Dropdown title="Dropdown right" onSelect={handleSelect}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          FILTER BY
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* <Dropdown.Item href="#/action-1">ALL</Dropdown.Item> */}
          <Dropdown.Item eventKey="1">ALL</Dropdown.Item>
          <Dropdown.Item eventKey="3">BRANDED + DOCU-STYLE</Dropdown.Item>
          <Dropdown.Item eventKey="4">COMMERCIAL SPOTS</Dropdown.Item>
          <Dropdown.Item eventKey="5">CREATOR + SOCIAL</Dropdown.Item>
          {/* <Dropdown.Item eventKey="?">DIGITAL</Dropdown.Item> */}
          <Dropdown.Item eventKey="9">EXPERIENTIAL + INTERACTIVE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* JUST IN CASE I NEED A DROPDOWN BUTTON INSTEAD OF A DROPDOWN? IDK THE DIFFERENCE*/}
      {/* <DropdownButton
        title="FILTER BY"
        variant="light"
        onSelect={handleSelect}
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item eventKey="1">ALL</Dropdown.Item>
        <Dropdown.Item eventKey="2">BRANDED + DOCU-STYLE</Dropdown.Item>
        <Dropdown.Item eventKey="3">COMMERCIAL SPOTS</Dropdown.Item>
        <Dropdown.Item eventKey="4">CREATOR + SOCIAL</Dropdown.Item>
        <Dropdown.Item eventKey="5">DIGITAL</Dropdown.Item>
        <Dropdown.Item eventKey="6">EXPERIENTIAL + INTERACTIVE</Dropdown.Item>
      </DropdownButton> */}

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
