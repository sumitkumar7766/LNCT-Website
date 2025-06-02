import React from "react";
import { Link } from "react-router-dom";

export default function HeroJnct() {
    return (
        <div className="container text-light mt-5 pt-5">
            <div className="row fw-bold">
                <h1 className="text-center">WELCOME To JNCT CAMPUS</h1>
                <p className="text-center pb-4">Jai Narain College of Technology is considered to be unique in engineering education.
                </p>
                <div className="col-12 col-lg-4">
                    <h1 className="text-center">ABOUT US</h1>
                    <p className="text-center fs-5 p-4">Jai Narain College of Technology (JNCT), is considered to be unique in engineering education as it is firmly rooted in local soil and capable of articulating Indian ethos</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-warning">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h1 className="text-center">DEPARTMENT</h1>
                    <p className="text-center fs-5 p-4">Jai Narain College of Technology (JNCT), Department strives hard to provide excellent standards of quality education by keeping pace with rapidly change in technology.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-warning">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h1 className="text-center">FACILITIES</h1>
                    <p className="text-center fs-5 p-4">Jai Narain College of Technology (JNCT), Facilitate students with world-class amenities, to produce skilled professionals who can work in cross cultural environment.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-warning">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}