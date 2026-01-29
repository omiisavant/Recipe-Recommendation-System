import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Sabse important: /login path ka spelling check karein */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
