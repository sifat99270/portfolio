import classes from "./home.module.css";
import Image from "next/image";

const Homes = () => {
  return (
    <section className={classes.homeSection} id="home">
      <div className={classes.my}>
        <div className={classes.information}>
          <div className={classes.img}>
            <span className={classes.blur}></span>
            <img
              src="/20230317_170650-removebg.png"
              alt="img"
            />
          </div>
          <p className={classes.h1}>
            <span className={classes.black}>
              HY! I&apos;M<span className={classes.color}> RA SIFAT</span>
            </span>
          </p>
          <p className={classes.h6}>javascript developer</p>
          <p className={classes.email}>rasifat33@gmail.com</p>
          <p className={classes.number}>+8801328173616</p>
          <div className={classes.icon}>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              {" "}
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className={classes.divide}>
          <button className={classes.btn}>Hire Me!</button>
          <a href="#"><button className={classes.cv}>Download CV</button></a>
        </div>
      </div>
      <div className={classes.all}>
        <div className={classes.text}>
          <p className={classes.h6}>Hi! There i&lsquo;m</p>
          <p className={classes.h1}>
            PROFESSIONAL <span className="color">FRONT-END AND BACKEND</span>
            <br /> WEBDEVELOPER
          </p>
          <p className={classes.texth1}>
            I pride myself on my ability to create seamless user experiences while ensuring the functionality and performance of the underlying systems. I excel at translating design concepts into responsive and interactive interfaces, utilizing the latest web technologies and frameworks to deliver intuitive and visually appealing websites and web applications. My attention to detail, problem-solving skills, and dedication to staying updated with industry trends allow me to deliver high-quality solutions that meet both user needs and business objectives. I thrive in collaborative environments, where I can contribute my expertise to create innovative digital experiences that make a meaningful impact.
          </p>
        </div>
        <div className={classes.about}>
          <p className={classes.name}>SMN</p>
          <p className={classes.h1}>More spliced</p>
          <p className={classes.aboutText}>ABOUT US</p>
        </div>
        <div className={classes.project}>
          <div className={classes.img}>
            <img src="/project1.png" alt="img" />
            <img src="/project2.png" alt="img" />
          </div>
          <p className={classes.h6}>Showcase View</p>
          <p className={classes.h1}>PROJECTS</p>
        </div>
        <div className={classes.service}>
          <div className={classes.img}>
            <img src="node.svg" alt="img" />
            <img src="react.svg" alt="img" />
            <img src="next.svg" alt="img" />
          </div>
          <p className={classes.h6}>Specialization</p>
          <p className={classes.h1}>SERVICES OFFER</p>
        </div>
        <div className={classes.blogBox}>
          <div className={classes.blog}>
            <p className={classes.h1}>Visit Our Blog</p>
            <p className={classes.h6}>BLOG</p>
          </div>
          <div className={classes.contact}>
            <p className={classes.h1}>Let&apos;s Work</p>
            <a href="#contact"><p className={classes.h6}>CONTACT</p></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homes;
