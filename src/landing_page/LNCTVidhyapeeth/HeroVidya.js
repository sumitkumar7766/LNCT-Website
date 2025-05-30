import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="container-fluid p-0 m-0 mt-5">
            <div className="row g-0">
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <img
                        src="media/LNCT/Vidyapith1.png"
                        alt="LNCT CET Banner"
                        className="img-fluid w-75"

                    />
                </div>

                {/* Right Side with Text */}
                <div className="col-md-5 d-flex align-items-center" style={{ backgroundColor: '#e3792d' }}>
                    <div className="text-light p-5">
                        <h1 className="fw-light" style={{ color: '#f0f275', fontSize: "4rem" }}>
                            Your Gateway to Success
                        </h1>
                        <h1 className="fw-bold" style={{ color: '#f0f275', fontSize: '3rem' }}>
                            LNCT CET 2K25
                        </h1>
                        <h4 className="fw-bold" style={{ color: '#f0f275', fontSize: "2.5rem" }}>
                            COMMON ENTRANCE TEST
                        </h4>
                        <p className="fs-4 mt-3 text-white">
                            FOR UG COURSES ONLY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}