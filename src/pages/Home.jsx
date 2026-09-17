import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className='min-h-[75vh] flex-col items-center justify-center text-center gap-5 flex'>
      <h1 className='text-5xl font-bold'>Discover your <br /> next favorite film</h1>
      <p className='text-gray-500'>Explore thousands of movies and shows from around the world - <br class="hidden md:block" /> search, browse and dive into the details in one place.</p>
      <Link to='/movies' className='bg-marigold hover:bg-marigold-dark text-black font-semibold py-2 px-4 rounded flex gap-2 items-center justify-center'>
        <p>Explore Now</p>
        <ArrowRight size={18} />
      </Link>
    </div>
  )
}
