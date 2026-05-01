import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' bg-gray-900  text-gray-400 py-12 px-8 md:px-16 w-full mt-12 rounded-2xl'>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto'>
        
     
        <div className='flex flex-col gap-3'>
          <h4 className='text-white font-bold text-sm md:text-base'>Company</h4>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>About</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Jobs</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>For the Record</Link>
        </div>

        
        <div className='flex flex-col gap-3'>
          <h4 className='text-white font-bold text-sm md:text-base'>Communities</h4>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>For Artists</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Developers</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Advertising</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Investors</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Vendors</Link>
        </div>

        <div className='flex flex-col gap-3'>
          <h4 className='text-white font-bold text-sm md:text-base'>Useful links</h4>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Support</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Free Mobile App</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Popular by Country</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Import your music</Link>
        </div>

      
        <div className='flex flex-col gap-3'>
          <h4 className='text-white font-bold text-sm md:text-base'>Spotify Plans</h4>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Premium Lite</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Premium Standard</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Premium Platinum</Link>
          <Link to='#' className='text-sm hover:text-white transition-all duration-300'>Premium Student</Link>
          <Link to='#' className='text-white opacity-60 text-sm hover:text-white transition-all duration-300'>Spotify Free</Link>
        </div>

     
        <div className='flex justify-start md:justify-end items-start gap-4 col-span-2 md:col-span-1 mt-4 md:mt-0'>
          <a href='#' className='w-10 h-10 rounded-full bg-[#1a1c20] text-gray-300 flex items-center justify-center hover:bg-[#282a30] transition duration-300'>
            <i className='fa-brands fa-instagram text-lg'></i>
          </a>
          <a href='#' className='w-10 h-10 rounded-full bg-[#1a1c20] text-gray-300 flex items-center justify-center hover:bg-[#282a30] transition duration-300'>
            <i className='fa-brands fa-twitter text-lg'></i>
          </a>
          <a href='#' className='w-10 h-10 rounded-full bg-[#1a1c20] text-gray-300 flex items-center justify-center hover:bg-[#282a30] transition duration-300'>
            <i className='fa-brands fa-facebook text-lg'></i>
          </a>
        </div>

      </div>

   
      <hr className='border-gray-800 my-10 max-w-7xl mx-auto' />
         
    
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto'>
        <div className='flex flex-wrap justify-start items-center gap-6 text-sm text-gray-400'>
          <Link to='#' className='hover:text-white transition-all duration-300'>Legal</Link>
          <Link to='#' className='hover:text-white transition-all duration-300'>Safety & Privacy Center</Link>
          <Link to='#' className='hover:text-white transition-all duration-300'>Privacy Policy</Link>
          <Link to='#' className='hover:text-white transition-all duration-300'>Cookies</Link>
          <Link to='#' className='hover:text-white transition-all duration-300'>About Ads</Link>
          <Link to='#' className='hover:text-white transition-all duration-300'>Accessibility</Link>
        </div>
        <div className='text-xs text-gray-500'>
          © 2026 Spotify AB
        </div>
      </div>
    </footer>
  );
};

export default Footer;