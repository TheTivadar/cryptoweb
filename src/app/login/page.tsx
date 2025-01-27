
import Footer from '@/components/Footer'

import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from "../../../data"
import Login from '@/components/login/Login'

const AiTrading = () => {

  return (
    <div className="max-w-screen overflow-hidden">
        <FloatingNav navItems={navItems} />
        <Login />
        <Footer />
    </div>
  )
}

export default AiTrading