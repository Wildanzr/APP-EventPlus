import React from 'react'

import Hero from '../../Images/hero2.png'
import LogoEvent from '../../Images/logoevent.jpg'

import SideHero from '../../Components/Auth/Utils/SideHero'
import Forgot from '../../Components/Auth/Forgot'

import './CustomScrollbar.css'

const ForgotPassword = () => {
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
                Jangan Khawatir!
              </>
            }
            subtitle="Kami akan membantu memulihkan akun kamu :)."
            hero={Hero}
          />
        </div>

        <div className="flex w-6/12 bg-slate-200 items-center place-content-center overflow-x-auto no-scrollbar style-5">
          <Forgot logo={LogoEvent} />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
