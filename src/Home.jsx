//import { useState } from 'react';
import { Headphones } from "@phosphor-icons/react";
import { SiTailwindcss, SiReact, SiVercel } from "react-icons/si";
import Card from "./components/Card";


export default function Home() {

  return (
    <>
     <div className="flex flex-col">
       <nav className="flex p-5 fixed w-full items-center justify-between 
          backdrop-filter border-slate-200 backdrop-blur-sm bg-clip-padding 
          bg-opacity-10 z-10">
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-4" href="#"> 
              <Headphones size={32}/>

              <h1 className="font-bold">Lofi-Sounds</h1>
            </a>
          
          </div>

          <ul className="flex">
            <a href="">
              <li>
                <img src="" alt="" />
              </li>
            </a>
          </ul>
       </nav>

       <div className="flex w-full flex-col mx-auto">
        <header className="flex font-bold justify-center text-6xl m-20">

          <h1 className="flex gap-4">
            <span  className="flex gap-4 animate-text1 bg-gradient-to-r 
             from-title-1-start-color-100 
             to-title-1-end-color-100 
             via-title-1-midle-color-100
             bg-clip-text text-transparent 
             text-6xl font-black">relax.</span>

            <span  className="flex gap-4 animate-text2 bg-gradient-to-r 
            from-title-2-start-color-200
            to-title-2-end-color-200 
            bg-clip-text text-transparent 
            text-6xl font-black">chill.</span>

            <span  className="flex gap-4 animate-text3 bg-gradient-to-r 
            from-title-3-start-color-300
            to-title-3-end-color-300 
            bg-clip-text text-transparent 
            text-6xl font-black">code.</span>
          </h1>

        </header>

        <section className="grid mx-auto gap-x-10 gap-y-10 place-content-center 
          md:grid-cols-2 lg:grid-cols-3">
          
            <Card imageSrc="./src/assets/chill-cover.svg" imageAlt="Lofi" />
        
            <Card imageSrc="./src/assets/forest-cover.svg"  
            audioSrc="./src/assets/ambient-sounds/forest.mp3" imageAlt="Forest" />

            <Card imageSrc="./src/assets/library-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/campfire.mp3" imageAlt="Fireplace" />
        
            <Card imageSrc="./src/assets/ocean-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/office.mp3" imageAlt="Office" />
         
            <Card imageSrc="./src/assets/night-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/train-station.mp3" imageAlt="Metro" />
     
            <Card imageSrc="./src/assets/urban-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/waves.mp3" imageAlt="Beach" />
      
            <Card imageSrc="./src/assets/meditate-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/rain.mp3" imageAlt="Rain" />
       
            <Card imageSrc="./src/assets/study-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/coffee-shop.mp3" imageAlt="Coffe" />
      
            <Card imageSrc="./src/assets/rain-cover.svg" 
            audioSrc="./src/assets/ambient-sounds/rain.mp3" imageAlt="City" />
          
          
        </section>

        <footer className="flex pt-20 pb-10 justify-center items-center">
            <p  className="flex gap-2 items-center">

                Build with 

                <a href="https://tailwindcss.com" target="_blank">
                  <SiTailwindcss size={20} />
                </a>

                <a href="https://react.dev" target="_blank">
                  <SiReact size={20} />
                </a>

                <a href="https://vercel.com" target="_blank">
                  <SiVercel size={18} />
                </a>
            </p>
        </footer>
       </div>
     </div>
    </>
  )
}


