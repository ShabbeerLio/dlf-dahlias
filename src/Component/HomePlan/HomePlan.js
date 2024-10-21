import React from 'react'
import "./HomePlan.css"
import Form from '../Form/Form'
import homepim from "../../Assets/About/Interested.jpg"

const HomePlan = () => {

    return (
        <div className='HomePlan'>
            <div className='HomePlan-main'>
                <div className="homeplan-box">
                    <div className="homeplan-left">
                        <img src={homepim} alt="DLF The Dahlias" />
                        
                    </div>
                    <div className="homeplan-right">
                        <div className="walkthrough-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePlan
