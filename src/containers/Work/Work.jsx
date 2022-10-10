import React, { useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  useEffect(() => {
    const query = '*[_type=="works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}]);
      if(item === "All"){
        setFilterWork(works);
      }else{
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500)
  };
  // const [wid,setWid] = useState(0);
  // const carousel1 = useRef();
  // useEffect(() => {
  //   console.log(carousel1.current.offsetWidth, carousel1.current.scrollWidth, carousel1)
  //   setWid(carousel1.current.scrollWidth + carousel1.current.offsetLeft)
  // },[])
  let work =     <motion.div

  animate={animateCard}
  transition={{ duration: 0.5, delayChildren: 0.5 }}
  className="app__work-portfolio"
  style={{flexWrap: "wrap", overflow: "auto"}}
>
  {filterWork.map((work, index) => (
    <div className="app__work-item app__flex" key={index}>
      <div className="app__work-img app__flex">
        <img src={urlFor(work.imgUrl)} alt={work.name} />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <a href={work.projectLink} target="_blank" rel="noreferer">
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              whileInView={{ scale: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferer">
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              whileInView={{ scale: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__flex"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="app__work-content app__flex">
        <h4 className="bold-text" style={{fontSize: "1rem"}}>{work.title}</h4>
        <p className="p-text" style={{ marginTop: 10, fontSize: "0.8rem" }}>
          {work.description}
        </p>

        <div className="app__work-tag app__flex">
          <p className="p-text" style={{fontSize: "0.8rem"}}>{work.tags[0]}</p>
        </div>
      </div>
    </div>
  ))}
</motion.div>
  if(filterWork.length >5){
    work =       <motion.div className="app__work-carousel">
    <motion.div
      drag="x"
      dragConstraints={{right:1300, left:-1300}}
      dragElastic={0.4}
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      {filterWork.map((work, index) => (
        <div className="app__work-item app__flex" key={index}>
          <div className="app__work-img app__flex">
            <img src={urlFor(work.imgUrl)} alt={work.name} />
            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" rel="noreferer">
                <motion.div
                  whileHover={{ scale: [1, 0.9] }}
                  whileInView={{ scale: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel="noreferer">
                <motion.div
                  whileHover={{ scale: [1, 0.9] }}
                  whileInView={{ scale: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex" style={{overflow:"visible"}}>
            <h4 className="bold-text" style={{fontSize: "1rem"}}>{work.title}</h4>
            <p className="p-text" style={{ marginTop: 10, fontSize:"0.8rem"}}>
              {work.description}
            </p>

            <div className="app__work-tag app__flex">
              <p className="p-text" style={{fontSize: "0.8rem"}}>{work.tags[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
    </motion.div>
  }

  return (
    <>
      <h2 className="head-text">Here are some of my <span>Projects</span>.{" "}
      </h2>
      <div className="app__work-filter">
        {["AI","React","JavaScript", "PHP","Python", "Embedded","All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            style={{fontSize: "0.8rem"}}
            className=
            {`app__work-filter-item app_flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}>{item}
          </div>
        ))}
      </div>
      {work}

      
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
