import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
      <MediaQuery query="(min-width: 800px)">
      <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-opacity-1 bg-[#640D14] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
      </MediaQuery>
      <MediaQuery query="(max-width: 800px)">
      <div
    
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-opacity-1 bg-[#640D14] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>

      </MediaQuery>
   
  </Tilt>
);

const About = () => {
  return (
    <>
     <MediaQuery query="(min-width: 800px)">
     <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>IUT CAD Society</p> 
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      Welcome to the world of innovation, creativity, and technological prowess with the IUT CAD Society! Established as a pioneering community at the forefront of cutting-edge design and engineering, the IUT CAD Society brings together passionate individuals driven by a shared enthusiasm for Computer-Aided Design (CAD) and its limitless possibilities. Whether you're a seasoned CAD expert or a newcomer eager to explore the realms of digital design, our society offers a vibrant platform for collaboration, learning, and professional development.
      </motion.p>
         </MediaQuery>
         <MediaQuery query="(max-width: 800px)">
         <div >
         <p className={styles.sectionSubText}>IUT CAD Society</p> 
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Welcome to the world of innovation, creativity, and technological prowess with the IUT CAD Society! Established as a pioneering community at the forefront of cutting-edge design and engineering, the IUT CAD Society brings together passionate individuals driven by a shared enthusiasm for Computer-Aided Design (CAD) and its limitless possibilities. Whether you're a seasoned CAD expert or a newcomer eager to explore the realms of digital design, our society offers a vibrant platform for collaboration, learning, and professional development.
      </p>
         </MediaQuery>
     

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
