import React from "react";
import { Link } from "react-router-dom";

function HeroSectionVID() {
    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <h1 className="text-center text-light pb-5">LNCTVU BEST PRIVATE UNIVERSITY IN INDORE</h1>
                <div className="col-12 col-lg-6">
                    <img src="media/LNCT/Vidyapith2.png" id="imageofNo1Logo" />
                </div>
                <div className="col-12 col-lg-6">
                    <h2 className="text-light">LNCT Vidhyapeeth University Indore | </h2>
                    <h2 className="text-warning">Top Educational Group In India</h2>
                    <p className="paragraphColorNo1">
                        LNCT Vidhyapeeth University is one of the best universities in Indore and in central India. Its year of establishment is 2021.</p>
                    <p className="paragraphColorNo1">At Indore, it is one of the pioneer University for studying the Corporate-Ready courses in the best way. The classes and labs are handled by well-experienced faculty members. The labs are equipped with the state-of-the-art equipments. At LNCT Vidhyapeeth University, we follow the fine and well research teaching tactics that help the students to learn the concepts theoretically as well as practically in an innovative way. We believe in imparting lifelong learning so that the students can utilize it in their career span.</p>
                    <p className="paragraphColorNo1">Including the state-of-the-art infrastructure, we have experienced professors having long years of proven track record in academics. We offer undergraduate courses and certification programs in many domain.</p>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-9">
                            <h5 className="text-warning">Step into Your Future: Explore with Our Virtual Tour!</h5>
                        </div>
                        <div className="col-12 col-lg-3">
                            <Link to="https://lnct.ac.in/LNCTVU360.htm" target="_blank">
                                <img src="media/images/360-Visual-Logo.png" id="logo360Visual" style={{ width: "100%" }} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default HeroSectionVID;