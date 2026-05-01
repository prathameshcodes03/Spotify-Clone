import React, { createContext, useState, useContext } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <PlayerContext.Provider value={{ currentImage, setCurrentImage }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);