import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import HeroSection2 from "./HeroSection2";
import OurMission from "./OurMission";
import Credo from "./Credo";
import News from "./News";
import Experience from "../Experience";
import Provides from "./Provides";
import Advantage from "./Advantage";

function Home() {
    return (
        <>
        <HeroSection />
        <HeroSection2 />
        <News />
        <Advantage />
        <OurMission />
        <Credo />
        <Experience />
        <Provides />
        </>
    )
}

export default Home;