import React from "react";
import style from "./Projects.module.css"
import styleContainer from '../Common/Styles/containerStyle.module.scss'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";
import palmy from "../assets/Image/22344352_1625462700838990_7147784049740742656_n.jpeg"
import gory from "../assets/Image/abb6a800ab2193fcedd9bda566b7402c.jpeg"

const Projects = () => {

    const social1 = {
        backgroundImage: `url(${palmy})`,
    };
    const social2 = {
        backgroundImage: `url(${gory})`,
    };

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <div className={style.projects}>
                    <Project style={social1}
                             title={"First Project"}
                             description={"My First Project. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t afeewfwefwefjwefjwefjsdjfsdkjfwieghnbfv"}/>
                    <Project style={social2}
                             title={"Second Project"}
                             description={"My Second Project. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "}/>
                </div>
            </div>
        </div>
    )
}
export default Projects;