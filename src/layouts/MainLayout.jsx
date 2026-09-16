import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className="text-light-gray bg-light-blue">
        <div className="mx-auto p-4"><Outlet /></div>
      </div>
      <Footer />
    </div>
  )
}
