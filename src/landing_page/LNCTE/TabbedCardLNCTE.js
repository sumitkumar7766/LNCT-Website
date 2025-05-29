import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TabbedCardLNCTE = () => {
    const [activeTab, setActiveTab] = useState('Engineering');

    const tabContent = {
        Engineering: (
            <div className="card p-4">
                <p className='fw-bolder'>With a clear vision of “Developing this institute into a center of excellence in the country with global standards”, LNCTE was started in the year 2007 with 4 engineering branches (EC, EX, IT, CS). Subsequently 2 more programs are added (Mechanical & M.Tech.). The Institute has the state of the art infrastructure. Currently the Institute is offering these courses</p>
                <ul className='fw-bold'>
                    <li>Computer Sciences & Engineering 180 seats</li>
                    <li>Computer Sciences & Engineering (Data Science) – 120 seats</li>
                    <li>Mechanical Engineering 30 seats</li>
                    <li>Electrical & Electronics Engg. 30 seats</li>
                    <li>Electronics and Communication Engineering 30 Seats</li>
                    <li>Advanced Communication Technology  – Based on 5G Technology</li>
                    <li>Artificial Intelligence and Machine Learning 120 seats</li>
                    <li>M.Tech. in Computer Science & Engineering 24 seats</li>
                    <li>M.Tech in Digital Communication 18 seats</li>
                    <li>M.Tech in Power System 30 seats</li>
                </ul>
            </div>
        ),
        Management: (
            <div className='card p-4'>
                <p className='fw-bolder'>The world is changing quickly and so are the challenges that face tomorrow’s leaders. The MBA Program helps you develop a leadership mindset and strong foundation of management skills to succeed in your first job and throughout your career. We prepare you for the future. We empower you to make a difference. We prepares you for the corporate in the real sense by providing exposure in ERP, Foreign languages and structured round the year programme in personality Development and Grooming.</p>
                <ul className='fw-bold'>
                    <li>Moodle – Hi-Tech Online Course Management System</li>
                    <li>100% Placement Opportunity</li>
                    <li>Entrepreneurship Development Cell (NEN)</li>
                    <li>TieUp with HCL, Shriram Finance and ERP World (SAP Solutions)</li>
                    <li>Mentor System for personalized attention & various club activities for personality development.</li>
                    <li>Industrial Interface (Projects/Lectures, Regular Industrial Visits/Seminar & Conferences).</li>
                    <li>Regular Conduction of MDP & FDP.</li>
                    <li>Highly qualified and experienced Faculty Members.</li>
                    <li>AC Classrooms with DLP Projectors.</li>
                    <li>Strong Industry exposure.</li>
                    <li>World class Infrastructure.</li>
                    <li>Adjunct Faculty from Industry.</li>
                    <li>Guest Faculty from best B-Schools.</li>
                </ul>
                <p className='fs-4 fw-bolder'>About LNCTE – MBA</p>
                <p className='fw-medium'>This has carved a niche for itself as one of the premiere Institute in Madhya Pradesh. The Institute is committed to harnessing skilled managers with a cross-functional approach for the evolving needs of trade and industry.<br /><br />

                    The Institute has forged linkage with various leading corporates and constantly works on creating industry interface for the student via many diverse projects, innovative events, guest lectures, etc. Consulting services, management development programmes for students are other activities carried out by the institute.</p>
            </div>
        )
    };

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs">
                {Object.keys(tabContent).map(tab => (
                    <li className="nav-item" key={tab}>
                        <button
                            className={`nav-link fw-bolder ${activeTab === tab ? 'active text-dark' : 'text-white'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                {tabContent[activeTab]}
            </div>
        </div>
    );
};

export default TabbedCardLNCTE;
