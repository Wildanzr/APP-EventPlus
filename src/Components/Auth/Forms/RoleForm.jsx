/* eslint-disable react/prop-types */
import React from 'react'

import RoleCard from '../Utils/RoleCard'

const RoleForm = ({ type, roleState, selectRole }) => {
  return (
    <div className="flex flex-row justify-evenly my-10">
      {type.map((type, index) => (
        <RoleCard type={type.name} image={type.image} roleState={roleState} selectRole={selectRole} key={index} />
      ))}
    </div>
  )
}

export default RoleForm
