import React, { useState } from 'react';

import "./tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabHeaders = [
    { icon: 'fa fa-code', text: 'Profile' },
    { icon: 'fa fa-pencil-square', text: 'Bio' },
    { icon: 'fa fa-envelope', text: 'Contact' },
    { icon: 'fa fa-camera', text: 'Portfolio' },
    { icon: 'fa fa-linkedin', text: 'Social' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const ProfileTabContent = (
    <div>
      <h2>Profile</h2>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...</p>
    </div>
  );

  const BioTabContent = (
    <div>
      <h2>Bio</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...</p>
    </div>
  );

  const ContactTabContent = (
    <div>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...</p>
    </div>
  );

  const PortfolioTabContent = (
    <div>
      <h2>Portfolio</h2>
      <p>Check out my amazing portfolio showcasing my work...</p>
    </div>
  );

  const SocialTabContent = (
    <div>
      <h2>Social</h2>
      <p>Connect with me on LinkedIn and other social platforms...</p>
    </div>
  );

  const tabContent = [
    ProfileTabContent,
    BioTabContent,
    ContactTabContent,
    PortfolioTabContent,
    SocialTabContent,
  ];

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabHeaders.map((header, index) => (
          <div
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            <i className={header.icon}></i> {header.text}
          </div>
        ))}
      </div>
      <div className="tab-indicator" style={{ top: `calc(80px + ${activeTab * 50}px)` }}></div>
      <div className="tab-content">
        {tabContent.map((content, index) => (
          <div key={index} className={activeTab === index ? 'active' : ''}>
            <i className={tabHeaders[index].icon}></i>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
