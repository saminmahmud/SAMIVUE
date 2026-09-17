import { CalendarDays, Star } from "lucide-react";
import { useState } from "react";
import MovieModal from "./MovieModal";

export default function MovieCard({ movie }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className='bg-dark-blue rounded-md p-2 shadow-lg border border-light-gray/10 hover:scale-105 transition-transform duration-300'>
        <img src={movie.image.medium} alt="Movie Poster" className='rounded-md w-full aspect-4/3 object-cover ' />
        <h2 className='text-lg font-semibold mt-2'>{ movie.name }</h2>

        <div className='flex items-center mt-1 gap-5'>
            <div className='flex items-center gap-1 text-yellow-500'>
                <Star size={14} />
                <p>{movie.rating.average}</p>
            </div>
            <div className='flex items-center gap-1 text-gray-400'>
                <CalendarDays size={14}/>
                <p>{movie.premiered}</p>
            </div>
        </div>

        <button 
        onClick={() => setIsModalOpen(true)}
        className='bg-marigold hover:bg-marigold-dark text-black font-semibold py-1 px-3 rounded mt-2 w-full cursor-pointer'>
            See Details
        </button>
    </div>
    {isModalOpen && <MovieModal onClose={() => setIsModalOpen(false)} movie={movie} />}
    </>
  )
}
