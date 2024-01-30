import React from "react";
import { useContext } from "react";
import { Context } from "../App";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Blog = () => {
  const [banner, BLOG, activities, achievements] = useContext(Context);

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
        Explore our thought-provoking blogs where technology meets storytelling.
        Dive into a world of insights, trends, and solutions. Our blogs provide
        a platform for knowledge-sharing and innovation, offering a fresh
        perspective on the ever-evolving landscape of computing. Delve into our
        diverse collection of blogs, where the intersection of technology and
        storytelling takes center stage. Uncover an abundance of insights,
        trends, and solutions. Our blogs serve as a rich resource for
        knowledge-sharing and innovation.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {BLOG.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            stateType="react"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "");
