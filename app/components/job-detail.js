export default function JobDetail({ job, onClose }) {
    function decodeEntities(str) {
        if (!str) return "";
        const textarea = document.createElement("textarea");
        textarea.innerHTML = str;
        return textarea.value;
    }

    return (
        <div className="animate-fadeIn border rounded backdrop-blur-md bg-white/10 text-white p-6 max-w-4xl mx-auto shadow-lg relative">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-red-400 text-lg"
            >
                ✕
            </button>

            {/* Header */}
            <div className="flex items-start mb-6">
                {job.companyLogo && (
                    <img
                        src={job.companyLogo}
                        alt={`${decodeEntities(job.companyName)} logo`}
                        className="h-20 w-20 object-contain rounded mr-4"
                    />
                )}
                <div>
                    <h2 className="text-2xl font-bold">
                        {decodeEntities(decodeEntities(job.jobTitle))}
                    </h2>
                    <p className="opacity-80">
                        {decodeEntities(decodeEntities(job.companyName))} – {job.jobGeo}
                    </p>
                </div>
            </div>

            {/* Job details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                {job.jobIndustry && (
                    <p><strong>Industry:</strong> {decodeEntities(job.jobIndustry)}</p>
                )}
                {job.jobType && <p><strong>Type:</strong> {job.jobType}</p>}
                {job.jobLevel && <p><strong>Seniority:</strong> {job.jobLevel}</p>}
                {job.salaryMin && (
                    <p>
                        <strong>Salary:</strong> {job.salaryMin}–{job.salaryMax}{" "}
                        {job.salaryCurrency} / {job.salaryPeriod}
                    </p>
                )}
                {job.pubDate && (
                    <p>
                        <strong>Published:</strong>{" "}
                        {new Date(job.pubDate).toLocaleString()}
                    </p>
                )}
            </div>

            {/* Excerpt */}
            {job.jobExcerpt && (
                <p className="italic mb-4 opacity-90">
                    "{decodeEntities(decodeEntities(job.jobExcerpt))}"
                </p>
            )}

            {/* Full description */}
            {job.jobDescription && (
                <div
                    className="prose prose-invert mb-6 max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: job.jobDescription,
                    }}
                />
            )}

            {/* Job link */}
            {job.url && (
                <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
                >
                    Apply Now
                </a>
            )}
        </div>
    );
}