// src/components/SSHSetup.js
import React, { useState } from "react";

const SSHSetup = () => {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const handleCopy = (text, commandId) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);

    setTimeout(() => {
      setCopiedCommand(null);
    }, 10000);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 my-4 flex justify-center">
      <div className="w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-4 sm:p-6 overflow-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. SSH Key Setup</h2>
        <p className="text-sm sm:text-base">To securely access your GitHub repositories, you need to set up SSH keys. Follow these steps:</p>
        
        <div className="mt-4">
          <p className="text-sm sm:text-base font-bold">1. Generate a new SSH key:</p>
          <div className="relative">
            <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
              sudo ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_FoyerNest_Testing
            </pre>
            <button
              onClick={() => handleCopy("sudo ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_FoyerNest_Testing", 1)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              {copiedCommand === 1 ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm sm:text-base">This command generates a 4096-bit RSA key for secure communication. The `-f` flag specifies the file path.</p>
        </div>
        
        <div className="mt-4">
          <p className="text-sm sm:text-base font-bold">2. Configure SSH for GitHub:</p>
          <div className="relative">
            <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
              sudo nano ~/.ssh/config
            </pre>
            <button
              onClick={() => handleCopy("sudo nano ~/.ssh/config", 2)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              {copiedCommand === 2 ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm sm:text-base">Add this configuration to define a GitHub host alias:</p>
          <div className="relative">
            <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
{`Host project1
    Hostname github.com
    User git
    IdentityFile ~/.ssh/id_rsa_CRM_API_Production`}
            </pre>
            <button
              onClick={() => handleCopy("Host project1\n    Hostname github.com\n    User git\n    IdentityFile ~/.ssh/id_rsa_CRM_API_Production", 3)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              {copiedCommand === 3 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm sm:text-base font-bold">3. Start SSH agent and add the key:</p>
          <div className="relative">
            <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
              eval "$(ssh-agent -s)"
              <br />
              ssh-add ~/.ssh/id_rsa_FoyerNest_Testing
            </pre>
            <button
              onClick={() => handleCopy("eval \"$(ssh-agent -s)\"\nssh-add ~/.ssh/id_rsa_FoyerNest_Testing", 4)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              {copiedCommand === 4 ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm sm:text-base">This step initiates the SSH agent, making sure the key is available for authentication.</p>
        </div>
        
        <div className="mt-4">
          <p className="text-sm sm:text-base font-bold">4. Verify the key:</p>
          <div className="relative">
            <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
              sudo cat ~/.ssh/id_rsa_FoyerNest_Testing.pub
            </pre>
            <button
              onClick={() => handleCopy("sudo cat ~/.ssh/id_rsa_FoyerNest_Testing.pub", 5)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              {copiedCommand === 5 ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm sm:text-base">Copy the output and add it to GitHub under your SSH settings to allow access.</p>
        </div>
      </div>
    </div>
  );
};

export default SSHSetup;
