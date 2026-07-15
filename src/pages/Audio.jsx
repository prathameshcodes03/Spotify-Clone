import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Player from '../components/Player'
import Songs from '../components/Songs'



const Audio = () => {
  return (
    <div className='app-screen audio-screen bg-black h-screen'>
        <Navbar/>
        <Sidebar/>
        <Header/>
        <Songs/>
       
        <Player/>
       
        
    </div>
  )
}

export default Audio
