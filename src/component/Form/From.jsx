"use client";
import { useState } from "react";
import classes from "./Form.module.css";
import { error, success } from "../util/toast";
import Sent from "../util/sent";

const From = () => {
    const [obj, setObj] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        mobile: "",
    });
    const [click, setClick] = useState(false);
    function onchange(name, value) {
        setObj((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    }
    async function submit(e) {
        e.preventDefault();
        setClick(true);
        const res = await fetch("/api/message", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                ...obj,
                secure: true,
            }),
        });
        const data = await res.json();
        if (data["status"] === "success") {
            setObj({
                name: "",
                email: "",
                subject: "",
                message: "",
                mobile: "",
            })
            success("message sent success");
        } else {
            error("message sent fail");
        }
        setClick(false);
    }
    return (
        <section className={classes.contact} id="contact">
            <p className={classes.text}>
                Contact<span className="style">Me</span>
            </p>
            <form onSubmit={submit} className={classes.form}>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{ "--i": 1 }}></span>
                    <input
                        value={obj["name"]}
                        onChange={(e) => {
                            onchange("name", e.target.value);
                        }}
                        type="text"
                        required
                    />
                    <span className={classes.animate}>name</span>
                </div>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{ "--i": 2 }}></span>
                    <input
                        value={obj["email"]}
                        onChange={(e) => {
                            onchange("email", e.target.value);
                        }}
                        type="email"
                        required
                    />
                    <span className={classes.animate}>email</span>
                </div>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{ "--i": 3 }}></span>
                    <input
                        value={obj["mobile"]}
                        onChange={(e) => {
                            onchange("mobile", e.target.value);
                        }}
                        type="number"
                        required
                    />
                    <span className={classes.animate}>mobile number</span>
                </div>
                <div className={classes.input}>
                    <span className={classes.leftRight} style={{ "--i": 4 }}></span>
                    <input
                        value={obj["subject"]}
                        onChange={(e) => {
                            onchange("subject", e.target.value);
                        }}
                        type="text"
                        required
                    />
                    <span className={classes.animate}>subject</span>
                </div>
                <div className={`${classes.input} ${classes.message}`}>
                    <span className={classes.leftRight} style={{ "--i": 5 }}></span>
                    <input
                        value={obj["message"]}
                        onChange={(e) => {
                            onchange("message", e.target.value);
                        }}
                        type="text"
                        required
                    />
                    <span className={classes.animate}>write your message</span>
                </div>
                <div className={classes.buttonDiv}>
                    {click ? (
                        <Sent />
                    ) : (
                        <>
                            {" "}
                            <span className={classes.leftRight} style={{ "--i": 6 }}></span>
                            <button className={classes.button} type="submit">
                                Send Message
                            </button>
                        </>
                    )}
                </div>
            </form>
        </section>
    );
};

export default From;
