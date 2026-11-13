# DevMatch 💻

### Find Your Next Remote Developer Opportunity

DevMatch is a full-stack developer job-search application built with React, Vite, Tailwind CSS, Node.js, and Express.

The application helps developers discover remote job opportunities, search by keyword, filter listings by experience level and employment type, and save positions for later.

DevMatch integrates with the Himalayas Jobs API to retrieve job listings and uses a custom Express backend to process and format job data before displaying it in a responsive React interface.

## 🚀 Features

### Job Search
- Search remote developer positions using keywords such as React, Frontend, and Junior.
- Retrieve job listings from the Himalayas Jobs API.
- Display job matches sorted by posting date, newest first.

### Job Filtering
- Filter positions by experience level: Junior, Mid-Level, and Senior.
- Filter positions by employment type: Full-Time, Part-Time, and Contract.
- Combine filters to narrow job results.

### Saved Jobs
- Save and remove jobs using an interactive heart button.
- View saved positions in a dedicated Saved Jobs section.
- Persist saved jobs using browser localStorage, even after refreshing the page.

### Job Details
Each listing displays available information including:
- Job title and company
- Remote location eligibility
- Experience level
- Employment type
- Salary range
- Required skills, when provided
- Relative posting date
- External application link

### Backend API Integration
- Retrieve remote job listings through the Himalayas Jobs API.
- Fetch up to three pages of search results.
- Filter unrelated job listings and talent-pool advertisements.
- Normalize external API data into consistent job objects.
- Format salary information using JavaScript's `Intl.NumberFormat`.
- Determine experience levels from job titles when needed.
- Handle API errors and provide a backend health-check endpoint.

### Responsive User Interface
- Responsive layouts built with Tailwind CSS.
- Dark-themed interface with blue accents.
- Loading indicators, error messages, and empty-result states.
- Reusable React components.

## 🛠️ Technologies Used

### Frontend

| Technology | Declared Version |
|---|---|
| React | ^19.3.1 |
| React DOM | ^19.3.1 |
| Vite | ^8.3.6 |
| Tailwind CSS | ^4.3.5 |
| Tailwind Vite Plugin | ^4.3.5 |

### Backend

| Technology | Declared Version |
|---|---|
| Node.js | Version not specified |
| Express.js | ^5.3.0 |
| CORS | ^2.8.6 |

### Development Tools

| Technology | Declared Version |
|---|---|
| ESLint | ^10.14.0 |
| Vite React Plugin | ^6.1.2 |
| React Hooks ESLint Plugin | ^7.1.1 |

The listed dependency versions come from the project's `package.json` files. The caret (`^`) allows compatible updates; exact installed versions are recorded in the lockfiles.

### External API

[Himalayas Jobs API](https://himalayas.app/)

## 📁 Project Structure

```text
devmatch/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── JobCard.jsx
│   ├── data/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── server/
│   ├── index.js
│   └── package.json
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Before running the application, install:

- Node.js and npm
- Git
- A code editor such as Visual Studio Code

Use a Node.js version compatible with the project's Vite and Express dependencies.

### 1. Clone the Repository

```bash
git clone <YOUR-REPOSITORY-URL>
cd devmatch
```

Replace `<YOUR-REPOSITORY-URL>` with the DevMatch repository's HTTPS URL.

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

The Express server runs on:

```text
http://localhost:3001
```

Verify that the backend is running by visiting:

```text
http://localhost:3001/api/health
```

Expected response:

```json
{
  "success": true,
  "message": "DevMatch backend is running"
}
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

The backend searches for remote developer positions, filters results, and returns normalized job information.

Example response structure:

```json
{
  "success": true,
  "jobs": [
    {
      "id": "example-id",
      "title": "Frontend Developer",
      "company": "Example Company",
      "location": "Remote • U.S. eligible",
      "type": "Full-time",
      "level": "Junior",
      "salary": "Salary not listed",
      "skills": [],
      "url": "https://example.com/apply"
    }
  ]
}
```

The example above illustrates the response format and is not an actual job listing.

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

## 🧠 Skills Demonstrated

- React functional components and Hooks
- Component-based architecture
- State management with `useState`
- Data fetching with `useEffect` and `async/await`
- REST API integration
- Express backend development
- API response normalization
- Dynamic filtering and sorting
- Browser localStorage
- Error handling
- Responsive design with Tailwind CSS
- Frontend/backend communication using a Vite proxy

## 📝 Notes

- Job availability and listing details depend on the external Himalayas Jobs API.
- The backend requests U.S. jobs with an entry-level seniority parameter; returned results depend on the API.
- Saved jobs are stored locally in the user's browser rather than in a database.
- The Vite proxy is configured for local development. Production deployments require appropriate API routing.
- No API key is configured in the supplied backend implementation.

---

**DevMatch — Connecting developers with their next opportunity.**

