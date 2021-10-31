import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
function RoomForm() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <Container>
            <Row>
                <Col xs={12} md={8} className="mx-auto mt-5 mb-5 card bg-light shadow-lg p-5">
                    <h2 className="mb-5">Create New Room</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="forRoomName">
                            <Form.Label>Room Name</Form.Label>
                            <Form.Control {...register("name")} type="text" placeholder="Room Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forRoomSize">
                            <Form.Label>Room Size</Form.Label>
                            <Form.Control {...register("size")} type="text" placeholder="Room Size" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forRoomPrice">
                            <Form.Label>Room Price</Form.Label>
                            <Form.Control {...register("price")} type="text" placeholder="Room Price" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forImageUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control {...register("img")} type="text" placeholder="Image URL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forRoomDescription">
                            <Form.Label>Room Description</Form.Label>
                            <Form.Control  {...register("description")} as="textarea" placeholder="Room Description" rows={3} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RoomForm
