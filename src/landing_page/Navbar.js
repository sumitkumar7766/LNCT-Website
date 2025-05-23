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
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item "><Link class="nav-link active text-light fs-5 ps-3 fw-medium" to="/home">Home</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-5 ps-3 fw-medium" to="/aboutus">About Us</Link></li>
                            <li class="nav-item dropdown text-light">
                                <a class="nav-link dropdown-toggle text-light fs-5 ps-3 fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Institutions
                                </a>
                                <ul class="dropdown-menu" id="navbarDropdown">
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT University</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT & Science</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT Excellence</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT MBA</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT MCA</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT Bhopal Indore Campus</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT Vidhyapeeth University</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT Jabalpur</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">JNCT Bhopal</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">Rishiraj College</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">CEC Bilaspur</Link></li>
                                    <li class="nav-item"><Link class="nav-link active ps-3 fw-medium" to="/companies">LNCT Pharmacy</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-5 ps-3 fw-medium" to="/companies">Companies</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-5 ps-3 fw-medium" to="/career">Career</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-5 ps-3 fw-medium" to="/contactus">Contact Us</Link></li>
                            <li class="nav-item"><Link class="nav-link active text-light fs-5 ps-3 fw-medium" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
