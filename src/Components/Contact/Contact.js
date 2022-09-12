import React from "react";
import "./Contact.css";
import { useState , useEffect } from "react";
import emailjs from "emailjs-com"
import axios from "axios";
import About from "../About/About";
import Menuu from "../Home/Menu/Menuu";
function Contact() {
    const[values, setValues]=useState({
        namee:" ",
        emaill:"",
        mesg:" "
    })
    const changeHandler=(e)=>{
        setValues({ ...values,[e.target.name]:e.target.value})
    }
    const handler=async(e)=>{
        e.preventDefault();
        console.log({ values });
        const response =  await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ values }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData =  await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setValues({
              emaill: "",
              namee: "",
              mesg: "",
            });
          });

    }
    const [check,setCheck]=useState(true)
  return (
    <>
    {/* {check && ( <About />)} */}
       <div className="main-contact">
      <div className="contact-heading">Contat Me</div>
      <div className="gettouch-heading">Lets keep in touch</div>
      <div className="tag-line"></div>
      <div className="contact-div">
        <div className="contact-form">
          <form onSubmit={handler}>
            <div className="label-value">
              <label htmlFor="name">Name</label>
              <input type="text" name="namee" value={values.namee} onChange={changeHandler}></input>
            </div>
            <div className="label-value">
              <label htmlFor="email">Email</label>
              <input type="email" name="emaill" value={values.emaill} onChange={changeHandler}required></input>
            </div>
            <div className="label-value">
              <label htmlFor="name">Messege</label>
              <textarea cols={20} rows={4} name="mesg" value={values.mesg}onChange={changeHandler} ></textarea>
            </div>
            <div className="btnn">
              <button>Send</button>
              {/* <input type="submit" value ="sendd"></input> */}
            </div>
          </form>
        </div>
        <div className="heading-contact">
          <h1>Get In Touch</h1>
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
      </div>
    </div>
  </>
  );
}

export default Contact;
