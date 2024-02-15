
import React from 'react';
import { useContext } from "react";
import { Context } from '../App';
import ProjectCard from '../components/ProjectCard';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Achievements = () => {
    const [banner,BLOG,activities,achievements] = useContext(Context);
    var testachievements = [...achievements]

    return (
       <div className='min-h-[90vh] mt-10 '>
        <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>IUT CAD Society</p> 
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
     The IUT CAD Society takes immense pride in celebrating the remarkable achievements and accomplishments of our talented members. Through their dedication, creativity, and hard work, our members consistently push the boundaries of innovation and excel in various competitions, projects, and endeavors within the realm of Computer-Aided Design (CAD).
      </motion.p>
      
       
      <div className="mt-20 flex flex-wrap gap-7">
       {testachievements.map((project, index) => (
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
       
    );
}

export default SectionWrapper(Achievements, "");