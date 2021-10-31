import React from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import useRooms from '../../hooks/useRooms';

function RoomList() {
    const [roomsData] = useRooms();
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
                                    <td><Button variant="danger"><i className="fas fa-trash-alt"></i></Button></td>
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
