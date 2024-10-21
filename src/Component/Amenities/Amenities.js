import React from 'react'
import AmenitiesData from './AmenitiesData'
import "./Amenities.css"

const Amenities = () => {
    return (
        <div className='Amenities'>
            <div className='Amenities-main'>
                <h2>Amenities</h2>
                <div className='Amenities-box'>
                    {AmenitiesData.map((item, index) => (
                        <div className='Amenities-card' style={{backgroundColor: `${item.color}`}}>
                    <p>{item.cover}</p>
                    <h5>{item.title}</h5>
                </div>
                    ))}
            </div>
        </div>
        </div >
    )
}

export default Amenities
