import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useEffect, useRef, useState } from "react";

import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import Gmail from "../../assets/images/socials/Gmail.png";
import Github from "../../assets/images/socials/git.png";

import { useTheme } from "../../context/ThemeContext";
import "./Navbar.scss";

const Menu = ({ onLinkClick }) => {
  return (
    <>
      <li><a href="#home" onClick={onLinkClick}>Home</a></li>
      <li><a href="#about" onClick={onLinkClick}>About</a></li>
      <li><a href="#skills" onClick={onLinkClick}>Skills</a></li>
      <li><a href="#projects" onClick={onLinkClick}>Projects</a></li>
      <li><a href="#contacts" onClick={onLinkClick}>Contacts</a></li>
    </>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const mobileNav = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNav.current && !mobileNav.current.contains(event.target)) {
        setShowMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">

        
        <div className="app__navbar-container_logo">
          <p>Manoj</p>
        </div>

        
        <ul className="app__navbar-container_navlinks">
          <Menu onLinkClick={() => setShowMobileNav(false)} />
        </ul>

        
        <div className="app__navbar-container_right">

          
          <button
            className="app__navbar-theme-toggle"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark
              ? <LightModeIcon style={{ fontSize: 20 }} />
              : <DarkModeIcon style={{ fontSize: 20 }} />
            }
          </button>

          
          <div className="app__navbar-container_icons">
            {showMobileNav ? (
              <CloseIcon className="icon" onClick={() => setShowMobileNav(false)} />
            ) : (
              <MenuIcon className="icon" onClick={() => setShowMobileNav(true)} />
            )}
          </div>
        </div>

        
        <ul
          ref={mobileNav}
          className={
            showMobileNav
              ? "app__navbar-container_mobilelinks show"
              : "app__navbar-container_mobilelinks"
          }
        >
          <Menu onLinkClick={() => setShowMobileNav(false)} />

          
          <div className="app__navbar-container_mobilelinks-socials">
            <ul>
              <li>
                <a href="https://www.instagram.com/manoz_bachhav" target="_blank" rel="noreferrer">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="mailto:manojbachhav281@gmail.com">
                  <img src={Gmail} alt="Gmail" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ManozBachhav" target="_blank" rel="noreferrer">
                  <img src={Github} alt="Github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manoj-bachhav-28a213273/" target="_blank" rel="noreferrer">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;