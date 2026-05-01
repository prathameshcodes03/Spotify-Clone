import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Audio from './pages/Audio'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/Login'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/audio' element={<Audio/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App