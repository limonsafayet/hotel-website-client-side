import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function RoomList() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8} className="mx-auto card bg-light shadow-lg">
                    <h2>Room List</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default RoomList
