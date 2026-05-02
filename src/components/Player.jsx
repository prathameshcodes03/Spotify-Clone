import React, { useEffect, useRef, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';

const Player = () => {
  const { currentImage, currentSong } = usePlayer();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying]   = useState(false);
  const [progress, setProgress]     = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]     = useState(0);
  const [volume, setVolume]         = useState(1);
  const [isShuffle, setIsShuffle]   = useState(false);
  const [isRepeat, setIsRepeat]     = useState(false);

useEffect(() => {
  if (!currentSong?.audioUrl || !audioRef.current) return
  audioRef.current.src = currentSong.audioUrl
  audioRef.current.load()
  audioRef.current.play().catch(err => console.log('play error:', err))
  setIsPlaying(true)
}, [currentSong])

  const togglePlay = () => {
  if (!audioRef.current || !currentSong?.audioUrl) return
  if (isPlaying) {
    audioRef.current.pause()
  } else {
    audioRef.current.play().catch(err => console.log('play error:', err))
  }
  setIsPlaying(!isPlaying)
}

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 0;
    setCurrentTime(cur);
    setDuration(dur);
    setProgress(dur ? (cur / dur) * 100 : 0);
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className='w-full h-24 bg-black border-t border-gray-800 flex items-center px-6 gap-6'>

     
      <div className='flex items-center gap-3 w-64 flex-shrink-0'>
        {currentImage ? (
          <img
            src={currentImage}
            alt="cover"
            className="h-14 w-14 rounded-md object-cover flex-shrink-0"
          />
        ) : (
          <div className="h-14 w-14 rounded-md bg-gray-800 flex-shrink-0" />
        )}
        <div className='min-w-0'>
          <p className='text-white text-sm font-semibold truncate'>
            {currentSong?.title || 'No song playing'}
          </p>
          <p className='text-gray-400 text-xs truncate'>
            {currentSong?.artist || ''}
          </p>
        </div>
        <button className='text-gray-400 hover:text-white ml-2 flex-shrink-0 text-lg'>♡</button>
      </div>

   
      <div className='flex flex-col items-center flex-1 gap-2'>

       
        <div className='flex items-center gap-6'>
     
          <button
            onClick={() => setIsShuffle(!isShuffle)}
            className={`text-xl transition-colors ${isShuffle ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
          >
            ⇄
          </button>
         
          <button className='text-gray-400 hover:text-white text-xl'>⏮</button>
       
          <button
            onClick={togglePlay}
            className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-black text-lg hover:scale-105 transition-transform'
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          {/* next */}
          <button className='text-gray-400 hover:text-white text-xl'>⏭</button>
          {/* repeat */}
          <button
            onClick={() => setIsRepeat(!isRepeat)}
            className={`text-xl transition-colors ${isRepeat ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
          >
            ↻
          </button>
        </div>

   
        <div className='flex items-center gap-3 w-full'>
          <span className='text-gray-400 text-xs w-8 text-right'>{formatTime(currentTime)}</span>
          <div
            className='flex-1 h-1 bg-gray-600 rounded-full cursor-pointer relative group'
            onClick={handleSeek}
          >
            <div
              className='h-full bg-white group-hover:bg-green-500 rounded-full transition-colors'
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className='text-gray-400 text-xs w-8'>{formatTime(duration)}</span>
        </div>

      </div>

      {/* RIGHT — volume */}
      <div className='flex items-center gap-2 w-40 flex-shrink-0'>
        <span className='text-gray-400 text-sm'>🔊</span>
        <input
          type='range'
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={handleVolume}
          className='w-full accent-white cursor-pointer'
        />
      </div>

   
      
<audio
  ref={audioRef}
  onTimeUpdate={handleTimeUpdate}
  onLoadedMetadata={handleTimeUpdate}
  onEnded={() => setIsPlaying(false)}
  loop={isRepeat}
/>

    </div>
  );
};

export default Player;