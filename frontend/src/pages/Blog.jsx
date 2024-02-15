import React from "react";
import { useContext } from "react";
import { Context } from "../App";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SponsorCard from "../components/SponsorCard";
const Blog = () => {
  const [banner, BLOG, activities, achievements] = useContext(Context);
  console.log(BLOG);
  console.log(222222);

  return (
    <div className="min-h-[90vh] mt-10 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>IUT CAD Society</p>
        <h2 className={styles.sectionHeadText}>SPONSORS.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The success and growth of the IUT CAD Society are greatly facilitated by the generous support and collaboration of our esteemed sponsors. Through their unwavering commitment to fostering innovation and excellence in the field of Computer-Aided Design (CAD), our sponsors play a pivotal role in providing our members with invaluable resources, opportunities, and industry insights.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {BLOG.map((project, index) => (
          <SponsorCard
          
            index={index}
            {...project}
            
           
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "");
