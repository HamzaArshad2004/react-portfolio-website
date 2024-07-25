import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className = {styles.container}>
        <div className = {styles.content}><h1 className = {styles.title}> Hi! I'm Hamza</h1>
        <p className = {styles.description}> I'm a CS junior at New York University interested in polishing my skills as a full stack developer and an AI engineer.</p>
        <a href= "mailto:mm12283@nyu.edu" className = {styles.contactBtn}>Contact Me!</a>
        </div>
        <img src= {getImageUrl("hero/myImage.png")} alt = "Hero Image of Me" className = {styles.heroImg}></img>
        <div className = {styles.topBlur} />
        <div className = {styles.bottomBlur} />

    </section>
}

