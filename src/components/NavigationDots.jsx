import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faBriefcase, faBuildingColumns, faUsersViewfinder, faInfo, faBrain, faPen, faListCheck} from "@fortawesome/free-solid-svg-icons";

import { AiFillHome } from 'react-icons/ai';


const NavigationDots = ({ active }) => {
  return (
    <nav className="app__navigation">
      <span title="Home">
        <NavLink exact="true" className="app__social-nav" to="/" style={active === "home"? {backgroundColor: "#D3D3D3"}:{}}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink></span>
        <span title="About">
        <NavLink className="app__social-nav" to="/about" style={active === "about"? {backgroundColor: "#D3D3D3"}:{}}>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink></span>
        <span title="Projects"><NavLink className="app__social-nav" to="/work" style={active === "work"? {backgroundColor: "#D3D3D3"}:{}}>
        <FontAwesomeIcon icon={faListCheck} color="#4d4d4e" />
        </NavLink>
        </span>
        <span title="Skills and Experience">
        <NavLink className="app__social-nav" to="/skills" style={active === "skills"? {backgroundColor: "#D3D3D3"}:{}}>
       <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink></span>
        <span title="Education">
        <NavLink className="app__social-nav" to="/study" style={active === "study"? {backgroundColor: "#D3D3D3"}:{}}>
        <FontAwesomeIcon icon={faBuildingColumns} color="#4d4d4e"/>
        </NavLink>
        </span>
        <span title="Testimonials">
        <NavLink className="app__social-nav" to="/testimonials" style={active === "testimonials"? {backgroundColor: "#D3D3D3"}:{}}>
        <FontAwesomeIcon icon={faUsersViewfinder} color="#4d4d4e"/>
        </NavLink>
        </span>
        <span title="Contact">
        <NavLink
          to="/contact"
          className="app__social-nav"
          style={active === "contact"? {backgroundColor: "#D3D3D3"}:{}}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          />
        </NavLink></span>
    </nav>
  );
};

export default NavigationDots;
