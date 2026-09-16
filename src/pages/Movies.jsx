import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  
    
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

      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {Array.from({ length: 12 }, (_, i) => (
            <MovieCard key={i} />
          ))}
        </div>  
      </div>

    </div>
  )
}
