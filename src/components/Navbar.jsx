import { Film } from 'lucide-react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className="bg-deep-blue flex justify-between items-center px-4 py-3 md:px-8 lg:px-16">
      <Link to="/" className="flex items-center gap-2">
        <Film color="gold" />
        <h1 className="text-light-gray font-bold">SAMIVUE</h1>
      </Link>
      
      <div className="text-gray-300 flex gap-5">
        <Link to="/" className="hover:text-light-gray">Home</Link>
        <Link to="/movies" className="hover:text-light-gray">Movies</Link>
      </div>
    </div>
  )
}
