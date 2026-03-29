import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useRef, useState } from "react";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import Gmail from "../../assets/images/socials/Gmail.png";
import Github from "../../assets/images/socials/git.png";


import "./Navbar.scss";

const Menu = () => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contacts">Contacts</a>
      </li>
    </>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNav = useRef("");

  useEffect(() => {
    /**
     * Perform if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (mobileNav.current && !mobileNav.current.contains(event.target)) {
        setShowMobileNav(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-container_logo">
          <p>Manoj</p>
        </div>
        <ul className="app__navbar-container_navlinks">
          <Menu />
        </ul>
        <div className="app__navbar-container_icons">
          {showMobileNav ? (
            <CloseIcon
              className="icon"
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          ) : (
            <MenuIcon
              className="icon"
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          )}
        </div>
        <ul
          ref={mobileNav}
          className={
            showMobileNav
              ? "app__navbar-container_mobilelinks show"
              : "app__navbar-container_mobilelinks"
          }
        >
          <Menu />
          <div className="app__navbar-container_mobilelinks-socials">
        
            <a href="https://www.instagram.com/manoz_bachhav?igsh=MXNycnhoMHJ2cnFj" target="blank">
              <img src={Instagram} alt="Instagram" />
            </a>
            
            <a  href="mailto:manojbachhav281@gmail.com" target="blank">
                <img src={Gmail} alt="Gmail" />
            </a>
            <a href="https://github.com/ManozBachhav" target="blank">
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-bachhav-28a213273/"
              target="blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
