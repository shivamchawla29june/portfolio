import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariance = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span><img src={images.logo} alt="profile_bg" style={{height: "150px", width: "120px"}}/></span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text" style={{ color: "#4466ff", textAlign: "center" }} >Hey, there! Welcome to</p>
              <h1 className="head-text" style={{ color: "#4466ff" }}>Shivam's</h1>
              <p className="p-text" style={{ color: "#4466ff", textAlign: "center" }} >Portfolio</p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  "Full Stack Developer",
                  "MS CS @ UC San Diego",
                  "Former Intern @ Meta ",
                  "Former Developer @ Western Digital"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
                typeSpeed: 50,
              }}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeOut", delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariance}
        whileInView={scaleVariance.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.meta, images.react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle=${index}`}>
            <img src={circle} alt="circleProblem" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home", "app__primarybg");
