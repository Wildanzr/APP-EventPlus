/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = props => {
  // User Data
  const [user, setUser] = useState({})

  // Temporary token
  const token = localStorage.getItem('token')

  // Config header for authorization
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  // Export data context
  const allState = {
    user,
    setUser
  }

  const allMethod = {
    config
  }

  return (
    <DataContext.Provider value={{ allState, allMethod }}>
        {props.children}
    </DataContext.Provider>
  )
}
