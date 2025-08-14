export default function JobItem({ job }) {
  function decodeEntities(str) {
    if (!str) return "";
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  }

  return (
    <div className="border rounded flex flex-row items-start backdrop-blur-md bg-white/10 text-white p-4 mb-6 hover:shadow-lg cursor-pointer">
      {job.companyLogo && (
        <img
          src={job.companyLogo}
          alt={`${decodeEntities(job.companyName)} logo`}
          className="h-40 rounded mr-3"
        />
      )}

      <div className="flex-1">
        {/* Job Title */}
        <h3 className="text-xl font-bold">
          {decodeEntities(decodeEntities(job.jobTitle))}
        </h3>

        {/* Company + Location */}
        <p className="text-sm opacity-80">
          {decodeEntities(decodeEntities(job.companyName))} – {job.jobGeo}
        </p>

        {/* Industry */}
        {job.jobIndustry && (
          <p className="text-sm">
            Industry: {decodeEntities(job.jobIndustry)}
          </p>
        )}

        {/* Job Type */}
        {job.jobType && (
          <p className="text-sm">
            Type: {job.jobType}
          </p>
        )}

        {/* Seniority */}
        {job.jobLevel && (
          <p className="text-sm">
            Seniority: {job.jobLevel}
          </p>
        )}

        {/* Publication Date */}
        {job.pubDate && (
          <p className="text-sm opacity-70">
            Published: {new Date(job.pubDate).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
