import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

function RealisationCard({ title, text, techno, src, url, direction, alignment, leftRight}) {
    const flex = "flex ";
    const flexDirection = "lg:w-2/5 w-5/5 h-64 flex  mb-8 lg:mb-0 flex-col ";
    const textDirection = "text-violet-300 text-sm leading-relaxed ";
    const technoDirection = "pt-6 text-violet-300 font-mono lg:text-sm text-xs leading-relaxed pb-2 ";

  return (
    <div className={flex + direction}>
        <a href={url}  target='_blank' rel="noreferrer" className='lg:inline hidden w-3/5 h-64'>
            <div >
                <img src={src} alt={src} className='w-full h-64 opacity-40 hover:opacity-80 duration-300' />
            </div>
        </a>
        <div className={flexDirection + alignment}>
            <h4 className='text-orange-300 font-mono text-sm pb-2'>réalisation</h4>
            <h2 className='text-violet-100 text-xl font-extrabold pb-4'>{title}</h2>
            <div className='bg-[#082845] lg:w-96 w-4/5 h-auto lg:z-10 p-4 flex justify-end shadow-lg'>
                <p className={textDirection + leftRight}> 
                    {text}
                </p>
            </div>
            <span className={technoDirection + leftRight}>
                {techno}
            </span>
            <a href={url}  target='_blank' rel="noreferrer">
                <HiOutlineExternalLink className='lg:text-xl text-5xl text-violet-100'/>
            </a>
        </div>
    </div>
  )
}

export default RealisationCard