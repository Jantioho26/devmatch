DevMatch is a full-stack developer job-search application built with React, Vite, Tailwind CSS, Node.js, and Express.

Technology 

React 			             19.3.1
React DOM 		           19.3.1
Vite 			               8.3.6
TailwindCSS 	           4.3.5
Tailwind Vite Plugin     4.3.5
Node.js 
Express.js               5.3.0
CORS  		               2.8.6
ESLint 		               10.14.0



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



