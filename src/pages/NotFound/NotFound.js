import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function NotFound() {
    return (
        <Container>
            <Row className="mb-5">
                <Col xs={12} md={6} className="mx-auto mt-5 mb-5 text-center">
                    <img src="http://www.404.ie/assets/img/logo_blue.png" alt="404" className="mb-3 img-fluid" />
                    <h1>Sorry Page Not Found</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
