import React from 'react'
import Music from './Music'
import Footer from './Footer'
import Audio from '../pages/Audio'
import album1 from '../assests/top50global.avif'
import album2 from '../assests/topindiahits.jpeg'
import album3 from '../assests/bollywoodhits.webp'
import album4 from '../assests/devotionalhits.jpeg'
import album10 from '../assests/marathihits.jpeg'
import album5 from '../assests/arjitsingh.jpeg'
import album6 from '../assests/neha.jpeg'
import album7 from '../assests/jubin.jpeg'
import album8 from '../assests/shreya.jpeg'
import album9 from '../assests/sonu.jpeg'




const Album = () => {
  return (
    <div className='h-170 w-5xl bg-gray-900 rounded-2xl ml-105 my-[-42.5rem] overflow-hidden'>

      <div className='flex items-center gap-x-3 w-auto'>
        <button className='cursor-pointer bg-white text-black border border-transparent text-center rounded-full h-8 px-5 mt-5 ml-4 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
          All
        </button>
        <button className='cursor-pointer bg-white text-black border border-transparent text-center rounded-full h-8 px-5 mt-5 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
          Music
        </button>
        <button className='cursor-pointer bg-white text-black border border-transparent text-center rounded-full h-8 px-5 mt-5 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
          Podcasts
        </button>
      </div>

      <div className="px-6 py-4 text-white overflow-y-auto h-full">

        <div className="mt-8 mb-6">
          <h1 className="text-3xl font-bold text-start mb-4 ml-4">Featured Charts</h1>
          <div className="flex flex-nowrap gap-x-6 overflow-x-auto scrollbar-hide pb-4 px-4">
            <Music imageSrc={album1}/>
            <Music imageSrc={album2}/>
            <Music imageSrc={album3}/>
            <Music imageSrc={album10}/>  
            <Music imageSrc={album4}/>
          
          </div>
        </div>

        <div className="mt-8 mb-6">
          <h1 className="text-3xl font-bold text-start mb-4 ml-4">Popular Artists</h1>
          <div className="flex flex-nowrap gap-x-6 overflow-x-auto scrollbar-hide pb-4 px-4">
            <Music  imageSrc={album5} />
            <Music  imageSrc={album7}/>
            <Music  imageSrc={album8}/>
            <Music imageSrc={album6} />
            <Music  imageSrc={album9}/>

            
          </div>
        </div>


        



<div className="border-b border-gray-600 my-8 w-full" />

       






        <div>
            <Footer/>
          </div>



      
         





        

      </div>

    </div>
  )
}

export default Album