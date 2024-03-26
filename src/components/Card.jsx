/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import useSound  from "use-sound";

export default function Card({ imageSrc, imageAlt, audioSrc}) {


  const [volume, setVolume] = useState(0.5)
  const [isClicked, setIsClicked] = useState(false);
  const [play, { stop }] = useSound(audioSrc, { volume: volume, loop: true });


  const handleClick = () => {
    setIsClicked(!isClicked);
    isClicked ? stop() : play();
  }

  const handleSliderChange = (e) => {
    setVolume(parseFloat(e.target.value));
  }

  const handleSliderClick = (e) => {
    e.stopPropagation()
  }

  return(
    <div 
    className={
     `w-[300px] h-[260px] hover:cursor-pointer hover:scale-105 ]
      hover:shadow-[0_20px_50px_rgba(8,_122,_184,_0.7)] transition-all 
      relative rounded-lg
     ${isClicked 
      ? "scale-105 shadow-[0_20px_50px_rgba(8,_122,_184,_0.7)]" 
      : "shadow-none"}`}
     onClick={handleClick}
     >
 
      <audio autoPlay>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>

      <img className="w-[300px] h-[260px] rounded-lg object-cover" 
      src={imageSrc} alt={imageAlt} />


      <div className="absolute flex p-2 w-full">
        <input 
          type="range" 
          max="1" 
          min="0" 
          step="0.01"
          className="relative z-2 bottom-10 w-full" 
          onClick={handleSliderClick}
          onChange={handleSliderChange}/>
      </div>
    </div>
  );
}