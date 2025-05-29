import React from "react";
import { Link } from "react-router-dom";
import Card1LNCT from "./Card1LNCT";
import TabbedCardLayout from "./TabbedCardLayout";
import CoursesOffered from "./Courceoffered";
import CoursesOfferedMn from "./CourceOfferedMn";
import CoursesOfferedCA from "./CourceOfferedCA";
import Experience from "../Experience";
import Provides from "../home/Provides";

function LNCTPage() {
    return (
        <>
            <Card1LNCT />
            <TabbedCardLayout />
            <CoursesOffered />
            <CoursesOfferedMn />
            <CoursesOfferedCA />
            <Experience />
            <Provides />
        </>
    )
}

export default LNCTPage;