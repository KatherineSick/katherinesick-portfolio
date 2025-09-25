import React from 'react';
import illini from '../assets/illini.png';
import keio from '../assets/keio.png';
import usePageView from '../hooks/trackPage';

const educationData = [
  {
    name: 'University of Illinois at Urbana-Champaign',
    image: illini,
    dates: '08/2025 - Present',
    location: 'Urbana, IL',
    degree: 'Master of Computer Science',
    major: 'Computer Science',
    minors: ['Japanese Arts and Aesthetics'],
    gpa: 'N/A (in progress)',
    coursework: ['Computer Security', 'Software Engineering']
  },
  {
    name: 'University of Illinois at Urbana-Champaign',
    image: illini,
    dates: '08/2021 - 05/2025',
    location: 'Urbana, IL',
    degree: 'Bachelor of Science',
    major: 'Computer Science and Linguistics',
    minors: ['Japanese Arts and Aesthetics'],
    gpa: '3.7',
    clubs: ['League of Linguists (Secretary)', 'National Association for Computing Machinery (ACM)', 'Japanese Conversation Table'],
    coursework: ['Discrete Structures', 'Data Structures', 'Statistics', 'Linear Algebra', 'Applied Machine Learning', 'Computer Architecture', 'Algorithms', 'Database Systems', 'Computational Semantics', 'Data Mining', 'Computational Linguistics' ]
  },
  {
    name: 'Keio University',
    image: keio,
    dates: '03/2024 - 08/2024',
    location: 'Tokyo, Japan',
    degree: 'Study Abroad Exchange Program',
    major: 'Japanese Language and Culture',
    minors: [],
    gpa: '3.8',
    clubs: ['Keio Yumiken Kyudo Circle', 'KOSMIC Student Organization'],
    coursework: ['Computers in Japanese Society', 'Intermediate Japanese Language', 'Gender and Culture in Interwar Japan', 'Japanese History']
  }
];

const Education = () => {
  usePageView("/education-desktop");
  return (
    <div className="tabs">
      <h2>Education</h2>
      <div className="projects-list">
        <ul className="projects-ul">
          {educationData.map((edu, idx) => (
            <li className="project-item" key={idx}>
              <div className="project-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <strong className="project-title">{edu.name}</strong>
                </div>
                <time className="project-date">{edu.dates} · {edu.location}</time>
              </div>
              <div className="project-body edu-vertical">
                <div className="edu-top-row">
                  {edu.image && <img className="edu-img" src={edu.image} alt={`${edu.name} logo`} />}
                  <div className="edu-top-meta">
                    {edu.degree && <div style={{ fontWeight: 600 }}>{edu.degree}</div>}
                    {edu.major && <div>{edu.major}</div>}
                    {edu.gpa && <div>GPA: {edu.gpa}</div>}
                  </div>
                </div>

                {edu.clubs && edu.clubs.length > 0 && (
                  <div className="edu-meta edu-clubs">
                    <div style={{ fontWeight: 600, marginBottom: '6px' }}>Related Clubs / Activities</div>
                    <ul>
                      {edu.clubs.map((club, i) => <li key={i}>{club}</li>)}
                    </ul>
                  </div>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="tag-row">
                    {edu.coursework.map((tag, i) => (
                      <span className="tag-edbadge" key={i}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
