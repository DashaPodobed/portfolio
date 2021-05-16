import React from "react";
import style from "./Projects.module.css"
import styleContainer from '../common/styles/containerStyle.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"First Project"} description={"My First Project. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Project title={"Second Project"} description={"My Second Project. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "}/>
                </div>
            </div>
        </div>
    )
}
export default Projects;