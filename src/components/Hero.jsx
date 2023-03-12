import React from 'react'

function Hero() {
  return (
    
        <div className='text-left pt-32 w-11/12 lg:pt-64 lg:w-6/12'>
            <span className='text-orange-300'> Bonjour,   je   suis</span>
            <h2 className='lg:text-6xl text-4xl py-2 text-violet-200 font-extrabold'>Sébastien Haas.</h2>
            <h3 className='lg:text-6xl text-4xl py-2 text-violet-300 font-bold' >Artisan de l'internet.</h3>
            <p className='text-sm py-5 leading-relaxed lg:w-96 text-violet-300'>
            Je suis un développeur-web ( junior ) qui aime construire des applications accessibles, simples et bien faites.
            J'ai une grande appétence pour le développement front mais je sais aussi faire du back.
            </p>
            <a href='/cv.pdf'  className='block text-center w-1/6 font-mono lg:text-sm text-5xl text-orange-300 border-orange-300 border-2  py-1 rounded hover:bg-opacity-30 hover:bg-orange-300 duration-300  '>
               cv 
            </a>
            
        </div>
    
  )
}

export default Hero