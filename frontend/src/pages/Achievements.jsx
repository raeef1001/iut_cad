
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
        Our achievements stand as a testament to our dedication and expertise in the world of computing. From groundbreaking projects to remarkable collaborations, we've consistently pushed the boundaries of innovation. Our journey is marked by a trail of successes that inspire us to aim even higher.
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