# DevMatch — Developer Job Search Application

DevMatch is a responsive, full-stack job search application that helps developers discover remote job opportunities, filter positions by experience and employment type, and save jobs for later.

## Technologies Used

- React — ^19.3.1
- Vite — ^8.3.6
- Tailwind CSS — ^4.3.5
- Node.js — version not specified
- Express.js — ^5.3.0
- CORS — ^2.8.6
- JavaScript (ES6+)
- Himalayas Jobs API
- ESLint — ^10.14.0

*Versions listed are from the project's package.json files.*

## Features

- **Job Search:** Search remote developer positions using keywords such as React, Frontend, or Junior.
- **Live Job Listings:** Fetch job opportunities from the Himalayas Jobs API through an Express backend.
- **Advanced Filtering:** Filter positions by experience level (Junior, Mid-Level, Senior) and employment type (Full-Time, Part-Time, Contract).
- **Saved Jobs:** Save and remove job listings using an interactive heart button, with selections stored in localStorage.
- **Job Details:** View company information, salary, experience level, employment type, and posting dates.
- **Apply Now:** Open external job application links directly from job listings.
- **Responsive Design:** Mobile-friendly interface built with Tailwind CSS.
- **Error Handling:** Displays loading indicators, error messages, and empty search results.

## How to Run Locally

1. Clone the GitHub repository and navigate to the project folder.
2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Open a second terminal, navigate to the backend folder, and install dependencies:

   ```bash
   cd server
   npm install
   ```

4. Start the backend server:

   ```bash
   node index.js
   ```

5. In the first terminal, start the frontend:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in your terminal (typically `http://localhost:5173`).

The Express backend runs on port 3001, and Vite proxies API requests to the backend during local development.

<img width="1369" height="578" alt="Screenshot 2026-11-15 at 6 45 31 PM" src="https://github.com/user-attachments/assets/c9368806-aee1-4d7e-adf8-04c84234c806" />











