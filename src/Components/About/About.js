import React from "react";
import "./About.css";
import { useState,useEffect } from "react";
import pic from "./usamaaa.png";
import { Link, useNavigate } from 'react-router-dom'
function About() {
  const navigate=useNavigate();
  const [checkkk,setCheckkk]=useState(true)
  const handlecontact=()=>{
    window.scrollTo({
      top:2500,
      // bottom:0,
      behavior:'smooth',
      
    });
    navigate("/Contact")
  } 
  // useEffect(()=>{

  //   window.addEventListener('scroll', () => {
  //     console.log(window.scrollY)
  //       if (window.scrollY > 0) {
  //         setCheckkk(true);
  //       } else {
  //         setCheckkk(false);
  //       }
  //   });
  // });
  return (
    <>
    {/* <div>hi</div> */}
    {checkkk && <div className="main-about">
      <div className="about-heading">About Me</div>
      <div className="choose-heading">Why Choose Me?</div>
      <div className="tag-line"></div>
      <div className="pic-text">
        <div className="image-parent"></div>
        <div className="about-text">
          <div>
            <p className="desc-text">
              Full stack web and mobile developer with background knoweldge of
              MERN stack with redux along with a knock of building applications
              with efficiency. Strong professional with a BSC wriiting to be an
              asset for an organization
            </p>
          </div>
          <div className="highlights">
            <h2> Here are few highlights</h2>
            <div className="highlight-andtext">
              <div className="iconss"> </div>
              <p>Full Stack web and mobile development</p>
            </div>
            <div className="highlight-andtext">
              <div className="iconss"> </div>
              <p>Interactive frontend as per design</p>
            </div>
            <div className="highlight-andtext">
              <div className="iconss"> </div>
              <p>Redux for state managment</p>
            </div>
            <div className="highlight-andtext">
              <div className="iconss"> </div>
              <p>Building REST APIS's</p>
            </div>
            <div className="highlight-andtext">
              <div className="iconss"> </div>
              <p>Managing Databases</p>
            </div>
            <div className="highlight-andtext">
              <div className="iconss"> </div>
              <p>MERN Stack</p>
            </div>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn buutn" onClick={handlecontact}>Hire Me</button>
            <a href="Usama-Resume.pdf" download={"usama-resume.pdf"}>
              <button className="btn highlighted-btn buutn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default About;
