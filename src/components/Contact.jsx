import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {FiLinkedin, FiGithub} from 'react-icons/fi';

function Contact() {
  return (
    <div className='text-left lg:w-6/12 w-11/12 flex flex-col items-center mb-52'>
        <h6 className='text-orange-300 text-sm font-mono pb-6'>04. Et maintenant?</h6>
        <h2 className='text-violet-100 lg:text-5xl text-3xl pb-8'>Contactez-moi!</h2>
        <p className='text-violet-300 text-center w-8/12 pb-8'>Je cherche activement une entreprise dynamique pour mettre à son service 
        mes compétences techniques, mon sérieux, ma motivation et ma bonne humeur.</p>
        <a href="mailto:se.haas@laposte.net"><AiOutlineMail className='text-orange-300 text-9xl' /></a>
        <a href='https://github.com/SebH2as?tab=repositories' target='_blank' rel="noreferrer" className='lg:hidden pt-12'>
          < FiGithub className='text-violet-100 text-7xl'/>
        </a>
        <a href='https://www.linkedin.com/in/s%C3%A9bastien-haas-7a813a180/' target='_blank' rel="noreferrer" className='lg:hidden pt-12'>
          < FiLinkedin className='text-violet-100 text-7xl'/>
        </a>
    </div>
  )
}

export default Contact