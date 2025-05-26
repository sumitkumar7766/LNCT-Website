import React from "react";
import { Link } from "react-router-dom";
import HeaderU from "./HeaderU";
import Hero from "./Hero";
import Card1 from "./Card1";
import Crad2 from "./Card2";
import ExperienceU from "./ExperienceU";
import Experience from "../Experience";
import Provides from "../home/Provides";
import ExperienceU2 from "./ExperienceU2";

function LNCTUPage() {
    return (
        <>
            <Hero />
            <HeaderU />
            <Card1 />
            <Crad2 />
            <ExperienceU />
            <ExperienceU2 />
            <Experience />
            <Provides />
        </>
    );
}

export default LNCTUPage;