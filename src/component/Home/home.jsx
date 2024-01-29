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
          <p className={classes.h6}>javascript devloper</p>
          <p className={classes.email}>rasifat33@gmail.com</p>
          <p className={classes.number}>+8800009888</p>
          <div className={classes.icon}>
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className={classes.divide}>
          <button className={classes.btn}>Hire Me!</button>
          <button className={classes.cv}>Download CV</button>
        </div>
      </div>
      <div className={classes.all}>
        <div className={classes.text}>
          <p className={classes.h6}>Hi! There i&lsquo;m</p>
          <p className={classes.h1}>
            PROFESSIONAL <span className="color">FRONT-END</span>
            <br /> WEBDEVLOPER
          </p>
          <p className={classes.texth1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            quae eveniet ut, officiis ex tempore quaerat, dolorem iure iste
            ratione illum dolores delectus unde architecto sunt libero aliquam
            accusantium magni optio nisi repellat.
          </p>
        </div>
        <div className={classes.about}>
          <p className={classes.name}>SMN</p>
          <p className={classes.h1}>More spliced</p>
          <p className={classes.aboutText}>ABOUT US</p>
        </div>
        <div className={classes.project}>
          <div className={classes.img}>
            <img src="node.svg" alt="img" />
            <img src="node.svg" alt="img" />
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
            <p className={classes.h6}>CONTACT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homes;
