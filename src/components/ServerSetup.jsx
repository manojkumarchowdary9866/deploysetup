import React, { useState } from "react";

const ServerSetup = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    setCopied(text); // Update state with the copied text

    // Reset the "Copied!" text after a short delay
    setTimeout(() => {
      setCopied(""); // Reset state to empty
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 my-4 flex justify-center ">
      <div className="w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-4 sm:p-6 overflow-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4"> Clone your Private Repository from GitHub</h2>

        <p className="text-sm sm:text-base">
          Connect to your server (Droplet) and generate an SSH key:
        </p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo ssh-keygen
          </pre>
          <button
            onClick={() => handleCopy("sudo ssh-keygen")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "sudo ssh-keygen" ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">
          If you want, choose a path and name for your key. I always use the default path (~/.ssh) and name, like id_rsa.
        </p>

        <p className="text-sm sm:text-base">Create SSH config:</p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo nano ~/.ssh/config
            <br />
            Host project_name
            <br />
            Hostname github.com
            <br />
            User git
            <br />
            IdentityFile ~/.ssh/id_rsa
          </pre>
          <button
            onClick={() => handleCopy("sudo nano ~/.ssh/config\nHost project_name\nHostname github.com\nUser git\nIdentityFile ~/.ssh/id_rsa")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "sudo nano ~/.ssh/config\nHost project_name\nHostname github.com\nUser git\nIdentityFile ~/.ssh/id_rsa" ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">Copy the public key to clipboard and go to your GitHub repository settings:</p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo nano ~/.ssh/id_rsa.pub
          </pre>
          <button
            onClick={() => handleCopy("sudo nano ~/.ssh/id_rsa.pub")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "sudo nano ~/.ssh/id_rsa.pub" ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">Add copied public key to Deploy Keys section and don't forget to check "Allow write access".</p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-4">Clone the Repository</h3>
        
        <p className="text-sm sm:text-base">😊 Let’s clone it (inside the /root/home directory):</p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            $ pwd
            <br />
            /root/home
            <br />
             sudo git clone project_name:user/reponame.git
          </pre>
          <button
            onClick={() => handleCopy("$ pwd\n/root/home\nsudo git clone project_name:<user>/<repo>.git")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "$ pwd\n/root/home\nsudo git clone project_name:<user>/<repo>.git" ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">For updates, type into your project directory:</p>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            git pull
          </pre>
          <button
            onClick={() => handleCopy("git pull")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "git pull" ? "Copied!" : "Copy"}
          </button>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-4">Install Dependencies and Test App</h3>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            cd yourproject
            <br />
            npm install
            <br />
            npm start #(or whatever your start command)
            <br />
            # Stop app
            <br />
            ctrl+C
          </pre>
          <button
            onClick={() => handleCopy("cd yourproject\nnpm install\nnpm start #(or whatever your start command)\n# stop app\nctrl+C")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "cd yourproject\nnpm install\nnpm start #(or whatever your start command)\n# stop app\nctrl+C" ? "Copied!" : "Copy"}
          </button>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-4">Setup PM2 Process Manager</h3>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo npm i pm2 -g
            <br />
            pm2 start app.js #(or whatever your file name)
          </pre>
          <button
            onClick={() => handleCopy("sudo npm i pm2 -g\npm2 start app.js #(or whatever your file name)")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "sudo npm i pm2 -g\npm2 start app.js #(or whatever your file name)" ? "Copied!" : "Copy"}
          </button>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-4">Setup UFW Firewall</h3>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo ufw enable
            <br />
            sudo ufw status
            <br />
            sudo ufw allow ssh
            <br />
            sudo ufw allow http
            <br />
            sudo ufw allow https
          </pre>
          <button
            onClick={() => handleCopy("sudo ufw enable\nsudo ufw status\nsudo ufw allow ssh\nsudo ufw allow http\nsudo ufw allow https")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "sudo ufw enable\nsudo ufw status\nsudo ufw allow ssh\nsudo ufw allow http\nsudo ufw allow https" ? "Copied!" : "Copy"}
          </button>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-4">Setup NGINX Reverse Proxy</h3>

        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo apt install nginx
            <br />
            sudo nano /etc/nginx/sites-available/default
          </pre>
          <button
            onClick={() => handleCopy("sudo apt install nginx\nsudo nano /etc/nginx/sites-available/default")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied === "sudo apt install nginx\nsudo nano /etc/nginx/sites-available/default" ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default ServerSetup;
