import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TabbedCardLNCTMCA = () => {
    const [activeTab, setActiveTab] = useState('Engineering');

    const tabContent = {
        OBJECTIVE: (
            <div className="card p-4">
                <p className='fw-bolder text-center'>The main objective is to make students technically talented in the information technology field. The department has tied up with Coursera (spoken tutorial project) which offers certificate courses to help the students to gain exposure towards leading its tools and languages which is part of the curriculum to earn credits. The students are advised to enroll for online MOOC courses to gain knowledge and upgrade their skills for employment.</p>
            </div>
        ),
        MISSION: (
            <div className='card p-4'>
                <p className='fw-bolder text-center'>To offer high-grade, value-based Post-graduate Programmes in the field of Computer Applications.
                    To improve continually in the teaching-learning process by strengthening infrastructural facilities and faculty credentials.
                    To provide conducive environment to achieve excellence in teaching-learning, and research & development activities.
                    To enhance proportion of skilled based courses beyond curriculum to create more employable post-graduates.
                    To provide appropriate forums to develop innovative talents, practice ethical values and inculcate as enduring learners.</p>
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

export default TabbedCardLNCTMCA;
