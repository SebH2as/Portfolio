import React from 'react'
import Anchor from './Anchor'
import { ReactComponent as Logo } from '../assets/logoS.svg';
import { useState } from 'react';

function Navbar() {
    const [isActive, setActive] = useState(-1);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navLinks = [
        {target: "#quijesuis", number: "01. ", text: "Qui je suis"},
        {target: "#formation", number: "02. ", text: "Formation"},
        {target: "#realisations", number: "03. ", text: "Réalisations"},
        {target: "#contact", number: "04. ", text: "Contact"}
    ]
    
  return (
    
    <nav className='fixed top-0 z-10 bg-[#071e33] w-full py-2 px-12 pt-7 flex justify-between'>
        <h1 className='hover:bg-opacity-30 hover:bg-orange-300 duration-300 rounded-xl'>
            <a href='https://portfolio.sebh2as.com/' target='_blank' rel="noreferrer"> <Logo className='fill-orange-300' /> </a>
        </h1>

        <section className="MOBILE-MENU flex z-40 lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-violet-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-violet-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-violet-100"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-6 py-6 pr-12"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-violet-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] z-40 mt-8">
                {navLinks.map((navLink, i) => (
                    <li key={i} onClick={()=> setActive(i)} >
                        <div className={`${isActive === i ? "text-orange-300 text-2xl pt-6 z-40": "text-violet-200 z-40 text-xl pt-6 hover:text-orange-300 duration-300 active:text-orange-300"}`}>
                            <Anchor 
                                target = {navLink.target}
                                number = {navLink.number}
                                text = {navLink.text}
                            />
                        </div>
                    </li>
                    ))}
                    <li className='pt-8'>
                    <button className='font-mono text-sm text-orange-300 border-orange-300 border-2 px-3 py-1 ml-3 rounded hover:bg-opacity-30 hover:bg-orange-300 duration-300  '>
                        <a href='/cv.pdf' > cv </a>
                    </button>
                    </li>
            </ul>
          </div>
        </section>

        <ul className='hidden lg:flex items-center'>
            {navLinks.map((navLink, i) => (
                <li key={i} onClick={()=> setActive(i)} >
                    <div className={`${isActive === i ? "text-orange-300": "text-violet-200 hover:text-orange-300 duration-300 active:text-orange-300"}`}>
                        <Anchor 
                            target = {navLink.target}
                            number = {navLink.number}
                            text = {navLink.text}
                        />
                    </div>
                </li>
            ))}
            <li>
            <a href='/cv.pdf' className='block font-mono text-sm text-orange-300 border-orange-300 border-2 px-3 py-1 ml-3 rounded hover:bg-opacity-30 hover:bg-orange-300 duration-300  '>
                cv 
            </a>
            
            </li>
        </ul>
        <style>{`
        .hideMenuNav {
            display: none;
        }
        .showMenuNav {
            display: block;
            position: absolute;
            width: 40%;
            height: 50vh;
            opacity: 80%;
            top: 0;
            right: 0;
            background: #071e33;
            z-index: 50;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        `}</style>
        </nav>
    
  )
}

export default Navbar