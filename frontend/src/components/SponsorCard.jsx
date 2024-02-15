import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const SponsorCard = ({ index, id, attributes })=> {
    console.log(index);
    console.log(attributes);
    console.log(345555555);
  return (
    <Tilt className="xs:w-[250px] w-full">
    <MediaQuery query="(min-width: 800px)">
    <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full p-[1px]  "
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=" rounded-full  bg-opacity-1 bg-[#640D14] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col"
    >
      <img
        src={attributes.image.data.attributes.formats.small.url}
        alt="web-development"
        className=" object-contain"
      />

     
    </div>
    <h3 className="text-white text-[20px] font-bold text-center">
        {attributes.title}
      </h3>
  </motion.div>
    </MediaQuery>
    <MediaQuery query="(max-width: 800px)">
    <div
  
    className="w-full p-[1px] "
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=" rounded-full  bg-opacity-1 bg-[#640D14] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img
        src={attributes.image.data.attributes.formats.small.url}
        alt="web-development"
        className=" object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">
        {attributes.title}
      </h3>
    </div>
  </div>

    </MediaQuery>
 
</Tilt>
  );
};

export default SponsorCard;



 
                   