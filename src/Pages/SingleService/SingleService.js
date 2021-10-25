import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceId } = useParams()

    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>This is single service {serviceId}</h2>
            <h3>{service.title}</h3>
        </div>
    );
};

export default SingleService;