import React, { useEffect, useState } from 'react';
import Catagory from '../catagory/Catagory';
import './Catagories.css'

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch('./subject.json')
      .then(res => res.json())
      .then(data => setCatagories(data));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Our Featured Services</h1>
      <p className="mb-5">Choose any services you want for your business web application, <br /> your new subject or choose whice subject you like more.</p>
      <div className="all-data">
        {
          catagories.map(catagory => <Catagory
            key={catagory.name}
            catagory={catagory}
          ></Catagory>)
        }
      </div>
    </div>
  );
};

export default Catagories;