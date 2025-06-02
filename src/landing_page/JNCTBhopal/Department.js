import React from 'react';

const departments = [
  {
    name: "Computer Science and Engineering",
    icon: "💻",
  },
  {
    name: "Artificial Intelligence and Data Science",
    icon: "🧠",
  },
  {
    name: "Artificial Intelligence and Machine Learning",
    icon: "🤖",
  },
  {
    name: "Electronics and Communication Engineering",
    icon: "📡",
  },
  {
    name: "Mechanical Engineering",
    icon: "⚙️",
  },
  {
    name: "Electrical and Electronics Engineering",
    icon: "🔌",
  },
];

const Department = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-light">DEPARTMENTS</h2>
      <div className="row">
        {departments.map((dept, index) => (
          <div className="col-md-4 mb-4" key={index} id='DepartemntCard1'>
            <div className="card text-center shadow-sm h-100">
              <div className="card-body" id='DepartemntCard'>
                <div className="display-4 mb-3">{dept.icon}</div>
                <h5 className="card-title">{dept.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
