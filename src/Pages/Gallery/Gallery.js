import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const Gallery = (props) => {

    const [model, setModel] = useState(false);
    const [imgview, setImgview] = useState('')

    const getImg = (img) => {
        setImgview(img);
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

     
        // Load the Google Analytics script only once
        const gaScriptId = 'ga-gtag';
        if (!document.getElementById(gaScriptId)) {
            const script = document.createElement('script');
            script.id = gaScriptId;
            script.async = true;
            // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S2XS9C6S8C';
            document.head.appendChild(script);

            script.onload = () => {
                gtag('js', new Date());
                // gtag('config', 'G-S2XS9C6S8C');
            };
        }
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <>

            <div className='Gallery'>
                <div className='Gallery-main'>
                    <div className="Page-title">
                        <h1>DLF The Dahlias Gallery</h1>
                    </div>
                    <div className={model ? "model open" : "model"}>
                        <IoMdClose onClick={closeModel} />
                        <img src={imgview} alt="DLF The Dahlias Golf Course Road" />
                    </div>
                    <div className="gallery-box">
                        <div className="gallery-items1">
                            <img src={GalleryData[0].cover} alt={GalleryData[0].alttag} onClick={() => getImg(GalleryData[0].cover)} />
                        </div>
                        <div className="gallery-items2">
                            {GalleryData.slice(1, 5).map((item) => (
                                <img key={item.id} src={item.cover} alt={item.alttag} onClick={() => getImg(item.cover)} />
                            ))}
                        </div>
                    </div>
                    <div className="gallery-box2">
                        {GalleryData.slice(5).map((item) => (
                            <img key={item.id} src={item.cover} alt={item.alttag} onClick={() => getImg(item.cover)} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
