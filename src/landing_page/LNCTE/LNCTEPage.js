import React from "react";
import { Link } from "react-router-dom";
import Card1LNCTE from "./Card1LNCTS";
import TabbedCardLNCTE from "./TabbedCardLNCTE";
import CoursesOfferedLNCTE from "./CourceofferedLNCTE";
import CoursesOfferedMnLE from "./CourceOfferedMnLE";
import Experience from "../Experience";

function LNCTEPage() {
    return(
        <>
        <Card1LNCTE />
        <TabbedCardLNCTE />
        <CoursesOfferedLNCTE />
        <CoursesOfferedMnLE />
        <Experience />
        </>
    )
}

export default LNCTEPage;