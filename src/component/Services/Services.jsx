"use client"

import { useRef } from "react";
import classes from "./Services.module.css"

const Services = () => {
    const readRef = useRef();
    function readref(e) {
        console.log(e);

        readRef.current.childNodes.forEach((item) => {
            item.lastElementChild.previousElementSibling.classList

        })
        e.target.previousElementSibling.classList.toggle(`${classes.height}`)
    }
    return (
        <section className={classes.serviceSection} id="service">
            <p className={classes.text}>Our<span className="style">Service</span></p>
            <div ref={readRef} className={classes.flexs}>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 3 }}></span>
                    <img className={classes.svg} src="/next.svg" />
                    <p className={classes.name}>Next Js Frontend And Backend</p>
                    <p className={classes.read} >
                        Next.js is a popular React framework.Next.js is highly customizable and extensible, allowing you to configure various aspects of your application according to your requirements. enabling you to build backend functionality within your Next.js application. pages are rendered on the server before being sent to the client, which can improve performance and SEO.
                    </p>
                    <button className={classes.btn} onClick={(e) => {
                        readref(e)
                    }}>Read more</button>
                </div>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 2 }}></span>
                    <img className={classes.svg} src="/tailwind-css-svgrepo-com.svg" />
                    <p className={classes.name}>Tailwind Css</p>
                    <p className={classes.read}>
                        Tailwind CSS, a utility-first CSS framework, has gained popularity for its unique approach to building user interfaces.Its utility-first approach provides a high degree of flexibility, enabling developers to customize and style components easily without writing additional CSS.Tailwind scales well for projects of any size, from small personal websites to large-scale enterprise applications, due to its modular architecture
                    </p>
                    <button className={classes.btn} onClick={(e) => {
                        readref(e)
                    }}>Read more</button>
                </div>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 1 }}></span>
                    <img className={classes.svg} src="/react.svg" />
                    <p className={classes.name}>React Js Frontend</p>
                    <p className={classes.read}>
                        React.js is a popular JavaScript library for building user interfaces, developed by Facebook. It&apos;s known for its component-based architecture, which allows developers to build reusable UI components that manage their own state.
                    </p>
                    <button className={classes.btn} onClick={(e) => {
                        readref(e)
                    }}>Read more</button>
                </div>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 2 }}></span>
                    <img className={classes.svg} src="/node.svg" />
                    <p className={classes.name}>Node Js Backend</p>
                    <p className={classes.read}>
                        Node.js is a powerful runtime environment that has revolutionized server-side JavaScript development.Node.js uses an event-driven, non-blocking I/O model, which makes it highly efficient and suitable for building scalable, real-time applications that can handle a large number of concurrent connections.Node.js is known for its high performance, thanks to its event-driven architecture and the V8 JavaScript
                    </p>
                    <button className={classes.btn} onClick={(e) => {
                        readref(e)
                    }}>Read more</button>
                </div>

            </div>
        </section>
    );
};

export default Services;