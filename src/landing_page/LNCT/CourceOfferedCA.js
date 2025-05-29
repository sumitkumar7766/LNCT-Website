import React from 'react';

const courses = [
    'Masters of Computer Application (MCA) 2 Years'
];

const Details = [
    <table className="table table-bordered p-1 ">
        <tbody>
            <tr>
                <th className="w-25">Eligibility Criteria</th>
                <td>
                    For 3 Years Duration – Any Graduate with Maths either in 12th or in graduation 50% in graduation for General and 45% for SC/ST/OBC
                </td>
            </tr>
            <tr>
                <th>Seats</th>
                <td>300</td>
            </tr>
            <tr>
                <th>Duration</th>
                <td>2 Year</td>
            </tr>
            <tr>
                <th>Collage Name</th>
                <td>LNCT – MCA</td>
            </tr>
            <tr>
                <th>Director</th>
                <td>Dr. Sanjay Bajpai</td>
            </tr>
        </tbody>
    </table>,
];

const CoursesOfferedCA = () => {
    return (
        <div className='container text-light mt-0 mt-lg-3'>
            <div style={{ marginTop: '1rem', padding: '1rem' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Courses Offered | Computer Application
                </h4>
                <div>
                    {courses.map((course, index) => (
                        <details key={index} style={{ marginBottom: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem' }} open={index === 0}>
                            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>{course}</summary>
                            <div style={{ marginTop: '0.5rem' }}>
                                {Details[index] || Details[0]}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesOfferedCA;
