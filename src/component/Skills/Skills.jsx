import classes from "./Skills.module.css"

const Skills = () => {
    return (
        <section className={classes.skill} id="skill">
            <p className={classes.h1}>EXPERIENCE</p>
            <div className={classes.react}>
                <p className={classes.text}>React JS</p>
                <p className={classes.percent}>90%</p>
                <span ></span>
            </div>
            <div className={classes.react}>
                <p className={classes.text}>Tailwind CSS</p>
                <p className={classes.percent}>95%</p>
                <span ></span>
            </div>
            <div className={classes.next}>
                <p className={classes.text}>Next JS</p>
                <p className={classes.percent}>85%</p>
                <span></span>
            </div>
            <div className={classes.node}>
                <p className={classes.text}>Node JS</p>
                <p className={classes.percent}>80%</p>
                <span></span>
            </div>
            <div className={classes.java}>
                <p className={classes.text}>JavaScript</p>
                <p className={classes.percent}>92%</p>
                <span></span>
            </div>
        </section>
    );
};

export default Skills;