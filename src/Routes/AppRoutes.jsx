import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppAuth from '../Pages/Auth/AppAuth'
import ForgotPassword from '../Pages/Auth/ForgotPassword'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppAuth />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
