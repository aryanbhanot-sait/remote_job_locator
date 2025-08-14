import JobItem from "./job-item";

export default function JobList({ jobs, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div key={job.id} onClick={() => onSelect(job)}>
          <JobItem job={job} />
        </div>
      ))}
    </div>
  );
}