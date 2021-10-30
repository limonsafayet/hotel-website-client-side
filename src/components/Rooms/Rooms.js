import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleRoom from './SingleRoom'

function Rooms() {
    return (
        <Container>
            <Row className="text-center">
                <h1 className="mb-5" style={{ marginTop: "5rem" }}>Our Rooms</h1>
                <SingleRoom></SingleRoom>
                <div className="mb-5"></div>
            </Row>
        </Container>
    )
}

export default Rooms
