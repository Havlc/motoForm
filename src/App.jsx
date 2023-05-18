import { useState } from 'react'
import { FormForService } from './components/FormForService'
import { DriverProfile } from './components/DriverProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormForService />
      <DriverProfile />
    </>
  )
}

export default App
