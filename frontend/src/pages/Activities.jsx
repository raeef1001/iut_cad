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
      The IUT CAD Society is a dynamic community that thrives on a wide range of engaging activities designed to foster creativity, skill development, and camaraderie among our members. Our society offers a vibrant array of events, workshops, and initiatives tailored to cater to the diverse interests and aspirations of our members in the field of Computer-Aided Design (CAD).
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