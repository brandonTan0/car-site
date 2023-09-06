import React, { useState } from 'react';
import './CarSection.css';
import { Link } from 'react-router-dom';


function CarSection() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  

  const handleMouseDown = e => {
    setMouseDownAt(e.clientX);
    console.log(`this is the click ` + e.clientX);
  }

  const handleMouseMove = e => {
    if (mouseDownAt === 0) return;
    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    console.log("thisn is the percentage " + percentage)

    let nextPercentage = parseFloat(prevPercentage) + percentage;

    setPercentage(nextPercentage);
    
    console.log("this is the prevPercent " + prevPercentage)
    console.log("this is the nextPercent " + nextPercentage)

    let boundedNextPer = Math.max(-50, Math.min(25, nextPercentage));
    console.log("this is the bounded percentage " + boundedNextPer);

    const track = document.getElementById("car-img-track");
    if (track) {
      track.animate ({
        transform: `translate(${boundedNextPer -35}%, 100%)`}, 
        {duration: 2400, fill: "forwards"});

      const images = track.getElementsByClassName("image");
      for (const image of images) {
        image.animate ({
          objectPosition: `${boundedNextPer + 65}% 50%`}, 
          {duration: 2400, fill: "forwards"});
      }
    }
  };

  const handleMouseUp = () => {
    console.log('mouse up');
    setMouseDownAt(0);
    setPrevPercentage(percentage);
    console.log("THIS IS THE STORED PREV " + prevPercentage);
  }

  return (
    <div 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className='body'>
      <div
        id="car-img-track"
        className="car-img-track"
      >
          <img className='image' src="car-pics/corvette.jpeg" draggable="false" alt="corvette"/>
          <img className='image' src="car-pics/roadster.jpeg" draggable="false" alt="roadster"/>
          <img className='image' src="car-pics/lambo.webp" draggable="false" alt="lambo"/>
          <img className='image' src="car-pics/bugatti.webp" draggable="false" alt="bugatti"/>
          <img className='image' src="car-pics/porsche.jpg" draggable="false" alt="porsche"/>
          <img className='image' src="car-pics/mclaren.jpeg" draggable="false" alt="mclaren"/>
          <Link to='/cars' className='arrow'>
            <i id="arrow" className="fa-solid fa-arrow-right" />
          </Link>
        </div>
    </div>
  );
}

export default CarSection;