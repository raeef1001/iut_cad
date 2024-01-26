import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MyComponentContainer = styled.div`


.options {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);
    height: 400px;
    margin-top: 20px;
  }
   .option {
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    
   
    background-size: auto 120%;
    background-position: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
   .option:nth-child(1) {
    --defaultBackground:#ED5565;
  }
   .option:nth-child(2) {
    --defaultBackground:#FC6E51;
  }
   .option:nth-child(3) {
    --defaultBackground:#FFCE54;
  }
   .option:nth-child(4) {
    --defaultBackground:#2ECC71;
  }
   .option:nth-child(5) {
    --defaultBackground:#5D9CEC;
  }
   .option:nth-child(6) {
    --defaultBackground:#AC92EC;
  }
   .option.active {
    flex-grow: 10000;
    transform: scale(1);
    max-width: 600px;
    margin: 0px;
    border-radius: 40px;
    background-size: auto 100%;
    /*&:active {
       transform:scale(0.9);
    }*/
  }
   .option.active .shadow {
    box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
  }
   .option.active .label {
    bottom: 20px;
    left: 20px;
  }
   .option.active .label .info > div {
    left: 0px;
    opacity: 1;
  }
   .option:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
  }
   .option:not(.active) .shadow {
    bottom: -40px;
    box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
  }
   .option:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }
   .option:not(.active) .label .info > div {
    left: 20px;
    opacity: 0;
  }
    .shadow {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 120px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
   .label {
    display: flex;
    position: absolute;
    right: 0px;
    height: 40px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
   .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    color: var(--defaultBackground);
  }
    .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    color: white;
    white-space: pre;
  }
   .info > div {
    position: relative;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
  }
  .main {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .sub {
    transition-delay: 0.1s;
  }
  
@media screen and (max-width: 718px) {
    .options {
     min-width: 520px;
   }
    .options .option:nth-child(5) {
     display: none;
   }
 }
 @media screen and (max-width: 638px) {
    .options {
     min-width: 440px;
   }
    .options .option:nth-child(4) {
     display: none;
   }
 }
 @media screen and (max-width: 558px) {
    .options {
     min-width: 360px;
   }
    .options .option:nth-child(4) {
     display: none;
   }
 }
 @media screen and (max-width: 478px) {
    .options {
     min-width: 300px;
   }
    .options .option:nth-child(4) {
     display: none;
   }
 }
`;
const backgroundImageURL1 = 'https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg';
const backgroundImageURL2 = 'https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg';
const backgroundImageURL3 = 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg';
const backgroundImageURL4 = 'https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg';
const backgroundImageURL5 = 'https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg';

const ImageSlider = (props) => {
    const [activeOption, setActiveOption] = useState(null);
    const iterableData = props.data.slice(1,props.data.length)

    const handleOptionClick = (event) => {
      const clickedOption = event.currentTarget;
  
      // Remove "active" class from all options
      document.querySelectorAll('.option').forEach((option) => {
        option.classList.remove('active');
      });
  
      // Add "active" class to the clicked option
      clickedOption.classList.add('active');
  
      setActiveOption(clickedOption);
    };
   
    return (
       
<MyComponentContainer>
<div className="options">
   <div  className={`option active ${activeOption ? 'active' : ''}`}
      onClick={handleOptionClick}
      style={{backgroundImage: `url(${props.data[0].attributes.image.data.attributes.formats.small.url})`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
            <i className="fas fa-walking"></i>
         </div>
         <div className="info">
         <div className="main">{props.data[0].attributes.name}</div>
         <div className="sub">{props.data[0].attributes.title}</div>
         </div>
      </div>
   </div>

   {
      iterableData.map((member,index) => {
         return(
            <div  className={`option ${activeOption ? 'active' : ''}`}
            onClick={handleOptionClick}
            style={{backgroundImage: `url(${member.attributes.image.data.attributes.formats.small.url})`}}>
            <div className="shadow"></div>
            <div className="label">
               <div className="icon">
                  <i className="fas fa-walking"></i>
               </div>
               <div className="info">
                  <div className="main">{member.attributes.name}</div>
                  <div className="sub">{member.attributes.title}</div>
               </div>
            </div>
         </div>
         )
      })
   }
    <div className='mt-[120px]'>
          <Link to='/committee' className="text-[80px] lg:text-[120px]  cursor-pointer">&gt;</Link>

        </div>
   {/* <div  className={`option ${activeOption ? 'active' : ''}`}
      onClick={handleOptionClick}
      style={{backgroundImage: `url(${backgroundImageURL2})`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
            <i className="fas fa-snowflake"></i>
         </div>
         <div className="info">
            <div className="main">Oretemauw</div>
            <div className="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div  className={`option ${activeOption ? 'active' : ''}`}
      onClick={handleOptionClick}
      style={{backgroundImage: `url(${backgroundImageURL3})`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
            <i className="fas fa-tree"></i>
         </div>
         <div className="info">
            <div className="main">Iteresuselle</div>
            <div className="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div  className={`option ${activeOption ? 'active' : ''}`}
      onClick={handleOptionClick}
      style={{backgroundImage: `url(${backgroundImageURL4})`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
            <i className="fas fa-tint"></i>
         </div>
         <div className="info">
            <div className="main">Idiefe</div>
            <div className="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div  className={`option ${activeOption ? 'active' : ''}`}
      onClick={handleOptionClick}
      style={{backgroundImage: `url(${backgroundImageURL5})`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
            <i className="fas fa-sun"></i>
         </div>
         <div className="info">
            <div className="main">Inatethi</div>
            <div className="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>*/}
 </div> 
    </MyComponentContainer>
    );
};

export default ImageSlider;