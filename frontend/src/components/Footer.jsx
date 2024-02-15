import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/github.png";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
     <div className="father">
     <div className="left-side">
    
        <h1>IUT CAD Society</h1>
        </div>
        <div id="social">
        <a href="https://bd.linkedin.com/company/iut-cad-society" target={"_blank"}><img id="linkdin" src={navIcon1} alt="linkdin" /></a>
              <a href="https://www.facebook.com/iutcadsociety/" target={"_blank"}><img id="facebook" src={navIcon2} alt="facebook" /></a>
              <a href="https://www.facebook.com/iutcadsociety/" target={"_blank"}><img id="github" src={navIcon3} alt="github" /></a>
        </div>
     </div>
             
        

     
           
         
             
             <div id="footer">
           
            <p id="copyright">Copyright 2022. All Rights Reserved <br /> <span className="ml-[20px] ">developed by <a className="text-blue-400" href="https://www.facebook.com/profile.php?id=100089364236911" target="_blank">rafee</a> and <a className="text-blue-400" href="https://www.facebook.com/mostofawasif.mishal" target="_blank">wasif</a></span></p>
           
             </div>
           
           
             
           
          
    </div>
     
  )
}
export default Footer;