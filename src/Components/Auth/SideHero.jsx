/* eslint-disable react/prop-types */
import React from 'react'

const SideHero = ({ title, subtitle, hero }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <h3 className="font-josefin text-5xl font-bold text-left">
          {title}
        </h3>
        <p className="font-josefin text-sm text-left text-[#003366]">
          {subtitle}
        </p>
      </div>

      <div className="flex mt-5 justify-center">
        <img src={hero} alt="hero" className="w-10/12 h-auto" />
      </div>
    </div>
  )
}

export default SideHero
