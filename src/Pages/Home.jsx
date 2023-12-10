import React, { useState } from 'react';


const Home = () => {
  return (
    <div>
      <div id='bg-img'>
        <h1 className='text-home'>Welcome To My Profile</h1>
        <br /><br /><br />
        <h2 className='text-home1'>I Am Shrikant Sarode </h2>
      </div>

      {/* Render Skills component */}
      <Skills />
    </div>
  );
};

const Skills = () => {
  const [skillProficiency, setSkillProficiency] = useState({
    ReactJS: 60,
    SQL: 79,
    HTML5: 95,
    CSS3: 90,
    JAVA: 70,
    JDBC: 65,
    Hibernate: 55,
    Spring: 45,
    Bootstrap: 60,
  });

  const handleSkillChange = (skill, value) => {
    setSkillProficiency((prevSkills) => ({
      ...prevSkills,
      [skill]: value,
    }));
  };

  return (
    <div className="skills-container">
      <h2 id='skill-head'>Skills</h2>
      <ul className="skills-list">
        {Object.entries(skillProficiency).map(([skill, proficiency]) => (
          <li key={skill} className="skill-item">
            <label htmlFor={skill}>{skill}</label>
            <input
              type="range"
              id={skill}
              name={skill}
              min="0"
              max="100"
              value={proficiency}
              onChange={(e) => handleSkillChange(skill, parseInt(e.target.value, 10))}
            />
            <span>{proficiency}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
