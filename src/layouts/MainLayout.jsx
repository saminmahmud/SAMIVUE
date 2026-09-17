import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="text-light-gray bg-light-blue flex-1">
        <div className="mx-auto"><Outlet /></div>
      </div>
      <Footer />
    </div>
  )
}
