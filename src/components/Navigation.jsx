import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import '@animxyz/core';
import { gsap } from 'gsap';
import  './Navigation.css';

const Navigation = () => {
  const textRef = useRef(null);
  const listRef = useRef(null);
  const path = window.location.pathname;
  const [activeLink, setActiveLink] = useState('');
  const linkTab = {color: '#4bffa5'};
  const link = {color: '#fff'};

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 1 }); // Delay the animation by 3 seconds
    timeline.fromTo([textRef.current, listRef.current],
      { opacity: 0 },  // Start fully transparent
      {
        opacity: 1,
        duration: 1.5,
        ease: "power9.out" // Smooth transition
      }
    );
  }, []);

  useLayoutEffect(()=>{
    setActiveLink(path);
  })

  return (
    <header className=" text-white py-4">
    <div className="flex mt-11 ml-10 text-base font-semibold">
        <p ref={textRef} className="flex-1 ml-3 pl-6" ><a href="/" className='text-[#fff]'>Sohail Shah</a></p>

      <nav ref={listRef} className='flex-1 mr-8'>
        <ul className="flex justify-end text-white ">
          <li className='mr-12'><a href="/" id='Slide ' style=
          {activeLink === '/' ? linkTab : link } >Home</a></li>
          <li className='mr-12'><a href="/resume" className=" hover:text-gray-300 text-white" style=
          {activeLink === '/resume' ? linkTab : link }>Resume</a></li>
          <li className='mr-12'><a href="/projects" className=" hover:text-gray-300 text-white" style=
          {activeLink === '/projects' ? linkTab : link }>Projects</a></li>
          <li className='mr-12'><a href="/contact" className=" hover:text-gray-300 text-white" style=
          {activeLink === '/contact' ? linkTab : link }>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navigation