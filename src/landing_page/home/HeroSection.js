import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img src="media/images/No1-King-Logo.png" id="imageofNo1Logo"/>
                </div>
                <div className="col-12 col-lg-6">
                    <p className="paragraphColorNo1 mt-5 pt-5">Born in semi urban city of Bilaspur (C.G.),Shri Jai Narayan Chouksey, completed his post graduation from Robertson College, Jabalpur. He established Lakshmi Narain College of Technology (LNCT), Bhopal in 1994 under the banner of H.K. Kalchuri Education Trust. Since then, With the commitment of<b> “Working Towards Being the Best”</b>, LNCT Group has achieved many milestones. The institute is successfully meeting the objective of producing skilled manpower of the highest quality who is able to cope up with the challenges of ever evolving industrial needs of the country.The Alumni of LNCT Group are working all across the Globe in Big Multi National Companies.</p>
                    <p className="paragraphColorNo1">Today, LNCT Group is one of the Largest and most preferred Educational Group for Engineering, Management, Pharmacy, Medical with ISO-9001 certification and NBA accreditation for many Engineering courses.. Bright young students from all across the country are coming to fulfill their dream in this group.</p>
                    <p className="paragraphColorNo1">The LNCT Campus at Bhopal is spread over a lush green environment of approx. 50 acres. The campus constitutes of many buildings that houses the academics and research centers. In addition to this, the academic building has tutorial rooms, lecture halls, computer and electronics labs and offices of the administrations and faculty. The campus is fully equipped with facilities like Wi-Fi,central library (digital library, Internet lab), digital classrooms, hostel, mess,Central workshop, Auditorium Sports Ground etc.</p>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-9">
                            <h5 className="text-warning">Step into Your Future: Explore LNCT Group of Colleges with Our Virtual Tour!</h5>
                        </div>
                        <div className="col-12 col-lg-3">
                            <Link to="https://tour.lnct.ac.in/LNCT/" target="_blank">
                                <img src="media/images/360-Visual-Logo.png" id="logo360Visual" style={{ width: "100%" }} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default HeroSection;