import React from "react";
import avatar from "../images/Rectangle 90.png";
import mail from "../images/Mail.png";
import link from "../images/linkedin.png";
import "../App.css";
export default function Info() {
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <h2>Laura Smith</h2>
      <h4>Frontend Developer</h4>
      <p>larausmith</p>
      <div>
        <a href="heelo"><img src={mail} alt=""></img> Email</a>
        <a href="heelo"><img src={link} alt=""></img> linkedIn</a>
      </div>
    </div> 
  );
}
