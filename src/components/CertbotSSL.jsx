// src/components/CertbotSSL.js
import React, { useState } from "react";

const CertbotSSL = () => {
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
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. SSL Setup with Certbot</h2>
        
        <p className="text-sm sm:text-base">Use Certbot to secure your server with SSL certificates:</p>
        
        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo certbot --nginx -d crmapi.homebble.in
          </pre>
          <button
            onClick={() => handleCopy("sudo certbot --nginx -d crmapi.homebble.in")}
            className="absolute top-2 right-1 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        
        <p className="text-sm sm:text-base">This command configures SSL automatically for the specified domain.</p>
      </div>
    </div>
  );
};

export default CertbotSSL;
