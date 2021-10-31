import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleRoom from './SingleRoom'
import useRooms from '../../hooks/useRooms';
function Rooms() {
    const [roomsData] = useRooms();
    return (
        <Container>
            <Row className="text-center">
                <h1 className="mb-5" style={{ marginTop: "5rem" }}>Our Rooms</h1>
                {
                    roomsData.map(room => <SingleRoom
                        key={room._id}
                        room={room}
                    ></SingleRoom>)
                }
                <div className="mb-5"></div>
            </Row>
        </Container>
    )
}

export default Rooms
