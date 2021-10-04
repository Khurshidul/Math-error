import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import math_img from '../../images/math-futures.jpg';
import Gallery from '../Gallery/Gallery';
import './DashBoard.css';
const DashBoard = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('./gallery.json')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, []);

    return (
        <div>
            <div>
                <h1 className="gallery-title">Photo Gallery</h1>
                <div className="gallery-photos">
                
                        {
                            photos.map(photo => <Gallery
                                photo={photo}
                            ></Gallery>)
                        }

                </div>

            </div>
            <br />
            <br />
            <h1 className="motiv-title">Gain & Go Apex</h1>
            <br />
            <img className="success-img" src="https://image.shutterstock.com/image-illustration/business-success-concept-target-motivation-260nw-713054818.jpg" alt="" />
            <div>
                <Card className="math">
                    <Card.Img variant="top" src={math_img} />
                    <Card.Body className="services-sample">
                        <Card.Title className="services-title">Services</Card.Title>
                        <Card.Text>
                            Science is the most important part of our every single life. We can learn unbelievable thing by gaining science knowledge. We provide some teachers whose are expart in science subject. The teacher continuing their class and taking class which subject he is expart.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            <h1 className="title-service">SERVICES</h1>
            <div>
                <Card className="all-services">
                    <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/PZvfvHXYLBrbiA_FwfODaFZolmamPlqwSnlMTDgIl_XKdOSKjnPO8DL4F1yUKnbaJWU-_aYs_PQzb3PV6gDpvalmlXgWaDmqK16F6b6ChoKDjbnBpKqaw_VWTEI" />
                    <Card.Body>

                        <Card.Text>
                            <h2>1| We provide qualityfull teachers for individual subjects.</h2>
                            <h2>2| We attached AC in our classrooms as if students can sit peacefully.</h2>
                            <h2>3| Our classrooms keep clean always. </h2>
                            <h2>4| We have special batch for weak students.</h2>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default DashBoard;