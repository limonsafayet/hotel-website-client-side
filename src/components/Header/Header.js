import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import logo from "../../assets/logo.png"

function Header() {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="luxury hotels" /> LUXURY HOTEL</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login"><Button variant="outline-light">Login</Button></Nav.Link>}
                        {user?.displayName ?
                            <Navbar.Text className="ms-3">
                                Signed in as: <span className="text-light">{user?.displayName}</span>
                            </Navbar.Text> : ""
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
