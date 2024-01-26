import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";
import { useRef } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutToggle, setAboutToggle] = useState(false);
  const [eventToggle, setEventToggle] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredEvent, setIsHoveredEvent] = useState(false);
   const aboutLinks = [
    {
      id: "Committee",
      title: "Committee",
    },
    {
      id: "Contact",
      title: "Contact",
    },
    {
      id: "About",
      title: "About",
    },
   
   
  ]
   const eventLinks = [
    {
      id: "Activities",
      title: "Activities",
    },
    {
      id: "LeaderBoard",
      title: "Leaderboard",
    },
    {
      id: "RegisterGlobal",
      title: "Registration(Inter IUT)",
    },
    {
      id: "RegisterIUT",
      title: "Registration(Intra IUT)",
    },
   
   
  ]
  const allLinks = [...navLinks, ...aboutLinks, ...eventLinks]
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutref = useRef(null);
  const eventref = useRef(null);
 // Add an event listener when the component mounts
 useEffect(() => {
  function handleDocumentClick(event) {
    // Check if the click target is not within the div
    if (aboutref.current && !aboutref.current.contains(event.target)) {
      setAboutToggle(false);
    }
  }

  // Attach the event listener to the document
  document.addEventListener('mousedown', handleDocumentClick);

  // Clean up the event listener when the component unmounts
  return () => {
    document.removeEventListener('mousedown', handleDocumentClick);
  };
}, [aboutToggle]);


 // Add an event listener when the component mounts
 useEffect(() => {

  function handleDocumentClick(event) {
    // Check if the click target is not within the div
    if (eventref.current && !eventref.current.contains(event.target)) {
      setEventToggle(false);
    }
  }

  // Attach the event listener to the document
  document.addEventListener('mousedown', handleDocumentClick);

  // Clean up the event listener when the component unmounts
  return () => {
    document.removeEventListener('mousedown', handleDocumentClick);
  };
}, [eventToggle]);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        
          <p className="text-white text-[24px] font-bold cursor-pointer flex ">
          IUT CAD Society &nbsp;
            <span className="sm:block hidden"> </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <li ref={aboutref}
            className={`${
              active === "About" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("About");
              setAboutToggle(!aboutToggle);
            }}
          >
            <p  onMouseEnter={() => setIsHoveredAbout(true)}
      onMouseLeave={() => setIsHoveredAbout(false)}>About  {isHoveredAbout && (
        <span className="inline">&#8595;</span>
      )}</p>
            <div 
            className={`${
              !aboutToggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 xl:right-[14vw] mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {aboutLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          </li>
          <li ref={eventref}
            className={`${
              active === "Event" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("Event");
              setEventToggle(!eventToggle);
            }}
          >
             <p   onMouseEnter={() => setIsHoveredEvent(true)}
      onMouseLeave={() => setIsHoveredEvent(false)}>Event  {isHoveredEvent && (
        <span className="inline">&#8595;</span>
      )}</p>
            <div 
            className={`${
              !eventToggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 xl:right-[12vw] mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {eventLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setEventToggle(!eventToggle);
                    
                  }}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {allLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
