import React, { useEffect } from 'react';
import { Context } from '../App';
import { SectionWrapper } from "../hoc";
import { useContext } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import image4 from "../assets/loading_images/4.gif";
import { fadeIn, textVariant } from "../utils/motion";
const Pages = () => {
  const [ banner,
    BLOG,
    activities,
    achievements,
    member,
    intraRegistration,
    interRegistration,pagesValue,setPagesValue] = useContext(Context);
 console.log(pagesValue);
 
  return (
    <div>
      
      <div className='min-h-[90vh] mt-10 '>
        <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>{tags[0]}</p> */}
        <h2 className='text-white font-500 md:text-[30px] sm:text-[20px] xs:text-[20px] text-[20px]'>{pagesValue.attributes.title}</h2>
      </motion.div>
     <div className=' pt-10 pb-10' >
     <img
          src={pagesValue.attributes.image.data.attributes.formats.small.url}
          alt=""
          className=" w-[50vh]  rounded-xl overflow-hidden" 
        />
     </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {pagesValue.attributes.description }
      </motion.p>
      
    </div>
    </div>
  );
};

export default SectionWrapper(Pages, "");