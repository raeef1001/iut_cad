import React, { useState, useEffect ,useContext} from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "./Works.css";

import { Context } from '../App';
import ProjectCard from "./ProjectCard";

import MediaQuery from "react-responsive";
import SponsorCard from "./SponsorCard";

const Works = () => {
  const [banner,BLOG,activities,achievements] = useContext(Context);


var featuredBLOG = BLOG
console.log(featuredBLOG);
console.log(222222);


  const [workType, setWorkType] = useState("react");
  return (
    <>
     <MediaQuery query="(min-width: 800px)">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>IUT CAD Society</p>
        <h2 className={`${styles.sectionHeadText}`}>SPONSORS</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
    The success and growth of the IUT CAD Society are greatly facilitated by the generous support and collaboration of our esteemed sponsors. Through their unwavering commitment to fostering innovation and excellence in the field of Computer-Aided Design (CAD), our sponsors play a pivotal role in providing our members with invaluable resources, opportunities, and industry insights.
        </motion.p>
       
      </div>
      </MediaQuery>
         <MediaQuery query="(max-width: 800px)">
         <div>
        <p className={`${styles.sectionSubText} `}>IUT CAD Society</p>
        <h2 className={`${styles.sectionHeadText}`}>SPONSORS</h2>
      </div>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
             The success and growth of the IUT CAD Society are greatly facilitated by the generous support and collaboration of our esteemed sponsors. Through their unwavering commitment to fostering innovation and excellence in the field of Computer-Aided Design (CAD), our sponsors play a pivotal role in providing our members with invaluable resources, opportunities, and industry insights.

        </p>
       
      </div>
          
         </MediaQuery>
      <h1 className="typeProject" id="react">Sponsors</h1>
      <div className="mt-20 flex flex-wrap gap-7">
       {  featuredBLOG.map((project, index) => (
          <SponsorCard
            
             index={index}
             {...project}
          
          />
          
       ))
       }
       </div>
       {/* <h1 className="typeProject">Achievements</h1>
      <div className="mt-20 flex flex-wrap gap-7">
       { workType==="react" && featuredachievements.map((project, index) => (
          <ProjectCard
             key={`project-${index}`}
             index={index}
            {...project}
            stateType="wordpress"
          />
       ))
       }
      
        
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "");
