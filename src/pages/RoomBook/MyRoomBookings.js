import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

function MyRoomBookings() {
    const [bookedRooms, setBookedRooms] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/roombookings/${user?.email}`)
            .then(res => setBookedRooms(res.data))
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${process.env.REACT_APP_BACKEND_URL}/rooms/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        //setCallback(true)
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!'
                        })
                    })

            }
        })
    }
    return (
        <Container>
            <Row className="mb-5">
                <Col xs={12} md={12} className="mx-auto card bg-light shadow-lg mt-5 mb-5 p-5">
                    <h2>My Booked Rooms</h2>
                    <Table striped responsive className="mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Room</th>
                                <th>Size</th>
                                <th>Price/Night</th>
                                <th>Client</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>CheckIn</th>
                                <th>CheckOut</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Cancel Booking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookedRooms.map((data, index) =>
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.roomName}</td>
                                    <td>{data.roomSize}</td>
                                    <td>{data.roomPrice}</td>
                                    <td>{data.clientName}</td>
                                    <td>{data.clientEmail}</td>
                                    <td>{data.clientPhone}</td>
                                    <td>{data.clientAddress}</td>
                                    <td>{data.checkInDate}</td>
                                    <td>{data.checkOutDate}</td>
                                    <td>{data.totalPrice} TK</td>
                                    <td>{data.status == "true" ? <Button variant="success">Approved</Button> : <Button variant="warning">Pending</Button>}</td>
                                    <td><Button variant="danger" onClick={() => handleDelete(data._id)}><i className="fas fa-trash-alt"></i></Button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default MyRoomBookings
