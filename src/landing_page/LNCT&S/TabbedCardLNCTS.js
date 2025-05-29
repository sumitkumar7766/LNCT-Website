import React, { useState } from 'react';

const companies = [
    ['Karvy stock broking ltd', 'Bajaj', 'Dainik Bhaskar', 'Nav Duniya'],
    ['HDFC Life', 'ICICI', 'Cavin care', 'Orient paper mills'],
    ['Godrej & boyce Mfg. Co. ltd', 'Ascent advisory', 'Ixeet software solutions pvt.ltd', 'Money capital'],
    ['Aviam technologies', 'Seac Developers pvt.ltd', 'Aura builders', 'Bucks gainer'],
    ['Jaro education', 'Shield research', 'Birla sun life', 'Star India']
];

const courses = [
  'Computer science engineering',
  'CS (IOT & Cyb. Sec. including Blockchain Technology)',
  'CS (Artificial Intelligence and Machine Learning)',
  'Artificial Intelligence and Data Science',
  'Mechanical Engineering',
  'Electrical & Electronics',
  'Civil Engineering',
  'Electronics and Communication Engineering',
  'Electrical Engineering',
  'VLSI Design -M.E./M.TECH',
  'Thermal Engineering – M.E./M.TECH',
  'Power Electronics – M.E./M.TECH',
  'Computer Science & Engineering – M.E./M.TECH',
  'Construction Technology And Management – M.E./M.TECH'
];

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
