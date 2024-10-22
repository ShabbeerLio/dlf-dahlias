import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.jpg"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
           
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                    <div className="about-title">
                        <h3>DLF The Dahlias Golf Course Road.</h3>
                    </div>
                        <div className="about-detail">
                            {/* <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3> */}
                            <p>Ready To Move Flats in Gurgaon Welcome to DLF The Dahlias, an exclusive residential development situated on Golf Course Road in sector 54 Gurgaon. This upcoming project of DLF speaks volumes for luxury, class along with the comforts of the modern age life and all this at a peaceful corner in the middle of the city. The luxurious townhouses in DLF The Dahlias offer elegant apartment homes, and amenities as well as engaging views of the golf course.</p>
                            <p>These homes are custom built to exquisite detail, while at the same time using current architectural design with traditional opulence. People will have an opportunity to be provided with the modern facilities allowing for productive leisure, green zones, stores, and numerous services that can be situated in the territory or when in proximity with the residential complex. The project ideally is situated in proximity to business districts, superior educational establishments, health care facilities and shopping markets, and easy access.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/dahlias/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="DLF The Dahlias" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
