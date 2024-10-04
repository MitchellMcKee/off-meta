import React, { useState } from 'react';

// Recursive component to display JSON data
const JsonDisplay = ({ jsonData, level = 0 }) => {
  const [collapsed, setCollapsed] = useState(true); // State to manage collapse/expand

  // Function to determine if the value is an object
  const isObject = (value) => typeof value === 'object' && value !== null;

  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      {Array.isArray(jsonData) ? (
        jsonData.map((item, index) => (
          <JsonDisplay key={index} jsonData={item} level={level} />
        ))
      ) : (
        Object.entries(jsonData).map(([key, value]) => {
          const isCollapsible = isObject(value) && !Array.isArray(value); // Only objects are collapsible

          return (
            <div key={key}>
              {isCollapsible ? (
                <div>
                  <span
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    {collapsed ? '[+]' : '[-]'} {key}
                  </span>
                  {!collapsed && (
                    <JsonDisplay jsonData={value} level={level + 1} />
                  )}
                </div>
              ) : Array.isArray(value) ? (
                <div>
                  <strong>{key}:</strong>
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li> // Display each string as a bullet point
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <strong>{key}:</strong> {value.toString()}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

// Main component to render JSON
const JsonViewer = ({ json }) => {
  return (
    <div>
      <h1>JSON Viewer</h1>
      <JsonDisplay jsonData={json} />
    </div>
  );
};

export default JsonViewer;
