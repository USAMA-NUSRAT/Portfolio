import React from "react";
import "./Resume.css";
import { useState, useEffect } from "react";
import { School, Interests, Computer, TaskAlt } from "@mui/icons-material";
import { ArrowBack } from "@mui/icons-material";
function Resutl() {
  return <div>{alert(`hello usama`)}</div>;
}
function Resume() {
  const [checkk, setCheckk] = useState(true);
  const [edu, setedu] = useState(true);
  const [skil, setskil] = useState(false);
  const [proj, setproj] = useState(false);
  const [intrst, setintrst] = useState(false);
  // useEffect(()=>{
  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  //     if (window.scrollY > 880) {
  //       setCheckk(true);
  //     } else {
  //       setCheckk(false);
  //     }
  // });
  // });
  return (
    <>
      {checkk && (
        <div className="main-resume">
          <div className="resume-heading">Resume</div>
          <div className="gettouch-heading">Formal details</div>
          <div className="tag-line"></div>
          <div className="iconss">
            <div className="icontext">
              <div className="icons-div">
                <School
                  onClick={() => {
                    setedu(true);
                    setskil(false);
                    setproj(false);
                    setintrst(false);
                  }}
                />{" "}
                {/*education */}
                {/* {edu && <div> helo usama </div>} */}
                <h6 className={edu ? "acttive" : "hh6"}>Education</h6>
              </div>

              <div className="icons-div">
                <Computer
                  onClick={() => {
                    setedu(false);
                    setskil(true);
                    setproj(false);
                    setintrst(false);
                  }}
                />
                {/* {proj && <div> helo usama</div>} */}
                <h6 className={skil ? "acttive" : "hh6"}>Skills</h6>
              </div>

              <div className="icons-div">
                <TaskAlt
                  onClick={() => {
                    setedu(false);
                    setskil(false);
                    setproj(true);
                    setintrst(false);
                  }}
                />
                {/* {proj && <div> helo usama</div>} */}
                <h6 className={proj ? "acttive" : "hh6"}>Projects</h6>
              </div>
              <div className="icons-div">
                <Interests
                  onClick={() => {
                    setedu(false);
                    setskil(false);
                    setproj(false);
                    setintrst(true);
                  }}
                />
                {/* {intrst && <div> helo usama</div>} */}
                <h6 className={intrst ? "acttive" : "hh6"}>
                  Interests
                  {}
                </h6>
              </div>
            </div>
            <div className="line"> </div>
            <div className="educate-parent">
              {edu && (
                <div className="educate">
                  <div className="education">
                    <div className="highlight"> </div>
                    <div className="deg-inst">
                      <h4>Bs Software Engineering</h4>
                      <p>PMAS Arid University Rawalpindi</p>
                    </div>
                    <div className="duration">
                      <button className="btn highlighted-btn bbttnn">
                        2019-present
                      </button>
                    </div>
                  </div>
                  <div className="education">
                    <div className="highlight"> </div>
                    <div className="deg-inst">
                      <h4>Fsc Pre-Engnieering</h4>
                      <p>Cadet College Chakwal</p>
                    </div>
                    <div className="duration">
                      <button className="btn highlighted-btn bbttnn">
                        2016-2018
                      </button>
                    </div>
                  </div>
                  <div className="education">
                    <div className="highlight"> </div>
                    <div className="deg-inst">
                      <h4>Matric</h4>
                      <p>Blooming Scholar Academy</p>
                    </div>
                    <div className="duration">
                      <button className="btn highlighted-btn bbttnn">
                        2019-present
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {skil && (
                <div className="educate ">
                  <div className="dividee">
                    <div className="skill-sec">
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>Htm5</h6>
                          <div className="lower">
                            <div className=" uper uper-html"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>CSS3</h6>
                          <div className="lower">
                            <div className=" uper uper-css"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>Bootstrap</h6>
                          <div className="lower">
                            <div className=" uper uper-boot"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>Javascript</h6>
                          <div className="lower">
                            <div className=" uper uper-js"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>Jquery</h6>
                          <div className="lower">
                            <div className="uper uper-jq"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>React js</h6>
                          <div className="lower">
                            <div className=" uper uper-react"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skill-sec">
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>Node js</h6>
                          <div className="lower">
                            <div className=" uper uper-node"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>SQL</h6>
                          <div className="lower">
                            <div className=" uper uper-node"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>MongoDb</h6>
                          <div className="lower">
                            <div className=" uper uper-node"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>C++</h6>
                          <div className="lower">
                            <div className=" uper uper-node"></div>
                          </div>
                        </div>
                      </div>
                      <div className="educationn">
                        <div className="size"> </div>
                        <div className="skill-measure">
                          <h6>Java</h6>
                          <div className="lower">
                            <div className=" uper uper-node"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {proj && (
                <div className="educate">
                  <div className="educationnn">
                    <div className="size"> </div>
                    <div className="deg-inst">
                      <h6>Medical Store Managment</h6>
                      <p>
                        I make this project in first semester. I use C++ in this
                        project. Customer will select medicine and add quantity
                        then this system generate bill.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="educationnn">
                    <div className="size"> </div>
                    <div className="deg-inst">
                      <h6> Sport Shopping Website</h6>
                      <p>In this project I use HTML , CSS in this project. </p>
                    </div>
                  </div>
                  <div className="educationnn">
                    <div className="size"> </div>
                    <div className="deg-inst">
                      <h6>Education Website</h6>
                      <p>
                        In this project I use HTML, CSS, Media
                        Queries,Javascript ,in this project. This project tell
                        us information about institution.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="educationnn">
                    <div className="size"> </div>
                    <div className="deg-inst">
                      <h6>Weather app</h6>
                      <p>
                        In this Project I fetch weather api. It tell us the
                        tempreature, wind speed etc of selected city.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="educationnn">
                    <div className="size"> </div>
                    <div className="deg-inst">
                      <h6>Hotel Managment System</h6>
                      <p>
                        I Build this project in React js. Customer can select
                        room and enter duration for reserve room{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {intrst && (
                <div className="educate">
                  <div className="education">
                    <div className="highlight"> </div>
                    <div className="deg-inst">
                      <h4>Cricket</h4>
                      <p>
                        In the modern days every one's life has a busy time
                        schedule and one has to take time from these activities to devote sometimes for sports, which is very difficult.
                        After facing all these difficulties I still take pride in fulfilling my desire to play cricket because I love cricket more than anything else.
                      </p>
                    </div>
                  </div>
                  <div className="educationn">
                    <div className="highlight"> </div>
                    <div className="deg-inst">
                      <h4>Coding</h4>
                      <p>
                      I love to code because if I can think it, I can make it a reality.In programming if you can consistently create a logic that interacts with the other parts of the computer and other applications you can make it happen. All you need to do after you thought it up is actually write it and presto a new thing is created into the world. That really feels like being a wizard.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Resume;
