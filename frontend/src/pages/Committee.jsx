import React from "react";
import { useContext } from "react";
import { Context } from "../App";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Committee = () => {
  const [banner, BLOG, activities, achievements, member] = useContext(Context);
  var testmember = [...member.data];
  return (
    <div className="min-h-[90vh] mt-10 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>IUT CAD Society</p>
        <h2 className={styles.sectionHeadText}>Members.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Our members are the heart of our society, united by a passion for
        technology and a drive for excellence. Together, we form a dynamic
        community that collaborates, innovates, and inspires. Join us and become
        part of our vibrant network of tech enthusiasts, where opportunities and
        connections abound.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {testmember.map((project, index) => (
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

export default SectionWrapper(Committee, "");
