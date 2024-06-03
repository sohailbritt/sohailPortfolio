import React from 'react'
import {Linkedin, CodeSlash } from 'react-bootstrap-icons';
const SideSocial = () => {
  return (
        <div className='w-1/12'>
               <p className="rotate-90 text-white text-sm text-[#bbb]">Find &nbsp; me</p>
               <hr className='rotate-90 w-12 mt-8 ml-8 text-[#bbb]'/>
            <div className="mt-12 ml-12">
              <a target="_blank" href="https://www.linkedin.com/in/-sohailshah/" title='Find me on Linkedin'>
                <Linkedin size={20} color='#4bffa5'/>
              </a>
              <a target="_blank" href="https://leetcode.com/u/sohailbritt/" title='Find me on LeetCode'>
                <CodeSlash size={20} color='#4bffa5' className='mt-6'/>
              </a>
            </div>
          </div>
  )
}

export default SideSocial