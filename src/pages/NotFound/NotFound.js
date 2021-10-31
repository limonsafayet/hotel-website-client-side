import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function NotFound() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="mx-auto mt-5 mb-5 text-center">
                    <h1><b>404</b></h1>
                    <h3>Sorry Page Not Found</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
