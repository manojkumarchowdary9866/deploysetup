// src/App.js
import React, { useState } from "react";
import SSHSetup from "./components/SSHSetup";
import NGINXConfig from "./components/NGINXConfig";
import CertbotSSL from "./components/CertbotSSL";
import PM2Setup from "./components/PM2Setup";
import GitCloneRepos from "./components/GitCloneRepos";
import ServerSetup from "./components/ServerSetup";

function App() {
  const [isMultipleProjects, setIsMultipleProjects] = useState(true); // State to toggle between single and multiple projects

  const handleToggle = (isSingleProject) => {
    setIsMultipleProjects(!isSingleProject);
  };

  return (
    <div className="p-4 bg-gray-800">
      <h1 className="text-4xl font-bold text-white text-center mb-10">Server Setup Guide</h1>

      {/* Button to switch between displaying single or multiple projects */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          className="px-6 py-2 bg-blue-500 text-white rounded" 
          onClick={() => handleToggle(true)}
        >
          Single Project Setup
        </button>
        <button 
          className="px-6 py-2 bg-blue-500 text-white rounded" 
          onClick={() => handleToggle(false)}
        >
          Multiple Projects Setup
        </button>
      </div>

      {/* Conditional Rendering */}
      {isMultipleProjects ? (
        <>
          <SSHSetup />
          <NGINXConfig />
          <CertbotSSL />
          <PM2Setup />
          <GitCloneRepos />
        </>
      ) : (
        <ServerSetup />
      )}
    </div>
  );
}

export default App;
