import React from "react";
import ContactHome from "../components/ContactHome";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Contact = () => {
  return (
    <div className="min-h-[90vh] mt-10 ">
      <motion.div variants={textVariant()}>
      
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="mb-[5vh]  ">
  
          <h5 className="text-2xl my-2">Phone</h5>
          <p>Our department’s main phone number is +8802 99669 1254~59</p>
          <p>
            <h5 className="text-2xl my-2">Address</h5>
            Islamic University of Technology Boardbazar , Gazipur Bangladesh
          </p>
          <h5 className="text-2xl my-2">HOURS OF OPERATION</h5>
          <p>Typically, we’re open from 8 AM – 5 PM Monday through Friday; </p>
        </div>
      </motion.div>

      <ContactHome />
    </div>
  );
};

export default SectionWrapper(Contact, "");
