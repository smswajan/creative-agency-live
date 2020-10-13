import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { OneServiceIco, ThreeServiceIco, TwoServiceIco } from '../../images';
import "./Services.scss"

const Services = () => {
    const serviceData = [
        {
            id: 1,
            icon: OneServiceIco,
            title: "Web & Mobile design",
            description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
        {
            id: 2,
            icon: TwoServiceIco,
            title: "Graphic design",
            description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
        {
            id: 3,
            icon: OneServiceIco,
            title: "Web development",
            description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
    ]
    return (
        <section className="pt-5 pb-5 mt-5">
            <Container>
                <h2 className="text-center pb-4">Provide awesome <span className="text-success">services</span> </h2>
                <Row>
                    {
                        serviceData.map(item => <ServiceCard info={item} key={item.id} />)
                    }

                </Row>
            </Container>
        </section>
    );
};

export default Services;

const ServiceCard = ({ info }) => {
    const { icon, title, description } = info;

    return (
        <div className="col-md-4 p-4">
            <div className="service-card p-5 text-center">
                <img src={icon} alt="" className="service-icon mb-3" />
                <h4 className="mb-3" >Title</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}