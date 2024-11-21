// src/components/GitCloneRepos.js
import React, { useState } from "react";

const GitCloneRepos = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Reset the "Copied!" text back to "Copy" after a short delay
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 my-4 flex justify-center">
      <div className="w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-4 sm:p-6 overflow-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Cloning GitHub Repositories</h2>

        <p className="text-sm sm:text-base">Clone your GitHub repositories using SSH:</p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo git clone CRM_API_Production:markanthonyIt-Team/CRM_API_Production.git
          </pre>
          <button
            onClick={() =>
              handleCopy("sudo git clone CRM_API_Production:markanthonyIt-Team/CRM_API_Production.git")
            }
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo git clone FoyerNest_Testing:markanthonyIt-Team/Luxury_api-Testing.git
          </pre>
          <button
            onClick={() =>
              handleCopy("sudo git clone FoyerNest_Testing:markanthonyIt-Team/Luxury_api-Testing.git")
            }
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">Make sure to replace SSH aliases and repository paths as needed.</p>
      </div>
    </div>
  );
};

export default GitCloneRepos;
