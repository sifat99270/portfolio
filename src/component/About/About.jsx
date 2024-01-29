import React from 'react';
import classes from  "./About.module.css"
const About = () => {
    return (
        <section className={classes.about} id="about">
            <div className={classes.aboutLeft}>
                <span className={classes.leftRight} style={{"--i":1}}></span>
                <div className={classes.circle}></div>
                <img className={classes.img} src="/20230317_170650-removebg.png" />
            </div>
            <div className={classes.aboutRight}>
                <span className={classes.leftRight} style={{"--i":2}}></span>
                <p className={classes.h1}>About<span className="color">Me</span></p>
                <p className={classes.h5}>Frontend And Backend Devloper</p>
                <p className={classes.h6}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint est
                    beatae alias soluta blanditiis quidem necessitatibus nihil earum
                    expedita, adipisci numquam sit aspernatur veniam illum quas
                    consequatur itaque tenetur, et qui vel perferendis labore, dolorum
                    doloremque? Quisquam, aut quis inventore minus et beatae alias
                    corporis quidem expedita nisi odio cupiditate.
                </p>
                <button className={classes.read}>Read more</button>
            </div>
        </section>
    );
};

export default About;