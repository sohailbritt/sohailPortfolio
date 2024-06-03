import React,{useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import { Typewriter } from 'react-simple-typewriter';
import SideSocial from './SideSocial';
import profile from '../assets/sohail_profile1.png';

const Hero = () => {

  const imgRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Slide-in animation for the image
    tl.fromTo(imgRef.current,
      { y: -50, opacity: 0 },  // Start position off-screen above and invisible
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out" // Apply bounce effect
      }
    )
    // Text reveal animation
    .fromTo(textRef1.current,
      { opacity: 0 },  // Start fully transparent
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out" // Smooth transition
      },
      "-=0" // Start this animation 0.5 seconds before the previous one ends
    )
    .fromTo(textRef2.current,
      { opacity: 0 },  // Start fully transparent
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out", // Smooth transition
      },
      "-=0" // Start this animation 1.5 seconds before the previous one ends
    );

  }, []);

  return (
    <>
      <div className='flex justify-center  ml-12'>
          <div className='flex-1 ml-20'>
          <img ref={imgRef} src={profile} alt="photo" className='ml-40 ' width="350px" style={{ border: "1px solid rgb(33 33 33)" }} />
          </div>
          <div ref={textRef1} className='flex-1 mr-80 content-center mt-56 ml-20 text-white'>
            <h1 className='text-xl font-light'>Hello, I’m <span className='font-semibold' style={{color: '#4bffa5'}}>Mohammad Sohail Shah</span>, UX/UI Designer & Front-end Developer.</h1>
            <h1 className='text-xl font-light mt-8'>Based in India.</h1>
          </div>
      </div>
      <br/>

        <div className='flex justify-center content-center'>
        <div className='mt-20 w-1/5'>
        <span style={{display: "inline-Block", marginLeft: '35px', paddingLeft: '10px', position: "relative", top: '2px'}}><EnvelopeFill color="#4bffa5" size={16}/></span><span style={{marginLeft: '10px', color: '#bbb'}}><a href="mailto:mailto:contact@test.com" className='text-sm text-[#bbb] font-light hover:text-[#bbb]'>Sohailbritt@gmail.com</a></span> <br/>
        <span style={{display: "inline-Block", marginLeft: '35px', paddingLeft: '10px', marginTop: '10px', position: "relative", top: '2px'}}><TelephoneFill color="#4bffa5" size={16}/></span><span style={{marginLeft: '10px'}}><a href="tel:08787851221" className='text-sm text-[#bbb] font-light hover:text-[#bbb]'> 8787851221</a></span>
        </div>
        <div ref={textRef2} className='w-4/5 mt-12'>
        <h1 style={{ fontFamily: "Playfair Display, Roboto",fontWeight: 'bold',color: "white", fontSize: '80px' }}>
        I {' '}
        <span style={{ color: '#4bffa5',fontSize: '80px', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Code Cool Websites', 'Love React & ReactNative', 'Develop Mobile Apps']}
            loop={500}
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1000}

          />
        </span>
      </h1>
        </div>
         <SideSocial />
        </div>
    </>
  )
}


export default Hero