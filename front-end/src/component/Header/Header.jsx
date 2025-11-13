import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import logo from '../../assets/image/core-img/logo.png';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" height="50" />
           */}
           <img src="" alt="" />
        </Navbar.Brand>

        {/* Hamburger / Collapse toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
