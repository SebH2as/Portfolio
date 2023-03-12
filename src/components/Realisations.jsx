import React from 'react'
import RealisationCard from './RealisationCard'
import { HiOutlineExternalLink } from 'react-icons/hi';

function Realisations() {
  return (
    <div className='text-left mb-24 lg:w-6/12 w-11/12 flex flex-col'>
        <div className='lg:w-6/12 w-11/12'>
            <h2 className='text-2xl text-violet-200 font-bold flex items-center'>
                <span className='text-orange-300 font-light text-base font-mono pt-1 pr-2'>03.  </span> 
                <span className='pr-3'>Réalisations</span> 
                <div className='grow border-t border-gray-400'></div>
            </h2>
        </div>
        <div className='pt-10 flex flex-col justify-center gap-16'>
            <RealisationCard 
                title = "Arbre d'ouverture Lichess"
                text = "Récupération des données d'un joueur d'échecs Lichess pour la création d'un arbre d'ouverture avec ratio victoires/nuls/défaites. Mise en pratique de la théorie des graphes à l'aide de javascript et react."
                techno = "javascript react api tailwind daisyui"
                src = "/treeOpening.png"
                url = "http://lichessopeningtree.sebh2as.com/"
                alignment= "items-end"
                leftRight= "text-right"
            />
            <div className="flex flex-row-reverse mb-8 lg:mb-0">
                <a href="https://portfolio.sebh2as.com/"  target='_blank' rel="noreferrer" className='lg:inline hidden w-3/5 h-64'>
                    <div >
                        <img src="/portfolio.png" alt="portfolio" className='w-full h-64 opacity-40 hover:opacity-80 duration-300' />
                    </div>
                </a>
                <div className="lg:w-2/5 w-5/5 h-64 flex flex-col items-start">
                    <h4 className='text-orange-300 font-mono text-sm pb-2'>réalisation</h4>
                    <h2 className='text-violet-100 text-xl font-extrabold pb-4'>Portfolio</h2>
                    <div className='bg-[#082845] lg:w-96 w-4/5 h-auto lg:z-10 p-4 flex justify-end shadow-lg'>
                        <p className="text-violet-300 text-sm leading-relaxed text-left"> 
                            Copie de l'un des portfolio les plus inspirant du net: <a href="https://brittanychiang.com/" target='_blank' rel="noreferrer" className='text-orange-300'>Brittany Chiang.</a>  Travail full responsive d'intégration et de réflexion autour de React et tailwind. L'animation reste à faire.
                        </p>
                    </div>
                    <span className="pt-6 text-violet-300 font-mono lg:text-sm text-xs leading-relaxed pb-2 text-left">
                        react tailwind
                    </span>
                    <a href="https://portfolio.sebh2as.com/" target='_blank' rel="noreferrer">
                        <HiOutlineExternalLink className='lg:text-xl text-5xl text-violet-100'/>
                    </a>
                </div>
            </div>
            <RealisationCard 
                title = "Jeu vidéo"
                text = "Utilisation de la librairie phaser et de typescript pour la réalisation d'un jeux de type infinite runner"
                techno = "javascript typescript phaser"
                src = "/rushingGob.png"
                url = "http://rushinggob.sebh2as.com/"
                alignment= "items-end"
                leftRight= "text-right"
            />
            <RealisationCard 
                title = "Site vitrine / blog"
                text = "Réalisation d'un site double pour un auteur jeunesse avec back-office et CRUD. Concrétisation de l'apprentissage de Symfony et utilisation de bootstrap."
                techno = "php symfony twig bootstrap mysql"
                src = "/auteurJeunesse.png"
                url = "https://parolier.olivierbardoul.fr/"
                direction = "flex-row-reverse"
                alignment= "items-start"
                leftRight= "text-left"
            />
            
            
        </div>
    </div>
  )
}

export default Realisations