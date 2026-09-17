import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getMovies } from "../services/get-movies";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const movies = await getMovies(searchQuery);
        setMovies(movies);
        // console.log(movies);
      } catch (error) {
        setError(error);
        // console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <div className='flex flex-col gap-5'>
      <div className=''>
        <h1 className='text-2xl font-bold'>Browse Movies</h1>
        <p className='text-gray-500'>Search movies by title.</p>
      </div>

      <div>
        <input 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text" placeholder="🔍︎ Search for movies..." className="border border-light-gray/10 bg-dark-blue text-light-gray placeholder:text-gray-500 focus:outline-none rounded-md p-2 w-full " />
      </div>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && movies.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div> 
      ):(
        <p className="text-gray-500">No movies found.</p>
      )} 

    </div>
  )
}
