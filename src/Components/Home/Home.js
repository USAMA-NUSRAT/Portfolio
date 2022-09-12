import React from "react";
import Typical from "react-typical"
import "./Home.css"
function Home() {
  const handlecontact=()=>{
    window.scrollTo({
      top:2500,
      // bottom:0,
      behavior:'smooth',
     
    });
  }
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100014936949600">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/usama-awan-55690321b">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/malikusama7609">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello I am <span className="highlighted-text">Usama <span className="curssor"></span></span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 style={{textalign:"center"}}>
                {" "}
                <Typical 
                  loop={Infinity}
                  steps={[
                    "Web Designer ",
                    1000,
                    "Mobile app Developer",
                    1000,
                    "Web app developer",
                    1000,
                    "MERN Stack",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                {" "}
                Develop websites and web app and mobile application
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn buu" onClick={handlecontact}>Hire Me</button>
            <a href="Usama-Resume.pdf" download={"usama-resume.pdf"}>
              <button className="btn highlighted-btn buu">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
