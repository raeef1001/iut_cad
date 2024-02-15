import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../App";
import ProjectCard from "../components/ProjectCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import axios from "axios";
const RegisterGlobal = () => {
  const [
    banner,
    BLOG,
    activities,
    achievements,
    member,
    intraRegistration,
    interRegistration,
  ] = useContext(Context);
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [university, setUniversity] = useState("");
  const [teamleader, setTeamLeader] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    // Initialize form fields
    email: "",
    team_name: "",
    university_name: "",
    team_size: "",
    team_lead_name: "",
    phone_number: "",
    // Add more fields as needed
  });
  const [submitForm, setsubmitForm] = useState({
    data : formData
  });
  // toastify section

  const notify = () =>
    toast.success("registration complete. Check your email", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setsubmitForm({data: formData})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1337/api/registrations",
        submitForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      notify();
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error, show an error message, etc.
    } // 👈️ prevent page refresh

  };

  return (
    <div className="min-h-[90vh] mt-10 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {interRegistration.data[0].attributes.competition_name}
        </p>
        <h2 className={styles.sectionHeadText}>Registration.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {interRegistration.data[0].attributes.description}
      </motion.p>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="mb-[5vh]  ">
          <h5 className="text-2xl my-2 ">
            Competition Name :{" "}
            {interRegistration.data[0].attributes.competition_name}
          </h5>

          <h5 className="text-2xl my-2">
            Competition Date :{" "}
            {interRegistration.data[0].attributes.competitionDate}
          </h5>

          <h5 className="text-2xl my-2">
            Registration Deadline :{" "}
            {interRegistration.data[0].attributes.registrationDeadline}
          </h5>

          <h5 className="text-2xl my-2">
            Category : {interRegistration.data[0].attributes.category}
          </h5>
        </div>
      </motion.div>

      <div className="m-auto w-[60vh] pt-[10vh] ">
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              name="team_lead_name"
              id="team_lead_name"
              className="block py-2.5 px-0 w-[70vw] lg:w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="team_lead_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Team Leader Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-[70vw] lg:w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          {/* <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div> */}
          {/* <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div> */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="team_name"
                id="team_name"
                className="block py-2.5 px-0 w-[70vw] lg:w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="team_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Team name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="university_name"
                id="university_name"
                className="block py-2.5 px-0 w-[70vw] lg:w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="university_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                University Name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="tel"
                name="phone_number"
                id="phone_number"
                className="block py-2.5 px-0 w-[70vw] lg:w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="phone_number"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number{" "}
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="number"
                name="team_size"
                id="team_size"
                className="block py-2.5 px-0 w-[70vw] lg:w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="team_size"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                team Size
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="   font-medium rounded-lg text-sm w-[70vw] lg:w-full sm:w-auto px-5 py-2.5 text-center className='bg-opacity-1 bg-[#640D14]  text-white  shadow-md shadow-primary border-2"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default SectionWrapper(RegisterGlobal, "");
