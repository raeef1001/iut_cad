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
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/leaderboards?sort=rank",
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