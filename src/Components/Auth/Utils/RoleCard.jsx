/* eslint-disable react/prop-types */
import React from 'react'

const RoleCard = ({ type, image, roleState, selectRole }) => {
  return (
    <div
      className="flex w-48 h-72 place-items-center bg-white text-[#003366] rounded-lg drop-shadow-2xl mx-10 cursor-pointer
    hover:bg-[#003366] hover:text-white duration-300"
      onClick={() => {
        roleState()
        selectRole(type)
      }}
    >
      <div className="flex flex-col items-center">
        <img src={image} alt={`Logo ${type}`} className="h-auto my-4" />
        <p className="font-josefin uppercase text-2xl font-bold text-center">
          {type}
        </p>
      </div>
    </div>
  )
}

export default RoleCard
