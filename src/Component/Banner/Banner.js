import React from 'react'
import bannerimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="DLF The Dahlias" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>DLF The Dahlias</h2>
                        <h5>At Golf Course Road, Sector 54, Gurgaon</h5>
                        <h5>Exquisite European-inspired architecture blending classic elegance with modern flair.</h5>
                        <p>Premium 4 & 5  Apartments & Penthouse | Price Starts <span> ₹ 65 Cr*</span> </p>
                        {/* <p>Possession in December 2028</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
