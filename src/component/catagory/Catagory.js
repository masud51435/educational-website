import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Catagory.css'

const Catagory = (props) => {
  const { name, img, course, cost } = props.catagory;
  return (
    <div className="cata">
      <Col>
        <Card className="container card">
          <Card.Body>
            <img src={img} alt="" />
            <Card.Title>{name}</Card.Title>
            <Card.Text>{course}</Card.Text>
            <Card.Text>$ {cost}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Catagory;