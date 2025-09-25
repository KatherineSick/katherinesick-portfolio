import React, { useState } from 'react';
import ProjectsMobile from './Projects';
import Education from './Education';
import Experience from './Experience';
import About from './About';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState('about');

  return (
    <div id="tabs-section">
      <div className="tabs-card-mobile" style={{
        width: '95%',
        maxWidth: '600px',
        margin: '0px auto',
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.05)'
      }}>
        <div className="tablist-mobile" style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '0px',
          marginRight: '8px',
          paddingTop: '12px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <button className="tab" aria-selected={selectedTab === 'about'} onClick={() => setSelectedTab('about')}>About</button>
          <button className="tab" aria-selected={selectedTab === 'projects'} onClick={() => setSelectedTab('projects')}>Projects</button>
          <button className="tab" aria-selected={selectedTab === 'education'} onClick={() => setSelectedTab('education')}>Education</button>
          <button className="tab" aria-selected={selectedTab === 'experience'} onClick={() => setSelectedTab('experience')}>Experience</button>
        </div>

        <div className="tabpanels-mobile" style={{ textAlign: 'left' }}>
          {selectedTab === 'about' && <About />}
          {selectedTab === 'projects' && <ProjectsMobile />}
          {selectedTab === 'education' && <Education />}
          {selectedTab === 'experience' && <Experience />}
        </div>
      </div>
    </div>
  );
}
