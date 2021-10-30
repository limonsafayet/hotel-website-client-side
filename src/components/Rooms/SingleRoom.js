import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import img from "../../assets/presidential.jpg"

function SingleRoom() {
    return (
        <>
            <Col xs={12} md={4} className="mb-4">
                <Card className="border rounded-3 shadow-lg">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>Presidental Suite</h4>
                        <p>Room Size: <b>1900</b> sqft</p>
                        <p>A comfortable king sized bed, a modern bathroom and beautiful views to help you unwind at the end of a long day.</p>
                        <p>BDT- <b>80,000</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="border rounded-3">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>Presidental Suite</h4>
                        <p>Room Size: <b>1900</b> sqft</p>
                        <p>A comfortable king sized bed, a modern bathroom and beautiful views to help you unwind at the end of a long day.</p>
                        <p>BDT- <b>80,000</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="border rounded-3">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>Presidental Suite</h4>
                        <p>Room Size: <b>1900</b> sqft</p>
                        <p>A comfortable king sized bed, a modern bathroom and beautiful views to help you unwind at the end of a long day.</p>
                        <p>BDT- <b>80,000</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="border rounded-3">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>Presidental Suite</h4>
                        <p>Room Size: <b>1900</b> sqft</p>
                        <p>A comfortable king sized bed, a modern bathroom and beautiful views to help you unwind at the end of a long day.</p>
                        <p>BDT- <b>80,000</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="border rounded-3">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>Presidental Suite</h4>
                        <p>Room Size: <b>1900</b> sqft</p>
                        <p>A comfortable king sized bed, a modern bathroom and beautiful views to help you unwind at the end of a long day.</p>
                        <p>BDT- <b>80,000</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="border rounded-3">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>Presidental Suite</h4>
                        <p>Room Size: <b>1900</b> sqft</p>
                        <p>A comfortable king sized bed, a modern bathroom and beautiful views to help you unwind at the end of a long day.</p>
                        <p>BDT- <b>80,000</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
        </>
    )
}

export default SingleRoom
