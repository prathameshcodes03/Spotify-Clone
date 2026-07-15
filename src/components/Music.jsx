import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../context/PlayerContext';

const Music = ({ imageSrc }) => {
  const navigate = useNavigate();
  const { setCurrentImage } = usePlayer();

  const handlePlayClick = () => {
   
    setCurrentImage(imageSrc);
  
    navigate('/Audio');
  };

  return (
    <div className="music-card">
      <button 
        className='music-card-button h-50 w-50 mt-12 ml-10 cursor-pointer rounded-2xl bg-red-600' 
        onClick={handlePlayClick}
        style={{ 
          backgroundImage: `url(${imageSrc})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
      </button>
    </div>
  );
};

export default Music;
