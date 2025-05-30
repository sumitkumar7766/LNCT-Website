import React from "react";
import { Link } from "react-router-dom";

export default function AcademicINDORE() {
    return (
        <div className="container text-light">
            <div className="row">
                <div className="col-12 col-lg-7">
                    <p className="text-center fs-5 pt-5 pt-md-0">Are you ready to embark on an incredible <b>Academic Journey ?</b> Look no further!  LNCT Bhopal Indore Campus is thrilled to announce the<b> Admission Open session</b> for the<b> academic year 2025-26</b></p>
                    <img src="media/LNCT/LNCTINDORE3.jpg" className="w-100" />
                    <Link go="https://tour.lnct.ac.in/lnctindore/" className="text-center d-flex justify-content-center">
                        <img src="media/images/360-Visual-Logo.png" style={{ width: "200px" }} className="m-0 p-0" />
                    </Link>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column">
                    <div>

                    </div>
                    <div>
                        <img src="media/LNCT/PRIINDORE.jpg" className="w-100" />
                        <p className="fw-bold mb-0 pb-0 pt-2">Principle</p>
                        <p className="fw-bolder">DR. PRASHANT PUROHIT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}