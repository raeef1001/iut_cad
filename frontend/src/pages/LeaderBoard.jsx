import React from 'react';
import { useContext } from "react";
import { Context } from '../App';
import ProjectCard from '../components/ProjectCard';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import TableComponent from '../components/TableComponent';
import { useState } from 'react';
import { useEffect } from 'react';


const LeaderBoard = () => {
  const [link,setLink] = useState();
  const [leaderboard, setleaderboard] = useState([
        
    {
        id: 1,
        attributes: {
            name: "rafy",
            rank: 3,
            point: 3.33,
            category: "CTF ",
        }
    },
    {
        id: 2,
        attributes: {
            name: "rafy",
            rank: 2,
            point: 3.33,
            category: "CTF ",
        }
    }, {
        id: 3,
        attributes: {
            name: "rafy",
            rank: 4,
            point: 3.33,
            category: "CTF ",
        }
    },
  ]);
  useEffect(() => {
    const fetchleaderboard = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "https://iut-backend.onrender.com/api/leaderboards?sort=rank",
        reqOptions
      );
      const response = await request.json();
      setleaderboard(response.data);
      return response;
    };

    try{
    const leaderboardss = fetchleaderboard();
  } catch (err) {
    console.log(err);
  }
  }, []);
    

    return (
       <div className='min-h-[90vh] mt-10 '>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>IUTCS</p>
        <h2 className={styles.sectionHeadText}>Leaderboard.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Institute of Information Technology is one of the fastest growing
        Institute at University of Dhaka. The study at this Institute is based
        on three core values: professionalism, excellence and respect. By
        establishing these principles, IIT ensures that graduates from this
        Institute can effectively contribute in the industry.
      </motion.p>
      
       
    <div>
      <TableComponent data={leaderboard}/>
    </div>
    <div>
    <div style={{ border: '1px solid #ccc' }} className='h-[90vh] mt-24'>
      <iframe
        src="https://vjudge.net/contest/589327#rank"
        title="VJudge Contest"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
    </div>
    </div>
       
    );
};

export default SectionWrapper(LeaderBoard, "");