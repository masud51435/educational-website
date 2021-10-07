import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
      <Navbar className="nav" fixed="top" >
        <Container className="d-flex justify-content-center">
          <Nav>
            <NavLink className="nav-text mx-5" to="/home">Home</NavLink>
            <NavLink className="nav-text mx-5" to="/about">About</NavLink>
            <NavLink className="nav-text mx-5" to="/service">Services</NavLink>
            <NavLink className="nav-text mx-5" to="/contract">Contract</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;