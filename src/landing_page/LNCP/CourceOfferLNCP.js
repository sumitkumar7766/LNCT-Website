import React from 'react';

const courses = [
  'D.PHARM',
  'B.PHARM',
  'M.PHARM',
];

const Details = [
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          12th Standard (PCB/PCM)        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>60</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>2 Year</td>
      </tr>
      <tr>
        <th>PG PG Duration	</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          12th Standard (PCB/PCM)        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>100</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>4 Year</td>
      </tr>
      <tr>
        <th>PG PG Duration	</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>,
  <table className="table table-bordered p-1 ">
    <tbody>
      <tr>
        <th className="w-25">Eligibility Criteria</th>
        <td>
          Pharmaceutics        </td>
      </tr>
      <tr>
        <th>Seats</th>
        <td>15</td>
      </tr>
      <tr>
        <th>UG Duration</th>
        <td>-</td>
      </tr>
      <tr>
        <th>PG PG Duration	</th>
        <td>2 Year</td>
      </tr>
    </tbody>
  </table>,
];

const CourceOfferLNCP = () => {
  return (
    <div className='container text-light mt-0 mt-lg-3'>
      <div style={{ marginTop: '1rem', padding: '1rem' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>COURSES OFFERED | LNCP</h4>
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

export default CourceOfferLNCP;
