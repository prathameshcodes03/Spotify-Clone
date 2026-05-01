import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Album from '../components/Album'
import Audio from './Audio'
import spotifyLogo from './Spotify.png'

const Home = () => {
  return (

  <div className='bg-black h-screen'>
    <Navbar/>
    <Sidebar/>
    <Album/>
    
  </div>
  )
}

export default Home
