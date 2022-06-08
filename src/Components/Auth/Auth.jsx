/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import './Auth.css'

import Company from '../../Images/company.png'
import Event from '../../Images/event.png'

import RoleCard from './RoleCard'
import LoginForm from './LoginForm'

const Login = ({ logo }) => {
  const [auth, setAuth] = useState(true)

  const authMethod = (method) => {
    console.log(`Clicked ${method}`)
    setAuth(method)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-20 w-10/12">
        <img src={logo} alt="logo" className="w-4/12 h-auto rounded-lg my-4" />
        <p className="font-nunito text-lg font-bold text-left mb-2">
          Let&apos;s get started!
        </p>
        <div className="flex shrink w-40 bg-[#BFD9D7] rounded-full">
          <div className="inline-flex rounded-lg bg-[#BFD9D7]">
            <input type="radio" name="room_type" id="roomPrivate" onClick={() => authMethod(true)} defaultChecked hidden/>
            <label htmlFor="roomPrivate" className="radio w-20 text-center font-nunito text-sm self-center py-0.5 px-2 rounded-full cursor-pointer">Sign In</label>
          </div>
          <div className="inline-flex rounded-lg bg-[#BFD9D7]">
            <input type="radio" name="room_type" id="roomPublic" onClick={() => authMethod(false)} hidden/>
            <label htmlFor="roomPublic" className="radio w-20 text-center font-nunito text-sm self-center py-0.5 px-2 rounded-full cursor-pointer">Sign Up</label>
          </div>
        </div>
      </div>

      {auth
        ? (
        <div className="flex flex-row h-72 mb-40">
          <RoleCard role='COMPANY SPONSOR' image={Company} />
          <RoleCard role='EVENT ORGANIZER' image={Event} />
        </div>
          )
        : (
        <div className="flex h-72 w-full mb-40">
          <LoginForm className='flex items-center justify-center'/>
        </div>
          )
        }

    </div>
  )
}

export default Login
