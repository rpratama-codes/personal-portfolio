/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { data } from '../assets/data'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Home() {
  // const [count, setCount] = React.useState(0)

  return (
    <div id='home'>
      <Navbar />
      <section id='hero' className='container mx-auto flex flex-wrap justify-around items-center lg:py-40'>

        <div className="max-lg:py-10 max-lg:px-10">
          <div className='drop-shadow-2xl'>
            <p className=' font-bold text-5xl py-1'>Wellcome to my portfolio</p>
            <p className=' font-medium text-3xl text'>Find best suit for every case.</p>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='p-2 bg-black text-white font-bold rounded-md'>Keep Scrolling</p>
            <Player
              autoplay
              loop
              src="/assets/lotties/scroll.json"
              style={{ height: '80px', width: '80px' }}
            />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 drop-shadow-2xl max-lg:order-first max-lg:pt-10">
          <img className=' h-96 object-scale-down' src='/assets/images/me.png' />
          <div className="text-center">
            <p className=" font-bold text-3xl">Rizqi Pratama</p>
            <p>Backend | Fullstack Developer</p>
          </div>
        </div>

      </section>

      <section id='project-gallery' className='container mx-auto px-10 flex flex-col gap-10 items-center pb-8'>
        <div className='text-center'>
          <p className='font-bold text-4xl py-1'>Project Gallery</p>
          <p className='font-medium text-xl py-1'>Every project has a story, click to see the detail</p>
        </div>

        <div className='mx-auto flex flex-wrap gap-10 justify-center'>
          {
            data.map((project, index) => {
              return (
                <div key={index}
                  className='border-gray bottom-2 shadow-sm hover:bg-black 
              flex flex-col items-center p-4 border-2 border-black hover:text-white hover:cursor-pointer max-w-[360px]' >
                  <img src={project.image} alt={project.name} style={{ maxWidth: 240, objectFit: 'scale-down', objectPosition: 'center' }} />
                  <p className=' font-bold text-xl p-2'>{project.name}</p>
                  <div className='flex gap-2 flex-wrap justify-center'>
                    {
                      project.stack.map((stack, index) => <p key={index} className='p-2 border-2 border-gray'>{stack} </p>)
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* <section id='content-1' className='container mx-auto h-96 px-10'>
        <div>
          <p className='font-bold text-4xl'>I guess you're looking for solution.</p>
          <p className='font-medium text-xl'>I hope you have been see my cv. Then you're in right way!</p>
          <p className='font-bold text-xl'>Let's talk about the problem then deal with it.</p>
        </div>
        <div className=' h-96 border-2 border-black'>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
