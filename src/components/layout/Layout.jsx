import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileStickyCTA from '../ui/MobileStickyCTA'

export default function Layout() {
  return (
    <div className="shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
