import React from "react";
import style from "./Projects.module.css"
import styleContainer from '../Common/Styles/containerStyle.module.scss'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";
import palmy from "../assets/Image/22344352_1625462700838990_7147784049740742656_n.jpeg"
import gory from "../assets/Image/abb6a800ab2193fcedd9bda566b7402c.jpeg"
import Fade from 'react-reveal/Fade';

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
                <Fade>
                    <Title title={"My Projects"}/>
                </Fade>
                <Fade bottom>
                    <div className={style.projects}>
                        <Project style={social1}
                                 title={"Counter"}
                                 description={"My first Training Project"}
                                 href={"https://dashapodobed.github.io/Counter/"}
                        />
                        <Project style={social2}
                                 title={"Cards"}
                                 description={"Cards for studying JavaScript, React"}
                                 href={"https://dashapodobed.github.io/friday/"}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Projects;