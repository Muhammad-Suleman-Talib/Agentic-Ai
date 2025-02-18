import React from 'react'//first i import the react component front react 
import './globals.css'// than i second import the global css file to use the tailwind css 
import Header from './components/header'
import Features from './components/features'

export default function AgenticAi() {// i create a componet which make the first page 
  return (
    <>
    <Header/>

    <div className='relative w-full h-[92vh] flex items-center justify-center bg-black overflow-hidden'>// first i think how i make this type of the page whihc i guess i need to make this so first i make the div and add the class and given property position relative because i want to come in center and i add the height full width full and flex and item-center justify center and bg black and overflow hidden
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>//i add the video tag and given property like autoplay loop and muted and i given the class to come in the center so i first given absolute to come in the center and left 0 and top 0 and w-full and h-full and object-cover its mean that the absolut says to come the realative postion ceter use left0 and top o and w-full and h-full and object-cover mean to come in complete the section 
        <source src='/agentic.mp4' type='video/mp4' />// i add in the source tag which take the 2 things first is src and secont alternate 
      </video>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-[#64b1b4] bg-black bg-opacity-50 sm:px-6 small:px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center'>Welcome to Agentic Ai World</h1>
        <p className='text-lg md:text-xl mb-6 max-w-2xl text-center '>We create intelligent, autonomous systems that enhance productivity and decision-making.</p>
        <button className='bg-[#67bec1] text-black px-6 py-3 rounded-md hover:bg-[#557b7c] transition-colors'>Get Started</button>
      </div>
      
    </div>
    <Features/>
    </>
  )
}
