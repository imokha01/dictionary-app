import { useState } from 'react'
import './App.css'
import { Route, Routes, } from 'react-router-dom'
import { Home } from '@mui/icons-material'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>    
    </>
  )
}

export default App
