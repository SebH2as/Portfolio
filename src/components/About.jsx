import React from 'react'

function About() {
  return (
    <div className='text-left lg:w-6/12 w-11/12 flex flex-col lg:flex-row'>
      <div className='lg:w-8/12 w-11/12'>
        <h2 className='text-2xl text-violet-200 font-bold flex items-center'>
          <span className='text-orange-300 font-light text-base font-mono pt-1 pr-2'>01.  </span> 
          <span className='pr-3'>Qui je suis</span> 
          <div className='grow border-t border-gray-400'></div>
        </h2>
        <p className='text-sm pt-10 leading-relaxed text-violet-300'>
          Bonjour! Je m'appelle Sébastien et j'adore créer des choses pour le web.
          Mon intéret pour le développement s'est révélé aux alentours de l'année 2010, 
          quand j'ai commencé à animer un atelier d'initiation au code et à la programmation
          dans les écoles nantaises. Dix ans plus tard, j'ai décidé de me professionnaliser dans 
          le domaine en passant <span className='text-orange-300'>un diplôme de développeur web junior</span> chez OpenClassrooms.
        </p>
        <p className='text-sm pt-5 leading-relaxed text-violet-300'>
          Initialement titulaire d'un Master2 de sociologie du travail, j'ai exercé dans l'insertion professionnelle, l'enseignement 
          et l'animation.
        </p>
        <p className='text-sm pt-5 leading-relaxed text-violet-300'>
          J'ai une réelle appétence pour le développement front: j'aime organiser, styliser et animer avec sobriété.
          Je crée des SVG auxquels je donne parfois vie. <span className='text-orange-300'>Je suis créatif et rigoureux.</span> Je fais aussi du back-office à l'occasion. 
        </p>
        <p className='text-sm pt-5 leading-relaxed text-violet-300'>
          Voici les technologies avec lesquelles je travaille habituellement: 
        </p>
        <div className='pl-3 pt-5 text-violet-300 text-xs flex justify-start'>
          <ul className='list-disc leading-relaxed'>
            <li>
              JavaScript (ES6+)
            </li>
            <li>
              React
            </li>
            <li>
              Node.js
            </li>
          </ul>
          <ul className='list-disc leading-relaxed pl-10'>
            <li>
              TypeScript
            </li>
            <li>
              PHP
            </li>
            <li>
              Symphony
            </li>
          </ul>
          <ul className='list-disc leading-relaxed pl-12'>
            <li>
              Bootstrap
            </li>
            <li>
              Tailwind
            </li>
            <li>
              Wordpress
            </li>
          </ul>
        </div>
        
      </div>
      <div className='lg:w-4/12 w-11/12 mt-8 lg:mt-0 lg:pl-10 flex justify-center items-center'>
        <div className='bg-gradient-to-b from-orange-200 to-orange-500  rounded-full relative overflow-hidden border-orange-100 border-4'>
          <img src='/sebdev2.png' alt='sébastien haas' className='object-cover' layout='fill' ></img>
        </div>
        
      </div>
        
    </div>
  )
}

export default About