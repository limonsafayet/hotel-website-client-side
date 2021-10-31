import React from 'react'
import logo from "../../assets/logo-full.png"

function Footer() {
    return (

        <footer className="text-center text-lg-start bg-dark" style={{ color: "#FFFAFA" }}>

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>



                <div>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

            </section>

            <section>
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logo} alt="LS Hospital Ltd" />
                            </h6>
                            <p>
                                LUXURY HOTEL is one of the best five star standard premium hotel in Cox's Bazar.
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                DHAKA OFFICE
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Gulshan Main Road, Dhaka</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                dhk@luxuryhotel.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +88 01713388855</p>
                            <p><i className="fas fa-print me-3"></i> +88 02 8145622</p>
                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                COX'S BAZAR OFFICE
                            </h6>
                            <p><i className="fas fa-home me-3"></i>Hotel Motel Zone, Kolatoly Road,
                                Cox's Bazar</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@luxuryhotel.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +88 01713377755</p>
                            <p><i className="fas fa-print me-3"></i> +88 02 8145682</p>
                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-4" style={{ backgroundColor: "black" }}>
                © 2021 Copyright: <b>LUXURY HOTEL</b>

            </div>

        </footer>

    )
}

export default Footer
