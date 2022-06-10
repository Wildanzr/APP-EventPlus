/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import './Auth.css'

import Company from '../../Images/company.png'
import Event from '../../Images/event.png'

import RoleForm from './Forms/RoleForm'
import LoginForm from './Forms/LoginForm'
import SignUpForm from './Forms/SignUpForm'

const Auth = ({ logo }) => {
  // Local state
  const [auth, setAuth] = useState(true)
  const [role, setRole] = useState(true)
  const [selectedRole, setSelectedRole] = useState('')
  const [type] = useState([
    {
      name: 'COMPANY SPONSOR',
      image: Company
    },
    {
      name: 'EVENT ORGANIZER',
      image: Event
    }
  ])

  const authState = (method) => {
    setAuth(method)

    if (auth) setRole(true)
  }

  const roleState = () => {
    setRole(!role)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-2 w-10/12">
        <img src={logo} alt="logo" className="w-4/12 h-auto rounded-lg my-4" />
        <p className="font-nunito text-lg font-bold text-left mb-2">
          Let&apos;s get started!
        </p>
        <div className="flex shrink w-40 bg-[#BFD9D7] rounded-full">
          <div className="inline-flex rounded-lg bg-[#BFD9D7]">
            <input
              type="radio"
              name="room_type"
              id="roomPrivate"
              onClick={() => authState(true)}
              defaultChecked
              hidden
            />
            <label
              htmlFor="roomPrivate"
              className="radio w-20 text-center font-nunito text-sm self-center py-0.5 px-2 rounded-full cursor-pointer"
            >
              Sign In
            </label>
          </div>
          <div className="inline-flex rounded-lg bg-[#BFD9D7]">
            <input
              type="radio"
              name="room_type"
              id="roomPublic"
              onClick={() => authState(false)}
              hidden
            />
            <label
              htmlFor="roomPublic"
              className="radio w-20 text-center font-nunito text-sm self-center py-0.5 px-2 rounded-full cursor-pointer"
            >
              Sign Up
            </label>
          </div>
        </div>
      </div>

      {!auth
        ? (
        <div className="flex flex-col h-72 w-full mb-40">
          {role
            ? (
            <RoleForm
              type={type}
              roleState={roleState}
              selectRole={setSelectedRole}
            />
              )
            : (
            <SignUpForm selectedRole={selectedRole} roleState={roleState}/>
              )}
        </div>
          )
        : (
        <div className="flex h-72 w-full mb-40">
          <LoginForm />
        </div>
          )}
    </div>
  )
}

export default Auth
