"use client";

import { useState } from "react";

export default function Filters({ filters, onChange }) {
  const [keyword, setKeyword] = useState(filters.keyword || "");
  const [geo, setGeo] = useState(filters.geo || "");
  const [industry, setIndustry] = useState(filters.industry || "");
  const [jobType, setJobType] = useState(filters.jobType || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass new filter values up to page.js
    onChange({ keyword, geo, industry, jobType });
  };

  return (
    <main className="backdrop-blur-md bg-white/10 rounded-2xl pt-3">
      <h1 className="text-white text-3xl font-bold text-center drop-shadow-[0_0_5px_black]">
        Remote Job Finder
      </h1>
      <form
        onSubmit={handleSubmit}
        className="text-white p-4 rounded-md mb-6 flex flex-col md:flex-row items-center gap-4 shadow-lg"
      >
        {/* Keyword Search */}
        <div>
          <label className="block text-sm font-medium mb-1 drop-shadow-[0_0_5px_black]">Keyword</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. Python"
            className="p-2 rounded w-48 bg-gray-500 text-white placeholder-white border border-white/30"
          />
        </div>

        {/* Geo select */}
        <div>
          <label className="block text-sm font-medium mb-1 drop-shadow-[0_0_5px_black]">Location</label>
          <select
            value={geo}
            onChange={(e) => setGeo(e.target.value)}
            className="p-2 rounded w-48 bg-gray-500 text-white border border-white/30"
          >
            <option value="">Any</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="europe">Europe</option>
            <option value="latam">LATAM</option>
          </select>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium mb-1 drop-shadow-[0_0_5px_black]">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="p-2 rounded w-48 bg-gray-500 text-white border border-white/30"
          >
            <option value="">Any</option>
            <option value="software">Software Engineering</option>
            <option value="supporting">Customer Support</option>
            <option value="design">Creative & Design</option>
            <option value="marketing">Marketing & Sales</option>
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium mb-1 drop-shadow-[0_0_5px_black]">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="p-2 rounded w-48 bg-gray-500 text-white border border-white/30"
          >
            <option value="">Any</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded mt-4 md:mt-6 shadow-md"
          style={{ textShadow: "0 0 4px black" }}
        >
          Search
        </button>
      </form>
    </main>
  );
}
