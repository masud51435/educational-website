import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Subject.css'

const Subject = (props) => {
  const { name, img, course, cost } = props.department;
  return (
    <div>
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

export default Subject;