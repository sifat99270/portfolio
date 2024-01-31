
import classes from './skelaton.module.css'
export default function Skelaton() {
    return (
        <div className={classes.main}>
            <div className={`${classes.one} ${classes.animation}`}>
                <div className={`${classes.div} ${classes.ani}`}></div>
                <div className={`${classes.div2} ${classes.ani}`}></div>
            </div>
            <div className={`${classes.two} ${classes.animation}`}>
                <div className={`${classes.div} ${classes.ani}`}></div>
                <div className={`${classes.div2} ${classes.ani}`}></div>
            </div>
            <div className={`${classes.three} ${classes.animation}`}>
                <div className={`${classes.div} ${classes.ani}`}></div>
                <div className={`${classes.div2} ${classes.ani}`}></div>
            </div>
            <div className={`${classes.four} ${classes.animation}`}>
                <div className={`${classes.div} ${classes.ani}`}></div>
                <div className={`${classes.div2} ${classes.ani}`}></div>
            </div>
            <div className={`${classes.five} ${classes.animation}`}>
                <div className={`${classes.div} ${classes.ani}`}></div>
                <div className={`${classes.div2} ${classes.ani}`}></div>
            </div>
        </div>
    )
}
