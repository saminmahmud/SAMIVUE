import { CalendarDays, Star, X } from "lucide-react";

export default function MovieModal({ onClose }) {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
			<div className="h-auto p-5 rounded-2xl w-100 shadow-2xl bg-deep-blue border border-light-gray/10">
                <div className="flex flex-col gap-5">
                    <div className="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzvOd9GdU4vTzyc9zIm45ZIz7B7y_UPrcCyH1G-wVYA&s=10" alt="Movie Poster" className='rounded-md w-full aspect-4/3 object-cover ' />
                    </div>
                    
                    <div className="">
                        <h2 className='text-lg font-semibold mt-2'>Spider-Man hehe</h2>
                        
                        <div className='flex items-center mt-1 gap-5'>
                            <div className='flex items-center gap-1 text-yellow-500'>
                                <Star size={14} />
                                <p>4.5</p>
                            </div>
                            <div className='flex items-center gap-1 text-gray-400'>
                                <CalendarDays size={14}/>
                                <p>2026</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
                    </div>

                    <div className="flex justify-end items-center gap-2">
                        <button onClick={onClose} className="bg-marigold hover:bg-marigold-dark text-black font-semibold py-1 px-3 rounded cursor-pointer flex items-center gap-1">
                            <X /> Close
                        </button>
                    </div>
                </div>
			</div>
		</div>
	);
}
