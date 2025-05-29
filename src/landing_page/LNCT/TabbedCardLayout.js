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

const TabbedCardLayout = () => {
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
        Management: (
            <div className="card p-4">
                <h3>About MBA</h3>
                <p><b>LNCT – MBA started in 2003 LNCTE – MBA started in 2008</b> Master of Business Administration (M.B.A) in both colleges are affiliated to Barkatullah University, Bhopal and approved by AICTE, New Delhi. It has been designed as an intensive two year, full time program and aims at creating a strong academic foundation to provide young thinking minds the power to shape their thoughts and develop management aptitude. At LNCT, the MBA program has been created from the feedback, ideas and inputs give in by leading practicing managers and academicians world- wide, as experts in cross- functional areas. In addition to the prescribed course contents of the syllabi specified by Barkatullah University, our perceptual efforts have been to provide value added additional knowledge to make our student perfect professional, and effective business leader to streak smart responsible global citizens.</p>
                <h3>About Faculty</h3>
                <p>Teaching is mostly application- based with structured lectures, case studies, industry visits, live projects, guest lectures and Industrial Experts talk sessions etc . In order to make teaching and learning an engaged and continuous process for our students, our expertise faculty members involves students in various exercises like role plays, case discussions, situation analysis, problem solving etc.</p>
                <h3>Special Attributes of our Teaching Pedagogy</h3>
                <ul>
                    <li>The Institute is Imparting professional education in the facet of management with the help of highly qualified ,experienced faculty possessing a right blend of academic and industrial exposure .</li>
                    <li>Expertise lectures of Corporate leaders</li>
                    <li>Case Study</li>
                    <li>Role Plays</li>
                    <li>Simulation Exercises</li>
                    <li>Business Games</li>
                    <li>Management Quizzes</li>
                    <li>Group discussion and personal interviews</li>
                    <li>Training for computer proficiency</li>
                    <li>Industrial visit</li>
                </ul>
                <h3>Training and Placement information</h3>
                <p>The institute attaches the highest importance to Training and Placement. Our high standard of imparting the education has brought quick results as the corporate world has started recognizing us as one of the leading business school of the region. This is reflected in the placements of our students in leading corporate like. Regular placements service has been set up at LNCT, under senior faculty for industrial contact. Students drive the activities of the placement office. Necessary pro-active steps are taken to facilitate a variety of interactions with industry and business enterprises around the year, to make them aware of the unique features of LNCT and we give the 100 percent placement assurance to our students. The Maximum package offered by industries – 4.5 LPA</p>
                <h3>Among the prominent recruiters are</h3>
                <table className="table table-bordered">
                    <tbody>
                        {companies.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((company, colIndex) => (
                                    <td key={colIndex}><strong>{company}</strong></td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
        'Computer Application': (
            <div className="card p-4">
                <p className='fw-bolder'>
                    Master of Computer Application (MCA) is a 2 Master degree course in Computer Applications. MCA course is very popular as it gives a post Graduation degree and job opportunities are equivalent to Computer Science and Engineering. All MNC’s are looking for MCA graduates for their Computer science and IT jobs. LNCT is a renowned name for providing maximum in campus job opportunities to MCA students and the Alumni’s of MCA are working in various senior positions in top IT companies in India and abroad.<br /><br />

                    After earning an MCA degree from a reputed Institute like LNCT, there is plethora of job opportunities available in the market. There is a wide scope for MCA graduates in government as well as private sector. As a fresher, an MCA professional can expect anything starting from 3 lakhs. Top companies hiring MCA graduates are Accenture, Infosys, Wipro, TCS, Cognizant,Capgemini, IBM, American Express, HCL, HP and so on.
                </p>
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

export default TabbedCardLayout;
