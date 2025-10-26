import React, { useState } from 'react';

export interface DHTabsProps {
  tabs: { label: string; key: string; content: string | React.ReactNode }[];
  initialTab: string;
}

const DHTabs: React.FC<DHTabsProps> = ({ tabs, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const tabContent = tabs.find((e) => e.key === activeTab)?.content;

  return (
    <div className="doc-helper__tabs">
      <div className="doc-helper__tabs-header">
        {tabs.map((tab) => (
          <button
            className={`doc-helper__tabs-button ${
              tab.key === activeTab ? 'active' : ''
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="doc-helper__tabs-content">{tabContent}</div>
    </div>
  );
};

DHTabs.displayName = 'DHTabs';
export { DHTabs };
