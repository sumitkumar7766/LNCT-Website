import React from 'react';

const courses = [
  'Masters Of Business Administration(MBA)',
];

const Details = [
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          A candidate seeking admission to MBA and Allied Courses should be a Graduate with at least 50% marks and 45% marks in case of SC, ST, OBC category of Madhya Pradesh in aggregate of any UGC/AICTE approved Indian University or from a foreign University recognized by Association of Indian Universities (AIU) or institute recognized by the concerned University as equivalent thereto. The Bachelor’s degree must be of minimum three years duration after passing Higher Secondary (10+2) examination of (10+2) system or equivalent.
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>LNCT MBA (240) | LNCT  MBA-FM (240) | LNCTE MBA (180) | LNCTE MBA – MM (120)</td>
      </tr>
      <tr>
        <th>Duration</th>
        <td>2 Years Program</td>
      </tr>
      <tr>
        <th>College Name</th>
        <td>LNCT-MBA</td>
      </tr>
      <tr>
        <th>Director</th>
        <td>Dr. Arvind Singh</td>
      </tr>
    </tbody>
  </table>,
];

const CoursesOfferedMBA = () => {
  return (
    <div className='container text-light mt-0 mt-lg-5'>
      <div style={{ marginTop: '1rem', padding: '1rem' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>COURSES OFFERED | MBA</h4>
        <div>
          {courses.map((course, index) => (
            <details key={index} style={{ marginBottom: '0.5rem', borderBottom: '1px solid #ccc', padding: '0.5rem', fontWeight: "bold" }} open={index === 0}>
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

export default CoursesOfferedMBA;
