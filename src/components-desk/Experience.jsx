import React from 'react';
import usePageView from '../hooks/trackPage';

const experienceData = [
  {
    title: 'Graduate Assistant for Japanese Exchange Students',
    company: 'College of Agriculture, University of Illinois',
    dates: '08/2025',
    location: 'Champaign, IL',
    description: 'Assisted ACES college director with coordination and planning of Japanese student exchange program and supported communication between students and program leaders through translation and cross-cultural facilitation.',
    tags: ['Communication', 'Coordination', 'Organization', 'Japanese Culture']
  },
  {
    title: 'Data Structures Teaching Assistant',
    company: 'Department of Computer Science, University of Illinois',
    dates: '08/2023 - 05/2025',
    location: 'Champaign, IL',
    description: 'Assisted in running weekly lab sessions and office hours for CS225, supported students with C++ programming and debugging, and helped facilitate course activities using tools like Docker, VS Code, and GitHub.',
    tags: ['C++', 'Data Structures', 'Teaching', 'GitHub']
  },
  {
    title: 'Intern and Ambassador',
    company: 'Japan House at University of Illinois',
    dates: '08/2024 - 05/2025',
    location: 'Urbana, IL',
    description: 'Assisted with public tours and student-focused programming, maintained collections and facilities including the Japanese gardens, supported community engagement through social media and special events, and designed and crafted items for special events.',
    tags: ['Communication', 'Event Planning', 'Japanese Culture']
  }
];

const Experience = () => {
  usePageView("/desktop");
  return (
    <div className="tabs">
      <h2>Experience</h2>
      <div className="projects-list">
        <ul className="projects-ul">
          {experienceData.map((job, idx) => (
            <li className="project-item" key={idx}>
              {/* Meta: title, company, dates/location */}
              <div 
                className="project-meta" 
                style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
                <strong className="project-title">{job.title}</strong>
                <div style={{ fontSize: '0.9rem', color: 'white' }}>{job.company}</div>
                <time className="project-date">{job.dates} · {job.location}</time>
              </div>

              {/* Description + tags */}
              <div 
                className="project-body" 
                style={{ display: 'block', marginTop: '10px' }}
              >
                <p style={{ margin: 0 }}>{job.description}</p>

                {job.tags && job.tags.length > 0 && (
                  <div 
                    className="tag-row" 
                    style={{ 
                      marginTop: '15px', 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '6px' 
                    }}
                  >
                    {job.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="tag-edbadge" 
                        style={{ 
                          display: 'inline-block',
                          background: 'rgba(36, 75, 112, 0.546)', 
                          color: 'inherit', 
                          padding: '4px 8px', 
                          borderRadius: '999px', 
                          fontSize: '0.8rem'
                        }}
                      >
                        {tag}
                      </span>
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

export default Experience;
