import React, { createContext, useState, useContext, useRef } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const audioElementRef = useRef(null);

  const playSong = (song, image) => {
    setCurrentSong(song);
    setCurrentImage(image);

    // Play in the same call stack as the user's tap. Mobile browsers block
    // playback initiated later from an effect because it is not user-initiated.
    const audio = audioElementRef.current;
    if (audio && song.audioUrl) {
      audio.src = song.audioUrl;
      audio.load();
      audio.play().catch((error) => console.log('play error:', error));
    }
  };

  const registerAudioElement = (element) => {
    audioElementRef.current = element;
  };

  return (
    <PlayerContext.Provider value={{ currentImage, currentSong, playSong, setCurrentImage, registerAudioElement }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
