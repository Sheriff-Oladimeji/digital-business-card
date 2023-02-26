import React from "react";
import twitter from "../images/Twitter Icon.png";
import facebook from "../images/Facebook Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={github} alt="" />
    </footer>
  );
}
