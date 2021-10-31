import React from 'react'
import axios from 'axios';
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import useBookedRooms from '../../hooks/useBookedRooms';

function ManageBookedRooms() {
    const [bookedRooms, setBookedRooms] = useBookedRooms();
    //console.log(bookedRooms)
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
                axios.delete(`${process.env.REACT_APP_BACKEND_URL}/roombookings/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Booked room has been deleted.',
                            'success'
                        )
                        setBookedRooms(bookedRooms.filter(item => item._id !== id));
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
    const handleEdit = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont to update the status",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`${process.env.REACT_APP_BACKEND_URL}/roombookings/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Updated!',
                            'Status has been updated.',
                            'success'
                        )
                        setBookedRooms(bookedRooms.filter(item => (item._id == id) ? item.status = ((item.status == "true") ? "false" : "true") : item));

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
                <Col xs={12} md={12} className="mx-auto card bg-light shadow-lg mt-5 mb-5 py-5">
                    <h2>Manage Booked Rooms</h2>
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
                                <th>Action</th>
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
                                    <td>
                                        <Button variant="primary" onClick={() => handleEdit(data._id)}><i className="fas fa-pencil-alt"></i> Status</Button>
                                        <Button variant="danger" className="mt-1" onClick={() => handleDelete(data._id)}><i className="fas fa-trash-alt"></i> Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ManageBookedRooms
