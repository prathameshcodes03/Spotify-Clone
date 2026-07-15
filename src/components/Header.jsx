import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import Songs from '../components/Songs'


import album1 from '../assests/top50global.avif';
import album2 from '../assests/topindiahits.jpeg';
import album3 from '../assests/bollywoodhits.webp';
import album4 from '../assests/devotionalhits.jpeg';
import album5 from '../assests/arjitsingh.jpeg';
import album6 from '../assests/neha.jpeg';
import album7 from '../assests/jubin.jpeg';
import album8 from '../assests/shreya.jpeg';
import album9 from '../assests/sonu.jpeg';

const Header = () => {
  const { currentImage } = usePlayer();

  let headerStyle = {};

  if (currentImage === album1) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #A69D91, #2C2925, #121212, #000000)',
    };
  } else if (currentImage === album2) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #2C5E63, #1A3438, #121212, #000000)',
    };
  } else if (currentImage === album3) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #C26338, #4D2010, #121212, #000000)',
    };
  } else if (currentImage === album4) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #BFA15F, #40341B, #121212, #000000)',
    };
  } else if (currentImage === album5) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #5B2B4D, #261121, #121212, #000000)',
    };
  } else if (currentImage === album6) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #C9722A, #4D2810, #121212, #000000)',
    };
  } else if (currentImage === album7) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #8C231E, #380C0B, #121212, #000000)',
    };
  } else if (currentImage === album8) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #947E73, #3B322D, #121212, #000000)',
    };
  } else if (currentImage === album9) {
    headerStyle = {
      background: 'linear-gradient(to bottom, #7C523B, #33221A, #121212, #000000)',
    };
  } else {
    headerStyle = {
      background: 'linear-gradient(to bottom, #1a3a3a, #121212, #000000)',
    };
  }

  return (
    <header 
      className="audio-header flex justify-end items-start rounded-2xl px-8 h-170 my-[-42rem] w-250 ml-110" 
      style={headerStyle}
    >
      {currentImage && (
        <img 
          src={currentImage} 
          alt="Active Track" 
          className="audio-header-image object-cover rounded-2xl mr-190 mt-2 h-40 w-40 border border-zinc-700" 
        />
      )}
    </header>

    
  );
};

export default Header;
