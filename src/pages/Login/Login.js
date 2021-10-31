import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap'
import img from "../../assets/login-banner.png"
import logo from "../../assets/logo-full.png"
import useAuth from '../../hooks/useAuth'

function Login() {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <>
            <Row className="m-0">
                <Col xs={12} md={9} className="p-0">
                    <Image src={img} style={{ width: "100%", height: "100%" }} />
                </Col>
                <Col xs={12} md={3} className="p-5 text-light text-center" style={{ backgroundColor: "#001432" }}>
                    <img src={logo} className="mt-5" />
                    <h2 className="mt-3">Please login for booking your hotel réservation.</h2>
                    <button onClick={handleGoogleLogin} className="btn btn-danger mt-5 mb-3"><i className="fab fa-google me-3"></i> <b>LOGIN WITH GOOGLE</b></button>
                    <p>By clicking Login you are agreeing with our Terms of Service and Privacy Policy.</p>

                </Col>
            </Row>
        </>
    )
}

export default Login
