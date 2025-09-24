import React, { useState } from 'react';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('projects');

  return (
    <div className="tabs-card">
      <div className="tabs tabs-animated">
        <div className="tablist">
          <button
            className="tab tab-animated tab-1"
            aria-selected={selectedTab === 'projects'}
            onClick={() => setSelectedTab('projects')}
          >
            Projects
          </button>
          <button
            className="tab tab-animated tab-2"
            aria-selected={selectedTab === 'education'}
            onClick={() => setSelectedTab('education')}
          >
            Education
          </button>
          <button
            className="tab tab-animated tab-3"
            aria-selected={selectedTab === 'experience'}
            onClick={() => setSelectedTab('experience')}
          >
            Experience
          </button>
        </div>

        <div className="tabpanels">
          {selectedTab === 'projects' && (
            <div className="panel tabpanel-animated tabpanel-1">
              <Projects />
            </div>
          )}
          {selectedTab === 'education' && (
            <div className="panel tabpanel-animated tabpanel-2">
              <Education />
            </div>
          )}
          {selectedTab === 'experience' && (
            <div className="panel tabpanel-animated tabpanel-3">
              <Experience />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
