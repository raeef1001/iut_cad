import React, { useContext} from "react";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ImageSlider from "./ImgeSlider/ImageSlider";
import { Context } from '../App';

const MemberHome = () => {
  const [banner,BLOG,activities,achievements,member] = useContext(Context);
  var testmember = [...member.data]
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>IUT CAD Society</p> 
        <h2 className={styles.sectionHeadText}>Member.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row ">
        <div className="mb-10 items-center content-center">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
           Our members are the heart of our society, united by a passion for technology and a drive for excellence. Together, we form a dynamic community that collaborates, innovates, and inspires. Join us and become part of our vibrant network of tech enthusiasts, where opportunities and connections abound.
          </motion.p>
        </div>
        <div className="w-full">
          <ImageSlider  data={testmember}/>
        </div>
       
      </div>
    </div>
  );
};

export default SectionWrapper(MemberHome, "");
