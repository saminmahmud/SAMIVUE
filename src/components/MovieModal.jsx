import { CalendarDays, ExternalLink, Star, X } from "lucide-react";
import { Link } from "react-router";

export default function MovieModal({ onClose, movie }) {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
			<div className="h-auto p-5 rounded-2xl w-100 shadow-2xl bg-deep-blue border border-light-gray/10">
                <div className="flex flex-col gap-5">
                    <div className="">
                        <img src={movie.image?.medium} alt={movie.name} className='rounded-md w-full aspect-4/3 object-cover ' />
                    </div>
                    
                    <div className="">
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

                        {movie.genres && movie.genres.length > 0 && (
                            <div className="flex items-center gap-2 mt-2">
                                {movie.genres.map((genre, idx) => (
                                    <span key={idx} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        )}

                        <p className="text-gray-500 mt-2">{movie.summary.slice(0, 100)}...</p>    
                    </div>

                    <div className="flex justify-between items-center gap-2">
                        <Link to={movie.url} target="_blank" className="py-1 px-3 rounded cursor-pointer flex items-center gap-1">
                            <ExternalLink className="text-light-gray hover:text-marigold" />
                        </Link>
                        <button onClick={onClose} className="bg-marigold hover:bg-marigold-dark text-black font-semibold py-1 px-3 rounded cursor-pointer flex items-center gap-1">
                            <X /> Close
                        </button>
                    </div>
                </div>
			</div>
		</div>
	);
}
