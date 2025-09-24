import React, { useState } from 'react';
import Projects from './ProjectsMobile';
import Education from './EducationMobile';
import Experience from './ExperienceMobile';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState('projects');

  return (
    <div className="tabs-card-mobile" style={{
      width: '95%',
      maxWidth: '600px',
      margin: '16px auto',
      padding: '12px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255,255,255,0.05)'
    }}>
      <div className="tablist-mobile" style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '12px',
        flexWrap: 'wrap'
      }}>
        <button className="tab" aria-selected={selectedTab === 'projects'} onClick={() => setSelectedTab('projects')}>Projects</button>
        <button className="tab" aria-selected={selectedTab === 'education'} onClick={() => setSelectedTab('education')}>Education</button>
        <button className="tab" aria-selected={selectedTab === 'experience'} onClick={() => setSelectedTab('experience')}>Experience</button>
      </div>

      <div className="tabpanels-mobile" style={{ textAlign: 'left' }}>
        {selectedTab === 'projects' && <Projects />}
        {selectedTab === 'education' && <Education />}
        {selectedTab === 'experience' && <Experience />}
      </div>
    </div>
  );
}
