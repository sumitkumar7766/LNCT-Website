import React from "react";
import { Link } from "react-router-dom";
import Card1LNCTS from "./Card1LNCTS";
import TabbedCardLNCTS from "./TabbedCardLNCTS";
import Card1LNCTS2 from "./Card1LNCTS2";
import CoursesOfferedLNCTS from "./CourceofferedLNCTS";
import Experience from "../Experience";
import Provides from "../home/Provides";

function LNCTSPage() {
    return(
        <>
        <Card1LNCTS />
        <TabbedCardLNCTS />
        <Card1LNCTS2 />
        <CoursesOfferedLNCTS />
        <Experience />
        <Provides />
        </>
    )
};

export default LNCTSPage;