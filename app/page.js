"use client";

import React, { useState, useEffect } from "react";
import Filters from "./components/filters";
import JobList from "./components/job-list";
import JobDetail from "./components/job-detail";
import worldImg from "./assets/world.jpg";
import { getJobs } from "./lib/jobService";

export default function Page() {
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(20);
  const [filters, setFilters] = useState({
    keyword: "",
    geo: "",
    industry: "",
    jobType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const initialCount = parseInt(params.get("count")) || 20;
      setCount(initialCount);
    }
  }, []);

  // Fetch jobs
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const jobData = await getJobs(count, filters);
        setJobs(jobData);
      } catch (err) {
        setError(err.message || "Failed to fetch jobs");
      }
      setLoading(false);
    }
    fetchData();
  }, [filters, count]);

  const handleChange = (value) => {
    setCount(Number(value));
    if (typeof window !== "undefined") {
      const newParams = new URLSearchParams(window.location.search);
      newParams.set("count", value);
      window.history.replaceState({}, "", `?${newParams.toString()}`);
    }
  };

  return (
    <main
      className="min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${worldImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="fixed top-16 right-15 z-15 bg-black/50 p-4 rounded-md">
        <div>
          <label htmlFor="count" className="mr-2">
            Jobs per page:
          </label>
          <select
            id="count"
            value={count}
            onChange={(e) => {
              const value = e.target.value;
              handleChange(value);
              window.location.href = `?count=${value}`;
            }}
            className="p-2 rounded bg-gray-950 text-white"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={99}>All</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div className="fixed w-[calc(100vw-65px)] z-10">
        <Filters filters={filters} onChange={setFilters} />
      </div>

      {/* Job list or Job detail */}
      <div className="mt-43">
        {loading && <p className="text-white text-center">Loading jobs...</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}

        {!loading && !error && !selectedJob && (
          <JobList jobs={jobs} onSelect={setSelectedJob} />
        )}

        {selectedJob && (
          <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/20 bg-black/30 backdrop-blur-md text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left text */}
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Remote Job Finder. All rights reserved.
          </p>

          <p className="text-sm opacity-80 italic">
            Made and developed with ❤︎ by <span className="font-semibold">Aryan</span>.
          </p>

          {/* Right text/logo */}
          <p className="text-sm opacity-70">
            Powered by <a href="https://jobicy.com/jobs-rss-feed" target="_blank" className="hover:text-blue-400">Jobicy API</a>
          </p>
        </div>
      </footer>

    </main>
  );
}
