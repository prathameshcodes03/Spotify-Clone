import React from 'react'
import { Routes,Route,Link,Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (

    <Routes>
            <Route path='/' element={<Navigate to='/login'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  

  )
}

export default App


