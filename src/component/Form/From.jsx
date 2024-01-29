import  classes from "./Form.module.css"

const From = () => {
    return (
        <section className={classes.contact} id="contact">
            <p className={classes.text}>Contact<span className="style">Me</span></p>
            <form className={classes.form}>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{"--i":1}}></span>
                    <input type="text" required />
                    <span className={classes.animate}>name</span>
                </div>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{"--i":2}}></span>
                    <input type="email" required />
                    <span className={classes.animate}>email</span>
                </div>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{"--i":3}}></span>
                    <input type='number' required />
                    <span className={classes.animate}>mobile number</span>
                </div>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{"--i":4}}></span>
                    <input type="text" required />
                    <span className={classes.animate}>subject</span>
                </div>
                <div className={`${classes.input} ${classes.message}`} >
                    <span className={classes.leftRight} style={{"--i":5}}></span>
                    <input type="text" required />
                    <span className={classes.animate}>write your message</span>
                </div>
                <div className={classes.buttonDiv}>
                    <span className={classes.leftRight} style={{"--i":6}}></span>
                    <button className={classes.button} type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default From;