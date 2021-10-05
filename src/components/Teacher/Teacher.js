import React from 'react';
import { Card } from 'react-bootstrap';
import './Teacher.css';
const Teacher = (props) => {
    const { img, name, profession, institute, department } = props.teacher;
    return (
        <div>

            <Card className="teacher">
                <Card.Img className="teachers-img" style={{ width: '350px', height: '350px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h2>{name}</h2>
                    </Card.Title>
                    <Card.Text>
                        <h4>Profession:{profession}</h4>
                        <h5>Institute: {institute}</h5>
                        <h5>Department: {department}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teacher;