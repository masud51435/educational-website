import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div  className="text">
        <h4 style={{ color: "#ff5421", paddingTop: "40px", paddingBottom:"10px" }}>STAY RELAX</h4>
        <h1 style={{ color: "white", fontSize: '45px'}}>Start Your Upcoming <br /> <span style={{ color: "#ff5421" }}>Education/E-learning with</span> <br />
          West Bengal University of Technology</h1>
      </div>
      <div className="text-light">
        <p className="end">© 2018 All Rights Reserved Maulana Abul Kalam Azad University of Technology, W.B.</p>
      </div>
    </div>
  );
};

export default Footer;