DevMatch is a full-stack developer job-search application built with React, Vite, Tailwind CSS, Node.js, and Express.

React V ^19.3.1
Vite V 8.3.6
TailwindCSS V 4.3.5 
Nodejs 
Express V 5.3.0

How to run this project ~ 
Git clone https://github.com/Jantioho26/devmatch.git 
run npm i  
npm run dev for local host 


🔄 How the Application Works
The React frontend requests job listings through /api/jobs.
Vite forwards development API requests to the Express backend on port 3001.
Express queries the Himalayas Jobs API.
The backend filters, formats, and normalizes the returned listings.
React displays the jobs using reusable JobCard components.

Users can search, filter, and save jobs.
Saved jobs are stored in the browser's localStorage.



