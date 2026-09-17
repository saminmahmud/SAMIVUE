import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat p-6 py-8 md:px-8 lg:px-16" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <div className='min-h-[75vh] flex-col items-start justify-center text-start gap-5 flex'>
        <div className="bg-amber-50/50 p-5 md:p-10 rounded-lg flex flex-col gap-5">
          <h1 className='text-5xl font-bold text-black'>Discover your <br /> next favorite film</h1>
          <p className='text-black'>Explore thousands of movies and shows from around the world - <br class="hidden md:block" /> search, browse and dive into the details in one place.</p>
          <Link to='/movies' className='bg-marigold hover:bg-marigold-dark border border-light-blue text-black font-semibold py-2 px-4 rounded flex gap-2 items-center justify-center'>
            <p>Explore Now</p>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div> 
  )
}
