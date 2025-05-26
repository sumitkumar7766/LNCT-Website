import React from "react";
import { Link } from "react-router-dom";

function Card1() {
    return(
        <div className="container">
            <div className="row">
                <h1 className="text-center text-light">The best private university in Bhopal! Explore our top-notch faculty, modern curriculum, and world-class facilities</h1>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-5 text-light">
                    <p className="fs-5">LNCT University, One of the premier institute of Bhopal, & Best private universities in Central India. With a focus on providing Mazing Teaching across a wide range of <b>professional studies including Engineering, Management, Pharmacy, Medicine, Ayurveda, Agricultural Sciences, Paramedical, Law, and more,</b> </p>
                </div>
                <div className="col-12 col-md-5">
                    <img src="media/Provides/JK.jpg" className="w-100"/>
                </div>
                <div className="col-12 col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-1"></div>
                <div className="col">
                    <p className="paragraphColorNo1 text-light text-align-justify mt-2 fs-5">LNCT University has established itself as a leader in New era of education. Have done Its commitment to meeting the growing demand for higher education in India has led to innovative approaches to teaching and learning, with an emphasis on hands-on training and hands-on experience. <b>LNCT University top-class faculty and state-of-the-art facilities</b> provide students with a supportive and stimulating learning environment, helping them develop the skills and knowledge they need to succeed in their chosen fields. As one of the top universities in Central India, LNCT has always been at the forefront of meeting the challenges of the changing world and preparing the students for the future.</p>
                </div>
                <div className="col-12 col-md-1"></div>
            </div>
        </div>
    )
}

export default Card1;