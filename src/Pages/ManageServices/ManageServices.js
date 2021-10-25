import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('DELETED')
                    const remainingUser = services.filter(service => service._id !== id)
                    setServices(remainingUser)
                }
            })

    }


    return (
        <div>
            <h2>Manage services</h2><br />
            {
                services.map(service => <h5><li>{service.title} <button onClick={() => handleDelete(service._id)}>Delete</button></li></h5>)
            }
        </div>
    );
};

export default ManageServices;