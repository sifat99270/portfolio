import classes from './logo.module.css'

export default function Logo() {
    return (
        <div className={classes.main}>
            <div className={classes.one}>
                <span>S</span>
                <hr className="" />
            </div>
            <div className={classes.two}>
                <span>M</span>
                <hr className=''></hr>
            </div>
            <div className={classes.three}>
                <span>N</span>
                <hr className=""></hr>
            </div>
        </div>
    )
}
