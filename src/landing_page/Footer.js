import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-dark text-light'>
            <hr />
            <div className='container pt-5'>

                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-12 col-md-6 ps-lg-5 pt-md-5'>
                                <img src='media/images/LNCT-Logo.png' style={{ width: "35%" }}
                                    alt="Logo" />
                                <p className='pt-3 mb-3' style={{ fontSize: "12px" }}>Copyright © 2025 H.K. KALCHURI EDUCATION TRUST <br />All rights reserved.</p>
                                <div className='d-flex mb-2 fs-5 text-muted'>
                                    <i class="fa-brands fa-x-twitter fs-4" id='twitterX'></i>
                                    <i class="fa-brands fa-facebook ps-3 fs-4" id='Facebook'></i>
                                    <i class="fa-brands fa-square-instagram fs-4 ps-3" id='Instagram'></i>
                                    <i class="fa-brands fa-linkedin fs-4 ps-3" id='LinkDin'></i>
                                </div>
                                <div className='w-50'>
                                    <hr />
                                </div>
                                <div className='d-flex fs-5 text-muted'>
                                    <i class="fa-brands fa-youtube fs-4" id='YouTube'></i>
                                    <i class="fa-brands fa-whatsapp ps-3 fs-4" id='WhatApp'></i>
                                    <i class="fa-brands fa-telegram ps-3 fs-4" id='TeleGram'></i>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 ps-lg-5 mt-4'>
                                <p className='fw-medium'>Career
                                </p>
                                <p className='fw-medium'>Placement Records
                                </p>
                                <p className='fw-medium'>Admission-process
                                </p>
                                <p className='fw-medium'>Admission-enquiry
                                </p>
                                <p className='fw-medium'>Seminar Hall
                                </p>
                                <p className='fw-medium'>Industry Testimonials
                                </p>
                                <p className='fw-medium' >Transportation
                                </p>
                                <p className='fw-medium'>Auditorium
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 pt-4'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <p className='fw-medium'>Hostels
                                </p>
                                <p className='fw-medium'>Sports
                                </p>
                                <p className='fw-medium '>Digital Cafeteria
                                </p>
                                <p className='fw-medium '>Digital Library
                                </p>
                                <p className='fw-medium '>Digital Classrooms
                                </p>
                                <p className='fw-medium '>Career Development Cell
                                </p>
                                <p className='fw-medium '>Achievements
                                </p>
                                <p className='fw-medium '>NIRF
                                </p>
                                <p className='fw-medium '>Privacy Policy
                                </p>
                                <p className='fw-medium'>Terms and Conditions</p>
                            </div>
                            <div className='col-12 col-md-6 pt-4 p-md-0 ps-md-3'>
                                <div className=''>
                                    <p className='fw-medium'><i class="fa-solid fa-phone-volume"></i> Reception : 0755-6185300,0755-6185300/1/2/3/4/5
                                    </p>
                                    <p className='fw-medium'><i class="fa-solid fa-phone-volume"></i>Admission Cell : 7440777111, 7201800001, 0755-6185350, 0755-6685400
                                    </p>
                                    <p className='fw-medium'><i class="fa-solid fa-phone-volume"></i> Training & Placement Cell : 9826062730, 0755-6185341
                                    </p>
                                    <p className='fw-medium'><i class="fa-solid fa-phone-volume"></i> Email Id:
                                        info@lnct.ac.in, admission@lnct.ac.in, Jobs@lnct.ac.in
                                    </p>
                                    <p className='fw-medium'><i class="fa-solid fa-phone-volume"></i> LNCT Campus, Kalchuri Nagar, (P.O. Kolua) Raisen Road, Bhopal-462022 (M.P).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;