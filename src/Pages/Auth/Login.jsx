import React from 'react'

import SideHero from '../../Components/Auth/SideHero'
import LoginForm from '../../Components/Auth/LoginForm'

import Hero from '../../Images/hero1.png'
import LogoEvent from '../../Images/logoevent.jpg'

const Login = () => {
  return (
    <div className="container mx-auto h-screen bg-zinc-200">
      <div className="flex flex-row h-full">
        <div className="flex w-6/12 bg-[#F2F5FA] items-center place-content-center">
          <SideHero
            title={
              <p>
                Hi
                <span className="text-[#003366] font-black"> Event Folks</span>
                <br />
                Selamat Datang!
              </p>
            }
            subtitle="Kami sangat senang berjumpa denganmu lagi."
            hero={Hero}
          />
        </div>

        <div className="flex w-6/12 bg-slate-200 items-center place-content-center">
          <LoginForm logo={LogoEvent} />
        </div>
      </div>
    </div>
  )
}

export default Login
