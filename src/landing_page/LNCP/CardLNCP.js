import React from "react";
import { Link } from "react-router-dom";

export default  function CradLNCP() {
    return(
        <div className="container text-light">
            <h1 className="text-center pt-5" id="Experiencehead">Lakshmi Narain College of Pharmacy (LNCP) | LNCT Group of Colleges</h1>
            <h5 className="text-center pt-3">Best Infrastructure with State-of-the-Art laboratories, Latest Machines and Smart Classrooms with A/V facility to provide 360 degree academic exposure.</h5>
            <div className="row">
                <h1 className="text-center pt-3 pb-2">Lakshmi Narain College of Pharmacy (LNCP)</h1>
                <div className="col-12 col-lg-6">
                    <h1 className="p-1">NIRF</h1>
                    <h2 className="p-1">LNCP OVERALL NIRF</h2>
                    <h5>About LNCP</h5>
                    <ul className="fw-medium">
                        <li>Graduates of pharmacy degrees work right at the heart of human healthcare, taking on roles relating to the design and development of new treatments, prescription and care management, and advising on the range of medical options available.</li>
                        <li>At LNCP, you will typically take modules focusing on chemistry, human biology and physiology, pharmaceutics (how medicines are made) and pharmacology (how drugs interact with the body).</li>
                        <li>Pharmacy degrees combine academic research with more vocational training and professional pharmacy skills, such as learning about legal and ethical issues, and how to interact with patients.</li>
                        <li>You will learn all about prescriptions, drugs, medications and clinical practice, and practice responding to different scenarios. As you study pharmacy, you may have the opportunity to specialize in a particular type of role (such as new medicine development or patient care), or in a particular field of medical care (such as infectious diseases, or care of the elderly).</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="media/LNCT/LNCP1.jpeg" className="w-100 p-5 pt-0"/>
                </div>
            </div>
        </div>
    )
}