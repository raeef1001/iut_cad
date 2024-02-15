import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import {
  
  Navbar,
 
  Footer,
} from "./components";
import { createContext, useEffect, useState } from "react";
import image4 from "./assets/loading_images/4.gif"


import Home from "./pages/Home";
import Blog from "./pages/Blog";
// import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Activities from "./pages/Activities";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import LeaderBoard from "./pages/LeaderBoard";
import RegisterGlobal from "./pages/RegisterGlobal";
import RegisterIUT from "./pages/RegisterIUT";
import SinglePage from "./pages/SinglePage";

import {
  blogElements,
  activitiesElements,
  achievementsElements,
} from "./constants/index";
import AboutPage from "./pages/AboutPage";
import Pages from "./pages/pages";
export const Context = createContext();


const App = () => {
  const [BLOG, setBLOG] = useState(blogElements);
  useEffect(() => {
    const fetchBolgs = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/sponsors?populate=*",
        reqOptions
      );
      const response = await request.json();
      setBLOG(response.data);
      
      return response;
    };
    try {
      const blogss = fetchBolgs();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // activities and events
  const [activities, setActivities] = useState(activitiesElements);
  useEffect(() => {
    const fetchActivities = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/activities?populate=*",
        reqOptions
      );
      const response = await request.json();
      setActivities(response.data);
     
      return response;
    };

    try {
      const active = fetchActivities();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // achievements
  const [achievements, setAchievements] = useState(activitiesElements);
  useEffect(() => {
    const fetchAchievements = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/achievements?populate=*",
        reqOptions
      );
      const response = await request.json();
      setAchievements(response.data);
      
      return response;
    };
    try {
      const achievement = fetchAchievements();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // banners
  const [banner, setBanner] = useState({
    data: [
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                 large: {
                    url: "https://cdn.dribbble.com/users/1053052/screenshots/3600670/media/049491d00605f54d441aa47b9b419910.gif",
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  large: {
                    url: "https://cdn.dribbble.com/users/1053052/screenshots/3600670/media/049491d00605f54d441aa47b9b419910.gif",
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  large: {
                    url: "https://cdn.dribbble.com/users/1053052/screenshots/3600670/media/049491d00605f54d441aa47b9b419910.gif",
                  },
                },
              },
            },
          },
        },
      },
    ],
  });



  useEffect(() => {
    const fetchBanner = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/banners?populate=*",
        reqOptions
      );
      const response = await request.json();
      setBanner(response);
     
      return response;
    };
    try {
      const banners = fetchBanner();
      console.log(banners);
      console.log(66666666666666666666666666666666666666666666666666666);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // committee members
  const [member, setmember] = useState({
    data: [
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: {image4},
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: {image4},
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: {image4},
                  },
                },
              },
            },
          },
        },
      },
    ],
  });



  useEffect(() => {
    const fetchmember = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/committees?populate=*",
        reqOptions
      );
      const response = await request.json();
      setmember(response);
      
      return response;
    };
    try {
      const members = fetchmember();
    } catch (err) {
      console.log(err);
    }
  }, []);
  //  intraRegistrations
  const [intraRegistration, setintraRegistration] = useState({
    data: [
      {
        id: 1,
        attributes: {
          competitionName: "IUT_CS WEB_WIZZ",
          date: "2023-09-30T01:00:00.000Z",
          googleFormLink:
            '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOKFaIasAYtzd8UPSZV9JD-QDGCSAA3R2fwORfwbd3TLNFzw/viewform?embedded=true" width="640" height="1908" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
          description:
            '# IUT_CS WEB_WIZZ: Unleash Your Web Development Prowess!\n\nGet ready for an exhilarating web development challenge like no other! 🌐✨\n\n## Event Details\n- **Date:** November 10-12, 2023\n- **Location:** Virtual\n- **Theme:** "Crafting the Future Web"\n\n## About the Event\nIUT_CS WEB_WIZZ is your chance to showcase your web development skills, push your creative boundaries, and create web solutions that shape the future. Whether you\'re a coding wizard, a design maestro, or a UX enthusiast, this event is tailored for you!\n\n## What to Expect\n- **Challenges:** We\'ll present a variety of web development challenges that align with our "Crafting the Future Web" theme. Choose the one that ignites your passion!\n- **Teamwork:** Form teams of up to 3 members or participate solo. Collaborate with fellow developers and designers to bring your vision to life.\n- **Guidance:** Expert mentors will be available to provide guidance and help you overcome any hurdles.\n- **Prizes:** Win exciting prizes, including cash rewards, web development tools, and recognition for your innovative solutions.\n- **Networking:** Connect with industry experts and fellow participants to expand your professional network.\n- **Learning:** Attend workshops and tech talks to enhance your web development skills.\n\n## How to Participate\n1. Register for the event [here](https://iutcs-webwizz.com/register).\n2. Join our Discord community for updates, team formation, and discussions.\n3. Keep an eye out for challenge announcements and detailed rules.\n\n## Schedule\n- **Day 1 (Nov 10):** Grand opening, challenge reveal, and team formation.\n- **Day 2 (Nov 11):** Hacking, mentorship sessions, and skill-building workshops.\n- **Day 3 (Nov 12):** Project submission, judging, and the dazzling closing ceremony.\n\n## Judging Criteria\n- **Innovation:** How creatively and uniquely have you approached the challenges?\n- **Functionality:** Does your web solution work seamlessly and efficiently?\n- **Design:** How visually appealing and user-friendly is your web application?\n- **Presentation:** Can you effectively present and explain your project?\n\n## Prerequisites\n- Bring your own development environment, tools, and creativity.\n- A passion for web development and a hunger for innovation!\n\nJoin us for an exciting weekend of coding, collaboration, and creativity. Let\'s craft the future of the web together!\n\nSee you at IUT_CS WEB_WIZZ! 👩‍💻👨‍💻',
          registrationDeadline: "2023-09-26",
          Catagory: "Quiz",
        },
      },
    ],
  });



  // useEffect(() => {
  //   const fetchintraRegistration = async () => {
  //     const reqOptions = {
  //       Headers: {
  //         Authorization:
  //           "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
  //       },
  //     };
  //     const request = await fetch(
  //       "http://localhost/api/intra-university-registrations?populate=*",
  //       reqOptions
  //     );
  //     const response = await request.json();
  //     setintraRegistration(response);
     
  //     return response;
  //   };
  //   try {
  //     const intraRegistrations = fetchintraRegistration();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // inter iut registration

  const [interRegistration, setinterRegistration] = useState({
    data: [
      {
        id: 1,
        attributes: {
          competitionDate: "2023-09-30T01:00:00.000Z",
          registrationDeadline: "2023-09-25",
          description:
            'ing challengebout t👩‍💻👨‍💻',
          category: "Hackathon",
        },
      },
    ],
  });


  // useEffect(() => {
  //   const fetchinterRegistration = async () => {
  //     const reqOptions = {
  //       Headers: {
  //         Authorization:
  //           "955608b4a78f18b4bd2f290175c821032bac37829aab52d886508b8db543fb3cc5e22a6cf1482bd39bb9f8baaf30085d505bc893f9b57bece258a920e28bb92867f7f5829ec1c2681eabe0df1d95a164dd3d821a9cc8e36e9e201c7d56466522a4a9c0e9013107c189ccea49c5c9f830e19a208a6d504d8be11c4837dc81383d",
  //       },
  //     };
  //     const request = await fetch(
  //       "http://localhost/api/inter-university-registrations?populate=*",
  //       reqOptions
  //     );
  //     const response = await request.json();
  //     setinterRegistration(response);
   
  //     return response;
  //   };
  //   try {
  //     const interRegistrations = fetchinterRegistration();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const [pagesValue, setPagesValue] = useState({})
  return (
    <Context.Provider
      value={[
        banner,
        BLOG,
        activities,
        achievements,
        member,
        intraRegistration,
        interRegistration,pagesValue,setPagesValue
      ]}
    >
      <BrowserRouter>
        <div className="relative z-0  bg-opacity-1 bg-[#0e0e0e]" >
  
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<AboutPage />} />
            
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/Activities" element={<Activities />} />

            <Route path="/Committee" element={<Committee />} />

            <Route path="/Contact" element={<Contact />} />
            <Route path="/LeaderBoard" element={<LeaderBoard />} />
            <Route path="/RegisterGlobal" element={<RegisterGlobal />} />
            <Route path="/RegisterIUT" element={<RegisterIUT />} />
            <Route path="/SinglePage/:id" element={<SinglePage />} />
            <Route path="/Pages" element={<Pages/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
