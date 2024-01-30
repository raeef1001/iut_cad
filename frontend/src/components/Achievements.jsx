import React, { useState, useEffect ,useContext} from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "./Works.css";

import { Context } from '../App';
import ProjectCard from "./ProjectCard";

import MediaQuery from "react-responsive";

const Works = () => {
  const [banner,BLOG,activities,achievements] = useContext(Context);


var featuredBLOG = BLOG.slice(0,3)
var featuredachievements = achievements.slice(0,3)

  const [workType, setWorkType] = useState("react");
  return (
    <>
     <MediaQuery query="(min-width: 800px)">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>IUT CAD Society</p>
        <h2 className={`${styles.sectionHeadText}`}>ACHIEVEMENTS</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore our thought-provoking blogs where technology meets storytelling.
        Dive into a world of insights, trends, and solutions. Our blogs provide
        a platform for knowledge-sharing and innovation, offering a fresh
        perspective on the ever-evolving landscape of computing. Delve into our
        diverse collection of blogs, where the intersection of technology and
        storytelling takes center stage. Uncover an abundance of insights,
        trends, and solutions. Our blogs serve as a rich resource for
        knowledge-sharing and innovation.
        </motion.p>
       
      </div>
      </MediaQuery>
         {/* <MediaQuery query="(max-width: 800px)">
         <div>
        <p className={`${styles.sectionSubText} `}>IUT CAD Society</p>
        <h2 className={`${styles.sectionHeadText}`}>Blogs</h2>
      </div>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore our thought-provoking blogs where technology meets storytelling.
        Dive into a world of insights, trends, and solutions. Our blogs provide
        a platform for knowledge-sharing and innovation, offering a fresh
        perspective on the ever-evolving landscape of computing. Delve into our
        diverse collection of blogs, where the intersection of technology and
        storytelling takes center stage. Uncover an abundance of insights,
        trends, and solutions. Our blogs serve as a rich resource for
        knowledge-sharing and innovation.
        </p>
       
      </div>
          
         </MediaQuery> */}
      {/* <h1 className="typeProject" id="react">Blogs</h1>
      <div className="mt-20 flex flex-wrap gap-7">
       { workType==="react" && featuredBLOG.map((project, index) => (
          <ProjectCard
             key={`project-${index}`}
             index={index}
            {...project}
            stateType='react'
          />
          
       ))
       }
       </div> */}
       <h1 className="typeProject">Achievements</h1>
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
      
        
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
