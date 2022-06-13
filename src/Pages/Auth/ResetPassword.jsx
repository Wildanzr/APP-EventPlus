import React from 'react'

import Hero from '../../Images/hero-reset.png'
import LogoEvent from '../../Images/logoevent.jpg'

import SideHero from '../../Components/Auth/Utils/SideHero'
import Reset from '../../Components/Auth/Reset'

const ResetPassword = () => {
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
                Sebentar Lagi
              </>
            }
            subtitle="Bertemu akunmu, buat password baru yang aman ya :)"
            hero={Hero}
          />
        </div>

        <div className="flex w-6/12 bg-slate-200 items-center place-content-center overflow-x-auto no-scrollbar">
          <Reset logo={LogoEvent} />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
