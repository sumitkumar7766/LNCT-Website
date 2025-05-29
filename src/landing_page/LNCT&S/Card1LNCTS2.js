import React from "react";
import { Link } from "react-router-dom";

function Card1LNCTS2() {
    return (
        <div className="container p-5 mt-5">
            <div className="row text-light">
                <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center align-items-center">
                    <div>
                        <p className="paragraphColorNo1 fs-3 text-center fw-bolder mt-0 mt-lg-5">NBA Accreditation
                        </p>
                        <p className="paragraphColorNo1 mt-0 mt-lg-3 text-center">
                            Another remarkable achievement! Congratulations to Lakshmi Narain College of Technology & Science (LNCTS) for obtaining NBA Accreditation for its Electronics and Communication Engineering and Computer Science Engineering departments. This accreditation underscores our commitment to academic excellence and quality education. Kudos to the faculty, staff, and students for their hard work!</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="media/LNCT/LNCTS.jpg" id="imageofNo1Logo" className="p-md-5" />
                </div>
            </div>
        </div>
    )
}

export default Card1LNCTS2;