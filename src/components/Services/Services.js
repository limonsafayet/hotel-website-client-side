import React from 'react'
import { Row, Col } from 'react-bootstrap'
import img from "../../assets/services-back.png"
import "./Services.css"

function Services() {
    return (

        <Row className="m-0 text-light text-center p-5" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>


            <h1 className="mt-5 mb-5">Our Services</h1>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-plane-departure"></i></h4>
                    <h4 className="service-text">Airport Pickup</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-cocktail"></i></h4>
                    <h4 className="service-text">Welcome Drinks</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-utensils"></i></h4>
                    <h4 className="service-text">Buffet Breakfast</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-mug-hot"></i></h4>
                    <h4 className="service-text">Coffee Shop</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-swimming-pool"></i></h4>
                    <h4 className="service-text">Swimming Pool</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-hot-tub"></i></h4>
                    <h4 className="service-text">SPA & Massage</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-umbrella-beach"></i></h4>
                    <h4 className="service-text">Private Beach</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-gamepad"></i></h4>
                    <h4 className="service-text">Indoor Games</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-wifi"></i></h4>
                    <h4 className="service-text">Wi-Fi Internet</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-tshirt"></i></h4>
                    <h4 className="service-text">Laundry Service</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-dumbbell"></i></h4>
                    <h4 className="service-text">Fitness Center</h4>
                </div>
            </Col>
            <Col xs={6} md={3} lg={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-user-md"></i></h4>
                    <h4 className="service-text">Doctor on Call</h4>
                </div>
            </Col>


        </Row>

    )
}

export default Services
