// src/components/PM2Setup.js
import React, { useState } from "react";

const PM2Setup = () => {
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
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. PM2 Process Management</h2>
        <p className="text-sm sm:text-base">Use PM2 to manage the Node.js application:</p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo pm2 start app.js --name portal
          </pre>
          <button
            onClick={() => handleCopy("sudo pm2 start app.js --name portal")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">
          PM2 will ensure the application runs in the background and restarts on failure.
        </p>
      </div>
    </div>
  );
};

export default PM2Setup;
