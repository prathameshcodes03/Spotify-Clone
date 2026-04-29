import React from 'react'

const Sidebar = () => {
  return (
 
<div className='h-170 w-1/4 ml-2 bg-[#121212] rounded-3xl mt-4 overflow-hidden p-5'>


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

      <div className='flex flex-col justify-center items-start   bg-gray-800 rounded-2xl px-2 pt-2 mt-20  text-center text-white gap-y-4  h-35 flex-wrap'>

      <h1 className='text-1.5xl font-bold'>Create your first playlist</h1>
        <p className='text-1.5xl font-bold'> Its easy, we will help you</p>

        <button className='cursor-pointer ml-3 bg-white text-black border border-transparent text-center rounded-full h-8 w-30 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
   
    Create Playlist
</button>
     

  </div>




            <div className='flex flex-col  bg-gray-800 rounded-2xl px-2 pt-2 justify-center items-start  mt-20  text-center text-white gap-y-4 h-35 flex-wrap'>

              <h1 className='text-1.5xl font-bold'>Lets Find some podcasts to follow</h1>
                <p className='text-1.5xl font-bold'> We'll keep you updated on episodes </p>

                <button className='cursor-pointer ml-3 bg-white text-black border border-transparent text-center rounded-full h-8 w-30 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-sm'>
          
            Browse Playlist
        </button>
            

          </div>

  
</div>
  )
}

export default Sidebar
