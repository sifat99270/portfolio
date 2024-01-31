"use client"
import React, { useRef } from "react";
import classes from "./About.module.css";
const About = () => {
    const readRef = useRef();
    function readref() {
        // console.log(readRef.current.classList.toggle)
        //readRef.current.calssList.toggle(`${classes.height}`);
        readRef.current.classList.toggle(`${classes.height}`)
    }
    return (
        <section className={classes.about} id="about">
            <div className={classes.aboutLeft}>
                <span className={classes.leftRight} style={{ "--i": 1 }}></span>
                <div className={classes.circle}></div>
                <img className={classes.img} src="/20230317_170650-removebg.png" />
            </div>
            <div className={classes.aboutRight}>
                <span className={classes.leftRight} style={{ "--i": 2 }}></span>
                <p className={classes.h1}>
                    About<span className="color">Me</span>
                </p>
                <p className={classes.h5}>Frontend And Backend Devloper</p>
                <p className={classes.h6} ref={readRef}>
                    I specialize in using HTML, CSS, and JavaScript to create responsive
                    and visually appealing user interfaces. I&apos;m proficient in modern
                    frontend Library  like React.js, which I use to
                    build dynamic and interactive web applications. I have experience with
                    responsive design techniques, ensuring that websites work seamlessly
                    across various devices and screen sizes. I pay attention to user
                    experience (UX) principles, striving to create intuitive and
                    easy-to-navigate interfaces for optimal user engagement.
                    I&apos;m skilled in server-side programming languages like Node.js, Python (with frameworks like Django and Flask), and PHP (with frameworks like Laravel).
                    I design and develop robust APIs (Application Programming Interfaces) that enable communication between the frontend and backend of web applications.
                    I work with databases such as MySQL, MongoDB, and PostgreSQL to store and retrieve data efficiently.
                    I have experience with authentication and authorization systems to ensure secure access to web applications.
                    I optimize backend code for performance and scalability, ensuring that web applications can handle a high volume of traffic and data processing efficiently.
                </p>
                <button onClick={readref} className={classes.read}>Read more</button>
            </div>
        </section>
    );
};

export default About;
