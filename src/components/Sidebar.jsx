import React from 'react'

const Sidebar = () => {
  return (
 
<div className='app-sidebar h-170 w-1/4 ml-2 bg-[#121212] rounded-3xl mt-4 overflow-hidden p-5'>


  <div className='flex justify-between items-center text-white w-full'>
    
    <div className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer'>
      <i className="fa-solid fa-book-bookmark text-xl"></i>
      <h1 className='text-lg font-bold'>Your Library</h1>
    </div>

  <button className='cursor-pointer bg-white text-black border border-transparent text-center rounded-full h-8 w-24 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
    <i className="fa-solid fa-plus text-sm"></i>
    Create
</button>
 </div>

      <div className='library-card flex flex-col justify-center items-start bg-gray-800 rounded-2xl text-center text-white'>

      <h1 className='library-card-title'>Create your first playlist</h1>
        <p className='library-card-description'>It's easy, we'll help you</p>

        <button className='cursor-pointer library-card-button bg-white text-black border border-transparent text-center rounded-full h-8 w-30 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
   
    Create Playlist
</button>
     

  </div>




            <div className='library-card flex flex-col bg-gray-800 rounded-2xl justify-center items-start text-center text-white'>

              <h1 className='library-card-title'>Let's find some podcasts to follow</h1>
                <p className='library-card-description'>We'll keep you updated on new episodes</p>

                <button className='cursor-pointer library-card-button bg-white text-black border border-transparent text-center rounded-full h-8 w-30 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
          
            Browse Playlist
        </button>
            

          </div>

  
</div>
  )
}

export default Sidebar
