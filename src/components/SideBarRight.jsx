import React from 'react'
import {SlEnvelopeOpen} from 'react-icons/sl';


function SideBarRight() {
  return (
    <div className='hidden fixed bottom-0 right-12 text-violet-300 text-xl lg:inline'>
        <a href='mailto:se.haas@laposte.net' className='hover:text-orange-300 duration-200'>
            <div className='transform rotate-90 w-4 mb-40 text-sm font-mono'>se.haas@lapost.net</div>
        </a>
        < SlEnvelopeOpen className='mt-8' />
        <div className='p-px bg-violet-300 h-24 border-x-[12px] border-[#071e33] relative right-0.5'></div>
    </div>
  )
}

export default SideBarRight