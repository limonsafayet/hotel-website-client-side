import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="luxury hotels" /> LUXURY HOTEL</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        {user?.email ?
                            <>
                                <Nav.Link as={Link} to="/room/create">Create Room</Nav.Link>
                                <Button onClick={logOut} variant="outline-light ms-2">Logout</Button>
                            </>
                            :
                            <Nav.Link as={Link} to="/login"><Button variant="outline-light">Login</Button></Nav.Link>}
                        {user?.displayName ?
                            <Navbar.Text className="ms-3">
                                <img src={user?.photoURL} style={{ width: "50px", borderRadius: "50%" }} />
                            </Navbar.Text> : ""
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
