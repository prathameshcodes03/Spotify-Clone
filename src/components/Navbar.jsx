import React from 'react'
import spotifyLogo from '../pages/Spotify.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

                    <div className='w-full h-16 bg-black'>
                
                <div className='flex justify-start items-center flex-nowrap gap-x-4 h-full px-4'>
                    
                    <img 
                    className='rounded-full h-14 object-contain hover:rotate-[360deg] hover:scale-110 transition-all duration-700 cursor-pointer' 
                    src={spotifyLogo} 
                    alt="Spotify.png" 
                    />

                    <button className='rounded-full px-2 py-2 w-14 bg-white text-black cursor-pointer h-14 hover:rotate-[360deg] hover:scale-110 transition-all duration-700 shrink-0'>
                    <i className="fa-regular fa-house"></i>
                    </button>

                   
                    <div className="flex items-center gap-4">
                    
                    <div className="relative w-70 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fa-solid fa-magnifying-glass text-gray-400 group-focus-within:text-white transition-colors"></i>
                        </div>
                        
                        <input 
                        type="text" 
                        placeholder="Search" 
                        className="h-10 w-full pl-10 pr-4 rounded-full bg-[#242424] text-white text-sm border border-transparent 
                                    focus:outline-none focus:border-white focus:bg-[#2a2a2a] transition-all placeholder-gray-500"
                        />
                    </div>

                    <div className="relative cursor-pointer group">
                        <button className="p-2 hover:bg-[#2a2a2a] rounded-full transition-all">
                        <i className="fa-solid fa-basket-shopping text-gray-400 group-hover:text-white text-xl"></i>
                        <span className="absolute -top-1 -right-1 bg-green-500 text-black text-[10px] font-bold px-1.5 rounded-full">
                            0
                        </span>
                        </button>
                    </div>

                    </div>

                    


                                    <div className='flex justify-end ml-67 flex-wrap'>
                                <div className='flex justify-end gap-x-8'>
                                    

                    <Link to="/premium" className='text-white cursor-pointer mt-4 hover:text-gray-300 hover:scale-105 transition-all'>Premium</Link>
                    <Link to="/support" className='text-white cursor-pointer mt-4 hover:text-gray-300 hover:scale-105 transition-all'>Support</Link>
                    <Link to="/download" className='text-white cursor-pointer mt-4 hover:text-gray-300 hover:scale-105 transition-all'>Download</Link>


                    <button className='bg-black text-white text-center rounded-3xl flex justify-evenly cursor-pointer items-center h-15 w-30 hover:scale-105 hover:text-gray-200 transition-all'>
                    <i className="fa-solid fa-download"></i>
                    Install App
                    </button>

                
                    <button className='bg-black text-center text-white rounded-4xl flex justify-evenly cursor-pointer items-center w-20 h-15 hover:scale-105 hover:text-gray-300 transition-all'>
                    Sign Up
                    </button>

                    
                    <button className='bg-white text-center text-black rounded-3xl flex justify-evenly cursor-pointer mt-2 items-center w-30 h-11 hover:scale-105 hover:bg-gray-100 transition-all'>
                    Log in 
                    </button>

                </div>
                </div>
                                

                 


                </div>




              





                </div>
  )
}

export default Navbar
