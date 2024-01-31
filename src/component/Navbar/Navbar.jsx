"use client";

import { useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import Logo from "../logo/logo";
import { usePathname } from "next/navigation";

const Navbar = ({ index }) => {
  const navRef = useRef();

  const imgRef = useRef();
  useEffect(() => { }, [navRef]);
  const path = usePathname();

  function navslide() {
    navRef.current.classList.toggle(`${classes.slide}`);
    if (navRef.current.classList.contains(`${classes.slide}`)) {
      imgRef.current.src = "/xmark.svg";
    } else {
      imgRef.current.src = "/bars.svg";
    }
  }
  return (
    <header className={classes.nav}>
      <span className={classes.leftRight} style={{ "--i": 1 }}></span>
      <div className={classes.navLeft}>
        <span><Logo /></span>
      </div>
      <div className={classes.navRight}>
        <div className={classes.barImg} onClick={navslide}>
          <img src="/bars.svg" ref={imgRef} />
        </div>
        <ul ref={navRef}>
          <div className={classes.style}></div>
          <a href="#home" className={index === 0 ? `${classes.active}` : ''}>
            <li >
              HOME
            </li>
          </a>
          <a href="#about" className={index === 1 ? `${classes.active}` : ''}>
            <li className={classes.active}>
              ABOUT
            </li>
          </a>
          <a href="#service" className={index === 2 ? `${classes.active}` : ''}>
            <li className={classes.active}>
              SERVICES
            </li>
          </a>
          <a href="#skill" className={index === 3 ? `${classes.active}` : ''}>
            <li className={classes.active}>
              SKILLS
            </li>
          </a>
          <a href="#contact" className={index === 4 ? `${classes.active}` : ''}>
            <li className={classes.active}>
              CONTACT
            </li>
          </a>
          <span className={classes.animate}></span>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
