function getTimeAgo(dateString) {
  if (!dateString) return null;

  const postedDate = new Date(Number(dateString) * 1000);
  if (Number.isNaN(postedDate.getTime())) return null;

  const today = new Date();

  const difference = today - postedDate;
  const daysAgo = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));

  if (daysAgo === 0) return "Posted today";
  if (daysAgo === 1) return "Posted yesterday";

  return `Posted ${daysAgo} days ago`;
}

function JobCard({ job, onSave, isSaved }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">
      <button
        type="button"
        onClick={() => onSave(job)}
        aria-label={isSaved ? "Remove saved job" : "Save job"}
        title={isSaved ? "Remove from saved jobs" : "Save this job"}
        className={`float-right rounded-lg p-2 text-2xl transition hover:bg-slate-800 ${
          isSaved ? "text-red-400" : "text-slate-400"
        }`}
      >
        {isSaved ? "♥" : "♡"}
      </button>

      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div>
          <h4 className="text-xl font-semibold text-white">{job.title}</h4>

          <p className="mt-1 text-slate-400">
            {job.company} • {job.location}
          </p>

          {getTimeAgo(job.postedDate) && (
            <p className="mt-1 text-sm text-slate-400">
              {getTimeAgo(job.postedDate)}
            </p>
          )}

          <p className="mt-3 text-sm text-slate-300">{job.salary}</p>
        </div>

        <div className="flex flex-wrap items-start gap-2">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
            {job.level}
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {job.type}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
      {job.url && (
        <div className="mt-6 flex justify-end">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Apply Now ↗
          </a>
        </div>
      )}
    </div>
  );
}

export default JobCard;
