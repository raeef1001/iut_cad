import React from 'react';
import Carousel from './Carousel';
import Image from './Image';

const Main = (props) => {
   
    const imageItems = [
        <Image className ='h-full w-full ' src={props.data.data[0].attributes.image.data.attributes.formats.large.url} alt='Card1' />,
        <Image className ='h-full w-full' src={props.data.data[1].attributes.image.data.attributes.formats.large.url} alt='Card1' />,
        <Image className ='h-full w-full' src={props.data.data[2].attributes.image.data.attributes.formats.large.url} alt='Card1' />,
        <Image className ='h-full w-full' src={props.data.data[0].attributes.image.data.attributes.formats.large.url} alt='Card1' />,
       
    ]
    
    return (
       
       

  
       
    
     
        
         
    
          <Carousel items={props.data} />
    
      
    );
};

export default Main;