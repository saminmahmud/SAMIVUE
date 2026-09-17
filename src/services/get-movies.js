export const getMovies = async (q) => {
  const url = q? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}` : 'https://api.tvmaze.com/shows';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await res.json();
  return q ? data.map((item) => item.show) : data;
} 