import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppAuth from '../Pages/Auth/AppAuth'
import ForgotPassword from '../Pages/Auth/ForgotPassword'
import ResetPassword from '../Pages/Auth/ResetPassword'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppAuth />}/>
        <Route path="/auth" element={<AppAuth />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
