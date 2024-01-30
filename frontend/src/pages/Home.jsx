import React, { useContext } from 'react';
import { About, ContactHome, Experience, Feedbacks, Hero, Navbar,  Works, StarsCanvas,Footer,MemberHome} from "../components";
import { Context } from '../App';
import MediaQuery from "react-responsive";
import Achievements from '../components/Achievements';
const Home = () => {
  const titleBLOG = "Blogs";
  const titleAchievement = "Achievements";
  const [banner,BLOG,activities,achievements] = useContext(Context);
  return (
    <div>
       <div className='bg-hero-pattern  bg-cover bg-no-repeat bg-center'>
          {/* <Navbar /> */}
          <Hero />
        </div>
     
        <About />
         
        
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works/>
        <Achievements/>
        <MediaQuery query="(min-width: 1024px)">
        <MemberHome/>
         </MediaQuery>
   
        <Feedbacks />
       
        <div className='relative z-0'>
          <ContactHome />
          <MediaQuery query="(min-width: 1024px)">

          <StarsCanvas />
          </MediaQuery>
        
         
         
          
        </div>
        {/* <Footer/> */}
    </div>
  );
};

export default Home;