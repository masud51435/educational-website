import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'

const About = () => {

  return (
    <div className="container mb-4">
      <h1 className="mt-5">About Our University</h1>
      <p>The Indian state of West Bengal is the site of India's first modern university and <br /> 33 universities are  listed under the University Grants Commission.</p>
      <div className="detail">
        <div className="about text-white text-start px-4 py-5">
          <h5 className="mt-2">ABOUT UNIVERSITY</h5>
          <h1 className="mt-4">Welcome to West Bengal University</h1>
          <h5 className="my-4"> West Bengal University of Technology (WBUT), is a public state university located in Kalyani, West Bengal, India. It is funded completely by the Government of West Bengal. It was established in 2001 by the West Bengal legislature. The university provides management and engineering degrees through affiliated colleges and in-house departments.
            The Indian state of West Bengal is the site of India's first modern university and
            33 universities are listed under the University Grants Commission.
          </h5>
          <Button variant="info">Read More</Button>{' '}
        </div>
        <div className="py-5">
          <div className="student-Card">
            <div className="student">
              <h1>5K+</h1>
              <h3>Students</h3>
            </div>
            <div className="cgpa">
              <h1>9.34</h1>
              <h3>Avarage CGPA</h3>
            </div>
            <div className="graduate">
              <h1>97%</h1>
              <h3>Graduates</h3>
            </div>
          </div>
          <div className="pic">
            <div>
              <img src="https://keenitsolutions.com/products/html/educavo/assets/images/about/style2/grid2.jpg" alt="" />
            </div>
            <div>
              <img src="https://keenitsolutions.com/products/html/educavo/assets/images/about/style2/grid1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;