import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from '../App';
import { Link } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ExperienceCard = ({ experience }) => {
  const [  banner,
    BLOG,
    activities,
    achievements,
    member,
    intraRegistration,
    interRegistration,pagesValue,setPagesValue] = useContext(Context);
  return (
    <VerticalTimelineElement 
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
     
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
   
      iconStyle={{ background: "#1d1836", color: "#fff" }}
    
      position="right"
    
    >
      <Link to="/Pages" onClick={()=>setPagesValue(experience)} >
        <h3 className="text-white text-[14px] font-bold cursor-pointer">
          {experience.attributes.title}
        </h3>
        <p
          className="text-secondary text-[13px] font-semibold cursor-pointer"
          style={{ margin: 0 }}
        >
          {experience.attributes.event_date}
        </p>
      </Link>

      
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [events, setevents] = useState([
    {
      id: 1,
      attributes: {
        event_name: "rafy",
        event_date: 3,
      },
    },
    {
      id: 2,
      attributes: {
        event_name: "rafy",
        event_date: 3,
      },
    },
    {
      id: 3,
      attributes: {
        event_name: "rafy",
        event_date: 3,
      },
    },
  ]);
  useEffect(() => {
    const fetchevents = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/events?populate=*",
        reqOptions
      );
      const response = await request.json();
      setevents(response.data);
     
      return response;
    };

    try {
      const eventsss = fetchevents();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>IUT CAD Society</p>
        <h2 className={styles.sectionHeadText}>Upcoming Events.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row  ">
        <div className="mb-10 items-center content-center">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Join our upcoming event, a captivating fusion of technology and
            creativity. Discover the latest trends, gain insights from industry
            experts, and immerse yourself in hands-on workshops. Unleash your
            potential and forge new connections in the ever-evolving world of
            computing.Discover the latest trends, gain insights from industry
            experts, and immerse yourself in hands-on workshops. Unleash your
            potential and forge new connections in the ever-evolving world of
            computing.
          </motion.p>
        </div>
        <div className="w-full">
          <VerticalTimeline>
            {events.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
