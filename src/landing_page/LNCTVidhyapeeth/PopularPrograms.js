import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "LN Paramedical College",
    image: "media/LNCT/POPULAR1.png", 
  },
  {
    title: "Safe Institute of Nursing",
    image: "media/LNCT/POPULAR2.png", 
  },
  {
    title: "School of Computer Science & Application",
    image: "media/LNCT/POPULAR3.png", 
  },
  {
    title: "SOP LNCT Indore",
    image: "media/LNCT/POPULAR4.png",
  },
  {
    title: "School of Commerce & Management",
    image: "media/LNCT/POPULAR5.png", 
  },
  {
    title: "School of Agriculture Science",
    image: "media/LNCT/POPULAR6.png", 
  },
];

const PopularPrograms = () => {
  return (
    <div className="container py-5 bg-transparent text-center text-light">
      <p className='fw-bolder'>Vidhyapeeth University Indore</p>
      <h1 className="fw-bold text-light">
        POPULAR <span style={{ color: '#d63384' }}>Programs</span>
      </h1>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {programs.map((program, index) => (
          <div className="col" key={index}>
            <div className="card border-0 bg-transparent text-center">
              <div className="card-body">
                <img
                  src={program.image}
                  alt={program.title}
                  className="img-fluid mb-3"
                  style={{ maxHeight: '180px', borderRadius:"10px" }}
                />
                <h6 className="card-title text-light fs-4">{program.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPrograms;
