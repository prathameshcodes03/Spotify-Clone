import React, { createContext, useState, useContext, useRef } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song, image) => {
    setCurrentSong(song);
    setCurrentImage(image);
  };

  return (
    <PlayerContext.Provider value={{ currentImage, currentSong, playSong, setCurrentImage }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);