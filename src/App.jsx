import { useState } from 'react'
import logo from './logo.svg'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-white">
      <h1 className="text-6xl font-bold">
        Hello world!
      </h1>
    </div>
  )
}

export default App
