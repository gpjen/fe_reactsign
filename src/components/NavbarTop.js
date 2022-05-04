import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ModalLogin } from "./ModalLogin";

export default function NavbarTop() {
  const isLogin = false;
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png?w=740"
            width={30}
            height30
            alt="icon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 px-3 text-center">
            <Nav.Link as={Link} to="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
              Contact
            </Nav.Link>
            {isLogin ? (
              <Nav.Link as={Link} to="profile">
                Profile
              </Nav.Link>
            ) : (
              <ModalLogin />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
