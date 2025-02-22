
import Footer from '@/components/Footer'

import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from "../../../data"
import Login from '@/components/login/Login'
import MobileNavbar from '@/components/mobile/mobile'

const LoginPage = () => {

  return (
    <div className="max-w-screen overflow-hidden">
      <div className="overflow-hidden">
        <div className="hidden md:block">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage