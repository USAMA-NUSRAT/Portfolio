import React from 'react'
import "./Footer.css"
import sshape from "./shape-bg.png";
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img 
            src={sshape}
             alt="curve image" 
             />
            {/* <img src='./shape-bg.png' alt='internet unavailable'></img> */}
        </div>
    </div>
  );
}

export default Footer