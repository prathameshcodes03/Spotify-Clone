import React from 'react'

const Music = ({imageSrc}) => {
  return (
    <div>
      <button className='h-50 w-50 mt-12 ml-10 cursor-pointer rounded-2xl bg-red-600'
      style={{ backgroundImage: `url(${imageSrc})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>

      </button>
    </div>
  )
}

export default Music
