import React from 'react';
import './Contract.css';

const Contract = () => {
  return (
    <div className="container ">
      <div className="text-black text-center address main">
        <h1 style={{fontWeight:'700', marginBottom:"10px", color:"#ff5421"}}>Our Main Campus</h1>
        <h5> BF Block, Sector 1, Bidhannagar, Kolkata, India</h5>
        <h4>+91 33 2321 0731</h4>
        <h4>makautportal2021@gmail.com </h4>
      </div>
      <div className="text-black text-center address others">
        <h1 style={{fontWeight:'700', marginBottom:"10px", color:"#ff5421"}}>Our Others Campus</h1>
        <h5> P.O HIM, Haldia, West Bengal 721657, India</h5>
        <h4>+91 3224 252 900</h4>
        <h4>HIMportal2021@gmail.com </h4>
        </div>
    </div>
  );
};

export default Contract;