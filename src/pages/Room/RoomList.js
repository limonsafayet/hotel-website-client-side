import React from 'react'
import axios from 'axios';
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import useRooms from '../../hooks/useRooms';

function RoomList() {
    const [roomsData, setRoomsData] = useRooms();
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
                            'Room has been deleted.',
                            'success'
                        )
                        setRoomsData(roomsData.filter(item => item._id !== id));
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
            <Row>
                <Col xs={12} md={12} className="mx-auto card bg-light shadow-lg mt-5 mb-5 p-5">
                    <h2>Room List</h2>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomsData.map((room, index) =>
                                <tr key={room._id}>
                                    <td>{index + 1}</td>
                                    <td>{room.name}</td>
                                    <td>{room.size} SQFT</td>
                                    <td>{room.price}/Night</td>
                                    <td>{room.description}</td>
                                    <td><img src={room.img} alt={room.name} style={{ width: "150px" }} /></td>
                                    <td><Button variant="danger" onClick={() => handleDelete(room._id)}><i className="fas fa-trash-alt"></i></Button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default RoomList
