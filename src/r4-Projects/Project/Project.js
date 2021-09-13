import React from "react";
import style from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}
                 style={props.style}>
                <a href={props.href} className={style.link}>follow link</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}
export default Project;