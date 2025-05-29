import React from "react";
import { Link } from "react-router-dom";
import Card1LNCTMBA from "./Card1LNCTMBA";
import CoursesOfferedMBA from "./CourceOfferedMBA";
import AboutMBA from "./AboutMBA";
import Experience from "../Experience";
import Provides from "../home/Provides";

function LNCTMBAPage() {
    return (
        <>
        <Card1LNCTMBA />
        <CoursesOfferedMBA />
        <AboutMBA />
        <Experience />
        <Provides />
        </>
    )
};

export default LNCTMBAPage;