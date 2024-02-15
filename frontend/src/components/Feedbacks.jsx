import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Goals } from "../constants";

const FeedbackCard = ({
  index,
  Goal,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=' bg-opacity-50 bg-[#34040e] p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{Goal}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
       
        </div>

      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-opacity-1 bg-[#800e13] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>IUTCAD Society</p>
          <h2 className={styles.sectionHeadText}>Our Goals.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 bg-opacity-1 bg-[#640d14] rounded-xl`}>
        {Goals.map((Goal, index) => (
          <FeedbackCard key={Goal.name} index={index} {...Goal} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
