// src/components/NGINXConfig.js
import React, { useState } from "react";

const NGINXConfig = () => {
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
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. NGINX Reverse Proxy Setup</h2>

        <p className="text-sm sm:text-base font-bold">1. Open the default NGINX configuration file:</p>
        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo nano /etc/nginx/sites-available/default
          </pre>
          <button
            onClick={() => handleCopy("sudo nano /etc/nginx/sites-available/default")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base font-bold">2. Configure the reverse proxy:</p>
        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            {`server {
    server_name crmapi.homebble.in;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/crmapi.homebble.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/crmapi.homebble.in/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}`}
          </pre>
          <button
            onClick={() => handleCopy(`server {
    server_name crmapi.homebble.in;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/crmapi.homebble.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/crmapi.homebble.in/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}`)}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm sm:text-base">This configuration directs requests to port 5000 on the local server. It also includes SSL configuration.</p>

        <p className="mt-4 text-sm sm:text-base font-bold">3. Test and restart NGINX:</p>
        <div className="relative">
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-3 sm:p-4 rounded mb-4 overflow-x-auto">
            sudo nginx -t
            <br />
            sudo service nginx restart
          </pre>
          <button
            onClick={() => handleCopy("sudo nginx -t\nsudo service nginx restart")}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NGINXConfig;
