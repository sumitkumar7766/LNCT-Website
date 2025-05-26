import React from "react";
import { Link } from "react-router-dom";
import HeroSection2 from "../home/HeroSection2";
import Leadership from "./Leadership";
import EducationTrustTable from "./EducationTrustTable";
import Auditorium from "./Auditorium";
import Experience from "../Experience";

function AboutUs() {
    return(
        <>
        <HeroSection2 />
        <Leadership />
        <EducationTrustTable />
        <Auditorium />
        <Experience />
        </>
    )
}

export default AboutUs;