import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideBarLeft from './components/SideBarLeft';
import SideBarRight from './components/SideBarRight';
import About from './components/About';
import Formation from './components/Formation';
import Realisations from './components/Realisations';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <main className='bg-[#071e33] relative'>
          <SideBarLeft />
          <SideBarRight />
          <Navbar />
        <section className='h-screen flex justify-center'>
          <Hero />
        </section>
        <section className='flex justify-center'>
          <div id="quijesuis" className='-mt-20'></div>
          <About />
        </section>
        <section className='flex justify-center pt-24'>
        <div id="formation" className='-mt-10'></div>
          <Formation />
        </section>
        <section className='flex justify-center pt-24'>
        <div id="realisations" className='-mt-20'></div>
          <Realisations />
        </section>
        <section id="contact" className='flex justify-center lg:pt-72 pt-24'>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
