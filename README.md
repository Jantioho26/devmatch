DevMatch is a full-stack developer job-search application built with React, Vite, Tailwind CSS, Node.js, and Express.

The application helps developers discover remote job opportunities, search by keyword, filter listings by experience level and employment type, and save positions for later.

DevMatch integrates with the Himalayas Jobs API to retrieve job listings and uses a custom Express backend to process and format job data before displaying it in a responsive React interface.

##  Features

### Job Search
### Job Filtering
### Saved Jobs
### Job Details
### Backend API Integration
### Responsive User Interface


## 🛠️ Technologies Used

### Frontend

| Technology |  Version |
|---|---|
| React | ^19.3.1 |
| React DOM | ^19.3.1 |
| Vite | ^8.3.6 |
| Tailwind CSS | ^4.3.5 |
| Tailwind Vite Plugin | ^4.3.5 |

### Backend

| Technology |  Version |
|---|---|
| Node.js | Version not specified |
| Express.js | ^5.3.0 |
| CORS | ^2.8.6 |

### Development Tools

| Technology |  Version |
|---|---|
| ESLint | ^10.14.0 |
| Vite React Plugin | ^6.1.2 |
| React Hooks ESLint Plugin | ^7.1.1 |


## ⚙️ Installation and Setup
### 1. Clone the Repository

```bash
git clone https://github.com/Jantioho26/devmatch.git
cd devmatch
```
### 2. Install Frontend Dependencies

From the project root:

```bash
npm install
```

### 3. Install Backend Dependencies

Open a terminal and navigate to the backend directory:

```bash
cd server
npm install
```

### 4. Start the Backend Server

From the `server` directory:

```bash
node index.js
```

### 5. Start the Frontend

Open a second terminal and navigate to the project root.

Run:

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal, typically:

```text
http://localhost:5173
```

Both the frontend and backend must be running for live job searches to work during local development.

## 🔗 API Endpoints

### GET /api/health

Checks whether the Express backend is running.

### GET /api/jobs

Retrieves developer job listings from the Himalayas Jobs API.

Example request:

```text
GET /api/jobs?search=react
```

## 🔄 How the Application Works

1. The React frontend requests job listings through `/api/jobs`.
2. Vite forwards development API requests to the Express backend on port 3001.
3. Express queries the Himalayas Jobs API.
4. The backend filters, formats, and normalizes the returned listings.
5. React displays the jobs using reusable `JobCard` components.
6. Users can search, filter, and save jobs.
7. Saved jobs are stored in the browser's localStorage.

## 📜 Available Scripts

From the frontend project root:

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

The backend can be started from its own directory with `node index.js`.




