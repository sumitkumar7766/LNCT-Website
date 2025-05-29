import React from "react";
import { Link } from "react-router-dom";
import Card1LNCTMCA from "./Card1LNCTMCA";
import TabbedCardLNCTMCA from "./TabbedCardLNCTMCA";
import CoursesOfferedMCA from "./CourceOfferedMCA";
import Card2LNCTMCA from "./Card2LNCTMCA";
import Experience from "../Experience";

function LNCTMCAPage() {
    return (
        <>
            <Card1LNCTMCA />
            <TabbedCardLNCTMCA />
            <CoursesOfferedMCA />
            <Card2LNCTMCA />
            <Experience />
        </>
    )
}

export default LNCTMCAPage;