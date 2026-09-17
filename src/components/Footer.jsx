import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className="bg-deep-blue px-4 py-4 md:px-8 lg:px-16 text-gray-400 flex justify-between text-xs">
      <p>© 2026 SAMIVUE</p>
      <div className="flex items-center gap-5">
        <Link to="https://github.com/saminmahmud" target="_blank" className="hover:text-light-gray">Github</Link>
        <Link to="https://www.linkedin.com/in/samin-mahmud-6a518229b" target="_blank" className="hover:text-light-gray">LinkedIn</Link>
      </div>
    </div>
  )
}
