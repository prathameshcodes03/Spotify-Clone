import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { folders, formatDuration } from '../data';

import album1 from '../assests/top50global.avif';
import album2 from '../assests/topindiahits.jpeg';
import album3 from '../assests/bollywoodhits.webp';
import album10 from '../assests/marathihits.jpeg'
import album4 from '../assests/devotionalhits.jpeg';
import album5 from '../assests/arjitsingh.jpeg';
import album6 from '../assests/neha.jpeg';
import album7 from '../assests/jubin.jpeg';
import album8 from '../assests/shreya.jpeg';
import album9 from '../assests/sonu.jpeg';

const Songs = () => {
  const { currentImage, playSong } = usePlayer()

  let activeFolder = folders[0]

  if (currentImage === album1) activeFolder = folders.find(f => f.id === 'folder_global')
  else if (currentImage === album2) activeFolder = folders.find(f => f.id === 'folder_india')
  else if (currentImage === album3) activeFolder = folders.find(f => f.id === 'folder_hindi')
  else if (currentImage === album10) activeFolder = folders.find(f => f.id === 'folder_marathi')
  else if (currentImage === album4) activeFolder = folders.find(f => f.id === 'folder_devotional')
  else if (currentImage === album5) activeFolder = folders.find(f => f.id === 'folder_arijit')
  else if (currentImage === album6) activeFolder = folders.find(f => f.id === 'folder_neha')
  else if (currentImage === album7) activeFolder = folders.find(f => f.id === 'folder_jubin')
  else if (currentImage === album8) activeFolder = folders.find(f => f.id === 'folder_shreya')
  else if (currentImage === album9) activeFolder = folders.find(f => f.id === 'folder_sonu')

  const tracks = activeFolder ? activeFolder.songs : []

  return (
    <div className="rounded-2xl w-1/2 ml-120 text-white mt-20">
      <div className="mb-8">
        <h2 className="text-3xl ml-50 font-bold mb-2">
          {activeFolder ? activeFolder.name : "Popular Tracks"}
        </h2>
        <p className="text-gray-400 ml-50 text-sm">
          {activeFolder ? activeFolder.description : "Listen to top music"}
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            onClick={() => playSong(track, currentImage)}
            className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-500 w-6 text-center">{index + 1}</span>
              <div>
                <p className="font-semibold text-sm md:text-base">{track.title}</p>
                <p className="text-xs md:text-sm text-gray-400">{track.artist}</p>
              </div>
            </div>
            <span className="text-gray-400 text-sm">{formatDuration(track.duration)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Songs