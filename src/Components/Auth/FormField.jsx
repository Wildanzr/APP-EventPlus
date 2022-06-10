/* eslint-disable react/prop-types */
import React from 'react'

const FormField = ({ label, type, name, id, width, field, handleChange }) => {
  return (
    <div className={`flex flex-col mx-5 my-3 ${width || ''}`} key={id}>
      <label className="font-semibold text-lg">{label}</label>
      <input
        className="appearance-none block w-full text-grey-darker border-2 border-[#BFD9D7] rounded-lg h-10 px-4"
        type={type}
        name={name}
        id={id}
        value={field}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormField
