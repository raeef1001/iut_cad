import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';

import { IoIosArrowBack } from 'react-icons/io';
const Carousel = ({ items }) => {
  console.log(items);
    const [activeIndex, setActiveIndex] = useState(0);

    function handleNextItemBtn() {
      setActiveIndex((prev) => {
        return prev + 1 < items.data.length ? prev + 1 : prev;
      });
    }
  
    function handlePrevItemBtn() {
      setActiveIndex((prev) => {
        return prev - 1 >= 0 ? prev - 1 : prev;
      });
    }
  return (
    <div className="carousel-container">
      {activeIndex > 0 && (
        <button
          className="right-1/2 top-1/2 translate-x-[-100px] translate-y-[-50%] transform sm:translate-x-[-250px] md:translate-x-[-300px] lg:translate-x-[-350px] absolute z-40 flex h-9 w-9 cursor-pointer items-center justify-center
          rounded-full border-2 border-[#302e30] bg-[#181818] text-2xl opacity-75 transition duration-300 hover:opacity-100 md:h-12 md:w-12"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}
      {items.data?.map((item, index) => (
        <CarouselItem data={item} key={index} index={index} activeIndex={activeIndex}>
          
        </CarouselItem>
      ))}
      {activeIndex < items.data.length - 1 && (
        <button
          className="top-1/2 left-1/2 translate-x-[100px] translate-y-[-50%] transform sm:translate-x-[250px] md:translate-x-[300px] lg:translate-x-[350px] 
          absolute z-40 flex h-9 w-9 cursor-pointer items-center justify-center
      rounded-full border-2 border-[#302e30] bg-[#181818] text-2xl opacity-75 transition duration-300 hover:opacity-100 md:h-12 md:w-12"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.data.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
};

export default Carousel;
