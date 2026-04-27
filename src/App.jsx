import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App