const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "DevMatch backend is running",
  });
});

// Jobs API endpoint

app.get("/api/jobs", async (req, res) => {
  try {
    const searchTerm = req.query.search || "frontend";

    const params = new URLSearchParams({
      q: searchTerm,
      country: "US",
      seniority: "Entry-level",
    });

    const allJobs = [];

    for (let page = 1; page <= 3; page++) {
      params.set("page", page.toString());

      const response = await fetch(
        `https://himalayas.app/jobs/api/search?${params.toString()}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs from Himalayas");
      }

      const data = await response.json();

      allJobs.push(...data.jobs);

      if (data.jobs.length === 0) {
        break;
      }
    }

    function getExperienceLevel(title) {
      const jobTitle = title.toLowerCase();

      if (
        jobTitle.includes("junior") ||
        jobTitle.includes("entry level") ||
        jobTitle.includes("entry-level") ||
        jobTitle.includes("graduate") ||
        jobTitle.includes("associate")
      ) {
        return "Junior";
      }

      if (
        jobTitle.includes("senior") ||
        jobTitle.includes("sr.") ||
        jobTitle.includes("lead") ||
        jobTitle.includes("staff") ||
        jobTitle.includes("principal")
      ) {
        return "Senior";
      }

      if (jobTitle.includes("mid-level")) {
        return "Mid";
      }

      return "Not specified";
    }

    const jobs = allJobs
      .filter((job) => {
        const title = job.title.toLowerCase();

        if (
          title.includes("future position") ||
          title.includes("future opportunity") ||
          title.includes("talent pool")
        ) {
          return false;
        }

        return (
          title.includes("developer") ||
          title.includes("software engineer") ||
          title.includes("frontend") ||
          title.includes("front-end") ||
          title.includes("full stack") ||
          title.includes("fullstack")
        );
      })
      .map((job, index) => ({
        id: job.id || job.guid || `${job.companySlug}-${index}`,
        title: job.title,
        company: job.companyName,
        postedDate: job.pubDate || null,

        location: job.locationRestrictions?.includes("United States")
          ? "Remote • U.S. eligible"
          : "Remote • Eligibility not confirmed",

        type: job.employmentType || "Not specified",
        level: job.seniority?.[0] || getExperienceLevel(job.title),

        salary:
          job.minSalary != null && job.maxSalary != null
            ? `${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: job.currency || "USD",
                maximumFractionDigits: 0,
              }).format(job.minSalary)} – ${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: job.currency || "USD",
                maximumFractionDigits: 0,
              }).format(job.maxSalary)}${
                job.salaryPeriod === "annual" ? " / year" : ""
              }`
            : "Salary not listed",

        skills: [],
        url: job.applicationLink || job.url,
      }));

    res.json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch jobs",
    });
  }
});

app.listen(PORT, () => {
  console.log(`DevMatch server running on port ${PORT}`);
});
