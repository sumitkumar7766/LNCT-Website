import React from 'react';

const courses = [
  'Computer science engineering',
  'Mechanical Engineering',
  'Artificial Intelligence and Machine Learning',
  'Electronics and Communication Engineering',
  'Electrical Engineering',
  'CS (Data Science)',
  'Computer Science & Engineering – M.E./M.TECH',
  'Power Electronics -M.E./M.TECH',
  'Digital Communications – M.E./M.TECH',
];

const Details = [
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank
          in JEE.
          Eligibility-2nd Year.<br />
          Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>UG 180/PG 24</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>M.Tech – 2 Year</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in <br />
          JEE.<br />
          Eligibility-2nd Year.<br />
          Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>60</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in <br />
          JEE.<br />
          Eligibility-2nd Year.<br />
          Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>60</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in <br />
          JEE.<br />
          Eligibility-2nd Year.<br />
          Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>30</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>Advanced Communication Technology  – Based on 5G Technology </td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in <br />
          JEE.<br />
          Eligibility-2nd Year.<br />
          Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>60</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in <br />
          JEE.<br />
          Eligibility-2nd Year.<br />
          Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>120</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks, Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks. Bachelors degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto.        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>24</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>-</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>2 Year</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks, Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks. Bachelors degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto.        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>30</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>-</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>2 Year</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks, Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks. Bachelors degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto.
        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>30</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>-</td>
      </tr>
      <tr>
        <th>PG Duration</th>
        <td>2 Year</td>
      </tr>
    </tbody>
  </table>,
];

const CoursesOfferedLNCTE = () => {
  return (
    <div className='container text-light mt-0 mt-lg-5'>
      <div style={{ marginTop: '1rem', padding: '1rem' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>COURSES OFFERED | TECHNICAL</h4>
        <div>
          {courses.map((course, index) => (
            <details key={index} style={{ marginBottom: '0.5rem', borderBottom: '1px solid #ccc', padding: '0.5rem' }} open={index === 0}>
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

export default CoursesOfferedLNCTE;
