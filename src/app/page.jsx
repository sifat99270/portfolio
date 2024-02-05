"use client";
import About from "@/component/About/About";
import styles from "./page.module.css";
import Homes from "@/component/Home/home";
import Navbar from "@/component/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import Services from "@/component/Services/Services";
import Skills from "@/component/Skills/Skills";
import From from "@/component/Form/From";


export default function Home() {
  const [send, setSend] = useState(0);
  let one = useRef();
  let two = useRef();
  let three = useRef();
  let four = useRef();
  let five = useRef()
  useEffect(() => {
    const storge = localStorage.getItem('id')
    let id = JSON.parse(storge);
    setSend(id['id']);
  }, []);

  useEffect(() => {
    window.addEventListener('unload', () => {
      return localStorage.setItem("id", JSON.stringify({ id: send }))
    })
  }, [send])

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const allRef = document.getElementById('all')
      let scroll = window.scrollY;
      let height = window.screen.height;
      allRef.childNodes.forEach((item) => {
        if (scroll + 100 > one.current.clientHeight + two.current.clientHeight + three.current.clientHeight + four.current.clientHeight) {
          setSend(4)
        } else if (scroll + 100 > one.current.clientHeight + two.current.clientHeight + three.current.clientHeight) {
          setSend(3)
        } else if (scroll + 100 > one.current.clientHeight + two.current.clientHeight) {
          setSend(2)
        } else if (scroll + 100 > one.current.clientHeight) {
          setSend(1)
        } else {
          setSend(0)
        }
      });
    });
  }, []);

  return (
    <main style={{ marginTop: "100px" }}>

      <Navbar index={send} />
      <div id="all" >
        <div ref={one}>
          <Homes />
        </div>
        <div ref={two}>
          <About />
        </div>
        <div ref={three}>
          <Services />
        </div>
        <div ref={four}>
          <Skills />
        </div>
        <div ref={five}>
          <From />
        </div>
      </div>
    </main>
  );
}
