import React from "react";
import { Link } from "react-router-dom";

function HeaderU() {
    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img src="media/images/N1-Univercity.png" id="imageofNo1Logo" className="p-md-5" />
                </div>
                <div className="col-12 col-lg-6 mt-5">
                    <p className="paragraphColorNo1 mt-5 pt-5 fs-3 text-center fw-bolder">ABOUT LNCT UNIVERSITY</p>
                    <p className="paragraphColorNo1">LNCT University is one of the best private universities in Bhopal and central India. LNCT is synonymous with excellence in higher education. A premier institution providing excellent teaching in Engineering, Management, Pharmacy, Medical, Ayurveda, Agriculture science, Paramedical, Law and other recurring professional studies. It is among the one of the Top University of central India and has always stood in the forefront in meeting the ever growing challenges. To meet the ever growing demand of higher education in India.</p>
                    <p className="paragraphColorNo1 text-light fs-3 text-center fw-bolder mt-5">THE ‘INTERNATIONAL’ EDGE</p>
                    <p className="text-light">LNCT has signed MOUs with premier international universities to impart education with a global outlook</p>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div id="animaterighttoLeftmother">
                            <div id="animaterighttoLeft">
                                <img src="media/Provides/Lnu1.png" id="imageof32YRS1" className="ms-2" />
                                <img src="media/Provides/Lnu2.png" id="imageof32YRS1" className="ms-2" />
                                <img src="media/Provides/Lnu3.jpg" id="imageof32YRS1" className="ms-2" />
                                <img src="media/Provides/Lnu4.png" id="imageof32YRS1" className="ms-2" />
                                <img src="media/Provides/Lnu5.png" id="imageof32YRS1" className="ms-2" />
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderU;