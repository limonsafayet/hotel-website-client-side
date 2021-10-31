import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap'

function SingleRoom({ room }) {
    const { name, size, price, img, description } = room;
    return (
        <>
            <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="border rounded-3 shadow-lg">
                    <img src={img} alt={name} className="img-fluid mb-2" />
                    <div className="p-3">
                        <h4>{name}</h4>
                        <p>Room Size: <b>{size}</b> sqft</p>
                        <p>{description}</p>
                        <p>BDT- <b>{price}</b>/Night</p>
                        <Link to={{
                            pathname: `/room-book`,
                            state: room
                        }}>
                            <Button variant="outline-dark" className="mx-auto mb-3" style={{ width: "150px" }}>Book Now</Button>
                        </Link>

                    </div>
                </Card>
            </Col>
        </>
    )
}

export default SingleRoom
