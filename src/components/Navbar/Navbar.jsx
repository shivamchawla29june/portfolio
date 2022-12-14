import React, { useState } from "react";
import "./Navbar.scss";
// import {Link} from 'react-scroll';
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { images } from "../../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faBuildingColumns,
  faUsersViewfinder,
  faInfo,
  faBrain,
  faPen,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <NavLink exact="true" to="/" style={{ borderStyle: "none" }}>
        <div className="app__navbar-logo">
          <img src={images.navbarlogo} alt="logo" />
        </div>
      </NavLink>
      <ul className="app__navbar-links">
        <li>
          <NavLink
            exact="true"
            activeClassName="active"
            className="app__flex p-text app__navbar-links-a"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="app__flex p-text app__navbar-links-a"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="app__flex p-text app__navbar-links-a"
            to="/work"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="app__flex p-text app__navbar-links-a"
            to="/skills"
          >
            Skills & Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="app__flex p-text app__navbar-links-a"
            to="/study"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="app__flex p-text app__navbar-links-a"
            to="/testimonials"
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/contact"
            className="app__flex p-text app__navbar-links-a"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
          // whileInView={{ x: [300, 0] }}
          // transition={{ duration: 100000, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              <li>
                <NavLink
                  exact="true"
                  activeClassName="active"
                  className="app__flex p-text"
                  to="/"
                  onClick={() => setToggle(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="app__flex p-text"
                  to="/about"
                  onClick={() => setToggle(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="app__flex p-text"
                  to="/work"
                  onClick={() => setToggle(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="app__flex p-text"
                  to="/skills"
                  onClick={() => setToggle(false)}
                >
                  Skills & Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="app__flex p-text"
                  to="/study"
                  onClick={() => setToggle(false)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="app__flex p-text"
                  to="/testimonials"
                  onClick={() => setToggle(false)}
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/contact"
                  className="app__flex p-text"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );

  // const [click, setClick] = useState(false)
  // const handleClick = () => setClick(!click)

  // const closeMenu = () => setClick(false)

  // return (
  //         <nav className='app__navbar'>
  //             <a href='/' className='app__navbar-logo'>
  //                 <img src={images.logo} alt='logo' />
  //             </a>
  //             <div className='app__navbar-menu' onClick={handleClick}>
  //                 {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
  //                     : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

  //             </div>
  //             <ul className={click ? "app__navbar-links active" : "app__navbar-links"}>
  //                 <li className='app__flex p-text app__navbar-links-a'>
  //                     <Link activeClass="active" to='/' spy={true} smooth={true} offset={50} duration={500}onClick={closeMenu}>Home</Link>
  //                 </li>
  //                 <li className='app__flex p-text'>
  //                     <Link activeClass="active" to='/about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
  //                 </li>
  //                 <li className='app__flex p-text'>
  //                     <Link activeClass="active" to='/skills' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link>
  //                 </li>
  //                 <li className='app__flex p-text'>
  //                     <Link activeClass="active" to='/work' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
  //                 </li>
  //                 <li className='app__flex p-text'>
  //                     <Link activeClass="active" to='/testimonials' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Testimonials</Link>
  //                 </li>
  //                 <li className='app__flex p-text'>
  //                     <Link activeClass="active" to='/contact' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
  //                 </li>
  //             </ul>
  //         </nav>);
};

export default Navbar;
