import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Album from '../components/Album'
import Player from '../components/Player'
import spotifyLogo from './Spotify.png'

const Home = () => {
  return (

  <div className='bg-black h-screen'>
    <Navbar/>
    <Sidebar/>
    <Album/>
    <Player/>
  </div>
  )
}

export default Home
