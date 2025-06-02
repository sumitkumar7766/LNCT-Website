import React from "react";
import { Link } from "react-router-dom";

export default function ContactJNCT() {
    return (
        <div className="text-white py-5">
            <div className="container">
                <h1 className="text-center pt-4 pb-4">Contact Us!</h1>
                <div className="row text-start">
                    <div className="col-md-4 mb-4 text-center fw-bolder">
                        <h5><i className="bi bi-telephone me-2"></i>Call for us !</h5>
                        <h3 className="fw-bold mt-3">0755-6615600</h3>
                        <ul className="list-unstyled mt-3">
                            <li>&raquo; Office: 07556615607</li>
                            <li>&raquo; Mobile: 9109180721</li>
                            <li>&raquo; Admission Cell: 7440777555</li>
                            <li>&raquo; T&P Cell: 9039697117</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 text-center fw-bolder">
                        <h5><i className="bi bi-envelope me-2"></i>E-mail us !</h5>
                        <ul className="list-unstyled mt-3">
                            <li>&raquo; contact@jnctbhopal.ac.in</li>
                            <li>&raquo; info@jnctbhopal.ac.in</li>
                            <li>&raquo; Student Verification - verify@jnctbhopal.ac.in</li>
                            <li>&raquo; Jobs - info@jnctbhopal.ac.in</li>
                            <li>&raquo; Support - digital@jnctbhopal.ac.in</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 text-center fw-bolder">
                        <h5><i className="bi bi-link-45deg me-2"></i>Useful Links</h5>
                        <ul className="list-unstyled mt-3">
                            <li>&raquo; ADMISSION 2024</li>
                            <li>&raquo; ONLINE ADMISSION</li>
                            <li>&raquo; STUDENT LOGIN</li>
                            <li>&raquo; FACULTY LOGIN</li>
                            <li>&raquo; CAREERS JNCT Bhopal</li>
                            <li>&raquo; TRANSPORT / BUS ROUTE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};