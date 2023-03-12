import React from 'react'
import FormationCard from './FormationCard'

function Formation() {
  return (
    <div className='text-left lg:p-16 lg:w-8/12 w-11/12 flex flex-col'>
        <div className='lg:w-8/12 w-11/12 lg:pl-20'>
            <h2 className='text-2xl text-violet-200 font-bold flex items-center'>
                <span className='text-orange-300 font-light text-base font-mono pt-1 pr-2'>02.  </span> 
                <span className='pr-3'>Formation Web</span> 
                <div className='grow border-t border-gray-400'></div>
            </h2>
        </div>
        <div className=' pt-10 flex justify-center flex-wrap lg:gap-4 gap-8 '>
            <div className='flex flex-col justify-start w-72 h-72 bg-[#082845] p-5 border-2 border-violet-300'>
                <div className='flex justify-center items-center'>
                    <img src='/logoOC.png' alt='logo OC'></img>
                </div>
                <h3 className='pt-5 text-violet-100 font-bold text-2xl'>Cursus OpenClassrooms</h3>
                <h4 className='pt-2 text-violet-100 font-bold '>Formation développeur web</h4>
                <div className='text-left text-sm pt-2 text-violet-300'>
                    <p >
                        Réalisation de projets concrets basés sur des mises en situation professionnelles.
                    </p>
                </div>

            </div>
            <FormationCard 
                title = 'Projet 01'
                text = "Intégration de la maquette du site d'une agence Web en Html, Css, avec ajout d'une google map."
                techno = "html - css"
                url = "https://projet1.openclassrooms.sebh2as.com/"
            />
            <FormationCard 
                title = 'Projet 02'
                text = "Création d'un site pour une agence de voyage en personnalisant un thème WordPress."
                techno = "wordpress - css - php"
                url = "https://projet2.openclassrooms.sebh2as.com/"
            />
            <FormationCard 
                title = 'Projet 03'
                text = "Conception d'une carte interactive de location de vélos en Javascript avec récupération des données d'une API."
                techno = "javascript - api -canva - css"
                url = "https://projet3.openclassrooms.sebh2as.com/"
            />
            <FormationCard 
                title = 'Projet 04'
                text = "Blog pour un écrivain en PHP et MySql. Création d'un back office avec crud. Architecture MVC."
                techno = "php - css - mysql"
                url = "https://projet4.openclassrooms.sebh2as.com/"
            />
            <FormationCard 
                title = 'Projet 05'
                text = "Magazine numérique en php, javascript et MySql avec back-office et crud. MVC, injection des dépendances."
                techno = "php - twig - scss - js"
                url = "https://projet5.openclassrooms.sebh2as.com/"
            />

        </div>
    </div>
  )
}

export default Formation