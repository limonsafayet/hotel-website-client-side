import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

function SingleRoom({ room }) {
    const { _id, name, size, price, img, description } = room;
    return (
        <>
            <Col xs={12} md={4} className="mb-4">
                <Card className="border rounded-3 shadow-lg">
                    <img src={img} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>{name}</h4>
                        <p>Room Size: <b>{size}</b> sqft</p>
                        <p>{description}</p>
                        <p>BDT- <b>{price}</b>/Night</p>
                        <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                    </div>
                </Card>
            </Col>
        </>
    )
}

export default SingleRoom
