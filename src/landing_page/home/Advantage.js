import React from "react";
import { Link } from "react-router-dom";

function Advantage() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center text-light mb-5">LNCT ADVANTAGE ?</h1>
                <div className="col-12 col-lg-6">
                    <img src="media/Provides/Advantage1.png" className="w-100 p-5" />
                </div>
                <div className="col-12 col-lg-6">
                    <table className="table table-borderless bg-transparent w-100 h-100">
                        <tbody className="bg-transparent">
                            <tr style={{ height: "100px" }}>
                                <td className="col-1 align-middle text-light bg-transparent border-bottom" id="hoverthetablechangecolorAdv">
                                    <p className="fs-5 fw-bold d-flex align-items-center">
                                        Explore our state-of-the-art facilities: Idea Lab, Electric Vehicle Lab, and Drone Lab.
                                        <p className="text-light fs-2 ps-2"><i class="fa-solid fa-right-to-bracket"></i></p>
                                    </p>
                                </td>
                            </tr>
                            <tr style={{ height: "100px" }}>
                                <td className="col-1 align-middle text-light bg-transparent border-bottom" id="hoverthetablechangecolorAdv">
                                    <p className="fs-5 fw-bold d-flex align-items-center">
                                        30+ Clubs/Chapters for Technical, Sports, Research, StartUps, Placements
                                        <p className="text-light fs-2 ps-2"><i class="fa-solid fa-right-to-bracket"></i></p>
                                    </p>
                                </td>                            </tr>
                            <tr style={{ height: "100px" }}>
                                <td className="col-1 align-middle text-light bg-transparent border-bottom" id="hoverthetablechangecolorAdv">
                                    <p className="fs-5 fw-bold d-flex align-items-center">
                                        KLICK, EDIIC & AIIC Innovation & Entrepreneurship Centers to foster startup ideas
                                        <p className="text-light fs-2 ps-2"><i class="fa-solid fa-right-to-bracket"></i></p>
                                    </p>
                                </td>                            </tr>
                            <tr style={{ height: "100px" }}>
                                <td className="col-1 align-middle text-light bg-transparent border-bottom" id="hoverthetablechangecolorAdv">
                                    <p className="fs-5 fw-bold d-flex align-items-center">
                                        Coursera, NPTEL Courses for Global Exposure & Knowledge
                                        <p className="text-light fs-2 ps-2"><i class="fa-solid fa-right-to-bracket"></i></p>
                                    </p>
                                </td>                            </tr>
                            <tr style={{ height: "100px" }}>
                                <td className="col-1 align-middle text-light bg-transparent border-bottom" id="hoverthetablechangecolorAdv">
                                    <p className="fs-5 fw-bold d-flex align-items-center">
                                        260+ Recruiters like Amazon, Wipro, IBM, Cognizant, CapeGemini
                                        <p className="text-light fs-2 ps-2"><i class="fa-solid fa-right-to-bracket"></i></p>
                                    </p>
                                </td>                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Advantage;