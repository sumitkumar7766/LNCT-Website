import React from 'react';
import { Link } from 'react-router-dom';

const infrastructureItems = [
  {
    title: 'Digital Classrooms',
    description: 'A smarter way to learn. The classrooms are equipped with LCD/LED Projectors for experience the real contents in the form of Audio visual.',
    icon: 'fa-brands fa-draft2digital',
  },
  {
    title: 'Modern Labs',
    description: 'The Machines and Equipments are with latest technology to provide the current technological exposure and experience.',
    icon: 'fa-solid fa-flask',
  },
  {
    title: 'Wifi - Hostel',
    description: 'The hostel rooms are well-furnished, airy and spacious. The hostel has a mess, which serves hygienic and tasty food to the hostelers. 24X7 wifi connectivity is provided.',
    icon: 'fa-solid fa-wifi',
  },
  {
    title: 'Discipline & Academic Excellence',
    description: 'You get legacy of 30+ Years of Academic Excellence. LNCT is known for Discipline, Excellence, and top placements in Central India.',
    icon: 'fa-solid fa-dice-d20',
  },
  {
    title: 'Lush Green Campus',
    description: 'Boys & Girls Hostels, Wi-Fi, Security, GYM, ATMs, Dispensary, and Outdoor Fields make it a BEST Infrastructure campus for a cool learning environment.',
    icon: 'fa-solid fa-tree',
  },
  {
    title: 'Hi-Tech Campus',
    description: 'A Hi-Tech campus designed for advanced Learning and Research Environment suited for modern students.',
    icon: 'fa-solid fa-microchip',
  }
];

const LearningInfrastructure = () => {
  return (
    <div className="container py-5 bg-transparent text-light">
      <h2 className="text-center fw-bold mb-2">Learning infrastructure</h2>
      <p className="text-center  mb-4 pb-4">which provides a cool environment for studies.</p>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {infrastructureItems.map((item, index) => (
          <div className="col" key={index}>
            <div className="h-100 bg-transparent border-0">
              <div className="mb-2">
                <i className={`bi ${item.icon} fs-1 me-3 text-light pb-2`}></i>
                <div>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningInfrastructure;
