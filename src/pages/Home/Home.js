import React from 'react'
import { Row } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'
import Rooms from '../../components/Rooms/Rooms'
import Services from '../../components/Services/Services'

function Home() {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <section className="bg-light">
                <Rooms></Rooms>
            </section>
            <Row className="m-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29712.152728699853!2d91.95267627912298!3d21.428494590110116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc868716d4925%3A0xcd3ada60adda3a3b!2sCox&#39;s%20Bazar%20Beach!5e0!3m2!1sen!2sbd!4v1635599515297!5m2!1sen!2sbd" width="100%" height="450" style={{ border: "0", margin: "0px", padding: "0" }} loading="lazy"></iframe>
            </Row>
        </>
    )
}

export default Home
