import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";

function App() {
  const [search, setSearch] = useState("");
  const [experience, setExperience] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showSaved, setShowSaved] = useState(false);

  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const storedJobs = localStorage.getItem("devmatchSavedJobs");
      return storedJobs ? JSON.parse(storedJobs) : [];
    } catch {
      return [];
    }
  });

  function toggleSaveJob(job) {
    setSavedJobs((previousJobs) => {
      const alreadySaved = previousJobs.some(
        (savedJob) => savedJob.id === job.id,
      );

      const updatedJobs = alreadySaved
        ? previousJobs.filter((savedJob) => savedJob.id !== job.id)
        : [...previousJobs, job];

      localStorage.setItem("devmatchSavedJobs", JSON.stringify(updatedJobs));

      return updatedJobs;
    });
  }

  async function fetchJobs(searchTerm = "frontend") {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/jobs?search=${encodeURIComponent(searchTerm)}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();

      if (!data.success || !Array.isArray(data.jobs)) {
        throw new Error("Invalid jobs response");
      }

      setJobs(data.jobs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadInitialJobs() {
      await fetchJobs();
    }

    loadInitialJobs();
  }, []);

  function handleSearch() {
    fetchJobs(search.trim() || "frontend");
  }

  const filteredJobs = jobs
    .filter((job) => {
      const jobLevel = (job.level || "").toLowerCase();

      const matchesExperience =
        experience === "all" ||
        (experience === "junior" &&
          (jobLevel.includes("junior") ||
            jobLevel.includes("entry-level") ||
            jobLevel.includes("entry level") ||
            jobLevel.includes("graduate"))) ||
        (experience === "mid" &&
          (jobLevel.includes("mid") || jobLevel.includes("intermediate"))) ||
        (experience === "senior" &&
          (jobLevel.includes("senior") ||
            jobLevel.includes("lead") ||
            jobLevel.includes("principal")));

      const normalizedJobType = (job.type || "")
        .toLowerCase()
        .replace(/[\s_-]/g, "");

      const matchesJobType =
        jobType === "all" ||
        normalizedJobType === jobType.replace(/[\s_-]/g, "");

      return matchesExperience && matchesJobType;
    })
    .sort((a, b) => Number(b.postedDate) - Number(a.postedDate));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-400">DevMatch</h1>

          <span className="text-sm text-slate-400">
            Find your next opportunity
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex gap-3">
          <button
            type="button"
            onClick={() => setShowSaved(false)}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              !showSaved
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Jobs
          </button>

          <button
            type="button"
            onClick={() => setShowSaved(true)}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              showSaved
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            ♥ Saved Jobs ({savedJobs.length})
          </button>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 text-4xl font-bold">
            Find your next remote developer role.
          </h2>

          <p className="text-slate-400">
            Discover developer jobs that match your skills, experience, and
            career goals.
          </p>
        </div>

        {/* Search Section */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-4 text-lg font-semibold">Search Jobs</h3>

          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search jobs (React, Frontend, Junior...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-400"
            />

            <button
              type="button"
              onClick={handleSearch}
              disabled={loading}
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search Jobs"}
            </button>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col gap-5 border-t border-slate-800 pt-6 md:flex-row md:items-end">
            {/* Experience Filter */}
            <div className="flex flex-col gap-2">
              <label htmlFor="experience" className="text-sm text-slate-400">
                Experience Level
              </label>

              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
              >
                <option value="all">All Levels</option>
                <option value="junior">Junior / Entry-Level</option>
                <option value="mid">Mid-Level</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            {/* Job Type Filter */}
            <div className="flex flex-col gap-2">
              <label htmlFor="jobType" className="text-sm text-slate-400">
                Job Type
              </label>

              <select
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}

        <section className="mt-10">
          {loading && <p className="text-slate-400">Loading Jobs...</p>}

          {error && <p className="text-red-400">Error: {error}</p>}

          {(showSaved || (!loading && !error)) &&
            (showSaved ? savedJobs.length : filteredJobs.length) === 0 && (
              <div className="mb-5 rounded-xl border border-dashed border-slate-700 p-10 text-center">
                <p className="text-slate-400">
                  {showSaved
                    ? "No saved jobs yet. Click the heart on any job to save it for later! ❤️"
                    : "No jobs found. Try adjusting your search or filters."}
                </p>
              </div>
            )}

          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              {showSaved ? "Your Saved Jobs" : "Job Matches"}
            </h3>

            <span className="text-sm text-slate-400">
              {showSaved ? savedJobs.length : filteredJobs.length} jobs
            </span>
          </div>

          <div className="grid gap-5">
            {(showSaved ? savedJobs : filteredJobs).map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onSave={toggleSaveJob}
                isSaved={savedJobs.some((savedJob) => savedJob.id === job.id)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
