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
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "https://iut-backend.onrender.com/api/events?populate=*",
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
