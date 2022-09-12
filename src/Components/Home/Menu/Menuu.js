import React from 'react'
import "./Menuu.css"
import { useEffect, useState } from 'react'
import Resume from '../../Resume/Resume'
import { ArrowBack } from "@mui/icons-material";
import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'

import About from '../../About/About';
 function Menuu() {
  const navigate=useNavigate();
   const [chkval, setChkval]=useState(false)
  const[ buttonn,setShowTopBtn]=useState(false)
  const [check,setCheck]=useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
    });
  },[]);
  // const handleresume=()=>{
  //   // window.scrollTo({
  //   //   top:1680,
  //   //   behavior:'smooth',
 
  //   // });
  //   navigate("/Resume")
  // };
    // const handleabout=()=>{
    //   // window.scrollTo({
    //   //   top:800,
    //   //   behavior:'smooth',
      
    //   // });
    // // navigate("/About")
    // }
      // const handlehome=()=>{
      // //   window.scrollTo({
      // //     top:0,
      // //     behavior:'smooth',
       
      // //   });
      // navigate("/")
      // setChkval(true)
      // }
        const handlecontact=()=>{
          // window.scrollTo({
          //   top:2700,
          //   // bottom:0,
          //   behavior:'smooth',
          
          // });
          
         
          navigate("/Contact")
           
  };
  const movetotop=()=>{
    window.scrollTo({
      top:0,
      // bottom:0,
      behavior:'smooth',
     
    });
};
  return (
    <div className='main-nav'>
        <div className='portfolio-logo'> Portfolio</div>
        <div >
       
          <ul className='menubar'>
           
            <li>
            <Link to="/"   className='linked'>Home</Link>
            </li>
            <li>
            <Link to="/About"   className='linked'>About</Link>
            </li>
            <li>
            <Link to="/Contact" onClick={handlecontact} className='linked'>Contact</Link>
            </li>
            <li>
            <Link to="/Resume"className='linked'>Resume</Link>
            </li>
          
            </ul>
        </div>
        {buttonn &&(<KeyboardDoubleArrowUp onClick={movetotop} style={{position:'fixed', bottom:15, right:25,cursor:'pointer',
      backgroundColor:'darkorange', color:'white'}}/>) }
    </div>
  )
}

export default Menuu