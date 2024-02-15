import React, { useState } from 'react';
import { useContext } from "react";
import { Context } from '../../App';
import Image from './Image';
import { Link } from 'react-router-dom';
const CarouselItem = ({data,index,activeIndex}) => {
  
    const [scaled, setScaled] = useState(false);
    const [  banner,
      BLOG,
      activities,
      achievements,
      member,
      intraRegistration,
      interRegistration,pagesValue,setPagesValue] = useContext(Context);

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))
        scale(${scaled && index === activeIndex ? 6.5 : 1})
       `;

  const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

  const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'},
  `;

    return (
      
        <div 
        className=" absolute h-full w-full cursor-pointer overflow-hidden rounded-3xl drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-in-out"
        style={{
          transform: cssTransformProperties,
          opacity: cssOpacity,
          display: cssDisplay,
          zIndex: `${scaled ? 4 : 1}`,
        }}
        onClick={() => {
          console.log(data);
          setPagesValue(data);

          
        }}
      >
         <Image className ='h-full w-full ' src={data.attributes.image.data.attributes.formats.large.url} alt='Card1' />
      </div>
    );
};

export default CarouselItem;