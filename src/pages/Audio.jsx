import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Player from '../components/Player'


const Audio = () => {
  return (
    <div  className='bg-black h-screen'>
        <Navbar/>
        <Sidebar/>
        <Header/>
        <Player/>
       
        
    </div>
  )
}

export default Audio
