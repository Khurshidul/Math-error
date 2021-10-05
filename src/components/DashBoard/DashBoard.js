import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
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
        {
            photos.length === 0 ?
                <Spinner animation="border" />

                :
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
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/our-services-picture-id470778708?b=1&k=20&m=470778708&s=170667a&w=0&h=ShWQvUpkLBkQgCeGsEDHerLchKvE2hFzfFlurhcYEV8=" />
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

                    <img className="media-img" src="https://media.istockphoto.com/photos/social-media-services-icons-with-blue-background-picture-id1162295677?b=1&k=20&m=1162295677&s=170667a&w=0&h=_dAiaS3S6D2ijXpeENK8wDeEOc_bqiWEEfA5zuVV3w4=" alt="" />


                </div>
        }
        </div>

    );
};

export default DashBoard;