import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
      <Navbar className="nav" fixed="top">
        <Container className="d-flex justify-content-center">
          <Nav>
            <Nav.Link className="nav-text mx-5" href="/home">Home</Nav.Link>
            <Nav.Link className="nav-text mx-5" href="/about">About</Nav.Link>
            <Nav.Link className="nav-text mx-5" href="/service">Services</Nav.Link>
            <Nav.Link className="nav-text mx-5" href="/contract">Contract</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;