import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import scss from '../assets/scss.png';
import typescript from '../assets/typescript.png';
import adobeXd from '../assets/adobexd.svg';
import figma from '../assets/figma.png'
import invision from '../assets/invision.png';
import react from '../assets/reactjs.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.svg';
// import axios from '../assets/axios.png';
import node from '../assets/node.png';
import redux from '../assets/redux.png';
import express from '../assets/express.png';
import mui from '../assets/mui.png';
import restapi from '../assets/restapi.png';
import github from '../assets/github.png';
import jenkins from '../assets/jenkins.png';
import gitlab from '../assets/gitlab.png';
// import hooks from '../assets/hooks.png';






const Skills = () => {

  return (
    <div>
        <div>
        <h1 className='text-white mt-24 ml-48 text-3xl'>Technical Skills</h1>
        <div className='text-white ml-72 mt-24 w-4/6 p-8 ' style={{ border: "1px solid rgb(33 33 33)"}} >

        <div className='ml-8 '>
          <div className='flex justify-around content-center'>
            <span className='self-center mt-8 mb-3 text-md font-light'>Frontend Developement:</span>
            <img src={html} className='ml-4 w-[100px] h-[80px]'/>
             <img src={css} className='mt-[5px] ml-4 w-[65px] h-[75px]'/>

            <img src={js}  className='ml-[15px] mt-3 w-[80px] h-[80px]'/>
            <img src={scss}  className='mt-6 ml-4 w-[60px] h-[60px]'/>
            <img src={typescript} className='mt-6 ml-[8px] w-[60px] h-[60px]'/>
          </div>

          <div className='mt-[66px] flex justify-around content-center'>
            <span className='self-end mt-8 mb-3 text-md font-light'>UI/UX Design:</span>
            <img src={adobeXd} className='self-center  w-[60px] h-[60px]'/>
             <img src={figma} className=' w-[70px] h-[60px]'/>

            <img src={invision}  className=' w-[60px] h-[60px]'/>
          </div>

          <div className='mt-[66px] flex justify-between content-center'>
            <span className='self-start mt-8 mb-3 pl-3 text-md font-light'>Frameworks & Libraries:</span>
            <img src={react} className='mt-3 ml-3 w-[65px] h-[60px]'/>
             <img src={bootstrap} className='w-[90px] h-[100px]'/>

            <img src={mui}  className=' w-[90px] h-[90px]'/>
            <img src={tailwind}  className=' w-[80px] h-[90px]'/>
            <img src={redux} className=' w-[120px] h-[100px]'/>
            {/* <img src={axios} className=' w-[120px]'/> */}
            {/* <img src={hooks} className='  w-[120px]'/> */}
          </div>

          <div className='mt-[66px] flex justify-around content-center'>
            <span className='self-center mt-8 mb-3 text-md font-light'>Version Control & Deployment:</span>
            <img src={github}  className='ml-[15px] mt-3 w-[90px] h-[90px]'/>
            <img src={jenkins}  className='mt-6 ml-4 w-[120px] h-[100px]'/>
            <img src={gitlab} className='mt-6 ml-[8px] w-[70px]  h-[70px]'/>
          </div>

          <div className='mt-[66px] flex justify-around content-center'>
            <span className='self-center mt-8 mb-3 text-md font-light'>Additional:</span>
            <img src={node} className='ml-4 w-[70px] h-[80px]'/>
             <img src={express} className='mt-[5px] ml-4 w-[80px] h-[80px]'/>

            <img src={restapi}  className='ml-[15px] mt-3 w-[70px] h-[60px]'/>
          </div>


        </div>
        </div>
    </div>
    </div>
  )
}

export default Skills