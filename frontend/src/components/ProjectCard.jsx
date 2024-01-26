import React from "react";
import Tilt from "react-tilt";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../utils/motion";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
const ProjectCard = ({ index, id, attributes }) => {
  // console.log(attributes);
  const [isMember, setIsMember] = useState(false);
  useEffect(() => {
    if (attributes.type == "member") {
      setIsMember(true);
    }
  }, [attributes]);

  return (
    <div>
      <MediaQuery query="(min-width: 800px)">
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[400px]"
          >
            {
              !isMember && (<Link
                to={`/SinglePage/${attributes.type + "-" + id}`}
                relative="path"
              >
                <div className="relative w-full h-[230px]">
                  <img
                    src={attributes.image.data.attributes.formats.small.url}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
  
                <div className="mt-5">
                  {isMember && (
                    <p className="mt-2 text-secondary text-[20px]">
                      {attributes.name}
                    </p>
                  )}
                  <p className="mt-2 text-secondary text-[20px]">
                    {attributes.title}
                  </p>
                </div>
              </Link>)
            }
            {
              isMember && (<div
              
              >
                <div className="relative w-full h-[230px]">
                  <img
                    src={attributes.image.data.attributes.formats.small.url}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
  
                <div className="mt-5">
                  {isMember && (
                    <p className="mt-2 text-secondary text-[20px]">
                      {attributes.name}
                    </p>
                  )}
                  <p className="mt-2 text-secondary text-[20px]">
                    {attributes.title}
                  </p>
                </div>
              </div>)
            }

            
          </Tilt>
        </motion.div>
      </MediaQuery>








      <MediaQuery query="(max-width: 800px)">
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[400px]"
          >
            {
              !isMember && (<Link
                to={`/SinglePage/${attributes.type + "-" + id}`}
                relative="path"
              >
                <div className="relative w-full h-[230px]">
                  <img
                    src={attributes.image.data.attributes.formats.small.url}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
  
                <div className="mt-5">
                  {isMember && (
                    <p className="mt-2 text-secondary text-[20px]">
                      {attributes.name}
                    </p>
                  )}
                  <p className="mt-2 text-secondary text-[20px]">
                    {attributes.title}
                  </p>
                </div>
              </Link>)
            }
            {
              isMember && (<div
              
              >
                <div className="relative w-full h-[230px]">
                  <img
                    src={attributes.image.data.attributes.formats.small.url}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
  
                <div className="mt-5">
                  {isMember && (
                    <p className="mt-2 text-secondary text-[20px]">
                      {attributes.name}
                    </p>
                  )}
                  <p className="mt-2 text-secondary text-[20px]">
                    {attributes.title}
                  </p>
                </div>
              </div>)
            }

          </Tilt>
        </div>
      </MediaQuery>
    </div>
  );
};

export default ProjectCard;
