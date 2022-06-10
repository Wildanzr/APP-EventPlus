/* eslint-disable react/prop-types */
import React from 'react'

const FormPasswordField = ({
  label,
  type,
  name,
  id,
  width,
  field,
  handleChange
}) => {
  const hideShowPassword = () => {
    const password = document.querySelector('.js-password')
    const passwordLabel = document.querySelector('.js-password-label')

    if (password.type === 'password') {
      password.type = 'text'
      passwordLabel.innerHTML = 'hide'
    } else {
      password.type = 'password'
      passwordLabel.innerHTML = 'show'
    }

    password.focus()
  }
  return (
    <div className="flex flex-col mx-5 my-3 relative">
      <label className="font-semibold text-lg">{label}</label>
      <div className="absolute inset-y-0 right-0 flex items-center px-2">
        <input
          className="hidden js-password-toggle"
          id="toggle"
          type="checkbox"
        />
        <label
          className="js-password-label"
          htmlFor="toggle"
          onClick={hideShowPassword}
        >
          show
        </label>
      </div>
      <input
        className="appearance-none block w-full text-grey-darker border-2 border-[#BFD9D7] rounded-lg h-10 px-4 js-password"
        id={id}
        name={name}
        value={field}
        onChange={handleChange}
        type="password"
        autoComplete="off"
      />
    </div>
  )
}

export default FormPasswordField
