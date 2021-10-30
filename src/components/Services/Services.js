import React from 'react'
import { Row, Col } from 'react-bootstrap'
import img from "../../assets/services-back.png"

function Services() {
    return (

        <Row className="m-0 text-light text-center p-5" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>


            <h1 className="mt-5 mb-5">Our Services</h1>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-plane-departure"></i></h4>
                    <h4>Airport Pickup</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-cocktail"></i></h4>
                    <h4>Welcome Drinks</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-utensils"></i></h4>
                    <h4>Buffet Breakfast</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-mug-hot"></i></h4>
                    <h4>Coffee Shop</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-swimming-pool"></i></h4>
                    <h4>Swimming Pool</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-hot-tub"></i></h4>
                    <h4>SPA & Thai Massage</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-umbrella-beach"></i></h4>
                    <h4>Private Beach</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-gamepad"></i></h4>
                    <h4>Indoor Games</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-wifi"></i></h4>
                    <h4>Wi-Fi Internet</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-tshirt"></i></h4>
                    <h4>Laundry Service</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-dumbbell"></i></h4>
                    <h4>Fitness Center</h4>
                </div>
            </Col>
            <Col xs={6} md={2} className="mb-5">
                <div className="border border-light rounded-3 p-3">
                    <h4><i className="fas fa-user-md"></i></h4>
                    <h4>Doctor on Call</h4>
                </div>
            </Col>


        </Row>

    )
}

export default Services
