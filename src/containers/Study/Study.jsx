import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Study.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Study = () => {
  const [study, setStudy] = useState([]);

  useEffect(() => {
    const query = '*[_type=="study"]';

    client.fetch(query).then((data) => setStudy(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Education Background</span>
      </h2>
      <div className="app__profilesStudy">
        {study.map((stu, index) => (
          <motion.div
            className="app__profileStudy-item"
            key={stu.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={urlFor(stu.imgUrl)} alt={stu.title} />

            <div className="app__profile-item-data">
              <h1 className="bold-text">{stu.title}</h1>
              <p className="p-text" style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Degree:{" "}
                </span>
                {stu.degree}
              </p>
              <p className="p-text" style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Field of Study:{" "}
                </span>
                {stu.specialization}
              </p>
              <p className="p-text" style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Course Work:{" "}
                </span>
                {stu.description}
              </p>
              <p className="p-text" style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  GPA:{" "}
                </span>
                {stu.gpa}
              </p>
              <p className="p-text" style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Year:{" "}
                </span>
                {stu.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Study, "app__study"),
  "study",
  "app__primarybg"
);
