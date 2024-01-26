import React from 'react';
import { useContext } from "react";
import { Context } from '../App';
import ProjectCard from '../components/ProjectCard';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const RegisterIUT = () => {
  const [banner, BLOG, activities, achievements, member, intraRegistration] = useContext(Context);
 
  return (
    <div className='min-h-[90vh] mt-10 '>
     <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>{intraRegistration.data[0].attributes.competitionName}</p>
     <h2 className={styles.sectionHeadText}>Registration.</h2>
   </motion.div>

   <motion.p
     variants={fadeIn("", "", 0.1, 1)}
     className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
   >
    {intraRegistration.data[0].attributes.description}
   </motion.p>
   <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="mb-[5vh]  ">
  
          <h5 className="text-2xl my-2 ">Competition Name : {intraRegistration.data[0].attributes.competitionName}</h5>
         
        
            <h5 className="text-2xl my-2">Competition Date : {intraRegistration.data[0].attributes.date}</h5>
            
         
      
            <h5 className="text-2xl my-2">Registration Deadline :  {intraRegistration.data[0].attributes.registrationDeadline}</h5>
           
         
          <h5 className="text-2xl my-2">Category : {intraRegistration.data[0].attributes.Catagory}</h5>
         
        </div>
      </motion.div>
   
    
  
   <div className="m-auto w-[60vh] pt-[10vh]">
        <iframe
          src={intraRegistration.data[0].attributes.googleFormLink}
          frameborder="0"
          width="100%"
          height="1908"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
     </div>
    
 );
};

export default  SectionWrapper(RegisterIUT, "");