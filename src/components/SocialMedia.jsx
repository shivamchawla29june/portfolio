import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/shivamchawla296/">
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/profile.php?id=100001280345758">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/shivamchawla2906">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/shivamchawla29">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
