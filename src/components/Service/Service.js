import React from 'react';
import { Card } from 'react-bootstrap';
import './service.css';
const Service = (props) => {
  const { program, img, subjects, price } = props.service;
  return (
    <div>
      <Card>
        <Card.Img width="400px" variant="top" src={img} />
        <Card.Body>
          <Card.Title>Program: {program}</Card.Title>
          <Card.Text>
            <h2>Subjects: {subjects}</h2>
            <h5>Amount:{price}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;