import React from 'react';
import './Header.css';
import NavBar from './navbar/NavBar';

const Header = () => {
  return (
    <div className="header">
      <NavBar></NavBar>
      <div className="text-style text-white text-start ps-5">
      <h2 className="mb-4 fw-bold">Indian Leading University</h2>
      <h1 className="style">West Bengal University of Technology</h1>
      </div>
    </div>
  );
};

export default Header;