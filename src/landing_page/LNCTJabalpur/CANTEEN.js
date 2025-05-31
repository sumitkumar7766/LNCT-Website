import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return(
        <div className="container text-light pt-5">
            <h1 className="text-center">CANTEEN</h1>
            <div className="row pt-3">
                <div className="col-12 col-lg-6">
                    <h2>Food And Cuisine</h2>
                    <p className="fs-5">While studying …….students often get so Hungry & Tired that Food & Rest cannot appear to them except in the form of cafeteria and LNCT Group of Colleges Jabalpur provides its students, staff and faculty with an amazing café experience in the college campus with its well maintained and well equipped Cafeteria. The cafeteria is not just a food joint but a place to relax, interact, rejuvenate and take a refuge from the daily hectic schedule!!!</p>
                    <ul className="fs-6">
                        <li>Mess facility is an integral part of the college, which provides wholesome, nutritious &amp; homely food to all hostellers, faculty &amp; staff members.</li>
                        <li>The mess serves Vegetarian Food only and operates in self service mode.</li>
                        <li>The mess provides morning tea, regular breakfast, lunch, evening snacks and tea, dinner and milk to all hostellers.</li>
                        <li>The menu of the items is designed in consideration with requirements of the students and nutrition is added to make it healthy and complete.</li>
                        <li>The stay in the hostel gives a sense of solidarity amongst the students. Mess caters to the tastes of the students of different region and students with varied culinary preferences.</li>
                        <li>Mess menu is planed and managed by the management in consultation with the students.</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="media/LNCT/Jabalpur3.png" className="w-100" alt="Canteen"/>
                </div>
            </div>
        </div>
    )
}
