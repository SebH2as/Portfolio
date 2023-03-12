import React from 'react'
import {FiLinkedin, FiGithub} from 'react-icons/fi';
import {BsFlower1} from 'react-icons/bs';

function SideBarLeft() {
  return (
    <div className='hidden fixed bottom-0 left-12 text-violet-300 text-xl lg:inline'>
      <a href='https://github.com/SebH2as?tab=repositories' target='_blank' rel="noreferrer" className='hover:text-orange-300 duration-200'>
        < FiGithub className='transform transition duration-300 hover:-translate-y-1'/>
      </a>
      <a href='https://www.linkedin.com/in/s%C3%A9bastien-haas-7a813a180/' target='_blank' rel="noreferrer" className='hover:text-orange-300 duration-200'>
        < FiLinkedin className='mt-8 transform transition duration-300 hover:-translate-y-1'/>
      </a>
      < BsFlower1 className='mt-8' />
      <div className='p-px bg-violet-300 h-24 border-x-[12px] border-[#071e33] relative right-0.5'></div>
    </div>
  )
}

export default SideBarLeft