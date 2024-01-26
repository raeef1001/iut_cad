import React from 'react';
import { useContext } from "react";
import { Context } from '../App';
import ProjectCard from '../components/ProjectCard';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Activities = () => {
    const [banner,BLOG,activities,achievements] = useContext(Context);

    
    

    return (
       <div className='min-h-[90vh] mt-10 '>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>IUT CAD Society</p>
        <h2 className={styles.sectionHeadText}>Activities.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Join our upcoming event, a captivating fusion of technology and
            creativity. Discover the latest trends, gain insights from industry
            experts, and immerse yourself in hands-on workshops. Unleash your
            potential and forge new connections in the ever-evolving world of
            computing.Discover the latest trends, gain insights from industry
            experts, and immerse yourself in hands-on workshops. Unleash your
            potential and forge new connections in the ever-evolving world of
            computing.
      </motion.p>
      
       
      <div className="mt-20 flex flex-wrap gap-7">
       {activities.map((project, index) => (
          <ProjectCard
             key={`project-${index}`}
             index={index}
            {...project}
            stateType="react"
          />
       ))
       }
      
        
      </div>
        </div>
       
    );}
export default SectionWrapper(Activities, "");