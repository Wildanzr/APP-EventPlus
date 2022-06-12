/* eslint-disable react/prop-types */
import React from 'react'

import ResetForm from './Forms/ResetForm'

const Reset = ({ logo }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-2 w-10/12">
        <img src={logo} alt="logo" className="w-4/12 h-auto rounded-lg my-4" />
      </div>

      <ResetForm />
    </div>
  )
}

export default Reset
