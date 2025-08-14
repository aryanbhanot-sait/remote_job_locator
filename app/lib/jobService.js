export async function getJobs(count, filters = {}) {
  let url = `https://jobicy.com/api/v2/remote-jobs?count=${count}`;

  if (filters.keyword) url += `&tag=${encodeURIComponent(filters.keyword)}`;
  if (filters.geo) url += `&geo=${encodeURIComponent(filters.geo)}`;
  if (filters.industry) url += `&industry=${encodeURIComponent(filters.industry)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data.jobs || data || [];
}