/* eslint-disable react/prop-types */
import React from 'react'

import ForgotForm from './Forms/ForgotForm'

const Auth = ({ logo }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-2 w-10/12">
        <img src={logo} alt="logo" className="w-4/12 h-auto rounded-lg my-4" />
      </div>

      <ForgotForm />
    </div>
  )
}

export default Auth
