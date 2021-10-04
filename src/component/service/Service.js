import React, { useEffect, useState } from 'react';
import Subject from './subject/Subject';
import './Service.css';


const Service = () => {
  const [departments, setDeparments] = useState([]);
  useEffect(() => {
    fetch('./service.json')
      .then(res => res.json())
      .then(data => setDeparments(data));

  }, []);

  return (
    <div className="container">
      <h1>Our Featured Services</h1>
      <p className="mb-5">Choose any services you want for your business web application, <br /> your new subject or choose whice subject you like more.</p>
      <div className="subjects">
        {
          departments.map(department => <Subject
            key={department.name}
            department={department}
          ></Subject>)
        }
      </div>
    </div>
  );
};

export default Service;