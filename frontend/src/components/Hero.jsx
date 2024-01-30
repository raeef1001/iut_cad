import { motion } from "framer-motion";
import React, { useContext} from "react";
import { styles } from "../styles";

import Main from "./carousel/Main";
import { Context } from '../App';

const Hero = () => {
  const [banner,BLOG,activities,achievements] = useContext(Context);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
     

        <div className="mx-auto flex flex-col justify-center overflow-hidden">
         <div>
         <h1 className={`${styles.heroHeadText} text-white text-center`}>
             <span className='text-[#fff]'>IUT CAD Society</span>
          </h1> 
          <p className={`${styles.heroSubText} mt-2  text-white-100 text-center`}>
          Unleashing Innovation, Connecting Minds<br className='sm:block hidden' />with The Power of Computing 
           




          </p>
         </div>
      <div className="mt-16 w-[600px] md:w-[1000px] lg:w-[1200px] xl:w-[1800px]  pl-[20px] md:pl-[12rem] lg:pl-[250px] xl:pl-[10vw]">
      <Main data={banner} />
      </div>
        </div>
      </div>
      
     
      

      <div className='absolute xs:bottom-10 bottom-32 w-full md:flex justify-center items-center hidden '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
