import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

function RoomBook({ location: { state } }) {
    const { register, handleSubmit, reset } = useForm();
    const [checkindate, setCheckInDate] = useState("")
    const [checkoutdate, setCheckOutDate] = useState("")
    const { user } = useAuth()

    const onSubmit = data => {
        //console.log(data);
        const totalPrice = calculatePrice()
        const status = false;
        const finalData = { ...data, totalPrice, status }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/roombookings`, finalData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You',
                        text: 'Your Room Has Been Booked'
                    })
                    reset();
                    setCheckInDate("")
                    setCheckOutDate("")
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }
    const calculatePrice = () => {
        const price = (parseInt(Math.ceil((Math.abs(Date.parse(checkindate) - Date.parse(checkoutdate))) / (1000 * 60 * 60 * 24))) * parseInt(state?.price))
        return price
    }
    return (
        <Container>
            <Row>
                <Col xs={12} md={8} className="mx-auto mt-5 mb-5 card bg-light shadow-lg p-5">
                    <h2 className="mb-5">Room Booking</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="forRoomName">
                            <Form.Label>Room Name</Form.Label>
                            <Form.Control {...register("roomName")} type="text" value={state?.name} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forRoomSize">
                            <Form.Label>Room Size</Form.Label>
                            <Form.Control {...register("roomSize")} type="text" value={state?.size + " SQFT"} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forRoomPrice">
                            <Form.Label>Room Price/Night</Form.Label>
                            <Form.Control {...register("roomPrice")} type="text" value={state?.price + " TK"} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forClientName">
                            <Form.Label>Client's Name</Form.Label>
                            <Form.Control {...register("clientName")} type="text" defaultValue={user?.displayName} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forClientEmail">
                            <Form.Label>Client's Email</Form.Label>
                            <Form.Control {...register("clientEmail")} type="text" value={user?.email} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forClientPhone">
                            <Form.Label>Client's Phone Number</Form.Label>
                            <Form.Control {...register("clientPhone")} type="text" placeholder="Client Phone Number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forRoomDescription">
                            <Form.Label>Client's Address</Form.Label>
                            <Form.Control  {...register("clientAddress")} as="textarea" placeholder="Client's Address" rows={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forCheckInDate">
                            <Form.Label>Check In Date</Form.Label>
                            <Form.Control {...register("checkInDate")} onChange={e => setCheckInDate(e.target.value)} type="date" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forCheckOutDate">
                            <Form.Label>Check Out Date</Form.Label>
                            <Form.Control {...register("checkOutDate")} onChange={e => setCheckOutDate(e.target.value)} type="date" required />
                        </Form.Group>

                        <h2>Total Cost: {(checkindate != "" && checkoutdate != "") ? calculatePrice() : "0"}</h2>

                        <Button className="mt-3" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RoomBook
