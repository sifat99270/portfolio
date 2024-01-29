import classes from "./Services.module.css"

const Services = () => {
    return (
        <section className={classes.serviceSection} id="service">
            <p className={classes.text}>Our<span className="style">Service</span></p>
            <div className={classes.flexs}>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 3 }}></span>
                    <img className={classes.svg} src="/next.svg" />
                    <p className={classes.name}>Next Js Frontend And Backend</p>
                    <p className={classes.read}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
                        iure aliquid sunt qui incidunt corrupti consequatur? Hic ullam natus
                        nemo sunt, eligendi officia quidem facilis, minima earum, possimus
                        nobis officiis perspiciatis repellendus necessitatibus perferendis
                        quia totam nihil optio quaerat nostrum deserunt iusto excepturi
                        fuga! Alias, error? Voluptatem dolorem libero inventore.
                    </p>
                    <button class={classes.btn}>Read more</button>
                </div>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 2 }}></span>
                    <img className={classes.svg} src="/tailwind-css-svgrepo-com.svg" />
                    <p className={classes.name}>Tailwind Css</p>
                    <p className={classes.read}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
                        iure aliquid sunt qui incidunt corrupti consequatur? Hic ullam natus
                        nemo sunt, eligendi officia quidem facilis, minima earum, possimus
                        nobis officiis perspiciatis repellendus necessitatibus perferendis
                        quia totam nihil optio quaerat nostrum deserunt iusto excepturi
                        fuga! Alias, error? Voluptatem dolorem libero inventore.
                    </p>
                    <button className={classes.btn}>Read more</button>
                </div>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 1 }}></span>
                    <img className={classes.svg} src="/react.svg" />
                    <p className={classes.name}>React Js Frontend</p>
                    <p className={classes.read}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
                        iure aliquid sunt qui incidunt corrupti consequatur? Hic ullam natus
                        nemo sunt, eligendi officia quidem facilis, minima earum, possimus
                        nobis officiis perspiciatis repellendus necessitatibus perferendis
                        quia totam nihil optio quaerat nostrum deserunt iusto excepturi
                        fuga! Alias, error? Voluptatem dolorem libero inventore.
                    </p>
                    <button className={classes.btn}>Read more</button>
                </div>
                <div className={classes.service}>
                    <span className={classes.leftRight} style={{ "--i": 2 }}></span>
                    <img className={classes.svg} src="/node.svg" />
                    <p className={classes.name}>Node Js Backend</p>
                    <p className={classes.read}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
                        iure aliquid sunt qui incidunt corrupti consequatur? Hic ullam natus
                        nemo sunt, eligendi officia quidem facilis, minima earum, possimus
                        nobis officiis perspiciatis repellendus necessitatibus perferendis
                        quia totam nihil optio quaerat nostrum deserunt iusto excepturi
                        fuga! Alias, error? Voluptatem dolorem libero inventore.
                    </p>
                    <button className={classes.btn}>Read more</button>
                </div>

            </div>
        </section>
    );
};

export default Services;