import React from "react";
import { Link } from "react-router-dom";
import HeroJnct from "./HeroJnct";
import Card from "./Card";
import Department from "./Department";
import LNCTStatsPlacement from "../LNCTStatsPlacement";
import ContactJNCT from "./ContactJNCT";

export default function JNCTPage() {
    return(
        <>
        <HeroJnct />
        < Card />
        <Department />
        <LNCTStatsPlacement />
        <ContactJNCT />
        </>
    )
}