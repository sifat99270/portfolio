"use client";

import { useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import Logo from "../logo/logo";

const Navbar = () => {
  const navRef = useRef();

  const imgRef = useRef();
  useEffect(() => { }, [navRef]);

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
          <a href="#home" className={`${classes.active}`}>
            <li >
              HOME
            </li>
          </a>
          <a href="#about">
            <li className={classes.active}>
              ABOUT
            </li>
          </a>
          <a href="#service">
            <li className={classes.active}>
              SERVICES
            </li>
          </a>
          <a href="#skill">
            <li className={classes.active}>
              SKILLS
            </li>
          </a>
          <a href="#contact">
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
