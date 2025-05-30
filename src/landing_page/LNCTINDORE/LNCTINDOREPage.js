import React from "react";
import { Link } from "react-router-dom";
import Card1LNCTINDORE from "./Card1LNCTINDORE";
import LNCTStats from "./LNCTStats";
import AcademicINDORE from "./AcademicINDORE";
import CourceofferedLNCTINDORE from "./CourceofferedLNCTINDORE";
import Provides from "../home/Provides";

function LNCTINDOREPage() {
    return (
        <>
            <Card1LNCTINDORE />
            <AcademicINDORE />
            <LNCTStats />
            <CourceofferedLNCTINDORE />
            <Provides />
        </>
    )
}

export default LNCTINDOREPage;