import React from 'react'
import summaryPhoto from '../assets/sohail_profile2.png';
import Experience from './Experience';
import Education from './Education';
const Summary = () => {
  return (
    <>
      <h1 className='text-white mt-[24px] ml-72 text-3xl'>Summary</h1>
      <div className='text-white flex mt-[36px] ml-72 w-4/6' style={{height: "400px", border: "1px solid rgb(33 33 33)"}} >
     <div className="pt-2 flex-none w-1/5">
     <img src={summaryPhoto} alt="photo" width="200px" className='rounded-full ml-6' style={{border: '1px solid rgb(33 33 33)', marginTop: '20px'}}/>
     </div>
     <div className="p-4 w-2/3 ml-14 mt-3 font-light tracking-wide text-md leading-loose text-[#bbb]">
      <p>Hello! I’m Mohammad Sohail Shah. Frontend Developer from Imphal, INDIA. I have rich experienced in frontend development and designing UI/UX and building web apps, also I am good at wordpress. I love to talk with you about our unique.</p>
     <div className='flex h-4/5 mt-8'>
        <div className='w-1/2'>
          <ul>
          <li><span className='text-[#4bffa5]'>Age: </span> 24</li>
          <li><span className='text-[#4bffa5]'>Freelance: </span> Available</li>
          <li><span className='text-[#4bffa5]'>Phone: </span> +91-8787851221</li>
          </ul>
          <a href="#_" className="mt-8 inline-flex items-center justify-center px-4 py-2 text-md font-light text-[#4bffa5] whitespace-no-wrap bg-none border border-[#4bffa5] shadow-sm hover:bg-[#4bffa5] text-[#bbb] hover:text-black focus:outline-none focus:shadow-none">
       Download Resume
     </a>
        </div>
        <div className='w-1/2'>
          <ul>
          <li><span className='text-[#4bffa5]'>Residence: </span> Imphal East, Manipur</li>
          <li> <span className='text-[#4bffa5]'>Address: </span> Kshetri Bengoon Awang Leikai</li>
          <li><span className='text-[#4bffa5]'>E-mail: </span>Sohailbritt@gmail.com</li>
          </ul>
        </div>
     </div>
     </div>
    </div>
    </>
  )
}

export default Summary