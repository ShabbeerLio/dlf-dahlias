import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'

const Overview = () => {

    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>The project offers truly well-thought-out apartments characterized by the correspondence of modern architectural solutions with the highest quality finish, which allows the residents of such homes to have a luxurious and comfortable home. </p>
                            <p>Fully furnished with modern facilities such as a club house, gymnasium, swimming pool, mini theatre and beautifully landscaped gardens DLF The Dahlias offers a superior quality of life. Go Towards Business, educational facilities, healthcare organizations shopping malls and entertainment centers and also provide convenient accessibility.</p>
                        </div>
                        <div className="about-detail-box">
                                <div className="about-card">
                                    <span>Starting At</span>
                                    <h5>65 Cr* Onwards</h5>
                                </div>
                                <div className="about-card2">
                                    <span>Location</span>
                                    <h5>At Sector 54, Gurgaon</h5>
                                </div>
                                <div className="about-card2">
                                    <span>CONFIGURATIONS</span>
                                    <h5>4 & 5 BHK APARTMENTS</h5>
                                </div>
                                <div className="about-card">
                                    <span>Status</span>
                                    <h5>New LAUNCH</h5>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
