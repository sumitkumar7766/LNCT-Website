import React from "react";
import { Link } from "react-router-dom";

function Leadership() {
    return (
        <div className="container pt-5">
            <div className="row">
                <h1 className="text-center m-5 text-light text-decoration-underline">About Us</h1>
                <h1 className="text-light text-center">Our Leadership | LNCT Group of Colleges</h1>
                <div className="col-12 col-lg-4 pt-4">
                    <p className="text-light text-center fs-5 fw-bolder" style={{ fontStyle: "italic" }}>I believe learning is the only tool for success of individual, irrespective of the age. At LNCT, we are committed for betterment of society through development of students in every stage.</p>
                    <div className="container d-flex align-items-center justify-content-center flex-wrap ">
                        <img src="media/images/Pro3.png" className="w-50" />
                    </div>

                    <p className="text-light  text-center">Dr. Anupam Chouksey</p>
                    <p className="text-light  text-center">Chancellor - JNCT Professional University  <br /> Secretary - LNCT Group</p>
                </div>
                <div className="col-12 col-lg-4 pt-4">
                    <p className="text-light text-center fs-5 fw-bolder" style={{ fontStyle: "italic" }}>
						I welcome you to this campus of higher learning which is being the prime unit of LNCT Group of Colleges. In my considered view your decision to choose LNCT is right and wise.					</p>
                    <div className="container d-flex align-items-center justify-content-center flex-wrap ">
                        <img src="media/images/Pro2.png" className="w-50" />
                    </div>

                    <p className="text-light  text-center">Smt.Poonam Chouksey</p>
                    <p className="text-light  text-center">Chancellor - LNCT Vidhyapeeth University   <br /> Vice Chairperson - LNCT Group</p>
                </div>
                <div className="col-12 col-lg-4 pt-4">
                    <p className="text-light text-center fs-5 fw-bolder" style={{ fontStyle: "italic" }}>
						Education is what remains after one has forgotten what one has learned in school”. At LNCT University/LNCT Group of Colleges, the purpose of life is taught.					</p>
                    <div className="container d-flex align-items-center justify-content-center flex-wrap ">
                        <img src="media/images/Pro1.png" className="w-50" />
                    </div>

                    <p className="text-light  text-center">Shri Jai Narayan Chouksey</p>
                    <p className="text-light  text-center">Chancellor - LNCT University  <br />  Founder & Chairman - LNCT Group</p>
                </div>
            </div>
        </div>
    )
}

export default Leadership;