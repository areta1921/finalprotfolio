import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/abraham-reta-b39a921a4/" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/areta1921" target="__blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/abrahamgetahun2" target="__blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
