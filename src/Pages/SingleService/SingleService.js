import React from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>This is single service {serviceId}</h2>
        </div>
    );
};

export default SingleService;