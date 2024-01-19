"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Dropdown, DropdownButton } from "react-bootstrap";

const VerticalMenu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item>
        <DropdownButton id="dropdown-basic-button" title="Gestion criteres">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/backoffice/pages/validation">Validation annonce</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/backoffice/pages/stats">Statistique</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default VerticalMenu;
