import React from 'react';
import { useState, useEffect } from 'react';
import { TwoServiceIco } from '../../../images';
import PageSpinner from '../../PageSpinner';
import "./ServiceCardAdmin.scss"

const ServiceCardAdmin = ({ status, category }) => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/services/' + category, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                console.log(result[0]);
                setService(result[0]);
                setLoading(false)
            })
    }, [])

    const statusBtn = status === "Done" ? 'success' : status === "OnGoing" ? 'warning' : 'danger'


    return (
        <div className="col-md-6 mb-4" >
            {loading && <PageSpinner />}
            {service &&
                <div className="service-card-admin p-4 bg-white">
                    <div className="d-flex justify-content-between">
                        <img src={"http://localhost:4000/" + service.icon} className=" service-icon" alt="service" />

                        <button className={"btn align-self-start btn-" + statusBtn}>{status} </button>
                    </div>
                    <h5 className="mt-3">{service.title}</h5>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit ullam ducimus.</p>
                </div>}
        </div>
    );
};

export default ServiceCardAdmin;