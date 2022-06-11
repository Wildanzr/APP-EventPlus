import React from 'react'

import SideHero from '../../Components/Auth/Utils/SideHero'
import Auth from '../../Components/Auth/Auth'

import Hero from '../../Images/hero1.png'
import LogoEvent from '../../Images/logoevent.jpg'

import './CustomScrollbar.css'

const Login = () => {
  return (
    <div className="container mx-auto h-screen bg-zinc-200">
      <div className="flex flex-row h-full">
        <div className="flex w-6/12 bg-[#F2F5FA] items-center place-content-center">
          <SideHero
            title={
              <>
                Hi
                <span className="text-[#003366] font-black my-0"> Event Folks</span>
                <br />
                Selamat Datang!
              </>
            }
            subtitle="Kami sangat senang berjumpa denganmu lagi."
            hero={Hero}
          />
        </div>

        <div className="flex w-6/12 bg-slate-200 items-center place-content-center overflow-x-auto no-scrollbar style-5">
          <Auth logo={LogoEvent} />
        </div>
      </div>
    </div>
  )
}

export default Login
