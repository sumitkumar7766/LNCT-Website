import React from 'react';

const courses = [
  'Computer science engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electronics and Communication Engineering',
  'Computer Science & Engineering – M.E./M.TECH',
  'VLSI Design – M.E./M.TECH',
  'Masters Of Business Administration (MBA)',
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
        <td>60</td>
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
        <td>90</td>
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
        <td>-</td>
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
        <td>18</td>
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
        <td>18</td>
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
          A candidate seeking admission to MBA and Allied Courses should be a Graduate with at least 50% marks and 45% marks in case of SC, ST, OBC category of Madhya Pradesh in aggregate of any UGC/AICTE approved Indian University or from a foreign University recognized by Association of Indian Universities (AIU) or institute recognized by the concerned University as equivalent thereto. The Bachelor’s degree must be of minimum three years duration after passing Higher Secondary (10+2) examination of (10+2) system or equivalent.        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>300 (MBA -180 | MBA – Marketing Management  -60 | MBA – Financial Administration -60)</td>
      </tr>
      <tr>
        <th>Duration</th>
        <td>2 Year</td>
      </tr>
    </tbody>
  </table>,
];

const CourceofferedLNCTINDORE = () => {
  return (
    <div className='container text-light mt-0 mt-lg-5'>
      <h1 className='text-center'>LNCT (Bhopal) Indore Campus</h1>
      <p className='text-center'>Since 2006, the LNCT (Bhopal) Indore Campus has emerged as a reputable institute in the field of technical education. This campus is the result of the dedicated efforts of experienced and highly qualified individuals who are committed to rural development and have successfully managed several technical institutions across Madhya Pradesh. They were pioneers in establishing unaided engineering colleges in the state as early as 1994. The institute is renowned in Madhya Pradesh as the Lakshmi Narain College of Technology, Bhopal (LNCT). Located in Indore, the institute offers undergraduate and postgraduate courses in engineering.</p>
      <div style={{ marginTop: '1rem', padding: '1rem' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Admission Open</h4>
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

export default CourceofferedLNCTINDORE;
