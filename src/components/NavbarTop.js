import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarTop() {
  const isLogin = false;
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png?w=740"
            height={30}
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
                <img
                  src="https://cdn.dribbble.com/userupload/2669446/file/original-ee4e7360a209eda6a4517eced70b0a0e.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
                  alt="profile"
                  height={30}
                  className="rounded-circle px-3 mx-3"
                />
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="login"
                className="btn btn-sm btn-outline-warning px-3 mx-3 "
              >
                {" "}
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
