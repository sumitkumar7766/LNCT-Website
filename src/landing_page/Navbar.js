import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container-fluid">
            <nav
                class="navbar navbar-expand-lg "
            >
                <div class="container-fluid p-2">
                    <Link class="</nav>navbar-brand" to="/">
                        <img
                            src="media/images/LNCT-logo.png"
                            style={{ width: "85%" }}
                            alt="Logo"
                        />
                    </Link>
                    <button
                        class="navbar-toggler text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{backgroundColor: "white"}}
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item "><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/">Home</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/aboutus">About Us</Link></li>
                            <li class="nav-item dropdown text-light">
                                <Link class="nav-link dropdown-toggle text-light fs-6 ps-3 fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Institutions
                                </Link>
                                <ul class="dropdown-menu" id="navbarDropdown">
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT University</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT & Science</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT Excellence</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT MBA</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT MCA</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT Bhopal Indore Campus</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT Vidhyapeeth University</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT Jabalpur</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">JNCT Bhopal</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">Rishiraj College</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">CEC Bilaspur</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies" id="dropdownElement">LNCT Pharmacy</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/companies">Companies</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/career">Career</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/alumni">Alumni</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/contactus">Contact Us</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-6 ps-3 fw-bold" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
