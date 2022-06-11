import React from 'react'

import './index.css'
import 'antd/dist/antd.css'

import AppRoutes from './Routes/AppRoutes'

function App () {
  return (
    <div className="flex bg-white">
      <AppRoutes />
    </div>
  )
}

export default App
