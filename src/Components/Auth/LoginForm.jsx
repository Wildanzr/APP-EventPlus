import React from 'react'

import FormField from './FormField'

const LoginForm = () => {
  return (
    <div className="flex w-full justify-center font-josefin">
      <form className="flex flex-col w-10/12">
        <div className="flex flex-row justify-between">
          <FormField
            label="Firstname"
            type="text"
            name="firstname"
            id="firstname"
            width="w-5/12"
          />
          <FormField
            label="Lastname"
            type="text"
            name="lastname"
            id="lastname"
            width="w-5/12"
          />
        </div>

        <FormField label="Email" type="email" name="email" id="email" />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="password"
        />
        <FormField label="Phone" type="text" name="phone" id="phone" />
        <FormField label="Address" type="text" name="address" id="address" />

        <div className="flex justify-end mx-5">
          <input
            type="submit"
            className="bg-[#003366] hover:opacity-90 text-white font-bold py-2 px-2 my-5 w-2/12 rounded"
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
