import React, { useState } from 'react';
import Projects from './Projects';
import Education from './Education';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('projects');

  return (
    <div className="tabs-card">
      <div className="tabs">
        <div className="tablist">
          <button className="tab" aria-selected={selectedTab === 'projects'} onClick={() => setSelectedTab('projects')}>Projects</button>
          <button className="tab" aria-selected={selectedTab === 'education'} onClick={() => setSelectedTab('education')}>Education</button>
        </div>

        <div className="tabpanels">
          {selectedTab === 'projects' && <Projects />}
          {selectedTab === 'education' && <Education />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
