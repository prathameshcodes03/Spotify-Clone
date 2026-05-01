import React from 'react';
import { usePlayer } from '../context/PlayerContext';

const Header = () => {
  const { currentImage } = usePlayer();

  return (
    
    <header className="flex justify-end items-start rounded-2xl px-8 bg-gradient-to-b from-[#1a3a3a] via-[#121212] to-black h-170 my-[-42rem] w-250 ml-110">
      {currentImage && (
        <img 
          src={currentImage} 
          alt="Active Track" 
          
          className="object-cover rounded-2xl mr-175 mt-20 h-50 w-50 border border-zinc-700" 
        />
      )}
    </header>
  );
};

export default Header;