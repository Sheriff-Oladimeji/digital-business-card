import React from "react";
import avatar from "../images/Rectangle 90.png";
import mail from "../images/Mail.png";
import link from "../images/linkedin.png";
import "../App.css";
export default function Info() {
  return (
    <main>
      <img src={avatar} alt="avatar" />
     <div className="info">
     <h2>Laura Smith</h2>
      <p>Frontend Developer</p>
      <small>larausmith.website</small>
      <div className="links">
        <a href="heelo" className="link-one"><img src={mail} alt=""></img> Email</a>
        <a href="heelo" className="link-two"><img src={link} alt=""></img> linkedIn</a>
      </div>
     </div>
    </main> 
  );
}
