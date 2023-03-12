import React from 'react'
import { SlFolder } from 'react-icons/sl'

function FormationCard({ title, text, techno, url}) {
  return (
    <div className='flex flex-col justify-start w-72 h-72 bg-[#082845] p-5 transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'>
        <a href={url} target='_blank' rel="noreferrer">
            <div className='flex justify-between items-center'>
                <SlFolder className='text-5xl text-orange-300'/>
                <img src='/logoOC.png' alt='logo OC'></img>
            </div>
            <h3 className='pt-5 text-violet-100 font-bold text-2xl'>{title}</h3>
            <div className='text-left pt-5 text-violet-300 text-sm'>
                <p>{text}</p>
            </div>
            <div className='text-center pt-10 text-violet-300 text-sm font-mono'>
                <span>{techno}</span>
            </div>
        </a>
    </div>
  )
}

export default FormationCard