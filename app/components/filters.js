"use client";

import { useState } from "react";

export default function Filters({ filters, onChange }) {
  const [keyword, setKeyword] = useState(filters.keyword || "");
  const [geo, setGeo] = useState(filters.geo || "");
  const [industry, setIndustry] = useState(filters.industry || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ keyword, geo, industry });
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
            <option value="apac">APAC</option>
            <option value="emea">EMEA</option>
            <option value="argentina">Argentina</option>
            <option value="australia">Australia</option>
            <option value="austria">Austria</option>
            <option value="belgium">Belgium</option>
            <option value="brazil">Brazil</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="china">China</option>
            <option value="hong-kong">Hong Kong</option>
            <option value="costa-rica">Costa Rica</option>
            <option value="croatia">Croatia</option>
            <option value="cyprus">Cyprus</option>
            <option value="czechia">Czechia</option>
            <option value="denmark">Denmark</option>
            <option value="estonia">Estonia</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="greece">Greece</option>
            <option value="hungary">Hungary</option>
            <option value="ireland">Ireland</option>
            <option value="israel">Israel</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
            <option value="latvia">Latvia</option>
            <option value="lithuania">Lithuania</option>
            <option value="mexico">Mexico</option>
            <option value="netherlands">Netherlands</option>
            <option value="new-zealand">New Zealand</option>
            <option value="norway">Norway</option>
            <option value="philippines">Philippines</option>
            <option value="poland">Poland</option>
            <option value="portugal">Portugal</option>
            <option value="romania">Romania</option>
            <option value="serbia">Serbia</option>
            <option value="singapore">Singapore</option>
            <option value="slovakia">Slovakia</option>
            <option value="slovenia">Slovenia</option>
            <option value="south-korea">South Korea</option>
            <option value="spain">Spain</option>
            <option value="sweden">Sweden</option>
            <option value="switzerland">Switzerland</option>
            <option value="thailand">Thailand</option>
            <option value="turkiye">Türkiye</option>
            <option value="united-arab-emirates">United Arab Emirates</option>
            <option value="uk">United Kingdom</option>
            <option value="ukraine">Ukraine</option>
            <option value="vietnam">Vietnam</option>

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
            <option value="supporting">Customer Support</option>
            <option value="marketing">Marketing & Sales</option>
            <option value="data-science">Data Science</option>
            <option value="hr">Human Resources</option>
            <option value="management">Management</option>
            <option value="technical-support">Technical Support</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="admin-support">Admin Support</option>
            <option value="accounting-finance">Accounting & Finance</option>
            <option value="business">Business</option>
            <option value="copywriting">Copywriting</option>
            <option value="design-multimedia">Design & Multimedia</option>
            <option value="admin">Administration</option>
            <option value="dev">Development</option>
            <option value="seller">Sales & E-commerce</option>
            <option value="seo">SEO</option>
            <option value="smm">Social Media Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="technical-suppor">Technical Support</option>
            <option value="web-app-design">Web & App Design</option>
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
