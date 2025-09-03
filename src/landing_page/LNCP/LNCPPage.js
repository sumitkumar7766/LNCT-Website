import React from "react";
import { Link } from "react-router-dom";
import CradLNCP from "./CardLNCP";
import CourceOfferLNCP from "./CourceOfferLNCP";
import Experience from "../Experience";
import Provides from "../home/Provides";

export default function LNCPPage() {
    return (
        <>
        <CradLNCP />
        <CourceOfferLNCP />
        <Experience />
        <Provides  />
        </>
    );
};