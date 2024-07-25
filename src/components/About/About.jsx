import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return <section className = {styles.container} id = "about">
        <h2 className = {styles.title}> About</h2>
        <div className = {styles.content}>
        <img src= {getImageUrl("about/aboutImage.png")} alt = "About Image" className = {styles.aboutImage} />
        <ul className = {styles.aboutItems}>
            <li className = {styles.aboutItem}><img src= {getImageUrl("about/cursorIcon.png")}  />
            <div className = {styles.aboutItemText}>
                <h3>Full Stack Developer</h3>
                <p>I have experience in both front-end and back-end development through building responsive and optimized sites with fast back-end systems and APIs</p>
            </div>
            </li>
            <li className = {styles.aboutItem}><img src= {getImageUrl("about/serverIcon.png")} />
            <div className = {styles.aboutItemText}>
                <h3>Machine Learning Researcher </h3>
                <p>I am actively gaining research experience and expertise in machine learning frameworks, especially in quantum circuits</p>
            </div>
            </li>
            <li className = {styles.aboutItem}><img src= {getImageUrl("about/uiIcon.png")} />
            <div className = {styles.aboutItemText}>
                <h3> Computer Security Enthusiast</h3>
                <p>I am currently learning more about technologies in cybersecurity through courses and research in computer networks</p>
            </div>
            </li>
        </ul>
        </div>

    </section>
}

