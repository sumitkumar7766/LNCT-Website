import React from "react";
import { Link } from "react-router-dom";

function HeroSection2() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-12 col-lg-8" id="animaterighttoLeftmother">
                    <div id="animaterighttoLeft">
                        <img src="media/images/32YRS-03-min-300x300.png" id="imageof32YRS" className="ms-5" />
                        <img src="media/images/Nirf.png" id="imageof32YRS" className="ms-5" />
                        <img src="media/images/png-clipart-cisco-systems-ccna-computer-network-cisco-networking-academy-technology-computer-network-electronics.png" id="imageof32YRS" className="ms-5" />
                        <img src="media/images/AWS_Academy_Cloud.png" id="imageof32YRS" className="ms-5" />
                        <img src="media/images/nirf-logo.webp" id="imageof32YRS" className="ms-5" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <img src="media/images/1.12Cr-Logo.png" width="90%" className="ps-5" />
                        </div>
                        <div className="col-12 col-lg-9 pb-5">
                            <h1 className="ps-2 pt-3 text-light fw-bold">Join The League of Achievers!</h1>
                            <p className="ps-2 text-light text-justify">LNCT Group of College is one of the <b><i>Top engineering college in Bhopal, MP </i></b>and Central India. LNCT Synonymous with excellence in higher education with 32+ Years of Academic Excellence and Discipline.</p>
                            <button className="btn btn-lg btn-outline-success ms-2 text-light"> Admission Open </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <img src="media/images/LNCT-Baner1.png" id="imageofNo1Baner" className="ms-5" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection2;