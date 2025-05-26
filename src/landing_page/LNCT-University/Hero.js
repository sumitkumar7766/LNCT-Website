import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
    <div className="container-fluid mt-5">
        <div className="row pt-4">
            <div className="col-12 col-lg-4 m-auto d-flex align-items-center justify-content-center flex-wrap">
                <h1 className="text-center fw-bolder" id="univerText">LNCT UNIVERSITY</h1>
                <p className="text-danger text-center fs-5" id="bodyTextUniver">LNCT University is one of the best private universities in Bhopal and central India. LNCT is synonymous with excellence in higher education.</p>
                <button className="btn text-center" id="Admisionbutt">Admission 2025-2026</button>
            </div>
            <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                <img src="media/images/We-Are-One.png" className="w-75 w-lg-75 m-0 p-0"/>
            </div>
            <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                <img src="media/images/LNCTU-IMG.png" id="imageofNo1Baner" className=" w-lg-75" />
            </div>
        </div>
    </div>
    )
}

export default Hero;