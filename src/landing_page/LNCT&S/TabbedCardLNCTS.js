import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TabbedCardLNCTS = () => {
    const [activeTab, setActiveTab] = useState('Engineering');

    const tabContent = {
        Engineering: (
            <div className="card p-4">
                <ul>
                    <li><strong>1st Self-</strong> Financed Institute of M.P. started in 1993-94.</li>
                    <li><strong>Branches:</strong> B.E.- CSE, IT, EC, EX, EE, ME, EI, Chemical & Civil</li>
                    <li><strong>M. Tech. –</strong> CSE, IT, Thermal, Power Elex, Control, CTM and VLSI</li>
                    <li><strong>1st Self-</strong> Financed institutes of M.P. to be accredited by NBA, AICTE New Delhi.</li>
                    <li><strong>1st Self-</strong> Financed Institute to have ISO : 9001-2000 certification</li>
                    <li><strong>1st Self-</strong> Financed Institute to have AICTE funded
                        <ul>
                            <li>Industry Institute Partnership cell (IIPC)</li>
                            <li>Entrepreneur Management Development Cell</li>
                        </ul>
                    </li>
                    <li><strong>1st in M.P.</strong> rated ‘A’ Category by the High Court committee for fixation of fee.</li>
                    <li><strong>1st Self-</strong> Financed institutes of M.P. to have the following departments/Chapters/Cells/Clubs:
                        <ul>
                            <li>Industry Institute Partnership Cell (IIPC)</li>
                            <li>National Enterpreneur Network (NEN) Chapter</li>
                            <li>Young Indian Yuva Chapter (CII initiative)</li>
                            <li>Student Chapters of IEEE, IE(I), CSI, SAE and IETE</li>
                            <li>Photography Club, Music Club, Raahat Club, Aasvas Club, Quest Nature Club, NCC, NSS</li>
                            <li>Spice Macay Heritage Centre</li>
                        </ul>
                    </li>
                </ul>
            </div>
        ),
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

export default TabbedCardLNCTS;
