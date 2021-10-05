import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h1 className="all-programs">All Programs</h1>
            <h3 className="hsc-program">H.S.C programs</h3>
            <div className="services-card">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;