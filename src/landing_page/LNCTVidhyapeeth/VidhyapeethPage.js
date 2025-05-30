import React from "react";
import { Link } from "react-router-dom";
import HeroVidya from "./HeroVidya";
import HeroSectionVID from "./HeroSectionVID";
import PopularPrograms from "./PopularPrograms";
import LearningInfrastructure from "./LearningInfrastructure";
import AddmissionOpen from "./AddmisionOpen";

export default function() {
    return (
        <>
        <HeroVidya />
        <HeroSectionVID />
        <PopularPrograms />
        <LearningInfrastructure />
        <AddmissionOpen />
        </>
    )
}